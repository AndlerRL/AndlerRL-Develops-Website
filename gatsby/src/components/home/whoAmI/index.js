import React, { useEffect } from 'react'
import { Flex, Box, Text } from 'rebass'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  SecondaryCard,
  LightBlueTriangleBottom,
  LightBlueTriangleTop
} from 'components/UI/cards'
import { Image } from 'components/image'
import { Icon } from 'components/UI/icons'
import lorax from 'images/the-lorax.png'
import { Translate } from 'store'
import styled, { themeGet } from 'util/styles'

const QuestionsSecondary = styled(Box)`
  background-color: ${themeGet('colors.blackDepth.300')};
  box-shadow: 0 4px 10px 3px #2222;
  scroll-snap-align: start;

  h3 {
    padding: ${themeGet('space.4')}px;
    text-align: center;
    letter-spacing: 2px;
    line-height: 1.75;
    font-weight: 400;
  }

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    background-color: ${themeGet('colors.secondary.A100')};
  }
`

const Quote = styled(Flex)`
  background: ${themeGet('colors.secondary.A100')} url(${lorax}) center center no-repeat;
  background-size: 50% auto;
  box-shadow: 0 4px 10px 3px #2222;
  scroll-snap-align: start;
  position: relative;
  color: #212121;

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    color: inherit;
  }
`

const WhoAmI = () => {
  const { t } = Translate.useContainer()

  useEffect(() => {
    AOS.init({
      once: true
    })

    return () => {
      AOS.refresh()
    }
  }, [])

  return (
    <SecondaryCard
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      my={6}
    >
      <LightBlueTriangleTop top={-116} />
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
        width={1}
        id="third_s"
      >
        <Text as="h1">
          {t('mainContent.titleSub')}
        </Text>
        { 
          [0, 1, 2, 3, 4, 5, 6, 7].map(i => {
            if (i <= 1)
              return (
                <Text as="p"
                  lineHeight={2}
                  width={1}
                  my={4}
                  key={i}
                >
                  {t(`mainContent.contentSub.${i}`)}
                </Text>
              )
            
            if (i === 2 || i === 3) {
              if (i === 2)
                return (
                  <Flex
                    flexDirection={["column", "row-reverse", "row"]}
                    alignItems="center"
                    justifyContent="space-between"
                    width={1}
                    my={4}
                    key={i}
                  >
                    <Box width={[1, 1 / 2, 1 / 2]}
                      height={["300px", "400px", "400px"]}
                      data-aos="fade-up"
                      my={5}
                    >
                      <Image img="first-pc" alt="first-pc" />
                    </Box>
                    <Flex
                      flexDirection="column"
                      alignItems="center"
                      justifyContent="space-around"
                      width={[1, 1 / 2, 1 / 2]}
                    >
                      <QuestionsSecondary
                        width={1}
                        my={4}
                        data-aos="zoom-out-up"
                        data-aos-offset="250"
                        data-aos-delay={(i * 2) * 100}
                        data-aos-anchor-placement="center-bottom"
                      >
                        <Text as="h3">
                          {t(`mainContent.contentSub.${i}`)}
                        </Text>
                      </QuestionsSecondary>
                      <QuestionsSecondary
                        width={1}
                        my={4}
                        data-aos="zoom-out-up"
                        data-aos-offset="250"
                        data-aos-delay={(i + 1 * 2) * 100}
                        data-aos-anchor-placement="center-bottom"
                      >
                        <Text as="h3">
                          {t(`mainContent.contentSub.${i + 1}`)}
                        </Text>
                      </QuestionsSecondary>
                    </Flex>
                  </Flex>
                )
            }

            if (i === 4 || i === 5 )
              return (
                <Text as="p"
                  lineHeight={2}
                  width={1}
                  my={4}
                  key={i}
                >
                  {t(`mainContent.contentSub.${i}`)}
                </Text>
              )

            if (i >= 6)
              return (
                <QuestionsSecondary
                  width={[1, 11 / 12, 11 / 12]}
                  my={4}
                  data-aos="fade-up"
                  data-aos-delay={(i * 2) * 100}
                  data-aos-anchor-placement="center-bottom"
                  key={i}
                >
                  <Text as="h3">
                    {t(`mainContent.contentSub.${i}`)}
                  </Text>
                </QuestionsSecondary>
              )
          })
        }
        <Quote
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width={[1, 9 / 12, 9 / 12]}
          p={[3, 5, 5]}
          my={5}
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            style={{ position: 'relative' }}
            width={1}
            my={[3, 0, 0]}
          >
            <Icon.quoteLeft size="32px" style={{ opacity: 0.5, position: 'absolute', top: '8px', left: 0 }} />
              <Text as="p"
                lineHeight={2}
                fontWeight="500"
                px={5}
                py={[4, 3, 3]}
                style={{ fontStyle: 'oblique' }}
              >
                {t('mainContent.quote.content')}
              </Text>
            <Icon.quoteRight size="32px" style={{ opacity: 0.5, position: 'absolute', bottom: '8px', right: 0 }} />
          </Flex>
          <Text as="p"
            textAlign="left"
            p={3}
            width={1}
            style={{ fontStyle: 'oblique', bottom: 0, position: 'absolute' }}
            fontSize={1}
          >
            - {t('mainContent.quote.credits')}
          </Text>
        </Quote>
      </Flex>
      <LightBlueTriangleBottom bottom={-116} />
    </SecondaryCard>
  ) 
}

export default WhoAmI
