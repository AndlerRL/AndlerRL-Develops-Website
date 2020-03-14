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
import Maps from 'components/google_maps'
import { SocialIcons, Icon } from 'components/UI/icons'
import { motion } from 'framer-motion'

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

const ContactContainer = styled(Flex)`
  color: #f5f5f5;
  
  a {
    color: ${themeGet('colors.secondary.A200')}; 
    text-decoration: none;
  }

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    color: #212121;

    a {
      color: ${themeGet('colors.secondary.A700')};
      text-decoration: none;

      &:visited,
      &:hover {
        color: ${themeGet('colors.secondary.A400')};
      }
    }
  }
`

const MapContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  border-top: 6px solid ${themeGet('colors.blackDepth.400')};
  border-left: none;

  div {
    width: 100% !important;
  }

  div[role="button"] {
    display: none !important;
  }

  @media screen and (min-width: ${themeGet('breakpoints.1')}) {
    width: 41.666%;
    border-top: none;
    border-left: 6px solid ${themeGet('colors.blackDepth.400')};
  }
`

const ContactMe = ({ submit, submitting }) => {
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
  const [innerWidth, setInnerWidth] = useState(0)

  const checkWidth = useCallback(
    () => {
      const { innerWidth } = window

      setInnerWidth(innerWidth)
    },
    [setInnerWidth]
  )

  useEffect(() => {
    const { innerWidth } = window

    AOS.init()
    checkLang('contact-me')
    setInnerWidth(innerWidth)
    window.addEventListener('resize', checkWidth)

    return () => {
      AOS.refresh()
      window.removeEventListener('resize', checkWidth)
    }
  }, [checkWidth])

  useEffect(() => {
    if (form.name.label !== t('form.name')) {
      setForm(f => ({
        ...f,
        name: {
          ...f.name,
          label: t('form.name')
        },
        company: {
          ...f.company,
          label: t('form.company')
        },
        email: {
          ...f.email,
          label: t('form.email')
        },
        message: {
          ...f.message,
          label: t('form.message')
        },
      }));
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
        <Box 
          width={[11 / 12, 11 / 12, 1]}
          key={ele.id}
        >
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
          />
        </Box>
      )
    }
  )
  const message = formEleArr.map(ele => {
    if (ele.config.label === t('form.message'))
      return (
        <Box 
          width={[11 / 12, 11 / 12, 1]}
          height={["100%", "100%", "auto"]}
          key={ele.id}
        >
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
          />
        </Box>
      )
    }
  )

  return (
    <Wrapper isMain wide mb={8}>
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
          <Text as="h1">{t('form.title')}</Text>
          <Flex as="form"
            flexDirection={["column", "row", "column"]}
            width={1}
            height="100%"
            onSubmit={(e) => submit(e, form)}
          >
            <Box width={1}>
              {input}
              <Flex
                width={1}
                alignItems="center"
                justifyContent="flex-start"
                style={{ display: innerWidth < 840 && innerWidth > 640 ? 'flex' : 'none' }}
              >
                <Btn type="submit"
                  backgroundcolor={['colors.blackDepth.200', 'colors.blackDepth.400']}
                  size="large"
                  variant="contained"
                  project="true"
                  disabled={!formIsValid}
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
              style={{ display: innerWidth < 640 || innerWidth > 840 ? 'flex' : 'none' }}
            >
              <Btn type="submit"
                backgroundcolor={['colors.blackDepth.200', 'colors.blackDepth.400']}
                size="large"
                variant="contained"
                project="true"
                disabled={!formIsValid}
              >
                {
                  submitting 
                  ? (
                    <motion.div
                      animate={{
                        rotate: 360
                      }}
                      transition={{
                        loop: Infinity,
                        ease: 'linear',
                        duration: 2,
                      }}
                      style={{
                        transformOrigin: 'center center'
                      }}
                    >
                      <Icon.load size="16px" />
                    </motion.div>
                  )
                  : t('form.submit')
                }
              </Btn>
            </Flex>
          </Flex>
        </SecondaryCard>
        <Box>
          <ContactTitle as="h1"
            data-aos={innerWidth <= 640 ? 'fade-down' : 'fade-down-left'}
            data-aos-offset="0"
          >
            {t('title.0')}
          </ContactTitle>
          <ContactTitle as="h1" my={6}
            data-aos={innerWidth <= 640 ? 'fade-down' : 'fade-down-left'}
            data-aos-delay="1000"
            data-aos-offset="0"
          >
            {t('title.1')}
          </ContactTitle>
          <ContactTitle as="h1"
            data-aos={innerWidth <= 640 ? 'fade-down' : 'fade-down-left'}
            data-aos-delay="1750"
            data-aos-offset="0"
          >
            {t('title.2')}
          </ContactTitle>
          <ContactTitle as="h1"
            data-aos={innerWidth <= 640 ? 'fade-down' : 'fade-down-left'}
            data-aos-delay="3000"
            data-aos-offset="0"
          >
            {t('title.3')}
          </ContactTitle>
        </Box>
      </Flex>
      <PrimaryCard
        contact
        flexDirection={["column", "column", "row"]}
        alignItems="center"
        justifyContent="space-between"
        width={[1, 10 / 12, 10 / 12]}
        mx="auto"
        height={[700, 650, 400]}
        p={0}
        mt={6}
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          width={[1, 11 / 12, 7 / 12]}
          height="100%"
          p={4}
        >
          <Text as="h1"
            color={["#f5f5f5", "#212121", "#212121"]}
          >
            {t('contact.title')}
          </Text>
          <ContactContainer
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
            width={1}
            height={["83.333%", "75%", "75%"]}
            py={3}
          >
            <Flex
              alignItems="center"
              justifyContent="flex-start"
              width={1}
            >
              <Icon.location size="24px" color="inherit" />
              <Text as="p" pl={2}>{t('contact.direction')}</Text>
            </Flex>
            <Flex
              alignItems="center"
              justifyContent="flex-start"
              width={1}
            >
              <Icon.phone size="24px" color="inherit" />
              <Text as="a"
                pl={2}
                href="tel:+50662163355"
              >
                {t('contact.phone')}
              </Text>
            </Flex>
            <Flex
              alignItems="center"
              justifyContent="flex-start"
              width={1}
            >
              <Icon.whatsapp size="24px" color="inherit" />
              <Text as="a"
                pl={2}
                href="https://api.whatsapp.com/send?phone=50662163355"
              >
                {t('contact.phone')}
              </Text>
            </Flex>
            <Flex
              alignItems="center"
              justifyContent="flex-start"
              width={1}
            >
              <Icon.at size="24px" color="inherit" />
              <Text as="a"
                pl={2}
                href="mailto:andre.rlucas@outlook.com"
              >
                {t('contact.email')}
              </Text>
            </Flex>
          </ContactContainer>
          <SocialIcons mb={2} />
        </Flex>
        <MapContainer
          alignItems="center"
          justifyContent="center"
          style={{ 
            margin: '0 auto',
            padding: 0,
            height: '400px',
          }}
        >
          <Maps 
            height="100%"
            zoom={17}  
          />
        </MapContainer>
      </PrimaryCard>
    </Wrapper>
  )
}

export default ContactMe