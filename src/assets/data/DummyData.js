import { SCREENS, TABS } from "../../enums/AppEnums";
import { En } from "../../locales/En";


export const SERVICES = [
    { text: En.financialReporting, route: SCREENS.FINANCIAL_HOME },
    { text: En.tax, route: SCREENS.TAX_HOME },
    { text: En.s4FinanceImplement, route: SCREENS.S4_HOME },
    { text: En.generals, route: SCREENS.GENERAL_SERVICE },
    // { text: En.pricingAppoints, route: SCREENS.GENERAL_PRICING },
];

export const SERVICES_OFFERS = [
   { text:"Tax Resolution" ,subText:"IRS Notice Review",price :"150",},
   { text:"Tax Planning" ,subText:"Strategy Review",price :"500",},
   { text:"Book Keeping & Accounting" ,subText:"P&L and BS Review",price :"150",},
   { text:"Fractional CFO & Advisory" ,subText:"Analysis of Management Expectations",price :"500",},
   { text:"SAP S4 Finance Projects" ,subText:"Projects Review",price :"3000",},
    
]

export const BOTTOM_TAB = {
    [TABS.HOME]: { iconName: "home", family: "Ionicons", title: "Home", },
    [TABS.SEARCH]: { iconName: "library", family: "MaterialCommunityIcons", title: "Explore" },
    [TABS.APPOINTMENTS]: { iconName: "date", family: "Fontisto", title: "Appointments" },
    [TABS.MORE]: { iconName: "dots-three-horizontal", family: "Entypo", title: "More" },
}

export const FINANCIAL_SERVICES = [
    { text: En.bookkeeping, route: SCREENS.FINANCIAL_BOOKKEEPING },
    { text: En.accounting, route: SCREENS.FINANCIAL_ACCOUNTING },
    { text: En.fractionCFO, route: SCREENS.FINANCIAL_CFO },
    // { text: En.pricing, route: SCREENS.FINANCE_PRICING },
]

export const TAX_SERVICES = [
    { text: En.taxPlanning, route: SCREENS.TAX_PLANNING },
    { text: En.taxCompliance, route: SCREENS.TAX_COMPLIANCE },
    { text: En.taxResolution, route: SCREENS.TAX_RESOLUTION },
    // { text: En.pricing, route: SCREENS.TAX_PRICING },
]


export const S4_SERVICES = [
    { text: En.implementations, route: SCREENS.S4_IMPLEMENTS },
    { text: En.centralFinance, route: SCREENS.S4_CENTRAL },
    { text: En.SupportTraining, route: SCREENS.S4_SUPPORT_TRAINING },
    // { text: En.pricing, route: SCREENS.S4_PRICING },
]

export const ALL_SERVICES = [
    { text: En.bookkeeping },
    { text: En.accounting },
    { text: En.fractionCFO },
    { text: En.taxPlanning },
    { text: En.taxCompliance },
    { text: En.taxResolution },
    { text: En.implementations },
    { text: En.centralFinance },
    { text: En.SupportTraining },
    { text: "Analysis and Case Evaluation using Form 8821." },
    { text: "Power of Attorney" },
    { text: "Case Solution" },
]

export const GENERAL_SERVICES = [
    { text: "Analysis and Case Evaluation using Form 8821 for $150." },
    { text: "Power of Attorney for $350 if we accept the case." },
    { text: "Case Solution with costs ranging from $1,500 to $5,000, depending on the complexity" },
]

export const BOOKKEEPING = [
    { title: "Transaction Recording", subtitle1: "Responsibilities:", subtitle2: "Impact:", subtitleText1: "Record all financial transactions, including sales, purchases, receipts, and payments, in the accounting software.", subtitleText2: "Ensures accurate and up-to-date financial records." },
    { title: "Bank Reconciliation", subtitle1: "Responsibilities:", subtitle2: "Impact:", subtitleText1: "Reconcile bank statements with the company's financial records to ensure consistency and accuracy.", subtitleText2: "Identifies discrepancies and prevents fraud." },
    { title: "Accounts Payable and Receivable", subtitle1: "Responsibilities:", subtitle2: "Impact:", subtitleText1: "Manage invoices and payments to suppliers (accounts payable) and track incoming payments from clients (accounts receivable).", subtitleText2: "Maintains healthy cash flow and good supplier relationships." },
    { title: "Payroll Processing", subtitle1: "Responsibilities:", subtitle2: "Impact:", subtitleText1: "Track and manage customer invoices, follow up on overdue payments, and process incoming paymentsCalculate and process employee salaries, wages, bonuses, and deductions.", subtitleText2: "Ensures employees are paid accurately and on time." },
    { title: "Financial Statements", subtitle1: "Responsibilities:", subtitle2: "Impact:", subtitleText1: "Generate financial reports, such as profit and loss statements and balance sheets, for management review.", subtitleText2: "Provides insights into the financial health of the business." },
]



