import React, { useState } from 'react';
import MobileStepper from '@material-ui/core/MobileStepper'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import { useStaticQuery, graphql } from 'gatsby'
import { Icon } from 'components/UI/icons'
import { Btn } from 'components/UI/btn'
import { Flex, Text } from 'rebass'
import styled, { themeGet } from 'util/styles'
import { Translate } from 'store'

const TestimoniesContainer = styled(Flex)`
  border: 3px solid ${themeGet('colors.blackDepth.300')};

  .MuiMobileStepper-dot {
    transition: background-color 0.33s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }

  .MuiMobileStepper-dotActive {
    background-color: ${themeGet('colors.blackDepth.100')};
  }

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    border-color: ${themeGet('colors.primary.A100')};

    .MuiMobileStepper-dotActive {
      background-color: ${themeGet('colors.primary.A200')};
    }
  }
`

const TestimoniesContent = styled(Flex)`
  background-color: ${themeGet('colors.blackDepth.300')};

  > div > div {
    > div:nth-child(even) {
      background-color: ${themeGet('colors.blackDepth.100')}80;
    }

    > div:nth-child(odd) {
      background-color: ${themeGet('colors.blackDepth.200')}80;
    }
  }

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    background-color: ${themeGet('colors.primary.A100')};

    > div > div {
      > div:nth-child(even) {
        background-color: ${themeGet('colors.primary.400')}80;
      }

      > div:nth-child(odd) {
        background-color: ${themeGet('colors.primary.500')}80;
      }
    }

  }
`

const Stepper = styled(MobileStepper)`
  width: 100%;
  background-color: ${themeGet('colors.blackDepth.300')} !important;

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    background-color: ${themeGet('colors.primary.A100')} !important;

    button {
      color: #212121 !important;
    }
  }
`

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Testimonies = () => {
  const [activeStep, setActiveStep] = useState(0)
  const { t, lang } = Translate.useContainer()
  const data = useStaticQuery(graphql`
    {
      allSanityTestimony {
        edges {
          node {
            title
            quote: _rawQuote
          }
        }
      }
    }
  `)
  const { allSanityTestimony: { edges } } = data
  const maxSteps = edges.length

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <TestimoniesContainer
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      width={[1, 10 / 12, 10 / 12]}
      mt={4}
      mb={5}
    >
      <TestimoniesContent
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        width={1}
      >
        <AutoPlaySwipeableViews
          axis="x"
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          interval={6000}
          style={{ maxWidth: '100%' }}
        >
          {edges.map(({ node }, index) => (
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="space-evenly"
              key={node.title}
              height="100%"
              p={3}
            >
              <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                style={{ position: 'relative' }}
                width={1}
              >
                <Icon.quoteLeft size="32px" style={{ opacity: 0.5, position: 'absolute', top: '8px', left: 0 }} />
                { Math.abs(activeStep - index) <= 2 
                  ? node.quote[lang].map(({ _key, children }) => (
                    <Text as="p"
                      lineHeight={2}
                      fontWeight="400"
                      px={[4, 5, 5]}
                      py={3}
                      key={_key}
                      style={{ fontStyle: 'oblique' }}
                    >
                      {children[0].text}
                    </Text>
                    ))
                  : null }
                <Icon.quoteRight size="32px" style={{ opacity: 0.5, position: 'absolute', bottom: '8px', right: 0 }} />
              </Flex>
              <Text as="p"
                textAlign="left"
                p={3}
                width={1}
                style={{ fontStyle: 'oblique' }}
                fontSize={1}
              >
                - {node.title}
              </Text>
            </Flex>
          ))}
        </AutoPlaySwipeableViews>
      </TestimoniesContent>
      <Stepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Btn project="true" size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            {t('testimonies.next')}
            <Icon.arrowRight />
          </Btn>
        }
        backButton={
          <Btn project="true" size="small" onClick={handleBack} disabled={activeStep === 0}>
            <Icon.arrowLeft />
            {t('testimonies.back')}
          </Btn>
        }
      />
    </TestimoniesContainer>
  )
}

export default Testimonies
