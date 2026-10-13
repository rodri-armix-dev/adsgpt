import type { ComponentProps } from 'astro/types';
import type LegalDocument from '../../components/organisms/LegalDocument/LegalDocument.astro';
import type { Locale } from '../../i18n/config';
import { privacidadData } from './privacidad';
import { terminosData } from './terminos';

// Translations of the supplied Spanish documents; retain dates, clauses and numbering.
export const privacyData = {
	es: privacidadData,
	en: {
		title: 'Privacy Policy',
		pill: { label: 'UPDATED: March 18, 2024', variant: 'light' },
		effectiveDate: { label: 'EFFECTIVE DATE:', text: 'July 2, 2018', datetime: '2018-07-02' },
		html: `
<h2>1. INTRODUCTION</h2>
<p>Wortise is a mobile app monetization company operating a marketing platform solution that provides advertising and monetization services/products to advertisers and publishers.</p>

<h2>2. SCOPE OF THIS PRIVACY POLICY</h2>
<h3>2.1 APPLICABILITY</h3>
<p>This Privacy Policy explains how Wortise collects, uses and shares information about individuals who interact with its services, offerings or platforms comprising its Marketing Platform (&quot;Marketing Platform Services&quot;) and its website, respectively (&quot;Wortise&quot; means Bee Holding SAS, its subsidiaries and affiliated companies). Wortise is the controller of the personal information processed, unless otherwise stated.</p>
<h3>2.2 NON-APPLICABILITY</h3>
<p>Wortise may offer standalone mobile apps, web content services and software features to consumers through smart devices, which may be preloaded on devices, downloadable, web-hosted or available through other digital media (&quot;Consumer Offerings&quot;). This Privacy Policy does not apply to the data collection or processing practices of each of the above services, respectively. If you are a consumer of any Consumer Offering, the applicable privacy policy should be available through those services. Please consult the respective privacy policies of each Consumer Offering for a description of their data collection and use practices.</p>
<p>To the extent that the above Consumer Offerings promote interest-based advertising using the Marketing Platform Services, the terms of this policy will apply to the data processing practices for those Marketing Platform Services.</p>
<p>The Marketing Platform Services and Consumer Offerings are collectively referred to as &quot;Services&quot;.</p>
<h3>2.3 APPLICABILITY TO ADSGPT</h3>
<p>Notwithstanding Section 2.2, this Privacy Policy does apply to personal information processed through AdsGPT, including the app, website, user accounts, subscriptions, purchases and AI Credits.</p>

<h2>3. WORTISE MARKETING PLATFORM SERVICES</h2>
<p>Wortise undertakes to serve ads on the digital properties of third-party website/app publishers and app developers on behalf of its demand-side advertising partners through various advertising solution channels, including exchanges, networks, off-network channels, etc. Wortise may also serve ads in Consumer Offerings. Wortise also participates in campaign planning, measurement (for example, whether an ad has been viewed, its timestamp, etc.) and ad attribution, either itself or through third-party measurement partners.</p>
<p>Wortise provides Marketing Platform Services, including ad campaign optimization, data analysis/enrichment, segment creation, user acquisition or re-engagement through various digital advertising channels. Wortise receives data in its Marketing Platform from various sources, including end-user information collected by our systems, apps/offerings, partners, data/cookie providers or customers (&quot;Sources&quot;), which may include third-party apps, sites and services you use. Please consult the privacy policies of the apps, sites and services you use to understand how those apps, sites and services collect, use and share data from your interactions with them. Wortise is not responsible for how those third-party apps, sites and services collect and use data.</p>

<h2>4. WHAT PERSONAL INFORMATION DO WE COLLECT?</h2>
<p>When you view an ad distributed through Wortise on a site, app or other digital media, we may collect information about your device and your interaction with the ad. This information allows us to serve you ads and improve our Services, including recognizing your device when you use other sites and apps that have partnered with us. Wortise may also collect information about you when you choose to interact with our surveys or opinion-based apps. The information we may collect includes:</p>
<h3>(a)</h3>
<p>Device identifiers: Google Advertising ID (GAID), Android ID for Android devices, Identifier for Advertising on OTT and CTV platforms, cookie IDs</p>
<h3>(b)</h3>
<p>Location information: Geolocation or precise location, WiFi identifier location, IP address-based location</p>
<h3>(c)</h3>
<p>Network information: Mobile carrier, network provider or ISP, network type, IP address, WiFi access point IDs, connection date and time</p>
<h3>(d)</h3>
<p>App or site and SDK information: App or site name/version, app identifier, SDK version, API key identifier</p>
<h3>(e)</h3>
<p>Other device information: Device type, start/update time, device name, screen size, memory/storage capacity, OS version, browser, language settings</p>
<h3>(f)</h3>
<p>Advertising information: Ad content type, ad format, ad placement, user interactions with ads</p>

<h2>5. HOW DO WE USE YOUR PERSONAL INFORMATION?</h2>
<p>We use the information we collect about your device to:</p>
<ul>
	<li>Display ads on your device, including interest-based advertising</li>
	<li>Bid to serve ads and determine ad effectiveness</li>
	<li>Analyze and report on ad effectiveness</li>
	<li>Avoid showing you the same ads too many times</li>
	<li>Build custom audience segments for better ad targeting</li>
	<li>Improve our Services</li>
	<li>Detect and prevent fraud</li>
	<li>Process survey responses</li>
</ul>

<h2>6. WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
<p>Wortise may share the information we collect with:</p>
<ul>
	<li>Publishers and Supply Partners</li>
	<li>Demand Partners and Advertisers</li>
	<li>Marketing Partners</li>
	<li>Service Providers</li>
	<li>Legal disclosures to comply with law enforcement or protect rights</li>
	<li>Business transfers in the event of a merger, acquisition or sale of assets</li>
</ul>

<h2>7. ADSGPT PURCHASES AND SUBSCRIPTIONS</h2>
<p>Purchases are processed through the Apple App Store, Google Play or the payment provider available on the AdsGPT website.</p>
<p>RevenueCat receives and reports purchase and subscription status information so we can enable and manage subscriptions, subscription credits and purchased AI Credit packs.</p>
<p>AdsGPT does not receive or store full payment card or payment method details. Apple, Google, RevenueCat and payment providers process information in accordance with their own privacy policies and applicable terms.</p>

<h2>8. HOW DO WE KEEP PERSONAL INFORMATION SECURE?</h2>
<p>Wortise takes reasonable technical and organizational measures to protect the information it collects about you in compliance with its legal and privacy requirements and contractual obligations. We also seek appropriate contractual protection from our partners regarding their collection, use or handling of user data.</p>

<h2>9. HOW LONG DO WE RETAIN YOUR INFORMATION?</h2>
<p>Wortise retains information collected in the context of our Marketing Platform for a period of up to three (3) months, unless otherwise required by applicable law or contract.</p>

<h2>10. OPTING OUT OF INTEREST-BASED ADS</h2>
<p>If you prefer not to receive interest-based advertising from Wortise, you may opt out at any time by visiting the Wortise opt-out page. On your device, visit the operating system (OS) privacy settings and select Limit Ad Tracking (iOS/tvOS), Opt Out of Interest-Based Ads (Android) or similar settings.</p>

<h2>11. PRIVACY RIGHTS</h2>
<p>Wortise provides consumers with data subject or consumer rights as required by applicable laws, including GDPR, CCPA and other regional privacy regulations. For more information or to exercise your rights, contact us at <a href="mailto:privacy@wortise.com">privacy@wortise.com</a>.</p>

<h2>12. INTERNATIONAL TRANSFERS</h2>
<p>Wortise may share your information with customers, clients, partners, affiliates and other third parties in countries outside your country of residence, subject to contractual or legal requirements.</p>

<h2>13. CHILDREN’S PRIVACY</h2>
<p>Wortise does not knowingly collect personal information from children under 13 years of age (or the applicable age in relevant jurisdictions).</p>

<h2>14. CONTACT US</h2>
<p>If you have any questions about this Privacy Policy, contact us at: <a href="mailto:privacy@wortise.com">privacy@wortise.com</a></p>
`,
	},
	pt: {
		title: 'Política de Privacidade',
		pill: { label: 'ATUALIZAÇÃO: 18 de março de 2024', variant: 'light' },
		effectiveDate: { label: 'DATA DE ENTRADA EM VIGOR:', text: '2 de julho de 2018', datetime: '2018-07-02' },
		html: `
<h2>1. INTRODUÇÃO</h2>
<p>A Wortise é uma empresa de monetização de aplicativos móveis que opera uma solução de plataforma de marketing que fornece serviços/produtos de publicidade e monetização a anunciantes e editores.</p>

<h2>2. ESCOPO DESTA POLÍTICA DE PRIVACIDADE</h2>
<h3>2.1 APLICABILIDADE</h3>
<p>Esta Política de Privacidade explica como a Wortise coleta, usa e compartilha informações de indivíduos que interagem com seus serviços, ofertas ou plataformas que compõem sua Plataforma de Marketing (&quot;Serviços da Plataforma de Marketing&quot;) e seu site, respectivamente (&quot;Wortise&quot; significa Bee Holding SAS, suas subsidiárias e empresas afiliadas). A Wortise é a controladora das informações pessoais processadas, salvo indicação em contrário.</p>
<h3>2.2 NÃO APLICABILIDADE</h3>
<p>A Wortise pode oferecer aplicativos móveis independentes, serviços de conteúdo web e recursos de software a consumidores por meio de dispositivos inteligentes, que podem ser pré-instalados nos dispositivos, disponíveis para download, hospedados na web ou disponíveis por outros meios digitais (&quot;Ofertas ao Consumidor&quot;). Esta Política de Privacidade não se aplica às práticas de coleta ou processamento de dados de cada um dos serviços acima, respectivamente. Se você for consumidor de qualquer Oferta ao Consumidor, a política de privacidade aplicável deverá estar disponível nesses serviços. Consulte as respectivas políticas de privacidade de cada Oferta ao Consumidor para obter uma descrição de suas práticas de coleta e uso de dados.</p>
<p>Na medida em que as Ofertas ao Consumidor acima promovam publicidade baseada em interesses utilizando os Serviços da Plataforma de Marketing, os termos desta política se aplicarão às práticas de processamento de dados desses Serviços da Plataforma de Marketing.</p>
<p>Os Serviços da Plataforma de Marketing e as Ofertas ao Consumidor são denominados coletivamente &quot;Serviços&quot;.</p>
<h3>2.3 APLICABILIDADE AO ADSGPT</h3>
<p>Não obstante a Seção 2.2, esta Política de Privacidade se aplica às informações pessoais processadas por meio do AdsGPT, incluindo o aplicativo, o site, as contas de usuário, as assinaturas, as compras e os Créditos de IA.</p>

<h2>3. SERVIÇOS DA PLATAFORMA DE MARKETING DA WORTISE</h2>
<p>A Wortise se compromete a veicular anúncios nas propriedades digitais de editores de sites/aplicativos de terceiros e desenvolvedores de aplicativos em nome de seus parceiros publicitários do lado da demanda, por diversos canais de soluções publicitárias, incluindo exchanges, redes, canais fora de redes, etc. A Wortise também pode veicular anúncios em Ofertas ao Consumidor. A Wortise também participa do planejamento de campanhas, da medição (por exemplo, se um anúncio foi visualizado, seu registro de data e hora, etc.) e da atribuição de anúncios, diretamente ou por meio de parceiros de medição de terceiros.</p>
<p>A Wortise fornece Serviços da Plataforma de Marketing, incluindo otimização de campanhas publicitárias, análise/enriquecimento de dados, criação de segmentos, aquisição ou reengajamento de usuários por diversos canais de publicidade digital. A Wortise recebe dados em sua Plataforma de Marketing de várias fontes, incluindo informações de usuários finais coletadas por nossos sistemas, aplicativos/ofertas, parceiros, fornecedores de dados/cookies ou clientes (&quot;Fontes&quot;), que podem incluir aplicativos, sites e serviços de terceiros que você utiliza. Consulte as políticas de privacidade dos aplicativos, sites e serviços que você utiliza para entender como eles coletam, usam e compartilham dados de suas interações com eles. A Wortise não é responsável pela forma como esses aplicativos, sites e serviços de terceiros coletam e usam dados.</p>

<h2>4. QUAIS INFORMAÇÕES PESSOAIS COLETAMOS?</h2>
<p>Quando você visualiza um anúncio distribuído pela Wortise em um site, aplicativo ou outro meio digital, podemos coletar informações sobre seu dispositivo e sua interação com o anúncio. Essas informações nos permitem veicular anúncios para você e melhorar nossos Serviços, incluindo o reconhecimento de seu dispositivo quando você utiliza outros sites e aplicativos que firmaram parceria conosco. A Wortise também pode coletar informações sobre você quando você decide interagir com nossas pesquisas ou aplicativos baseados em opiniões. As informações que podemos coletar incluem:</p>
<h3>(a)</h3>
<p>Identificadores de dispositivo: ID de publicidade do Google (GAID), ID do Android para dispositivos Android, identificador para publicidade em plataformas OTT e CTV, IDs de cookies</p>
<h3>(b)</h3>
<p>Informações de localização: Geolocalização ou localização precisa, localização do identificador WiFi, localização baseada no endereço IP</p>
<h3>(c)</h3>
<p>Informações de rede: Operadora móvel, provedor de rede ou ISP, tipo de rede, endereço IP, IDs de pontos de acesso WiFi, data e hora da conexão</p>
<h3>(d)</h3>
<p>Informações sobre aplicativos ou sites e SDK: Nome/versão do aplicativo ou site, identificador do aplicativo, versão do SDK, identificador da chave de API</p>
<h3>(e)</h3>
<p>Outras informações do dispositivo: Tipo de dispositivo, horário de inicialização/atualização, nome do dispositivo, tamanho da tela, capacidade de memória/armazenamento, versão do sistema operacional, navegador, configurações de idioma</p>
<h3>(f)</h3>
<p>Informações de publicidade: Tipo de conteúdo do anúncio, formato do anúncio, posicionamento do anúncio, interações do usuário com anúncios</p>

<h2>5. COMO USAMOS SUAS INFORMAÇÕES PESSOAIS?</h2>
<p>Usamos as informações que coletamos sobre seu dispositivo para:</p>
<ul>
	<li>Exibir anúncios em seu dispositivo, incluindo publicidade baseada em interesses</li>
	<li>Fazer lances para veicular anúncios e determinar sua eficácia</li>
	<li>Analisar e fornecer relatórios sobre a eficácia dos anúncios</li>
	<li>Evitar exibir os mesmos anúncios para você muitas vezes</li>
	<li>Criar segmentos de público personalizados para uma melhor segmentação de anúncios</li>
	<li>Melhorar nossos Serviços</li>
	<li>Detectar e prevenir fraudes</li>
	<li>Processar respostas de pesquisas</li>
</ul>

<h2>6. COM QUEM COMPARTILHAMOS SUAS INFORMAÇÕES PESSOAIS?</h2>
<p>A Wortise pode compartilhar as informações que coletamos com:</p>
<ul>
	<li>Editores e Parceiros de Oferta</li>
	<li>Parceiros de Demanda e Anunciantes</li>
	<li>Parceiros de Marketing</li>
	<li>Prestadores de Serviços</li>
	<li>Divulgações legais para atender às autoridades policiais ou proteger direitos</li>
	<li>Transferências comerciais em caso de fusão, aquisição ou venda de ativos</li>
</ul>

<h2>7. COMPRAS E ASSINATURAS DO ADSGPT</h2>
<p>As compras são processadas pela Apple App Store, pelo Google Play ou pelo provedor de pagamentos disponível no site do AdsGPT.</p>
<p>A RevenueCat recebe e informa o status de compras e assinaturas para que possamos habilitar e gerenciar assinaturas, créditos de assinatura e pacotes de Créditos de IA adquiridos.</p>
<p>O AdsGPT não recebe nem armazena os dados completos de cartões ou métodos de pagamento. A Apple, o Google, a RevenueCat e os provedores de pagamentos processam as informações de acordo com suas próprias políticas de privacidade e termos aplicáveis.</p>

<h2>8. COMO MANTEMOS AS INFORMAÇÕES PESSOAIS SEGURAS?</h2>
<p>A Wortise adota medidas técnicas e organizacionais razoáveis para proteger as informações que coleta sobre você, em conformidade com seus requisitos legais e de privacidade e suas obrigações contratuais. Também buscamos proteção contratual adequada de nossos parceiros em relação à coleta, ao uso ou ao tratamento de dados de usuários.</p>

<h2>9. POR QUANTO TEMPO CONSERVAMOS SUAS INFORMAÇÕES?</h2>
<p>A Wortise conserva as informações coletadas no contexto de nossa Plataforma de Marketing por um período de até três (3) meses, salvo exigência em contrário da legislação ou do contrato aplicável.</p>

<h2>10. RECUSAR ANÚNCIOS BASEADOS EM INTERESSES</h2>
<p>Se você preferir não receber publicidade baseada em interesses da Wortise, poderá recusá-la a qualquer momento visitando a página de exclusão da Wortise. Em seu dispositivo, acesse as configurações de privacidade do sistema operacional (SO) e selecione Limitar Rastreamento de Anúncios (iOS/tvOS), Desativar Anúncios Baseados em Interesses (Android) ou configurações semelhantes.</p>

<h2>11. DIREITOS DE PRIVACIDADE</h2>
<p>A Wortise fornece aos consumidores direitos de titulares de dados ou de consumidores conforme exigido pelas leis aplicáveis, incluindo GDPR, CCPA e outras regulamentações regionais de privacidade. Para obter mais informações ou exercer seus direitos, entre em contato pelo e-mail <a href="mailto:privacy@wortise.com">privacy@wortise.com</a>.</p>

<h2>12. TRANSFERÊNCIAS INTERNACIONAIS</h2>
<p>A Wortise pode compartilhar suas informações com clientes, contratantes, parceiros, afiliadas e outros terceiros em países fora de seu país de residência, sujeita a requisitos contratuais ou legais.</p>

<h2>13. PRIVACIDADE DAS CRIANÇAS</h2>
<p>A Wortise não coleta intencionalmente informações pessoais de crianças menores de 13 anos (ou da idade aplicável nas jurisdições relevantes).</p>

<h2>14. ENTRE EM CONTATO</h2>
<p>Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato pelo e-mail: <a href="mailto:privacy@wortise.com">privacy@wortise.com</a></p>
`,
	},
} satisfies Record<Locale, ComponentProps<typeof LegalDocument>>;