export const ACCOUNTING = [
    {
        title: "Financial Reporting and Analysis",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Prepare and analyze financial statements, including balance sheets, income statements, and cash flow statements.",
        subtitleText2: "Provides a clear picture of the company’s financial performance and health."
    },
    {
        title: "Budgeting and Forecasting",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Develop budgets and financial forecasts to guide business planning and decision-making.",
        subtitleText2: "Helps the business plan for future growth and manage resources effectively."
    },
    {
        title: "Audit and Compliance",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Conduct internal audits, ensure compliance with financial regulations, and prepare for external audits.",
        subtitleText2: "Ensures accuracy and integrity of financial records and compliance with laws."
    },
    {
        title: "Cost Management",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Analyze and manage costs to improve profitability and efficiency.",
        subtitleText2: "Identifies cost-saving opportunities and enhances financial performance."
    },
    {
        title: "Risk Management",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Identify, assess, and manage financial risks, including credit risk, market risk, and operational risk. Develop strategies to mitigate these risks.",
        subtitleText2: "Protects the business from potential financial losses and ensures long-term stability."
    },
]


export const FRACTIONAL_CFO = [
    {
        title: "Strategic Financial Planning",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Develop long-term financial strategies aligned with business goals, including growth plans and risk management.",
        subtitleText2: "Provides high-level financial guidance to drive business success and sustainability."
    },
    {
        title: "Financial Analysis and Modeling",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Create complex financial models to analyze business performance, evaluate investment opportunities, and support decision-making.",
        subtitleText2: "Enables data-driven decision-making and helps optimize financial performance."
    },
    {
        title: "Capital Raising and Management",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Identify capital needs, evaluate funding options, and manage relationships with investors and lenders.",
        subtitleText2: "Ensures the business has adequate capital to fund operations and growth initiatives."
    },
    {
        title: "Board and Investor Relations",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Prepare financial presentations for board meetings and communicate with investors about the company's financial performance and outlook.",
        subtitleText2: "Maintains transparency and builds trust with key stakeholders."
    },
    {
        title: "Cash Flow Management",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Monitor and manage cash flow, ensuring that the business has sufficient liquidity to meet its obligations. Implement strategies to optimize cash flow.",
        subtitleText2: "Prevents cash shortages and helps maintain financial stability."
    },
    {
        title: "Strategic Planning",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Develop and implement long-term financial strategies that align with the company’s goals. Advise on mergers, acquisitions, and other strategic initiatives.",
        subtitleText2: "Supports the business in achieving its long-term objectives and navigating complex financial decisions."
    },
    {
        title: "Audit Preparation and Compliance",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Prepare for tax season and audits, ensuring compliance with tax laws and regulations. Coordinate with external auditors and tax professionals.",
        subtitleText2: "Minimizes tax liabilities and ensures compliance, reducing the risk of penalties and audits."
    },
    {
        title: "Financial Reporting and Analysis",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Prepare accurate and timely financial reports, such as balance sheets, income statements, and cash flow statements. Analyze financial data to provide insights and recommendations for business decisions.",
        subtitleText2: "Helps businesses understand their financial health and make informed decisions."
    },
    {
        title: "Budgeting and Forecasting",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Create and manage budgets, forecast future financial performance, and develop financial models.",
        subtitleText2: "Ensures that the business stays on track financially and can plan for future growth and challenges."
    }
];

export const TAX_PLANNING = [
    {
        title: "Income Timing Optimization",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Analyze financial situations to determine the best times to receive income. This involves planning when to recognize income to minimize tax liability.",
        subtitleText2: "Reduces overall tax burden, increasing disposable income. Failure to Optimize: Could result in higher tax liabilities and reduced cash flow, impacting financial stability."
    },
    {
        title: "Deductions and Credits Maximization",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Ensure clients claim all possible deductions and credits. This includes identifying eligible expenses and credits to lower taxable income.",
        subtitleText2: "Lowers taxable income, resulting in significant tax savings. Failure to Maximize: Missing out on deductions and credits can lead to paying more taxes than necessary, reducing available funds for other needs."
    },
    {
        title: "Retirement Planning",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Advise on contributions to retirement accounts like IRAs and 401(k)s. This helps clients save for retirement in a tax-efficient manner.",
        subtitleText2: "Enhances long-term financial security while reducing current tax liabilities. Failure to Plan: Inadequate retirement savings and higher tax bills can jeopardize future financial security."
    },
    {
        title: "Investment Tax Strategies",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Guide clients on investments that offer tax advantages. This includes selecting investments that minimize tax impact.",
        subtitleText2: "Maximizes investment returns by minimizing tax impact. Failure to Strategize: Poor investment choices can lead to higher taxes and lower overall returns, affecting financial growth."
    },
    {
        title: "Estate Planning",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Create estate plans that minimize estate and gift taxes. This ensures a tax-efficient transfer of assets to heirs.",
        subtitleText2: "Preserves wealth for future generations. Failure to Plan: Heirs may face significant tax burdens, reducing the value of the inheritance and causing financial strain."
    }
];

export const TAX_COMPLIANCE = [
    {
        title: "Accurate Tax Filing",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Prepare and file federal, state, and local tax returns. This ensures all tax obligations are met accurately and on time.",
        subtitleText2: "Avoids penalties and interest, ensuring compliance with tax laws. Failure to File: Late or inaccurate filings can result in significant penalties, interest, and legal issues."
    },
    {
        title: "Record Keeping",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Keep detailed records of all financial transactions. This is crucial for accurate tax reporting and audit readiness.",
        subtitleText2: "Facilitates accurate tax reporting and audit readiness. Failure to Keep Records: Poor record-keeping can lead to inaccurate tax filings, audits, and potential penalties."
    },
    {
        title: "Tax Payment Management",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Calculate and remit taxes due, including estimated and payroll taxes. This ensures timely payment of all tax obligations.",
        subtitleText2: "Prevents penalties and interest from late payments. Failure to Manage Payments: Late payments can incur penalties and interest, increasing overall tax liability."
    },
    {
        title: "Regulatory Compliance",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Monitor changes in tax laws and ensure compliance. This keeps clients updated with current tax regulations.",
        subtitleText2: "Avoids legal issues and ensures adherence to current tax regulations. Failure to Comply: Non-compliance can result in legal actions, fines, and damage to reputation."
    },
    {
        title: "Tax Reporting",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Compile and submit reports such as sales tax and employment tax returns. This ensures all required tax reports are filed accurately.",
        subtitleText2: "Ensures compliance with reporting requirements, avoiding fines and penalties. Failure to Report: Inaccurate or missed reports can lead to fines, penalties, and increased scrutiny from tax authorities."
    }
];

