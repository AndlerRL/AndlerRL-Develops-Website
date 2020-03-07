import React, { useEffect, useState, useCallback } from 'react'
import { Translate } from 'store'
import { Wrapper } from "components/UI/wrappers"
import { PrimaryCard, SecondaryCard } from 'components/UI/cards'
import { updateObject, checkValidity } from 'util/utility'
import Input from 'components/UI/input'
import { Btn } from 'components/UI/btn'
import { Flex, Box, Text } from 'rebass'
import styled, { themeGet } from 'util/styles'
import AOS from 'aos'
import 'aos/dist/aos.css'

const ContactTitle = styled(Text)`
  color: ${themeGet('colors.primary.A200')};
  font-weight: 700;
  text-align: right;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: ${themeGet('fontSizes.6')}px;

  &:nth-child(2) {
    font-size: ${themeGet('fontSizes.5')}px;
  }

  &:nth-child(4) {
    font-size: ${themeGet('fontSizes.7')}px;
  }
`

const ContactMe = ({ locale, submit }) => {
  const { checkLang, t } = Translate.useContainer()
  const [form, setForm] = useState({
    name: {
      elementType: 'text',
      elementConfig: {
        type: 'text',
      },
      label: t('form.name'),
      value: '',
      validation: {
        required: true,
        valid: false,
        touched: false,
        minLength: 4
      }
    },
    company: {
      elementType: 'text',
      elementConfig: {
        type: 'text',
      },
      label: t('form.company'),
      value: '',
      validation: {
        required: false,
        valid: false,
        touched: false,
      }
    },
    email: {
      elementType: 'email',
      elementConfig: {
        type: 'text',
      },
      label: t('form.email'),
      value: '',
      validation: {
        required: true,
        valid: false,
        touched: false,
        emailFormat: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
      }
    },
    message: {
      elementType: 'textarea',
      elementConfig: {
        type: 'textarea',
      },
      label: t('form.message'),
      value: '',
      validation: {
        required: true,
        valid: false,
        touched: false,
        minLength: 100
      }
    },
  })
  const [formIsValid, setFormIsValid] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [innerWidth, setInnerWidth] = useState(0)

  const checkWidth = useCallback(
    () => {
      const { innerWidth } = window

      setInnerWidth(innerWidth)
    },
    [setInnerWidth]
  )

  useEffect(() => {
    AOS.init()
    checkLang(locale, 'contact-me')
    setInnerWidth(innerWidth)
    window.addEventListener('resize', checkWidth)

    return () => {
      AOS.refresh()
      window.removeEventListener('resize', checkWidth)
    }
  }, [])

  useEffect(() => {
    if (form.name.label !== t('form.name')) {
      setForm({
        ...form,
        name: {
          ...form.name,
          label: t('form.name')
        },
        company: {
          ...form.company,
          label: t('form.company')
        },
        email: {
          ...form.email,
          label: t('form.email')
        },
        message: {
          ...form.message,
          label: t('form.message')
        },
      });
    }
  }, [t, setForm]);

  const onChange = (e, inputId) => {
    let formIsValid = true;
    const updatedFormEle = updateObject(form[inputId], {
      value: e.target.value,
      validation: {...form[inputId].validation,
        valid: checkValidity(e.target.value, form[inputId].validation),
        touched: true
      }
    });
    const updatedForm = updateObject(form, {
      [inputId]: updatedFormEle
    });

    for (let inputIds in updatedForm)
      formIsValid = updatedForm[inputIds].validation.valid && formIsValid;

    setForm(updatedForm);
    setFormIsValid(formIsValid);
  }

  const formEleArr = [];

  for (let key in form) {
    formEleArr.push({
      id: key,
      config: form[key]
    })
  }

  const input = formEleArr.map(ele => {
    if (ele.config.label === t('form.name') || ele.config.label === t('form.company') || ele.config.label === t('form.email')) 
      return (
        <Box width={[11 / 12, 11 / 12, 1]}>
          <Input
            invalid={!ele.config.validation.valid}
            shouldValidate={ele.config.validation}
            touched={ele.config.validation.touched}
            elementType={ele.config.elementType}
            elementConfig={ele.config.elementConfig}
            value={ele.config.value}
            label={ele.config.label}
            htmlFor={ele.config.label}
            changed={e => onChange(e, ele.id)}
            locale={locale}
          />
        </Box>
      )
    }
  )
  const message = formEleArr.map(ele => {
    if (ele.config.label === t('form.message'))
      return (
        <Box width={[11 / 12, 11 / 12, 1]} height={["100%", "100%", "auto"]}>
          <Input
            invalid={!ele.config.validation.valid}
            shouldValidate={ele.config.validation}
            touched={ele.config.validation.touched}
            elementType={ele.config.elementType}
            elementConfig={ele.config.elementConfig}
            value={ele.config.value}
            label={ele.config.label}
            htmlFor={ele.config.label}
            changed={e => onChange(e, ele.id)}
            locale={locale}
          />
        </Box>
      )
    }
  )

  return (
    <Wrapper isMain >
      <Flex
        flexDirection={["column-reverse", "column-reverse", "row"]}
        alignItems="center"
        justifyContent="space-between"
        width={1}
      >
        <SecondaryCard
          contact
          width={[1, 11 / 12, "350px"]}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          my={5}
          mx={["auto", "auto", "0px"]}
        >
          <Flex as="form"
            flexDirection={["row", "row", "column"]}
            width={1}
            height="100%"
            onSubmit={submit}
          >
            <Box width={1}>
              {input}
              <Flex
                width={1}
                alignItems="center"
                justifyContent="flex-start"
                style={{ display: innerWidth >= 840 ? 'none' : 'flex' }}
              >
                <Btn type="submit"
                  size="large"
                >
                  {t('form.submit')}
                </Btn>
              </Flex>
            </Box>
            <Box width={1}>
              {message}
            </Box>
            <Flex
              width={1}
              alignItems="center"
              justifyContent="center"
              style={{ display: innerWidth <= 840 ? 'none' : 'flex' }}
            >
              <Btn type="submit"
                size="large"
              >
                {t('form.submit')}
              </Btn>
            </Flex>
          </Flex>
        </SecondaryCard>
        <Box>
          <ContactTitle as="h1"
            data-aos="fade-down-left"
            data-aos-offset="0"
          >
            {t('title.0')}
          </ContactTitle>
          <ContactTitle as="h1" my={6}
            data-aos="fade-down-left"
            data-aos-delay="1000"
            data-aos-offset="0"
          >
            {t('title.1')}
          </ContactTitle>
          <ContactTitle as="h1"
            data-aos="fade-down-left"
            data-aos-delay="1750"
            data-aos-offset="0"
          >
            {t('title.2')}
          </ContactTitle>
          <ContactTitle as="h1"
            data-aos="fade-down-left"
            data-aos-delay="3000"
            data-aos-offset="0"
          >
            {t('title.3')}
          </ContactTitle>
        </Box>
      </Flex>
      <PrimaryCard
        contact
        flexDirection={["column", "row", "row"]}
        alignItems="center"
        justifyContent="space-between"
        width={[1, 10 / 12, 10 / 12]}
        mx="auto"
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          width={8 / 12}
        >
          <Text as="h1">
            Where you can find me
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          width={4 / 12}
        >
          <Text as="h1">
            MAP GOES HERE
          </Text>
        </Flex>
      </PrimaryCard>
    </Wrapper>
  )
}

export default ContactMe