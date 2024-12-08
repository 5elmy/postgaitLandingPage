import React from "react";



export function Demo({header , body})  {
  return (
    <div>
          <p className="font-[Barlow] fint-bold text-[25px] text-[#FC746C]">
              {header}
            </p>
            <p className="leading-[40px]  font-medium px-5">
         {body}
            </p>
    </div>
  )
}

export default function Privacy() {
  return (
    <section className="relative min-h-screen ">
      <div className="privacy bg-cover bg-center min-h-screen   "></div>
      <div className=" bg-gradient-to-t from-[#FC746C] to-[rgba(0,0,0,0.1)]  w-full min-h-[1610vh] lg:min-h-[510vh] py-5 mt-3 "></div>
      <div className="absolute inset-0    bg-[rgba(0,0,0,0.2)]">
        <div className="h-[400px]  flex justify-center items-center">
          <p className="font-semibold text-center text-[39px] text-white">
            Welcome to Our Privacy Policy
          </p>
        </div>
        <div className="flex justify-center py-10 items-center bg-gradient-to-t from-[#FC746C] to-[rgba(0,0,0,0.1)] shadow-md pt-10 shadow-[#FC746C]">
          <div className="w-[95%] md:w-[98%] rounded-md bg-white p-4 shadow-lg shadow-[#FC746C]">
          


            <Demo body={` Our Privacy Policy will help you understand what information we
              collect at Postgait and how Postgait uses it. Reference to the
              company in this Privacy Policy is inclusive of we ,
             our or us, and at all times refers to
              Postgait, the Company which provides the Services. When we talk
              about &#39;Services&#39; in this Privacy Policy, we are referring
              to our online platform, for providing Secondment Services. Our
              Services are currently available for use via a web browser or
              applications specific to your desktop or mobile device.`} header={"Introduction:"}/>

<p className="font-[Barlow] fint-bold text-[25px] text-[#FC746C]">
Information we collect and receive:
            </p>
<p className="font-[Barlow] font-semibold text-[16px] text-[#263238]">
The Company may also collect and receive the following information:
            </p>
            <div className="px-5">

<ul className="list-disc pl-5 ">
<li className=" leading-[49px] font-[Poppins]  font-medium">
Account Creation Information: Users provide information such as an e-mail address and password to create and account.    </li>
<li className=" leading-[49px] font-[Poppins]  font-medium">
Billing and other Information: Our Corporate affiliates and our third-party payment processors may collect and store billing address and credit/debit card information, or online/net banking information on our behalf or we may do this ourself.    
    </li>
<li className=" leading-[49px] font-[Poppins]  font-medium">
Usage Information: This is information about how you are accessing and using the Services, which may include administrative and support communications with us and information about people, content, links you interact with and what third party integrations you use (if any).    </li>
<li className=" leading-[49px] font-[Poppins]  font-medium">
Contact Information: With your permission contact information is collected, when you use/visit the Mobile App or web browser.
    </li>
<li className=" leading-[49px] font-[Poppins]  font-medium">
Log Data: Our servers automatically record information, including information that your browser sends whenever you visit a website or your mobile app sends whenever you are using it. This log data may include without limitation your internet protocol address, your browser type and settings, the date and time of your use, information about your browser configuration and plug- ins, language preferences, and cookie data.    
    </li>
<li className=" leading-[49px] font-[Poppins]  font-medium">
Device Information: We may collect information about the device you are using, including what type of device it is, what operating system you are using, device settings, application IDs, unique device identifiers, and crash data. Whether we collect some or all of this information often depends on what type of device you are using and its settings.    
    </li>
<li className=" leading-[49px] font-[Poppins]  font-medium">
Geo-location information: Precise GPS location from mobile devices is collected only with your permission. Wi-Fi and IP addresses received from your browser or device may be used to determine approximate location.
</li>
<li className=" leading-[49px] font-[Poppins]  font-medium">
Integrations: If you integrate with a third-party service provider, we will integrate that service to ours. The third-party provider may share certain information about your account with the company. However, we do not receive or store your passwords for any of these third-party providers.
</li>
<li className=" leading-[49px] font-[Poppins]  font-medium">
Third party data: the company may receive information from affiliates in our corporate group, our partners, or others that we use to make our own information better or more useful. This might be aggregate level information, including without limitation assimilation of specific IP addresses with specific zip codes.
</li>
</ul>

</div>

<Demo header={"Our Cookie Policy:"}  body={`The company used cookies and similar technologies to record log data. We use both session based and persistent cookies.<br/>
Cookies are small text files sent by us to your computer and from your computer or mobile device to us each time you visit our website or use our application. They are unique to your account or your browser. Session based cookies last only while your browser is open and are automatically deleted when you close your browser. Persistent cookies last until you or your browser delete them or until they expire.
Some cookies are associates with your account and personal information in order to remember that you are logged in. Other cookies are not tied to your account but are unique and allow us to carry our site/application analytics and customization among other similar things.
The company sets and accesses our own cookies on the domains operated by the company and its corporate affiliates. We do not currently recognize or respond to browser initiated do not track signals due to lack of consistence in industry standard compliance.`}/>

<p className="font-[Barlow] fint-bold text-[25px] text-[#FC746C]">
How We Use Your Information:
            </p>
            <p className="font-[Barlow] font-semibold text-[16px] text-[#263238]">
            Customer Data:
            </p>
            <p className="font-[Barlow] font-medium text-[16px] text-[#263238]">
            the company may access and use Customer Data as reasonably necessary and in accordance with Customer&#39;s instructions
            </p>
            <div className="px-5">
              <ul className="list-disc pl-5">
                <li className=" leading-[49px] font-[Poppins]  font-medium">
                to prevent or address Services, security, technical issues or at a Customer&#39;s request in connection with customer support matters;
                </li>
                <li className=" leading-[49px] font-[Poppins]  font-medium">
                as required by law;
                </li>
                <li className=" leading-[49px] font-[Poppins]  font-medium">
                as set forth in our contract with the Customer or as expressly permitted in writing by the Customer.
                </li>
              </ul>

            </div>

            <p className="font-[Barlow] font-semibold text-[16px] text-[#263238]">
            Other information:
            </p>
            <p className="font-[Barlow] font-medium text-[16px] text-[#263238]">
            We use other kinds of information
            </p>
            <div className="px-5">
              <ul className="list-disc pl-5">
              <li className=" leading-[49px] font-[Poppins]  font-medium">To understand and improve our Services;</li>
                <li className=" leading-[49px] font-[Poppins]  font-medium">
                To communicate with you by
Responding to your requests. If you contact us with a problem or question, we will use your information to respond.
Sending e-mails and messages. We may send you Services related and administrative e-mails and messages. We may also contact you to inform you about changes
 in our Services, our Services offerings, and important services related notices, including without limitation security and fraud notices. These e-mails and messages are 
 considered part of the Services you may not opt of them. In addition, we sometimes send e-mails 
about new Services features, or other news about the company. You may opt out of these at any time.
                </li>
               
              </ul>
            </div>

            <p className="font-[Barlow] font-semibold text-[16px] leading-[40px] text-[#263238]">
            Billing and Account Management:
            </p>
            <p className="font-[Barlow] font-medium text-[16px] leading-[40px] text-[#000]">
            We use account data to administer accounts and keep track of billing and payments.
            </p>
            <p className="font-[Barlow] font-semibold text-[16px] leading-[40px] text-[#263238]">
            Communicating and marketing:
            </p>
            <p className="font-[Barlow] font-medium text-[16px] leading-[40px] text-[#000]">
            We often need to contact you for invoicing, account management and similar reasons. We may also use your contact information for our own marketing or advertising purposes. You may opt out these at any time.
            </p>
            <p className="font-[Barlow] font-semibold text-[16px] leading-[40px] text-[#263238]">
            Investigation and Prevention of abuse and fraud:
            </p>
            <p className="font-[Barlow] font-medium text-[16px] leading-[40px] text-[#000]">
            The company is committed to keep the information provided by you secure and also prevent abuse and fraud.
            This policy is not intended to place any limitation on what we do with data that is aggregated and/or de-identified so it is no longer associated with identifiable user or Customer of the Services.
            </p>

            <p className="font-[Barlow] fint-bold text-[25px] text-[#FC746C]">
            Sharing & Disclosure:
            </p>
            <p className="font-[Barlow] font-medium text-[16px] leading-[40px] text-[#000]">
            There are times when information described in this Privacy Policy may be shared by the company. This section describes only how the company may share such information. the company does not control how Customers, or their third parties choose to share and disclose Customer Data.
            </p>
            <p className="font-[Barlow] font-medium text-[16px] leading-[40px] text-[#000]">
            Customer Data:
            </p>
            <p className="font-[Barlow] font-medium text-[16px] leading-[40px] text-[#000]">
            the company may share Customer Data:
            </p>
            <div className="px-5">
              <ul className="list-disc pl-5">
              <li className=" leading-[49px] font-[Poppins]  font-medium">With Third Party Service Providers and Agents. We may engage third party companies and individuals to process Customer Data.</li>
                <li className=" leading-[49px] font-[Poppins]  font-medium">
                With affiliates. We may engage affiliates in our corporate group to process Customer Data.
                </li>
                <li className=" leading-[49px] font-[Poppins]  font-medium">
                With third party integrations. the company may act on our Customer&#39;s behalf share Customer Data with the provider of an integration added by Customer or the company. The company is not responsible for how the provider of an integration may collect use, and share Customer Data.
                  </li>
               
              </ul>
            </div>
            <p className="font-[Barlow] font-medium text-[16px] leading-[40px] text-[#000]">
            Other Information:
            </p>
            <p className="font-[Barlow] font-medium text-[16px] leading-[40px] text-[#000]">
            The company may share other information as follows:
            </p>
            <div className="px-5">
              <ul className="list-disc pl-5">
              <li className=" leading-[49px] font-[Poppins]  font-medium">
              About you. There may be times when you contact the company to help resolve an issue specific to a governmental or official or legal process. In order to help resolve the issue we may share your information with the concerned government or official body.
                </li>
                <li className=" leading-[49px] font-[Poppins]  font-medium">
                With third party service providers and agents. We may engage third party companies or individuals, such as third-party payment processors, to process information on our behalf.
                </li>
                <li className=" leading-[49px] font-[Poppins]  font-medium">

                With affiliates. We may engage affiliates in our corporate group to process Other Information.
                  </li>
               
              </ul>
            </div>
            <p className="font-[Barlow] font-medium text-[16px] leading-[40px] text-[#000]">
            Other Types of Disclosure:
            </p>
            <p className="font-[Barlow] font-medium text-[16px] leading-[40px] text-[#000]">
            The company may share or disclose Customer Data and Other information as follows:
            </p>
            <div className="px-5">
              <ul className="list-disc pl-5">
              <li className=" leading-[49px] font-[Poppins]  font-medium">
              During changes to our business structure: If we engage in a merger, acquisition, bankruptcy, dissolution, reorganization, sale of some of the company&#39;s assets, financing acquisition or of all or a portion of our business, a similar transaction or proceeding or steps in contemplation of these activities.
                </li>
                <li className=" leading-[49px] font-[Poppins]  font-medium">
                
                Statutory Compliance: To comply with legal or regulatory requirements and to respond to lawful requests, court orders or legal processes.
                </li>
                <li className=" leading-[49px] font-[Poppins]  font-medium">
                To enforce our rights to prevent fraud and for safety: To protect and defend the rights, property, or safety of us or third parties, including enforcing contracts or policies, or in connection with investigating and preventing fraud.
                  </li>
               
              </ul>
            </div>

            <p className="font-[Barlow] font-medium text-[16px] leading-[40px] text-[#000]">
            The company may disclose or use aggregate or de-identified information for any purpose, it deems appropriate.
            </p>

            <p className="font-[Barlow] fint-bold text-[25px] text-[#FC746C]">
            Security:
            </p>
            <p className="font-[Barlow] font-medium text-[16px] leading-[40px] text-[#000]">
            The company is serious about its security, and takes various steps to protect information you provide to us, from loss, misuse and unauthorized access or disclosure. These steps take into account the sensitivity of the information we collect, process and store, and the current state of technology.
              </p>
            <p className="font-[Barlow] font-semibold text-[14px] leading-[40px] text-[#263238]">
            No Warranty:
              </p>

              <p className="font-[Barlow] font-medium text-[16px] leading-[40px] text-[#000]">
              You understand that the company does not provide any warranty, guarantee or representation of any kind concerning our ability to control, collect, correct, access, process, use, store, protect or transfer any personal information or concerning the existence or effectiveness of any security measures undertaken by Us. You agree that the company will not be liable for any claims, losses, or damages of any kind whatsoever which may result from the access, disclosure, use or modification by any party not authorized or authorized by us or the introduction of malware (including without limitation of viruses and worms) or other harmful elements to the system and their possible effects on personal information contained on the website or the Mobile App. By accessing the website or the Mobile App you acknowledge and understand to assume these risks.
              </p>

              <Demo header={"Limitation of Liability: "} body={"In no event will the company, its affiliates, partners and their respective employees, officers, directors or insurers be liable to you or to any other person for any costs, damages (including any personal, exemplary, incidental, special, indirect or consequential damages) or liability of any nature, arising or resulting from the collection, use, transfer, processing or storage of personal information obtained by Us and resulting from your access to and use of the Services through a Web Browser or a Mobile App."} />
                  <Demo  
                  header={"Changes to this Privacy Policy:"}
                  body={"We may change this policy from time to time, and which may be updated on our website or application at our discretion. If you continue to use the Services after those changes are in effect, you agree to the revised changes."}
                  
                  />
                  <Demo
                  header={"Contact The Company:"}
                  body={"Please feel free to contact us, if you have any questions about the company Privacy Policy or practices. You may contact us at support@postgait.com."}
                  />

          </div>
        </div>
      </div>
    </section>
  );
}