export const TAX_RESOLUTION = [
    {
        title: "IRS Audit Representation",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Prepare and present documentation to the IRS. This involves defending clients during audits to ensure fair treatment.",
        subtitleText2: "Protects clients from potential penalties and ensures fair treatment. Failure to Represent: Can result in hefty penalties, interest, and additional taxes, causing financial distress."
    },
    {
        title: "Tax Debt Settlement",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Work with the IRS to reduce the amount owed. This includes negotiating settlements for outstanding tax debts.",
        subtitleText2: "Alleviates financial stress by reducing tax liabilities. Failure to Settle: Unresolved tax debts can lead to wage garnishments, liens, and severe financial hardship."
    },
    {
        title: "Penalty Abatement",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "File for penalty abatement based on reasonable cause. This seeks relief from tax penalties.",
        subtitleText2: "Reduces or eliminates penalties, lowering overall tax debt. Failure to Abate: Accumulating penalties can significantly increase tax debt, making it harder to manage."
    },
    {
        title: "Installment Agreements",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Negotiate manageable payment terms with the IRS. This sets up payment plans for tax debts.",
        subtitleText2: "Provides a structured way to pay off tax debts without financial strain. Failure to Arrange: Lack of payment plans can lead to enforced collections, including asset seizures."
    },
    {
        title: "Offer in Compromise",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Prepare and submit offers to the IRS. This involves negotiating to settle tax debts for less than the full amount owed.",
        subtitleText2: "Resolves tax debts for a fraction of the original amount, providing financial relief. Failure to Compromise: Full tax debt remains, leading to ongoing financial pressure and potential legal action."
    }
];

export const S4_IMPLEMENTS = [
    {
        title: "System Implementation and Configuration",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Implement and configure SAP S/4 HANA Finance modules, such as Financial Accounting (FI) and Controlling (CO), to meet client-specific business requirements. This includes setting up modules, customizing functionalities, and ensuring seamless integration with other systems.",
        subtitleText2: "Ensures the system aligns with business processes, enhancing operational efficiency and accuracy. Failure to Implement Correctly: Can lead to system inefficiencies, operational disruptions, and increased costs due to rework."
    },
    {
        title: "Business Process Optimization",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Analyze and optimize financial business processes using SAP S/4 HANA capabilities. This involves identifying areas for improvement, implementing best practices, and ensuring compliance with financial regulations.",
        subtitleText2: "Streamlines operations, reduces costs, and improves productivity and financial reporting accuracy. Failure to Optimize: Inefficient processes can persist, leading to higher operational costs, reduced competitiveness, and potential compliance issues."
    },
    {
        title: "Data Migration and Integration",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Manage data migration from legacy systems to SAP S/4 HANA, ensuring data integrity and seamless integration with other enterprise systems. This includes planning, executing, and validating data migration activities.",
        subtitleText2: "Facilitates accurate and efficient data transfer, maintaining business continuity and data accuracy. Failure to Migrate Properly: Data loss or corruption can occur, disrupting business operations, decision-making, and leading to potential financial losses."
    },
    {
        title: "System Upgrades and Maintenance",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Perform regular system upgrades and maintenance to keep the SAP S/4 HANA Finance system up-to-date and running smoothly. This includes applying patches, updates, and ensuring the system's security and performance.",
        subtitleText2: "Ensures the system remains secure, efficient, and compliant with the latest standards. Failure to Maintain: Can result in system vulnerabilities, performance issues, and non-compliance with regulatory requirements."
    }
];

export const S4_CENTRAL = [
    {
        title: "Data Integration",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Consolidate financial data from multiple systems into a single SAP S/4 HANA system.",
        subtitleText2: "Provides an integrated view of financial data across all business units, enabling more accurate and strategic decision-making. Failure to Integrate: Can lead to data inconsistencies, fragmented reporting, and poor decision-making."
    },
    {
        title: "Real-time Replication",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Ensure all financial transactions are up-to-date in the central system, reflecting real-time operations at the source systems.",
        subtitleText2: "Offers a real-time view of all financial transactions, facilitating faster insights and agile decision-making. Failure to Replicate: Delays in data updates can result in outdated information, impacting the accuracy of financial reports and decisions."
    },
    {
        title: "Harmonization of Master Data",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Synchronize charts of accounts, cost centers, and profit centers across different sources.",
        subtitleText2: "Maintains consistent and reliable financial data, reducing errors and improving reporting accuracy. Failure to Harmonize: Inconsistent master data can lead to reporting errors, compliance issues, and operational inefficiencies."
    },
    {
        title: "Consolidated Reporting and Centralized Financial Operations",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Streamline and centralize processes such as financial close and reporting procedures.",
        subtitleText2: "Enhances operational efficiencies and provides a unified financial view. Failure to Consolidate: Disjointed reporting processes can cause delays, errors, and increased workload during financial close periods."
    },
    {
        title: "Non-Disruptive Implementation",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Implement CFIN with minimal disturbance to existing operations, allowing continued use of current systems while transitioning to SAP S/4 HANA.",
        subtitleText2: "Facilitates a smooth transition to SAP S/4 HANA, offering scalability and future-proofing financial systems. Failure to Implement Smoothly: Disruptions during implementation can lead to operational downtime, user resistance, and increased transition costs."
    }
];

