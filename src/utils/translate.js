
function getDir(){
    try{
        const dir = localStorage.getItem('language')|| 'en';
        return dir ;
    }catch{}
    return 'en'
}

const DICTIONARY={
    main: ["Main","الرئيسية"],
    whoweare:["Who We are","من نحن"],
    investment:["Investment","الاستثمار"],
    more:["More","أكثر"],
    faq:["Faq","الأسئلة الشائعة"],
    news:["News","أخبار"],
    connect:["Contact Us","تواصل معنا"],
    importantlinks:["Important Links","روابط مهمة"],
    contactinfo:["Contact Information","معلومات التواصل"],
    footerdescription:["Pioneers Idea Holding Company, a simplified joint stock company, with commercial registration number (4030538975). We provide comprehensive and reliable services in the field of information technology and logistics. Our experience ranges from strategic planning to effective implementation, ensuring our success in the market with our shareholders","شركة فكرة رائدة القابضة, شركة مساهمة مبسطة, بسجل تجاري رقم (٤٠٣٠٥٣٨٩٧٥). حن نقدم خدمات شاملة وموثوقة في مجال تكنولوجيا المعلومات والخدمات اللوجستية. تتراوح خبرتنا من التخطيط الاستراتيجي إلى التنفيذ الفعال، مما .يضمن نجاحنا في السوق مع مساهمين"],
    address:["Al Hamra First Centre 7382 Al Fadl, Al Hamra District, Al Hamra, Jeddah 23324, Saudi Arabia","مركز الحمراء الأول ٧٣٨٢ الفضل، حي الحمراء، الحمراء، جدة ٢٣٣٢٤، المملكة العربية السعودية"],
    tel:["Tel. 9200 35361","الهاتف.  ٩٢٠٠٣٥٣٦١"],
    mobile:["Mobile. +966 55 563 2627","الجوال. ٩٦٦٥٥٥٦٣٢٦٢٧+"],
    email:["Email. info@pioneersidea.com","info@pioneersidea.com البريد الإلكترونى"],
    investmentform:["Investment application form","نموذج طلب الاستثمار"],
    name :["Name","الاسم"],
    emailaddress:["Email","البريد الالكتروني"],
    phone:["Phone Number","رقم الهاتف"],
    suitabletime:["Suitable Time","الوقت المخصص لاتصال خدمة العملاء"],
    suitabledate:["Suitable Date","التاريخ المناسب"],
    shareholdertype:["Shareholder Type","الكيان القانوني للمساهم"],
    package:["Package","الباقة المطلوبة للمساهمة"],
    notes:["Notes","ملاحظات إضافية"],
    pleaseenter:["Please Enter","تفضل"],
    selecttime:["Select Time","حدد الوقت"],
    selectdata:["Select Date","حدد تاريخ"],
    selectpackage:["Select Package","حدد الحزمة"],
    bonza:["Bronze – 3000 shares","البرونزية – 3000 سهم"],
    silver:["Silver – 6000 shares","الفضة – 6000 سهم"],
    golden:["Golden – 12000 shares","الذهبي – 12000 سهم"],
    open:["Open","مفتوح – من 21 ألف سهم إلى 150 ألف سهم"],
    personal:["Personal","شخصي"],
    company:["Company","شركة"],
    institute:["Institution","مؤسسة"],
    mailaddress:["Mail Address","البريد الإلكترونى"],
    contactnumber:["Contact Number","معلومات التواصل"],
    officeaddress:["Address","عنوان"],
    submit:["Submit","أرسل رسالة"],
    message:["Message","رسالة"],
	goodreturns15:["More than 15%","أكثر من %١٥"],
	certbyminstry:["Complies with the regulations and legislation in the Kingdom of Saudi Arabia","يتوافق مع الأنظمة و التشريعات بالمملكة العربية السعودية"],
	proteam:["24+ Team Member","طاقم إحترافي "]
}

export function translate(keyword){
    
    const index = getDir() === 'en' ? 0 : 1
    let ret;
    try{
        ret =DICTIONARY[keyword.toLowerCase()][index];
    }catch (err){
        ret=keyword
    }
    return ret;
}