export const termsData = {
	es: terminosData,
	en: {
		title: 'Terms and Conditions',
		html: `
<p>This agreement describes the terms and conditions under which &quot;Wortise&quot; (Bee Holding SAS is a company established in Uruguay with company number (RUT) 21.833.415.001 and its registered office on the 4th floor of Misiones 1537, Montevideo, Uruguay) provides you (&quot;Publisher&quot;) with the monetization and advertising services that form part of the Wortise - Publisher Dashboard product.</p>
<p>Wortise reserves the right to modify the Terms and Conditions (T&amp;C) at any time without prior notice. You should print a copy of this agreement for future reference. Please read these terms and conditions carefully before subscribing to the Service through our &quot;Site&quot;. By subscribing to our Services and using our Site, you accept the terms and conditions contained in this agreement.</p>
<p>For valuable consideration, the parties agree as follows:</p>

<h2>Service Description and License Grant</h2>
<p>1.0 Minimum Age. You must be a natural person at least 18 years of age to use the Site and register for the Services. By using the Services, you represent and warrant that you are at least 18 years of age.</p>
<p>The Wortise platform benefits the Publisher (app publishers/owners/developers/providers) by offering the Publisher the opportunity to integrate the Wortise Software Development Kit (&quot;SDK&quot;). The Wortise SDK will enable Wortise to provide targeted ads on behalf of advertisers to end users of the Publisher’s app(s) (the &quot;Monetization Service&quot;).</p>
<p>Subject to these T&amp;C and during the term of this Agreement, Wortise:</p>
<p>1.2.1. grants the Publisher a revocable, limited, personal, worldwide, non-exclusive and non-transferable right to:</p>
<ul>
	<li>use, copy and distribute the Wortise SDK solely for the monetization and distribution of its own Apps;</li>
	<li>use the relevant and necessary SDK components and adapters solely to incorporate the SDK into the Publisher’s Apps; and</li>
	<li>enable the Publisher’s access to the Wortise platform.</li>
</ul>
<p>To provide the Service, you authorize Wortise to deliver ads to end users’ mobile devices through your App.</p>
<p>1.4. Participation in the Wortise Service is subject to Wortise’s prior approval and the Publisher’s ongoing compliance with the T&amp;C. Wortise reserves the right to refuse participation or block access to any applicant or participant at any time.</p>
<p>1.5. Feedback. All feedback or materials submitted by the Publisher to Wortise regarding the SDK, Platform or Service will be received and treated by Wortise as non-confidential and unrestricted.</p>
<p>1.6. Updates. If Wortise makes modifications to the SDK available, those modifications will become part of the SDK and will be subject to this Agreement.</p>

<h2>2. Implementation and Support</h2>
<p>2.1. For the Monetization Service, the Publisher agrees to implement the Wortise SDK in accordance with the technical specifications provided by Wortise.</p>

<h2>3. Ownership</h2>
<p>The Publisher retains all rights, title and interest in and to the Publisher’s Apps. Wortise reserves all rights, title and interest in and to the Wortise platform, services, SDK and related materials.</p>
<p>3.3. Device Data. All End User Data collected by Wortise through its SDK will remain the property of Wortise, in accordance with applicable privacy regulations.</p>

<h2>4. Publisher Responsibilities and Warranties</h2>
<p>4.1. The Publisher represents and warrants that all information provided to Wortise is accurate, the Publisher has the necessary rights and authority, complies with applicable laws, and the Apps do not display prohibited or illegal content.</p>

<h2>5. Prohibited Actions</h2>
<p>5.1. The Publisher shall not:</p>
<ul>
	<li>Reproduce, lease, transfer or commercially exploit the Wortise Service</li>
	<li>Distribute any source code provided as part of the SDK</li>
	<li>Modify, alter or create derivative works of the SDK</li>
	<li>Reverse engineer or disassemble the SDK</li>
	<li>Remove proprietary rights or notices</li>
	<li>Use the SDK for purposes other than those intended</li>
</ul>
<p>5.2. The Publisher agrees not to create illegal, defamatory, threatening or objectionable content in connection with Wortise.</p>

<h2>6. Payments and Billing</h2>
<p>6.1. Wortise will pay the Publisher amounts calculated based on the provision of the Monetization Service. All payments are based on amounts validated through Wortise’s algorithm.</p>
<p>6.2. Payment terms. Wortise will pay the amounts within 45 days after the end of the monetization month, provided that net revenue exceeds USD 100.</p>
<p>6.3. Bank charges. Wortise cannot be responsible for any bank charges incurred by the Publisher.</p>
<p>6.4. Currencies. All earnings are calculated in USD by default. Publishers may select their preferred payment currency.</p>
<p>6.5. Wortise will not be required to pay for fraudulent impressions, clicks or actions. Wortise may deduct amounts and withhold payments if fraud is detected.</p>

<h2>7. Subscriptions, AI Credits and Advertising Balance</h2>
<h3>7.1 Subscriptions</h3>
<p>AdsGPT offers subscription plans that provide access to digital features within the app. Before purchase, AdsGPT will display the plan, included benefits, billing period, price, usage limits and any available free trial. Subscriptions renew automatically unless canceled through the account or platform used for the purchase. Mobile purchases are processed through Apple App Store In-App Purchase or Google Play Billing. Web purchases are processed through the payment method available in AdsGPT.</p>
<h3>7.2 AI Credits</h3>
<p>AdsGPT distinguishes between credits included with a subscription and credits purchased through separate packs. Credits included with a subscription are granted during each billing period, may be used during that period and expire at its end, unless the applicable plan expressly states otherwise. Credits purchased through separate packs do not expire and remain available even if the subscription is canceled or expires. AI Credits may only be used within AdsGPT for the actions described before execution. They are not money, cannot be transferred, sold or exchanged for cash, and cannot be used to purchase advertising inventory.</p>
<h3>7.3 Advertising Balance</h3>
<p>The advertising balance is separate from subscriptions and AI Credits. It is used exclusively to fund advertising campaigns and advertising inventory and cannot be converted into AI Credits or used to unlock features.</p>
<h3>7.4 Trials, Cancellations and Refunds</h3>
<p>The terms and post-trial price of any free trial will be displayed before activation. Canceling a subscription stops future renewals. Access continues until the end of the current trial or paid billing period, and cancellation does not automatically provide a refund. Refunds are managed by Apple, Google or AdsGPT, depending on the purchase channel, subject to applicable law. Approved refunds or reversals may revoke access and associated credits.</p>

<h2>8. Termination</h2>
<p>Either party may terminate these T&amp;C immediately for breach or at any time with 30 days’ written notice.</p>

<h2>9. Confidentiality</h2>
<p>9.1. Each party agrees not to disclose Confidential Information without prior written consent and to exercise reasonable care to prevent unauthorized use and disclosure.</p>

<h2>10. Account Identifiers</h2>
<p>10.1. Publishers are responsible for maintaining the confidentiality of their account credentials and all activity on their account.</p>

<h2>11. Disclaimer</h2>
<p>11.1. Wortise does not warrant that the SDK, Service or Platform will be error-free or uninterrupted. Wortise reserves the right to modify or discontinue the services at any time.</p>

<h2>12. Limitation of Liability</h2>
<p>To the fullest extent permitted by law, Wortise will not be liable for any indirect, incidental, special, consequential or punitive damages.</p>

<h2>13. Indemnification</h2>
<p>The Publisher agrees to indemnify and hold Wortise harmless from any claims arising from the Publisher’s use of the Services or breach of these Terms.</p>

<h2>14. Governing Law</h2>
<p>These Terms will be governed by the laws of Uruguay, without regard to conflict of laws provisions.</p>

<h2>15. Contact Information</h2>
<p>For questions about these Terms and Conditions, contact Wortise at its registered office address or through the Wortise platform.</p>
`,
	},
	pt: {
		title: 'Termos e Condições',
		html: `
<p>Este acordo descreve os termos e condições sob os quais a &quot;Wortise&quot; (Bee Holding SAS é uma empresa estabelecida no Uruguai com número de registro (RUT) 21.833.415.001 e sede no 4º andar de Misiones 1537, Montevidéu, Uruguai) fornece a você (&quot;Editor&quot;) os serviços de monetização e publicidade que fazem parte do produto Wortise - Painel para Editores.</p>
<p>A Wortise se reserva o direito de modificar os Termos e Condições (T&amp;C) a qualquer momento sem aviso prévio. Você deve imprimir uma cópia deste acordo para referência futura. Leia estes termos e condições atentamente antes de assinar o Serviço por meio de nosso &quot;Site&quot;. Ao assinar nossos Serviços e usar nosso Site, você aceita os termos e condições contidos neste acordo.</p>
<p>Mediante contraprestação, as partes acordam o seguinte:</p>

<h2>Descrição do Serviço e Concessão de Licença</h2>
<p>1.0 Idade Mínima. Você deve ser uma pessoa física com pelo menos 18 anos de idade para usar o Site e se cadastrar nos Serviços. Ao usar os Serviços, você declara e garante que tem pelo menos 18 anos de idade.</p>
<p>A plataforma Wortise beneficia o Editor (editores/proprietários/desenvolvedores/fornecedores de aplicativos) ao oferecer a oportunidade de integrar o Kit de Desenvolvimento de Software da Wortise (&quot;SDK&quot;). O SDK da Wortise permitirá que a Wortise forneça anúncios direcionados em nome dos anunciantes aos usuários finais dos aplicativos do Editor (o &quot;Serviço de Monetização&quot;).</p>
<p>Sujeita a estes T&amp;C e durante a vigência deste Acordo, a Wortise:</p>
<p>1.2.1. concede ao Editor um direito revogável, limitado, pessoal, mundial, não exclusivo e intransferível para:</p>
<ul>
	<li>usar, copiar e distribuir o SDK da Wortise exclusivamente para a monetização e distribuição de seus próprios Aplicativos;</li>
	<li>usar os componentes e adaptadores relevantes e necessários do SDK exclusivamente para incorporar o SDK aos Aplicativos do Editor; e</li>
	<li>habilitar o acesso do Editor à plataforma Wortise.</li>
</ul>
<p>Para fornecer o Serviço, você autoriza a Wortise a entregar anúncios aos dispositivos móveis dos usuários finais por meio de seu Aplicativo.</p>
<p>1.4. A participação no Serviço da Wortise está sujeita à aprovação prévia da Wortise e ao cumprimento contínuo dos T&amp;C pelo Editor. A Wortise se reserva o direito de recusar a participação ou bloquear o acesso de qualquer solicitante ou participante a qualquer momento.</p>
<p>1.5. Comentários. Todos os comentários ou materiais enviados pelo Editor à Wortise sobre o SDK, a Plataforma ou o Serviço serão recebidos e tratados pela Wortise de forma não confidencial e sem restrições.</p>
<p>1.6. Atualizações. Se a Wortise disponibilizar modificações no SDK, essas modificações passarão a fazer parte do SDK e estarão sujeitas a este Acordo.</p>

<h2>2. Implementação e Suporte</h2>
<p>2.1. Para o Serviço de Monetização, o Editor concorda em implementar o SDK da Wortise de acordo com as especificações técnicas fornecidas pela Wortise.</p>

<h2>3. Propriedade</h2>
<p>O Editor mantém todos os direitos, títulos e interesses sobre seus Aplicativos. A Wortise se reserva todos os direitos, títulos e interesses sobre a plataforma, os serviços, o SDK e os materiais relacionados da Wortise.</p>
<p>3.3. Dados do Dispositivo. Todos os Dados do Usuário Final coletados pela Wortise por meio de seu SDK permanecerão como propriedade da Wortise, de acordo com as regulamentações de privacidade aplicáveis.</p>

<h2>4. Responsabilidades e Garantias do Editor</h2>
<p>4.1. O Editor declara e garante que todas as informações fornecidas à Wortise são precisas, que possui os direitos e a autoridade necessários, que cumpre as leis aplicáveis e que os Aplicativos não exibem conteúdo proibido ou ilegal.</p>

<h2>5. Ações Proibidas</h2>
<p>5.1. O Editor não deverá:</p>
<ul>
	<li>Reproduzir, alugar, transferir ou explorar comercialmente o Serviço da Wortise</li>
	<li>Distribuir qualquer código-fonte fornecido como parte do SDK</li>
	<li>Modificar, alterar ou criar obras derivadas do SDK</li>
	<li>Realizar engenharia reversa ou desmontar o SDK</li>
	<li>Remover direitos ou avisos de propriedade</li>
	<li>Usar o SDK para finalidades diferentes das previstas</li>
</ul>
<p>5.2. O Editor concorda em não criar conteúdo ilegal, difamatório, ameaçador ou censurável relacionado à Wortise.</p>

<h2>6. Pagamentos e Faturamento</h2>
<p>6.1. A Wortise pagará ao Editor valores calculados com base na prestação do Serviço de Monetização. Todos os pagamentos se baseiam em valores validados pelo algoritmo da Wortise.</p>
<p>6.2. Condições de pagamento. A Wortise pagará os valores em até 45 dias após o final do mês de monetização, desde que a receita líquida supere USD 100.</p>
<p>6.3. Tarifas bancárias. A Wortise não pode ser responsabilizada por quaisquer tarifas bancárias cobradas do Editor.</p>
<p>6.4. Moedas. Todos os ganhos são calculados por padrão em USD. Os editores podem selecionar sua moeda de pagamento preferida.</p>
<p>6.5. A Wortise não será obrigada a pagar por impressões, cliques ou ações fraudulentas. A Wortise pode deduzir valores e reter pagamentos se detectar fraude.</p>

<h2>7. Assinaturas, Créditos de IA e Saldo Publicitário</h2>
<h3>7.1 Assinaturas</h3>
<p>O AdsGPT oferece planos de assinatura que dão acesso a recursos digitais dentro do aplicativo. Antes da compra, o AdsGPT exibirá o plano, os benefícios incluídos, o período de cobrança, o preço, os limites de uso e qualquer teste gratuito disponível. As assinaturas são renovadas automaticamente, a menos que sejam canceladas pela conta ou plataforma utilizada para a compra. As compras móveis são processadas pelas Compras Dentro do App da Apple App Store ou pelo Faturamento do Google Play. As compras pela web são processadas pelo método de pagamento disponível no AdsGPT.</p>
<h3>7.2 Créditos de IA</h3>
<p>O AdsGPT distingue os créditos incluídos em uma assinatura dos créditos adquiridos por meio de pacotes separados. Os créditos incluídos em uma assinatura são concedidos durante cada período de cobrança, podem ser usados nesse período e expiram ao final dele, salvo indicação expressa em contrário no plano aplicável. Os créditos adquiridos por meio de pacotes separados não expiram e permanecem disponíveis mesmo se a assinatura for cancelada ou expirar. Os Créditos de IA só podem ser usados dentro do AdsGPT para as ações descritas antes de sua execução. Eles não são dinheiro, não podem ser transferidos, vendidos nem trocados por dinheiro e não podem ser usados para comprar inventário publicitário.</p>
<h3>7.3 Saldo Publicitário</h3>
<p>O saldo publicitário é independente das assinaturas e dos Créditos de IA. Ele é utilizado exclusivamente para financiar campanhas publicitárias e inventário publicitário e não pode ser convertido em Créditos de IA nem usado para desbloquear recursos.</p>
<h3>7.4 Testes, Cancelamentos e Reembolsos</h3>
<p>Os termos e o preço após o teste de qualquer teste gratuito serão exibidos antes da ativação. O cancelamento de uma assinatura interrompe as renovações futuras. O acesso continua até o final do período de teste ou do período de cobrança pago atual, e o cancelamento não gera automaticamente um reembolso. Os reembolsos são gerenciados pela Apple, pelo Google ou pelo AdsGPT, conforme o canal de compra, sujeitos à legislação aplicável. Reembolsos ou estornos aprovados podem revogar o acesso e os créditos associados.</p>

<h2>8. Rescisão</h2>
<p>Qualquer uma das partes pode rescindir estes T&amp;C imediatamente em caso de descumprimento ou a qualquer momento mediante aviso por escrito com 30 dias de antecedência.</p>

<h2>9. Confidencialidade</h2>
<p>9.1. Cada parte concorda em não divulgar Informações Confidenciais sem consentimento prévio por escrito e em adotar cuidados razoáveis para impedir o uso e a divulgação não autorizados.</p>

<h2>10. Identificadores de Conta</h2>
<p>10.1. Os editores são responsáveis por manter a confidencialidade de suas credenciais de conta e por toda a atividade em sua conta.</p>

<h2>11. Isenção de Responsabilidade</h2>
<p>11.1. A Wortise não garante que o SDK, o Serviço ou a Plataforma estarão livres de erros ou interrupções. A Wortise se reserva o direito de modificar ou descontinuar os serviços a qualquer momento.</p>

<h2>12. Limitação de Responsabilidade</h2>
<p>Na máxima extensão permitida por lei, a Wortise não será responsável por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos.</p>

<h2>13. Indenização</h2>
<p>O Editor concorda em indenizar e isentar a Wortise de quaisquer reclamações decorrentes do uso dos Serviços pelo Editor ou do descumprimento destes Termos.</p>

<h2>14. Lei Aplicável</h2>
<p>Estes Termos serão regidos pelas leis do Uruguai, sem considerar as disposições sobre conflitos de leis.</p>

<h2>15. Informações de Contato</h2>
<p>Para dúvidas sobre estes Termos e Condições, entre em contato com a Wortise pelo endereço de sua sede ou por meio da plataforma Wortise.</p>
`,
	},
} satisfies Record<Locale, ComponentProps<typeof LegalDocument>>;