export const S4_SUPPORT_TRAINING = [
    {
        title: "User Support Specialist",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Provide ongoing support to users post-implementation. This includes answering questions, troubleshooting issues, tickets, and offering guidance on best practices.",
        subtitleText2: "Ensures users have the help they need to resolve issues quickly, maintaining productivity. Failure to Support: Can result in prolonged system issues, user frustration, and decreased productivity."
    },
    {
        title: "Training Needs Analyst",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Assess the training needs of different user groups within the organization. This involves identifying skill gaps and determining the appropriate training content and methods.",
        subtitleText2: "Ensures that training programs are tailored to meet the specific needs of users, enhancing their ability to effectively use the system. Failure to Analyze Needs: Can result in irrelevant or inadequate training, leading to poor user adoption and increased errors."
    },
    {
        title: "Training Content Developer",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Develop training materials, including manuals, e-learning modules, and hands-on exercises. This includes creating content that is easy to understand and relevant to the users' roles.",
        subtitleText2: "Provides users with comprehensive and accessible resources to learn the system. Failure to Develop Quality Content: Can lead to confusion and frustration among users, reducing the effectiveness of the training."
    },
    {
        title: "Training Instructor",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Conduct training sessions, workshops, and webinars for users. This involves delivering training in an engaging and interactive manner to ensure users understand and retain the information.",
        subtitleText2: "Enhances user proficiency and confidence in using the system. Failure to Instruct Effectively: Users may not fully grasp how to use the system, leading to operational inefficiencies and increased support requests."
    },
    {
        title: "Feedback Coordinator",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Collect and analyze feedback from users regarding the training and support they receive. This involves conducting surveys, interviews, and focus groups to gather insights.",
        subtitleText2: "Helps improve training programs and support services based on user feedback. Failure to Gather Feedback: Missed opportunities to enhance training and support, leading to persistent issues and user dissatisfaction."
    }
];




export const FINANCE_PRICING = [
    {
        title: "Small Business Bookkeeping",
        text: "For small businesses with simpler bookkeeping needs, our monthly fee of $250 to $300 ensures that your financial records are accurate and up-to-date. This includes tracking income and expenses, reconciling bank statements, and preparing basic financial reports.",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Generate financial reports, such as profit and loss statements and balance sheets, for management review.",
        subtitleText2: "Provides insights into the financial health of the business.",
        price: "$100 per Month & Up"
    },
    {
        title: "Mid-Sized Business Accounting",
        text: "For mid-sized businesses, our monthly fee of $400 to $500 covers more detailed bookkeeping services. This includes managing higher transaction volumes, more complex financial reporting, and ensuring all financial data is meticulously recorded and analyzed. Our expertise helps you make informed business decisions, optimize cash flow, and stay ahead of tax obligations. Investing in our services means you can concentrate on strategic growth while we ensure your financial health.",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Identify, assess, and manage financial risks, including credit risk, market risk, and operational risk. Develop strategies to mitigate these risks.",
        subtitleText2: "Protects the business from potential financial losses and ensures long-term stability.",
        price: "$300 per Month & Up"
    },
    {
        title: "Large Business Fractional CFO",
        text: "For larger businesses, our comprehensive bookkeeping services are priced at $650 to $1,000 per month. This includes handling extensive transaction volumes, detailed financial analysis, and comprehensive reporting. We provide insights that help you manage your finances efficiently, identify cost-saving opportunities, and ensure regulatory compliance. By partnering with us, you gain a trusted advisor who helps you navigate financial complexities, allowing you to focus on scaling your business.",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Preparing for tax season and audits, ensuring compliance with tax laws and regulations. Coordinating with external auditors and tax professionals.",
        subtitleText2: "Minimizes tax liabilities and ensures compliance, reducing the risk of penalties and audits.",
        price: "$1,000 per Month & Up"
    },
]


export const TAXPLANNING_PRICING = [
    {
        title: "Clients with Income Less than $100K",
        text: "For individuals and small businesses with simpler financial situations, this tier covers basic tax planning services such as income timing, deductions and retirement planning. The focus is on ensuring compliance and optimizing tax savings.",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Analyze financial situations to determine the best times to receive income.",
        subtitleText2: "Reduces overall tax burden, increasing disposable income.",
        price: "$500 to $1,000 annually"
    },
    {
        title: "Clients with Income Less than $200K",
        text: "For mid-sized businesses and individuals with more complex financial situations, this tier includes advanced strategies like investment tax planning, charitable contributions, and business structure optimization.",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Analyze financial situations to determine the best strategies for minimizing tax liability.",
        subtitleText2: "Reduces tax liabilities and optimizes tax savings.",
        price: "$1,500 to $3,000 annually"
    },
    {
        title: "Clients with Income Less than $500K",
        text: "For high-income individuals and larger businesses, this tier offers extensive tax planning services, including estate planning and sophisticated tax deferral strategies.",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Comprehensive planning to minimize tax liabilities, optimize deductions, and ensure compliance.",
        subtitleText2: "Helps preserve wealth and maximize tax efficiency.",
        price: "$3,500 to $7,000 annually"
    },
    {
        title: "Clients with Income greater than $800K",
        text: "This tier focuses on comprehensive tax planning for high-net-worth individuals, incorporating international tax strategies and estate planning.",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Provide high-level tax strategy to preserve wealth and manage complex financial situations.",
        subtitleText2: "Maximizes tax savings and ensures long-term financial health.",
        price: "$7,000 & Up"
    },

]


