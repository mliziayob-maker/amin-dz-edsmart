// قاعدة بيانات أكاديمية أمين المركزية
const ACADEMY_DATA = {
    middle: {
        title: "📖 الطور المتوسط (BEM)",
        status: "active",
        statusText: "متاح ومفعل",
        subjects: [
            { name: "📐 رياضيات (PGCD)", url: "lesson.html", active: true, accent: true },
            { name: "⚡ فيزياء وتكنولوجيا", url: "physics.html", active: true, accent: false },
            { name: "📖 لغة عربية", url: "#", active: false, msg: "قسم قواعد اللغة والنصوص قيد التطوير." },
            { name: "🧬 علوم طبيعية", url: "#", active: false, msg: "مختبر العلوم الطبيعية والحياة قيد الهندسة." }
        ]
    },
    secondary: {
        title: "🎓 الطور الثانوي (BAC)",
        status: "soon",
        statusText: "قريباً",
        sections: [
            {
                sectName: "🔬 شعبة علوم تجريبية ورياضيات",
                items: [
                    { name: "⚡ العلوم الفيزيائية", url: "#", active: false, msg: "تحضيرات البكالوريا في الفيزياء قيد الإنشاء." },
                    { name: "📐 الرياضيات", url: "#", active: false, msg: "برنامج الرياضيات للثانوي قيد الإعداد." },
                    { name: "🧬 علوم الطبيعة والحياة", url: "#", active: false, msg: "بروتوكولات وتهيئة العلوم الطبيعية قريباً." }
                ]
            },
            {
                sectName: "📊 شعبة تسيير واقتصاد وآداب",
                items: [
                    { name: "📈 المحاسبة والاقتصاد", url: "#", active: false, msg: "برامج التسيير المالي قريباً." },
                    { name: "📚 فلسفة وأدب عربي", url: "#", active: false, msg: "مقالات فلسفية ونصوص قريباً." }
                ]
            }
        ]
    },
    primary: {
        title: "🎒 الطور الابتدائي",
        status: "soon",
        statusText: "قريباً",
        subjects: [
            { name: "🔢 أساسيات الرياضيات", url: "#", active: false, msg: "تأسيس الحساب للصغار قريباً." },
            { name: "✍️ اللغة العربية والتربية", url: "#", active: false, msg: "القراءة والإملاء قريباً." }
        ]
    }
};
