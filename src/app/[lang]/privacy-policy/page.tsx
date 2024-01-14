'use client';

import { Button } from '@/components/ui/button';
import { ChevronsLeft, Contact, HomeIcon, MailIcon, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const privacyPolicyData = {
  title: 'Portfolio Website Privacy Policy',
  date: 'from August 29, 2023',
  content: [
    // {
    // 	number: '01',
    // 	subtitle: 'General Provisions.',
    // 	text: [
    // 		{
    // 			paragraph:
    // 				'This Privacy Policy is a legally binding document, which constitutes an integral part of the Terms of Use of web-site brander.аgency, and aimed to regulate relationships between Owners and Users of web-site brander.аgency and contains the scope of confidential information, the methods for its collection, storage, processing, disclosure, analysis, ensuring security during the use of web-site brander.аgency. It is strongly recommended for Users to read carefully the following Privacy Policy before they start usage of web-site brander.аgency, as well as its content, or other related products. By using the mentioned products, you acknowledge your consent to use web-site brander.аgency in accordance with this Privacy Policy. If Users do not accept fully or partially the terms herein, they should terminate or not to start the usage of web-site brander.аgency.',
    // 		},
    // 	],
    // },
    // {
    // 	number: '02',
    // 	subtitle: 'The scope and types of confidential information.',
    // 	text: [
    // 		{
    // 			paragraph:
    // 				'The personal information that is collected, stored or processed while using web-site brander.аgency includes the following types of information',
    // 		},
    // 		{
    // 			paragraph:
    // 				'Contact Information - This includes, in particular: mobile phone numbers, email address, name and surname of User, i.e. information by means of which User can identify himself as submit User`s application or User`s CV of web-site brander.аgency.',
    // 		},
    // 		{
    // 			paragraph:
    // 				'User Information - This includes, in particular: any information that is generated and uploaded directly by User, shared, received, distributed in any form by User while using web-site brander.аgency, as well as information about the User himself.',
    // 		},
    // 		{
    // 			paragraph:
    // 				'Third party Materials - This includes, in particular: data, products, content, intellectual property created, published or otherwise accumulated from third parties, other than User and/or Owner of web-site brander.аgency.',
    // 		},
    // 		{
    // 			paragraph:
    // 				'Contact Information - This includes, in particular: information which is received or collected, in particular - about IP-addresses, device types, which are used for running web-site brander.аgency, time and frequency of installations, visits, geo-location of Users and devices, metadata, comments, ratings, feedback posted by Users, received from other users, content of third parties.',
    // 		},
    // 	],
    // },
    // {
    // 	number: '03',
    // 	subtitle: 'Purposes for the collection of personal data.',
    // 	text: [
    // 		{
    // 			paragraph:
    // 				"Collection of information is necessary in order to enable the following: Performance of User's tasks; Detecting, investigating, and combating fraud, non-permitted access or any other kind of illegal activity in relation to the web-site brander.аgency; ensuring technical support for Users of web-site brander.аgency; Administration of web-site brander.аgency; Ensuring compliance with the Terms of Use of web-site brander.аgency; Analytics of accumulated, depersonalized and anonymized information in order to improve and optimize the quality of service, which results will be used to optimize web-site brander.аgency functionality and improve the service provided.",
    // 		},
    // 		{
    // 			paragraph:
    // 				'With respect to above mentioned Owner of web-site brander.аgency agrees to obtain a full and explicit User consent for the collection and processing of mentioned data.',
    // 		},
    // 		{
    // 			paragraph:
    // 				'By starting an actual usage of web-site brander.аgency and setting tasks via web-site brander.аgency, including tasks for data sharing, User expresses his full and explicit consent for the collection and processing of mentioned personal data.',
    // 		},
    // 		{
    // 			paragraph:
    // 				"By accepting this Privacy Policy, User acknowledges and agrees that the data listed above will be collected, processed and stored on the Owner of web-site's brander.аgency servers. The collection, storage, processing, or any use of the information for purposes other than the purposes specified herein, is strictly prohibited. No one may distribute, publish or otherwise exploit User information in any way, which violates or potentially violates the rights of third parties, or other Users.",
    // 		},
    // 	],
    // },
    // {
    // 	number: '04',
    // 	subtitle: 'The moment of data collection.',
    // 	text: [
    // 		{
    // 			paragraph:
    // 				'The owner of the application collects information when: User directly uses web-site brander.аgency interfaces; Users create, upload and share data or otherwise participates in related communications; User communicates with Owner of web-site brander.аgency through web-site brander.аgency and related systems.',
    // 		},
    // 	],
    // },
    // {
    // 	number: '05',
    // 	subtitle: 'Disclosure of personal data.',
    // 	text: [
    // 		{
    // 			paragraph:
    // 				'Owners of web-site brander.аgency reserve the right to disclose User personal data to following persons: Third parties who are partners of the Owner of web-site brander.аgency and shall, therefore, assist in the provision of service (maintaining services, support, hosting, database management, etc.). In this case, the information is disclosed exclusively for the purposes of service provision, and person to whom it is available, undertakes not to disclose or use information outside the scope of this Privacy Policy; Representatives of public authorities – in order to respond to legally reasonable requests in connection with official procedures, investigations, if the obligation to disclose is required by the current legislation; Professional advisors (lawyers, auditors, etc.) for the purposes of an independent audit, corporate governance and compliance procedures.',
    // 		},
    // 	],
    // },
    // {
    // 	number: '06',
    // 	subtitle:
    // 		'Disclosure, transfer, exchange of personal information is possible only based on full, expressed and explicit User consent. User has opportunity at any time to prevent, to stop the transfer or sharing of personal information.',
    // 	text: [],
    // },
    // {
    // 	number: '07',
    // 	subtitle: 'Storage and Data Security.',
    // 	text: [
    // 		{
    // 			paragraph:
    // 				'Owner of web-site brander.аgency undertakes all the necessary and reasonable measures to protect User information from leakage, loss, illegal and unauthorized use. However, User should be aware that web-site brander.аgency is open, can be accessed online, and therefore can potentially be subject to cyber-attacks, viruses, and other similar negative activities. Online access a priori does not guarantee the absolute safety of web-site brander.аgency; web-site brander.аgency Users use web-site brander.аgency at their own risk and Owners of web-site brander.аgency do not bear any responsibility for damage / loss raised from the threats to information and cyber security.',
    // 		},
    // 		{
    // 			paragraph:
    // 				'The User is also aware that the applicable information security and data protection tools cannot guarantee the absolute security of any data shared. Owners of web-site brander.аgency are not responsible for the actions of third parties, to whom User opens, discloses or otherwise transmits information. Since web-site brander.аgency runs globally, User acknowledges and agrees that personal information may be transferred to the devices that are located in any other country of the world, and with different levels of data protection. By using web-site brander.аgency, the User acknowledges and agrees to such data traffic',
    // 		},
    // 	],
    // },
    // {
    // 	number: '08',
    // 	subtitle: 'Personal Data Change.',
    // 	text: [
    // 		{
    // 			paragraph:
    // 				'Users have the right at any time to change, update, correct or delete personal information via web-site brander.аgency. User agrees that after removal of his [registration] data / content - a copy of the data can continue to be stored on the server because of the data backups for some time. However, the Owner of web-site brander.аgency is not obliged to store such data after termination of this Privacy Policy and User is aware and agrees that after termination of the usage of service his data and content will not be saved.',
    // 		},
    // 	],
    // },
    // {
    // 	number: '09',
    // 	subtitle: 'Cookies.',
    // 	text: [
    // 		{
    // 			paragraph:
    // 				'Cookies-files may be used to monitor the use of web-site brander.аgency and web traffic in order to optimize and improve the service. User is aware and agrees that cookies may collect his certain personal information, including information about IP-addresses, information on the types of devices and used operating systems, time and frequency of visits.',
    // 		},
    // 		{
    // 			paragraph:
    // 				'User can at any time to change the settings of his browser by blocking the ability for automatic use of cookies. The information gathered may be used exclusively for the purposes of analytics, based on depersonalized and anonymized data, the results of which will be used in order to optimize the functionality of web-site brander.аgency and to improve the service provided. Blocking of cookies, however, may affect the ability of access to certain functionality of web-site brander.аgency.',
    // 		},
    // 	],
    // },
    // {
    // 	number: '10',
    // 	subtitle:
    // 		'The procedure for making amendments and additions to the Privacy Policy',
    // 	text: [
    // 		{
    // 			paragraph:
    // 				'Owners of web-site brander.аgency reserve the right at any time to revoke the terms and herein, to make changes, additions, without prior User consent or other prior notifications.',
    // 		},
    // 		{
    // 			paragraph:
    // 				'In case if certain provisions of the present Privacy Policy turn to be invalid or ineffective under the jurisdiction of particular countries, the mentioned does not affect the legal force of the entire document hereby, as well as the validity of its particular provisions in specific jurisdictions. Since consequent changes to the terms herein are made, they shall be published via platform, where web-site brander.аgency is located, with the appropriate notification on the updating date at the top of the text.',
    // 		},
    // 	],
    // },
    {
      number: '11',
      subtitle: 'The contact details.',
      text: [],
    },
  ],
};

const privacyPolicyPage = () => {
  const router = useRouter();
  const { title, date, content } = privacyPolicyData;
  return (
    <section className="mb-24 mt-14 min-h-screen xl:mb-32">
      <div className="container">
        {/* main title and date */}
        <div className="">
          <h1 className="h1 uppercase text-primary">{title}</h1>
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>

        {/* privacy policy content */}
        <ol className="w-1/2 [counter-reset:section]">
          {content.map((item, index) => (
            <li className="mt-10 [counter-increment:section] xl:mt-20" key={index}>
              <div className='privacy-policy_num_extended font-["Helvetica"] text-4xl font-black md:text-7xl'>
                {item.number}
              </div>
              <h2 className="mb-10 mt-2 text-2xl font-bold leading-6 md:text-4xl">
                {item.subtitle}
              </h2>
              <ol className="text-base font-semibold leading-6 text-black/60 [counter-reset:section] dark:text-muted-foreground">
                {item.text.map((text, index) => (
                  <li
                    className="my-2 ml-8 px-2 [counter-increment:section] marker:[content:counters(section,'.')]"
                    key={index}
                  >
                    {text.paragraph}
                  </li>
                ))}
              </ol>
            </li>
          ))}
          {}
        </ol>
        {/* contacts */}
        <div className="flex flex-col">
          <div className="flex items-center gap-x-2">
            <MailIcon size={20} />
            Email:
            <Link href="mailto:vdfo26@gmail.com" className="text-primary">
              vdfo26@gmail.com
            </Link>
          </div>
          <div className="flex items-center gap-x-2">
            <PhoneCall size={20} />
            Phone:
            <Link href="tel:+48578568311" className="text-primary">
              +48 578 568 311
            </Link>
          </div>
        </div>
        {/* buttons */}
        <div className="mt-8 flex gap-x-4">
          <Button className="flex items-center gap-x-2" onClick={() => router.back()}>
            <ChevronsLeft size={18} />
            Back
          </Button>
          <Link href="/">
            <Button className="flex items-center gap-x-2">
              <HomeIcon size={18} />
              Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="flex items-center gap-x-2">
              <Contact size={18} />
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default privacyPolicyPage;