export const TAXPCOMPLIANCE_PRICING = [
    {
        title: "Accurate Tax Filing - 1040",
        text: "Regular tax return preparation services, including filing 1040 forms.",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Prepare and file federal, state, and local tax returns.",
        subtitleText2: "Ensures compliance and avoids penalties.",
        price: "$300 & Up"
    },
    {
        title: "Accurate Tax Filing - 1040X",
        text: "Filing amended tax returns for individuals who need to correct previously filed returns.",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Prepare and file amended tax returns.",
        subtitleText2: "Corrects errors and minimizes risk of penalties or additional tax liability.",
        price: "$750"
    },
    {
        title: "Accurate Tax Filing - Company Taxes",
        text: "S-Corp, Partnership, and C-Corp tax return filings.",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Prepare and file accurate company tax returns.",
        subtitleText2: "Ensures compliance and avoids penalties.",
        price: "$1,000 - $3,600"
    },
    {
        title: "Accurate Tax Filing - Not For Profit",
        text: "Tax returns for churches, charitable organizations, and other 501(c)(3) entities.",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Prepare and file tax returns for not-for-profit organizations.",
        subtitleText2: "Ensures compliance with tax regulations for nonprofits.",
        price: "$1,000 - $3,600"
    },
    {
        title: "Accurate Tax Filing - Trust Fund 941, 940",
        text: "Quarterly tax filings for payroll taxes, including Social Security, Medicare, and federal income taxes.",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Prepare and file payroll tax returns.",
        subtitleText2: "Ensures compliance with payroll tax regulations.",
        price: "$500 - $2,500 per Qtr."
    },

]

export const TAXRESOLUTION_PRICING = [
    {
        title: "IRS Audit Representation less $25K",
        text: "This tier covers representation for a standard IRS audit, typically involving one tax year.",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Prepare and present documentation to the IRS, defending clients during audits.",
        subtitleText2: "Protects clients from potential penalties and ensures fair treatment.",
        price: "$1,000 - $1,700"
    },
    {
        title: "IRS Audit Representation less $100K",
        text: "This tier covers more complex audits that may involve multiple tax years, Schedule C businesses, or other intricate tax issues.",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Prepare and present documentation to the IRS for more complex audits.",
        subtitleText2: "Minimizes risk of penalties and ensures compliance with tax laws.",
        price: "$2,700 - $5,000"
    },
    {
        title: "IRS Audit Representation less $250K",
        text: "This is for corporate audits, which are generally more complex and require extensive documentation and negotiation.",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Handle corporate audit documentation and representation.",
        subtitleText2: "Protects businesses from significant financial penalties.",
        price: "$5,000 - $10,000"
    },
    {
        title: "Tax Debt Settlement less $25K",
        text: "We negotiate with the IRS to settle your tax debt for less than the full amount owed.",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Prepare and present documentation to support your case.",
        subtitleText2: "Reduces overall tax liability, alleviating financial stress.",
        price: "$1,500"
    },
    {
        title: "Tax Debt Settlement less $100K",
        text: "We negotiate with the IRS to settle your tax debt for amounts between $25,000 and $100,000.",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Prepare and present documentation for debt settlement.",
        subtitleText2: "Significantly reduces tax liability, providing financial relief.",
        price: "$3,000"
    },
    {
        title: "Tax Debt Settlement less $250K",
        text: "We negotiate with the IRS to settle your tax debt for amounts between $100,000 and $250,000.",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Prepare and present documentation to settle larger tax debts.",
        subtitleText2: "Substantially reduces tax liability, easing financial burdens.",
        price: "$5,000"
    },
    {
        title: "Penalty Abatement for Penalties Less Than $25,000",
        text: "We file for penalty abatement based on reasonable cause to seek relief from tax penalties.",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Prepare and present documentation for penalty abatement.",
        subtitleText2: "Reduces or eliminates penalties, lowering overall tax debt.",
        price: "$1,500"
    },
    {
        title: "Penalty Abatement for Penalties Less Than $100,000",
        text: "We file for penalty abatement for penalties between $25,000 and $100,000.",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Prepare and present documentation for penalty abatement.",
        subtitleText2: "Significantly reduces penalties, providing financial relief.",
        price: "$3,000"
    },
    {
        title: "Penalty Abatement for Penalties Less Than $250,000",
        text: "We file for penalty abatement for penalties between $100,000 and $250,000.",
        subtitle1: "Responsibilities:",
        subtitle2: "Impact:",
        subtitleText1: "Prepare and present documentation for penalty abatement.",
        subtitleText2: "Substantially reduces penalties, easing financial burdens.",
        price: "$5,000"
    }
]

