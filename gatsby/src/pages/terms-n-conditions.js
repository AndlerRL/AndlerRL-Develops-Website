import React from "react"
import { Translate } from 'store'
import Layout from "components/layout"
import SEO from "components/seo"
import { Wrapper } from 'components/UI/wrappers'
import { 
  YellowTriangleBottom,
  YellowTriangleTop,
  LightBlueTriangleBottom,
  LightBlueTriangleTop,
  PrimaryCard,
  SecondaryCard
} from 'components/UI/cards'
import { Box } from 'rebass'
import Scrollspy from 'components/UI/scrollspy'

const TermsConditionsPage = ({ pageContext: { locale }, location }) => {
  const menuItems = {
    id: [
      'terms', 
      'license', 
      'disclaimer', 
      'limitations', 
      'accMat', 
      'links', 
      'modifications',
      'govLaws', 
      'privacy'
    ],
    title: [
      'Terms', 
      'Use License', 
      'Disclaimer', 
      'Limitations', 
      'Accuracy of Materials', 
      'Links', 
      'Modifications',
      'Governing Law',
      'Privacy Policy'
    ]
  }

  return (
    <Layout locale={locale} location={location} >
      <SEO title="Terms and Conditions" lang={locale} pageView={`${locale === 'es' ? '/es/' : '/'}terms-n-conditions`} />
      <Translate.Provider>
        <Scrollspy 
          items={menuItems.id}
          title={menuItems.title}
        />
        <Wrapper isMain termCon mb={7}>
          <PrimaryCard
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width={1}
            my={[6, 0, 0]}
            pt={5}
            pb={[0, 6, 6]}
          >
            <YellowTriangleTop top={-116} />
            <h2>Andler Develops Terms of Service & Privacy</h2>
            <Box as="div"
              px={[0, 6, 6]}
              id="terms"
            >
              <h3>1. Terms</h3>
              <p>By accessing the website at <a href="http://andler.netlify.com">http://andler.netlify.com</a>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p>
            </Box>
            <Box as="div"
              px={[0, 6, 6]}
              id="license"
            >
              <h3>2. Use License</h3>
              <ol type="a">
                <li>Permission is granted to temporarily download one copy of the materials (information or software) on Andler Develops' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                <ol type="i">
                  <li>modify or copy the materials;</li>
                  <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                  <li>attempt to decompile or reverse engineer any software contained on Andler Develops' website;</li>
                  <li>remove any copyright or other proprietary notations from the materials; or</li>
                  <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                </ol>
                  </li>
                <li>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Andler Develops at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</li>
              </ol>
            </Box>
            <Box as="div"
              px={[0, 6, 6]}
              id="disclaimer"
            >
              <h3>3. Disclaimer</h3>
              <ol type="a">
                <li>The materials on Andler Develops' website are provided on an 'as is' basis. Andler Develops makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</li>
                <li>Further, Andler Develops does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</li>
              </ol>
            </Box>
            <Box as="div"
              px={[0, 6, 6]}
              id="limitations"
            >
              <h3>4. Limitations</h3>
              <p>In no event shall Andler Develops or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Andler Develops' website, even if Andler Develops or a Andler Develops authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
            </Box>
            <Box as="div"
              px={[0, 6, 6]}
              id="accMat"
            >
              <h3>5. Accuracy of materials</h3>
              <p>The materials appearing on Andler Develops' website could include technical, typographical, or photographic errors. Andler Develops does not warrant that any of the materials on its website are accurate, complete or current. Andler Develops may make changes to the materials contained on its website at any time without notice. However Andler Develops does not make any commitment to update the materials.</p>
            </Box>
            <Box as="div"
              px={[0, 6, 6]}
              id="links"
            >
              <h3>6. Links</h3>
              <p>Andler Develops has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Andler Develops of the site. Use of any such linked website is at the user's own risk.</p>
            </Box>
            <Box as="div"
              px={[0, 6, 6]}
              id="modifications"
            >
              <h3>7. Modifications</h3>
              <p>Andler Develops may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>
            </Box>
            <Box as="div"
              px={[0, 6, 6]}
              id="govLaws"
            >
              <h3>8. Governing Law</h3>
              <p>These terms and conditions are governed by and construed in accordance with the laws of San José, Costa Rica and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
            </Box>
            <YellowTriangleBottom bottom={-116} />
          </PrimaryCard>
          <SecondaryCard
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            width={1}
            px={[4, 6, 6]}
            pb={[4, 6, 6]}
            id="privacy"
          >
            <LightBlueTriangleTop top={-116} />
            <h2>Privacy Policy</h2>
            <p>Your privacy is important to us. It is Andler Develops' policy to respect your privacy regarding any information we may collect from you across our website, <a href="http://andler.netlify.com">http://andler.netlify.com</a>, and other sites we own and operate.</p>
            <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
            <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
            <p>We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p>
            <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
            <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>
            <p>Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</p>
            <p>This policy is effective as of 6 March 2020.</p>
            <p><a href="https://getterms.io" title="Generate a free terms of use document">Privacy Policy & Terms of Use created with GetTerms.</a></p>
            <LightBlueTriangleBottom bottom={-116} />
          </SecondaryCard>
        </Wrapper>
      </Translate.Provider>
    </Layout>
  )
}

export default TermsConditionsPage