export const FINANCE_IMPLEMENT_PRICING = [
    {
        title: "System Implementation and Configuration",
        text: "Implement and configure SAP S/4 HANA Finance modules, such as Financial Accounting (FI) and Controlling (CO), to meet client-specific business requirements.",
        price: "$10,000-$40,000 per project"
    },
    {
        title: "Business Process Optimization",
        text: "Analyze and optimize financial business processes using SAP S/4 HANA capabilities.",
        price: "$10,000-$40,000 per project"
    },
    {
        title: "Data Migration and Integration",
        text: "Manage data migration from legacy systems to SAP S/4 HANA, ensuring data integrity and seamless integration.",
        price: "$10,000-$40,000 per project"
    },
    {
        title: "System Upgrades and Maintenance",
        text: "Perform regular system upgrades and maintenance to keep the SAP S/4 HANA Finance system up-to-date.",
        price: "$10,000-$40,000 per project"
    }
];

export const CENTRAL_FINANCE_PRICING = [
    {
        title: "Data Integration",
        text: "Consolidate financial data from multiple systems into a single SAP S/4 HANA system.",
        price: "$25,000-$100,000 per project"
    },
    {
        title: "Real-time Replication",
        text: "Ensure all financial transactions are up-to-date in the central system, reflecting real-time operations.",
        price: "$25,000-$100,000 per project"
    },
    {
        title: "Harmonization of Master Data",
        text: "Synchronize charts of accounts, cost centers, and profit centers across different sources.",
        price: "$25,000-$100,000 per project"
    },
    {
        title: "Consolidated Reporting and Centralized Financial Operations",
        text: "Streamline and centralize financial close and reporting procedures.",
        price: "$25,000-$100,000 per project"
    },
    {
        title: "Non-Disruptive Implementation",
        text: "Implement CFIN with minimal disturbance to existing operations while transitioning to SAP S/4 HANA.",
        price: "Contact for pricing"
    }
];


export const SUPPORTED_TRAINING_PRICING = [
    {
        title: "User Support Specialist",
        text: "Provide ongoing support to users post-implementation.",
        price: "$25,000-$100,000 per project"
    },
    {
        title: "Training Needs Analyst",
        text: "Assess the training needs of different user groups within the organization.",
        price: "$15,000-$50,000 per project"
    },
    {
        title: "Training Content Developer",
        text: "Develop training materials, including manuals, e-learning modules, and hands-on exercises.",
        price: "$15,000-$50,000 per project"
    },
    {
        title: "Training Instructor",
        text: "Conduct training sessions, workshops, and webinars for users.",
        price: "$15,000-$50,000 per project"
    },
    {
        title: "Feedback Coordinator",
        text: "Collect and analyze feedback from users regarding the training and support they receive.",
        price: "$5,000-$15,000 per project"
    }
];

export const General_PRICES = [
    { serviceName: "Offer in Compromise", "Tier 1 (Income < $100K)": "$2,500 - $3,000", "Tier 2 (Income < $250K)": "$4,000 - $5,000", "Tier 3 (Income < $500K)": "$6,000 - $7,500" },
    { serviceName: "Installment Agreement", "Tier 1 (Income < $100K)": "$1,500 - $2,000", "Tier 2 (Income < $250K)": "$2,500 - $3,000", "Tier 3 (Income < $500K)": "$4,000 - $5,000" },
    { serviceName: "Penalty Abatement", "Tier 1 (Income < $100K)": "$500 - $750", "Tier 2 (Income < $250K)": "$1,000 - $1,500", "Tier 3 (Income < $500K)": "$2,000 - $2,500" },
    { serviceName: "Innocent Spouse Relief", "Tier 1 (Income < $100K)": "$1,000 - $1,500", "Tier 2 (Income < $250K)": "$2,000 - $2,500", "Tier 3 (Income < $500K)": "$3,500 - $4,500" },
    { serviceName: "Tax Lien Removal", "Tier 1 (Income < $100K)": "$1,200 - $1,800", "Tier 2 (Income < $250K)": "$2,500 - $3,500", "Tier 3 (Income < $500K)": "$4,000 - $5,500" },
    { serviceName: "Tax Levy Release", "Tier 1 (Income < $100K)": "0", "Tier 2 (Income < $250K)": "$3,000 - $4,000", "Tier 3 (Income < $500K)": "$5,000 - $6,500" },
    { serviceName: "Wage Garnishment Release", "Tier 1 (Income < $100K)": "$1,500 - $2,000", "Tier 2 (Income < $250K)": "$3,000 - $4,000", "Tier 3 (Income < $500K)": "$5,000 - $6,500" },
    { serviceName: "Audit Representation", "Tier 1 (Income < $100K)": "$2,000 - $3,000", "Tier 2 (Income < $250K)": "$4,000 - $5,500", "Tier 3 (Income < $500K)": "$6,500 - $8,000" },
    { serviceName: "Currently Not Collectible Status", "Tier 1 (Income < $100K)": "$1,000 - $1,500", "Tier 2 (Income < $250K)": "$2,000 - $2,500", "Tier 3 (Income < $500K)": "$3,500 - $4,500" },
    { serviceName: "Tax Preparation for Unfiled Returns", "Tier 1 (Income < $100K)": "$500 - $1,000", "Tier 2 (Income < $250K)": "$1,500 - $2,000", "Tier 3 (Income < $500K)": "$3,000 - $4,000" },
    { serviceName: "Trust Fund Recovery Penalty", "Tier 1 (Income < $100K)": "$3,000 - $4,000", "Tier 2 (Income < $250K)": "$5,000 - $6,500", "Tier 3 (Income < $500K)": "$7,500 - $9,000" },
    { serviceName: "State Tax Resolution", "Tier 1 (Income < $100K)": "$1,500 - $2,000", "Tier 2 (Income < $250K)": "$3,000 - $4,000", "Tier 3 (Income < $500K)": "$5,000 - $6,500" },
    { serviceName: "Payroll Tax Resolution", "Tier 1 (Income < $100K)": "$2,000 - $3,000", "Tier 2 (Income < $250K)": "$4,000 - $5,500", "Tier 3 (Income < $500K)": "$6,500 - $8,000" },
    { serviceName: "Business Tax Resolution", "Tier 1 (Income < $100K)": "$2,500 - $3,500", "Tier 2 (Income < $250K)": "$5,000 - $6,500", "Tier 3 (Income < $500K)": "$8,000 - $10,000" },
    { serviceName: "IRS Appeals", "Tier 1 (Income < $100K)": "$2,000 - $3,000", "Tier 2 (Income < $250K)": "$4,000 - $5,500", "Tier 3 (Income < $500K)": "$6,500 - $8,000" },
    { serviceName: "Tax Account Monitoring", "Tier 1 (Income < $100K)": "$500 - $750", "Tier 2 (Income < $250K)": "$1,000 - $1,500", "Tier 3 (Income < $500K)": "$2,000 - $2,500" },
    { serviceName: "Bankruptcy Assistance", "Tier 1 (Income < $100K)": "$2,500 - $3,500", "Tier 2 (Income < $250K)": "$4,500 - $6,000", "Tier 3 (Income < $500K)": "$7,000 - $9,000" },
    { serviceName: "Tax Debt Settlement", "Tier 1 (Income < $100K)": "$2,000 - $3,000", "Tier 2 (Income < $250K)": "$4,000 - $5,500", "Tier 3 (Income < $500K)": "$6,500 - $8,000" },
    { serviceName: "Tax Consultation", "Tier 1 (Income < $100K)": "$300 - $500", "Tier 2 (Income < $250K)": "$600 - $800", "Tier 3 (Income < $500K)": "$1,000 - $1,500" },
    { serviceName: "Financial Analysis and Planning", "Tier 1 (Income < $100K)": "$1,000 - $1,500", "Tier 2 (Income < $250K)": "$2,000 - $2,500", "Tier 3 (Income < $500K)": "$3,500 - $4,500" },
    { serviceName: "CNC (Currently Not Collectible)", "Tier 1 (Income < $100K)": "$1,000 - $1,500", "Tier 2 (Income < $250K)": "$2,000 - $2,500", "Tier 3 (Income < $500K)": "$3,500 - $4,500" },
    { serviceName: "DTL (Doubt as to Liability)", "Tier 1 (Income < $100K)": "$2,000 - $3,000", "Tier 2 (Income < $250K)": "$4,000 - $5,500", "Tier 3 (Income < $500K)": "$6,500 - $8,000" },
    { serviceName: "DTC (Doubt as to Collectibility)", "Tier 1 (Income < $100K)": "$2,500 - $3,500", "Tier 2 (Income < $250K)": "$5,000 - $6,500", "Tier 3 (Income < $500K)": "$8,000 - $10,000" },
    { serviceName: "ETA (Effective Tax Administration)", "Tier 1 (Income < $100K)": "$3,000 - $4,000", "Tier 2 (Income < $250K)": "$5,000 - $6,500", "Tier 3 (Income < $500K)": "$7,500 - $9,000" },
    { serviceName: "CDP (Collection Due Process)", "Tier 1 (Income < $100K)": "$1,500 - $2,000", "Tier 2 (Income < $250K)": "$3,000 - $4,000", "Tier 3 (Income < $500K)": "$5,000 - $6,500" },
    { serviceName: "RCP (Reasonable Cause Penalty Relief)", "Tier 1 (Income < $100K)": "$500 - $750", "Tier 2 (Income < $250K)": "$1,000 - $1,500", "Tier 3 (Income < $500K)": "$2,000 - $2,500" },
    { serviceName: "Audit Reconsideration", "Tier 1 (Income < $100K)": "$2,000 - $3,000", "Tier 2 (Income < $250K)": "$4,000 - $5,500", "Tier 3 (Income < $500K)": "$6,500 - $8,000" },
    { serviceName: "General Notice Review", "Tier 1 (Income < $100K)": "$300 - $500", "Tier 2 (Income < $250K)": "$600 - $800", "Tier 3 (Income < $500K)": "$1,000 - $1,500" }
];






export const MORE_MENU = [
    { text: "About Us", route: SCREENS.ABOUTUS, enable: true },
    { text: "FAQs", route: SCREENS.FAQS, enable: true },
    { text: "Privacy Policy", route: SCREENS.PRIVACY, enable: false },
    { text: "Terms of Service", route: SCREENS.TERMS_SERVICE, enable: false },
    // { text: "For Professionals", route: SCREENS.FOR_PROFESSIONAL,enable:true },
    // { text: "For Affilliates", route: SCREENS.FOR_AFFILIATE,enable:true },
    { text: "Contact Us", route: SCREENS.CONTACTUS, enable: true },

]


export const FAQs = [
    {
        title: "Offer in Compromise",
        isOpen: false,
        description: "This service allows you to settle your tax debt for less than the full amount owed if paying the full amount would cause financial hardship.",
        example: "John owes $50,000 in taxes but can only afford to pay $10,000. We negotiate with the IRS to accept the $10,000 as full payment."
    },
    {
        title: "Installment Agreement",
        isOpen: false,
        description: "This is an arrangement where you can pay off your tax debt over time through monthly payments.",
        example: "Sarah owes $20,000 in taxes. We set up a plan for her to pay $500 per month until the debt is cleared."
    },
    {
        title: "Penalty Abatement",
        isOpen: false,
        description: "If you have a reasonable cause for not meeting tax obligations, this service can reduce or remove penalties applied to your account.",
        example: "Due to a medical emergency, Mike missed his tax filing deadline. We help him get the penalties waived."
    },
    {
        title: "Innocent Spouse Relief",
        isOpen: false,
        description: "This provides relief from additional tax owed if your spouse or former spouse failed to report income, reported income improperly, or claimed improper deductions or credits.",
        example: "Lisa discovers her ex-husband underreported income. We help her avoid paying the additional taxes he owes."
    },
    {
        title: "Tax Lien Removal",
        isOpen: false,
        description: "This service helps remove liens placed on your property as security for payment of tax debts once those debts are paid or terms are met.",
        example: "After paying off his tax debt, we assist Tom in getting the lien on his house removed."
    },
    {
        title: "Tax Levy Release",
        isOpen: false,
        description: "If the IRS has levied your assets (like bank accounts), this service works towards releasing the levy once compliance with certain conditions is met.",
        example: "The IRS levies Jane’s bank account. We negotiate the release of the levy by setting up a payment plan."
    },
    {
        title: "Wage Garnishment Release",
        isOpen: false,
        description: "This stops the IRS from taking part of your salary directly from your paycheck to cover unpaid taxes.",
        example: "Mark’s wages are being garnished. We work to stop the garnishment and set up an alternative payment plan."
    },
    {
        title: "Audit Representation",
        isOpen: false,
        description: "Professional representation during an audit by the IRS, helping ensure that your rights are protected and minimizing potential additional liabilities.",
        example: "During an IRS audit, we represent Emily to ensure she only pays what she truly owes."
    },
    {
        title: "Currently Not Collectible Status (CNC)",
        isOpen: false,
        description: "If you cannot pay due to financial hardship, this status prevents the IRS from engaging in collection activities like levies or garnishments.",
        example: "Due to unemployment, Alex can’t pay his taxes. We get him CNC status to halt collection efforts."
    },
    {
        title: "Tax Preparation for Unfiled Returns",
        isOpen: false,
        description: "Assistance with preparing and filing back taxes that have not been submitted in previous years.",
        example: "Maria hasn’t filed taxes for three years. We help her prepare and file all her overdue returns."
    },
    {
        title: "Trust Fund Recovery Penalty",
        isOpen: false,
        description: "This service helps resolve penalties assessed against individuals responsible for withholding taxes that were not paid to the IRS.",
        example: "As a business owner, Sam faces penalties for unpaid payroll taxes. We help reduce or eliminate these penalties."
    },
    {
        title: "State Tax Resolution",
        isOpen: false,
        description: "Assistance with resolving state tax issues, including unpaid taxes, penalties, and audits.",
        example: "Karen owes state taxes. We negotiate with the state tax authority to reduce her debt."
    },
    {
        title: "Payroll Tax Resolution",
        isOpen: false,
        description: "Help with resolving issues related to unpaid payroll taxes, including penalties and interest.",
        example: "Bob’s business owes payroll taxes. We set up a payment plan to resolve the debt."
    },
    {
        title: "Business Tax Resolution",
        isOpen: false,
        description: "Assistance with resolving tax issues specific to businesses, including unpaid taxes, audits, and penalties.",
        example: "A small business faces an IRS audit. We represent them to ensure a fair outcome."
    },
    {
        title: "IRS Appeals",
        isOpen: false,
        description: "Representation in appealing IRS decisions, such as audit results or penalties.",
        example: "After an unfavorable audit, we help Jane appeal the IRS’s decision."
    },
    {
        title: "Tax Account Monitoring",
        isOpen: false,
        description: "Ongoing monitoring of your tax account to ensure compliance and avoid future issues.",
        example: "We regularly check John’s tax account to ensure he stays compliant and avoids penalties."
    },
    {
        title: "Bankruptcy Assistance",
        isOpen: false,
        description: "Help with understanding how bankruptcy affects your tax debts and navigating the process.",
        example: "Facing bankruptcy, we guide Lisa on how it impacts her tax obligations."
    },
    {
        title: "Tax Debt Settlement",
        isOpen: false,
        description: "Negotiating with the IRS to settle your tax debt for less than the full amount owed.",
        example: "We negotiate a settlement for Tom, reducing his $30,000 tax debt to $10,000."
    },
    {
        title: "Tax Consultation",
        isOpen: false,
        description: "Professional advice on tax-related matters to help you make informed decisions.",
        example: "We provide Sarah with advice on how to minimize her tax liability for the upcoming year."
    },
    {
        title: "Financial Analysis and Planning",
        isOpen: false,
        description: "Comprehensive analysis and planning to improve your financial situation and tax compliance.",
        example: "We help Alex create a financial plan to manage his taxes and improve his overall financial health."
    }
];
