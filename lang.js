/* ============================================================
   France Active Investissement — module de langues
   lang.js : inclure dans toutes les pages avec <script src="assets/lang.js">
   ============================================================ */

const TRANSLATIONS = {
  fr: {
    /* Navigation */
    "nav.home":       "Accueil",
    "nav.simulate":   "Simuler un prêt",
    "nav.offers":     "Nos prêts",
    "nav.how":        "Comment ça marche",
    "nav.faq":        "FAQ",
    "nav.about":      "À propos",
    "nav.contact":    "Contact",
    "nav.cta.sim":    "Simuler",
    "nav.cta.apply":  "Demander un prêt",

    /* Hero accueil */
    "hero.eyebrow":   "Crédit à la consommation & professionnel",
    "hero.h1":        "Le prêt, expliqué clairement, accordé rapidement.",
    "hero.lede":      "France Active Investissement finance vos projets personnels et professionnels avec des taux transparents, un dossier 100 % en ligne et une équipe qui répond, vraiment.",
    "hero.btn.sim":   "Simuler mon prêt",
    "hero.btn.apply": "Faire une demande",
    "hero.stat.time": "Réponse de principe",
    "hero.stat.rate": "Taux à partir de",
    "hero.stat.files":"Dossiers financés",

    /* Simulateur */
    "sim.title":     "Simulation rapide",
    "sim.tag":       "Indicatif",
    "sim.popular":   "Montants populaires",
    "sim.amount":    "Montant exact",
    "sim.duration":  "Durée de remboursement",
    "sim.type":      "Type de financement",
    "sim.type.perso":"Prêt personnel",
    "sim.type.auto": "Prêt auto",
    "sim.type.work": "Prêt travaux",
    "sim.type.pro":  "Prêt professionnel",
    "sim.taeg":      "Taux annuel (TAEG)",
    "sim.cost":      "Coût total du crédit",
    "sim.monthly":   "Mensualité estimée",
    "sim.sub":       "Sous réserve d'acceptation",
    "sim.cta":       "Demander ce prêt",

    /* Badges confiance */
    "trust.1": "Agréé ACPR",
    "trust.2": "ORIAS n°16 000 000",
    "trust.3": "Paiement 100% sécurisé",
    "trust.4": "Conforme RGPD",
    "trust.5": "4,7/5 satisfaction client",

    /* Offres */
    "offers.eyebrow":  "Nos financements",
    "offers.h2":       "Un prêt pour chaque projet",
    "offers.perso.h":  "Prêt personnel",
    "offers.perso.p":  "Pour un imprévu, un déménagement ou un événement de vie. Sans justificatif d'usage.",
    "offers.auto.h":   "Prêt auto & moto",
    "offers.auto.p":   "Véhicule neuf ou d'occasion, financé dès 4,2 % sur une durée allant jusqu'à 84 mois.",
    "offers.work.h":   "Prêt travaux",
    "offers.work.p":   "Rénovation, agrandissement ou amélioration énergétique de votre logement.",
    "offers.pro.h":    "Prêt professionnel",
    "offers.pro.p":    "Trésorerie, matériel ou développement pour les indépendants et TPE/PME.",
    "offers.rdm.h":    "Rachat de crédits",
    "offers.rdm.p":    "Regroupez vos prêts en cours dans une mensualité unique et allégée.",
    "offers.conseil.h":"Conseil personnalisé",
    "offers.conseil.p":"Un conseiller dédié étudie votre dossier et vous accompagne jusqu'au déblocage des fonds.",
    "offers.more":     "En savoir plus →",

    /* Étapes */
    "steps.eyebrow": "Le parcours",
    "steps.h2":      "Trois étapes, un seul formulaire",
    "step.1.h":      "Simulez",
    "step.1.p":      "Ajustez montant et durée pour voir votre mensualité en temps réel, sans engagement.",
    "step.2.h":      "Déposez votre dossier",
    "step.2.p":      "Un formulaire en 3 étapes, complétable en moins de 5 minutes.",
    "step.3.h":      "Recevez votre réponse",
    "step.3.p":      "Réponse de principe sous 24h ouvrées, puis déblocage des fonds sous 48h après signature.",

    /* Témoignages */
    "reviews.eyebrow": "Ils nous ont fait confiance",
    "reviews.h2":      "Des projets, des visages, des histoires",
    "review.1.quote":  "« Simulation claire, dossier accepté en moins de 24h. J'ai enfin pu refaire ma salle de bain sans stress. »",
    "review.1.name":   "Camille R.",
    "review.1.loc":    "Prêt travaux, Lyon",
    "review.2.quote":  "« Mon conseiller a compris mon activité dès le premier appel. Le déblocage des fonds a été rapide. »",
    "review.2.name":   "Saïd M.",
    "review.2.loc":    "Prêt professionnel, Bordeaux",
    "review.3.quote":  "« Aucune surprise sur le taux annoncé en simulation. Exactement ce qui était écrit dans le contrat. »",
    "review.3.name":   "Léa B.",
    "review.3.loc":    "Prêt auto, Paris",

    /* CTA final */
    "cta.h2":      "Votre projet mérite une réponse rapide.",
    "cta.lede":    "Simulez votre prêt en 30 secondes, sans aucun impact sur votre situation bancaire.",
    "cta.btn.sim": "Simuler mon prêt",
    "cta.btn.apply":"Faire une demande",

    /* Footer */
    "footer.legal": "Établissement de crédit agréé. Le prêt vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.",
    "footer.loans": "Prêts",
    "footer.company":"Entreprise",
    "footer.legal.title":"Légal",
    "footer.mentions":"Mentions légales",
    "footer.privacy": "Confidentialité",
    "footer.cgu":     "CGU",
    "footer.about":   "À propos",
    "footer.how":     "Comment ça marche",
    "footer.faq":     "FAQ",
    "footer.contact": "Contact",
    "footer.copy":    "© 2026 France Active Investissement — SA au capital de 2 500 000 €",
    "footer.rcs":     "RCS Paris 812 345 678 — ORIAS n°16 000 000",

    /* Page simulateur */
    "sim.page.h1":    "Estimez votre mensualité en 30 secondes",
    "sim.page.lede":  "Ajustez le montant, la durée et le type de prêt. L'estimation est indicative et sans engagement.",
    "sim.readmore.h2":"Comment lire votre simulation",
    "sim.taeg.h":     "Le taux annuel effectif global",
    "sim.taeg.p":     "Il inclut le taux d'intérêt et les frais de dossier. C'est le seul chiffre à comparer entre établissements.",
    "sim.monthly.h":  "Ce que vous remboursez chaque mois",
    "sim.monthly.p":  "Constante sur toute la durée du prêt, hors assurance facultative.",
    "sim.total.h":    "Le prix réel du crédit",
    "sim.total.p":    "La différence entre ce que vous remboursez au total et le montant emprunté.",
    "sim.cta2":       "Demander ce prêt",
    "sim.nosub":      "Sans engagement · Réponse sous 24h",
    "sim.total.row":  "Montant total dû",

    /* Page demande */
    "apply.h1":       "Déposez votre demande de prêt",
    "apply.lede":     "Trois étapes, cinq minutes. Vous recevrez une réponse de principe sous 24h ouvrées par e-mail.",
    "apply.step1.eyebrow":"Étape 1 / 3",
    "apply.step1.h":  "Votre projet de financement",
    "apply.step1.p":  "Indiquez le montant et la nature de votre projet.",
    "apply.amount.label":"Montant souhaité (€)",
    "apply.duration.label":"Durée de remboursement (mois)",
    "apply.type.label":"Type de prêt",
    "apply.object.label":"Objet du prêt",
    "apply.object.ph":"Décrivez brièvement votre projet...",
    "apply.next":     "Continuer →",
    "apply.prev":     "← Retour",
    "apply.step2.eyebrow":"Étape 2 / 3",
    "apply.step2.h":  "Votre situation",
    "apply.situation":"Situation professionnelle",
    "apply.cdi":      "CDI",
    "apply.cdd":      "CDD",
    "apply.indep":    "Indépendant",
    "apply.other":    "Autre",
    "apply.income":   "Revenu net mensuel (€)",
    "apply.charges":  "Charges mensuelles (€)",
    "apply.housing":  "Statut logement",
    "apply.tenant":   "Locataire",
    "apply.owner":    "Propriétaire",
    "apply.hosted":   "Hébergé",
    "apply.step3.eyebrow":"Étape 3 / 3",
    "apply.step3.h":  "Vos coordonnées",
    "apply.step3.p":  "Pour vous transmettre la réponse de principe.",
    "apply.firstname":"Prénom",
    "apply.lastname": "Nom",
    "apply.email":    "E-mail",
    "apply.phone":    "Téléphone",
    "apply.address":  "Adresse postale",
    "apply.consent":  "J'accepte que mes données soient utilisées pour étudier ma demande de prêt.",
    "apply.submit":   "Envoyer ma demande",
    "apply.docs.h":   "Ce qu'il vous faut",
    "apply.docs.1":   "Une pièce d'identité valide",
    "apply.docs.2":   "Votre dernier avis d'imposition",
    "apply.docs.3":   "3 derniers bulletins de salaire",
    "apply.docs.4":   "Un RIB à votre nom",
    "apply.docs.5":   "Un justificatif de domicile récent",
    "apply.ok.h":     "Merci pour votre demande.",
    "apply.ok.p":     "Un conseiller vous transmettra une réponse de principe sous 24h ouvrées.",

    /* FAQ */
    "faq.q1": "La simulation a-t-elle un impact sur mon dossier bancaire ?",
    "faq.a1": "Non. La simulation est totalement indicative et ne déclenche aucune consultation de fichier bancaire.",
    "faq.q2": "Quels documents dois-je fournir ?",
    "faq.a2": "Pièce d'identité, bulletins de salaire, avis d'imposition, RIB et justificatif de domicile — après l'accord de principe seulement.",
    "faq.q3": "Sous combien de temps ai-je une réponse ?",
    "faq.a3": "Sous 24h ouvrées après dépôt complet de votre demande.",
  },

  en: {
    "nav.home":       "Home",
    "nav.simulate":   "Simulate a loan",
    "nav.offers":     "Our loans",
    "nav.how":        "How it works",
    "nav.faq":        "FAQ",
    "nav.about":      "About",
    "nav.contact":    "Contact",
    "nav.cta.sim":    "Simulate",
    "nav.cta.apply":  "Apply for a loan",

    "hero.eyebrow":   "Consumer & professional credit",
    "hero.h1":        "Loans explained clearly, approved quickly.",
    "hero.lede":      "France Active Investissement finances your personal and professional projects with transparent rates, a 100% online application, and a team that truly responds.",
    "hero.btn.sim":   "Simulate my loan",
    "hero.btn.apply": "Apply now",
    "hero.stat.time": "Decision in principle",
    "hero.stat.rate": "Rate starting from",
    "hero.stat.files":"Financed files",

    "sim.title":     "Quick simulation",
    "sim.tag":       "Indicative",
    "sim.popular":   "Popular amounts",
    "sim.amount":    "Exact amount",
    "sim.duration":  "Repayment period",
    "sim.type":      "Type of financing",
    "sim.type.perso":"Personal loan",
    "sim.type.auto": "Auto loan",
    "sim.type.work": "Home improvement loan",
    "sim.type.pro":  "Professional loan",
    "sim.taeg":      "Annual rate (APR)",
    "sim.cost":      "Total cost of credit",
    "sim.monthly":   "Estimated monthly payment",
    "sim.sub":       "Subject to approval",
    "sim.cta":       "Apply for this loan",

    "trust.1": "ACPR Approved",
    "trust.2": "ORIAS n°16 000 000",
    "trust.3": "100% Secure payment",
    "trust.4": "GDPR Compliant",
    "trust.5": "4.7/5 client satisfaction",

    "offers.eyebrow":  "Our financing",
    "offers.h2":       "A loan for every project",
    "offers.perso.h":  "Personal loan",
    "offers.perso.p":  "For unexpected expenses, moving or life events. No usage justification required.",
    "offers.auto.h":   "Auto & motorbike loan",
    "offers.auto.p":   "New or used vehicle, financed from 4.2% for up to 84 months.",
    "offers.work.h":   "Home improvement loan",
    "offers.work.p":   "Renovation, extension or energy upgrade for your home.",
    "offers.pro.h":    "Professional loan",
    "offers.pro.p":    "Cash flow, equipment or development for freelancers and SMBs.",
    "offers.rdm.h":    "Debt consolidation",
    "offers.rdm.p":    "Merge your existing loans into a single, lighter monthly payment.",
    "offers.conseil.h":"Personalised advice",
    "offers.conseil.p":"A dedicated advisor reviews your file and supports you until funds are released.",
    "offers.more":     "Learn more →",

    "steps.eyebrow": "The process",
    "steps.h2":      "Three steps, one form",
    "step.1.h":      "Simulate",
    "step.1.p":      "Adjust amount and duration to see your monthly payment in real time, no commitment.",
    "step.2.h":      "Submit your file",
    "step.2.p":      "A 3-step form, completable in under 5 minutes.",
    "step.3.h":      "Get your answer",
    "step.3.p":      "Decision in principle within 24 working hours, funds released within 48h after signing.",

    "reviews.eyebrow": "They trusted us",
    "reviews.h2":      "Projects, faces, stories",
    "review.1.quote":  "« Clear simulation, file approved in under 24h. I finally renovated my bathroom stress-free. »",
    "review.1.name":   "Camille R.",
    "review.1.loc":    "Home loan, Lyon",
    "review.2.quote":  "« My advisor understood my business from the first call. Funds were released quickly. »",
    "review.2.name":   "Saïd M.",
    "review.2.loc":    "Business loan, Bordeaux",
    "review.3.quote":  "« No surprises on the rate shown in the simulation. Exactly what was in the contract. »",
    "review.3.name":   "Léa B.",
    "review.3.loc":    "Auto loan, Paris",

    "cta.h2":      "Your project deserves a fast answer.",
    "cta.lede":    "Simulate your loan in 30 seconds, with no impact on your credit file.",
    "cta.btn.sim": "Simulate my loan",
    "cta.btn.apply":"Apply now",

    "footer.legal": "Licensed credit institution. Credit is a commitment that must be repaid. Check your repayment capacity before committing.",
    "footer.loans": "Loans",
    "footer.company":"Company",
    "footer.legal.title":"Legal",
    "footer.mentions":"Legal notice",
    "footer.privacy": "Privacy policy",
    "footer.cgu":     "Terms",
    "footer.about":   "About us",
    "footer.how":     "How it works",
    "footer.faq":     "FAQ",
    "footer.contact": "Contact",
    "footer.copy":    "© 2026 France Active Investissement — SA with capital of €2,500,000",
    "footer.rcs":     "RCS Paris 812 345 678 — ORIAS n°16 000 000",

    "apply.h1":       "Apply for a loan",
    "apply.lede":     "Three steps, five minutes. You'll receive a decision in principle within 24 working hours by email.",
    "apply.next":     "Continue →",
    "apply.prev":     "← Back",
    "apply.submit":   "Send my application",
    "apply.ok.h":     "Thank you for your application.",
    "apply.ok.p":     "An advisor will send you a decision in principle within 24 working hours.",

    "faq.q1": "Does the simulation affect my credit file?",
    "faq.a1": "No. The simulation is purely indicative and does not trigger any credit file check.",
    "faq.q2": "What documents do I need?",
    "faq.a2": "ID, payslips, tax assessment, bank details and proof of address — only required after a positive decision.",
    "faq.q3": "How long until I get an answer?",
    "faq.a3": "Within 24 working hours after your complete application is submitted.",
  },

  es: {
    "nav.home":       "Inicio",
    "nav.simulate":   "Simular un préstamo",
    "nav.offers":     "Nuestros préstamos",
    "nav.how":        "Cómo funciona",
    "nav.faq":        "FAQ",
    "nav.about":      "Sobre nosotros",
    "nav.contact":    "Contacto",
    "nav.cta.sim":    "Simular",
    "nav.cta.apply":  "Solicitar préstamo",

    "hero.eyebrow":   "Crédito al consumo y profesional",
    "hero.h1":        "El préstamo, explicado con claridad, aprobado rápidamente.",
    "hero.lede":      "France Active Investissement financia sus proyectos personales y profesionales con tasas transparentes, trámites 100% online y un equipo que de verdad responde.",
    "hero.btn.sim":   "Simular mi préstamo",
    "hero.btn.apply": "Solicitar ahora",
    "hero.stat.time": "Respuesta de principio",
    "hero.stat.rate": "Tasa desde",
    "hero.stat.files":"Expedientes financiados",

    "sim.title":     "Simulación rápida",
    "sim.tag":       "Indicativo",
    "sim.popular":   "Importes populares",
    "sim.amount":    "Importe exacto",
    "sim.duration":  "Plazo de devolución",
    "sim.type":      "Tipo de financiación",
    "sim.type.perso":"Préstamo personal",
    "sim.type.auto": "Préstamo auto",
    "sim.type.work": "Préstamo obras",
    "sim.type.pro":  "Préstamo profesional",
    "sim.taeg":      "Tasa anual (TAE)",
    "sim.cost":      "Coste total del crédito",
    "sim.monthly":   "Cuota mensual estimada",
    "sim.sub":       "Sujeto a aprobación",
    "sim.cta":       "Solicitar este préstamo",

    "trust.1": "Aprobado ACPR",
    "trust.2": "ORIAS n°16 000 000",
    "trust.3": "Pago 100% seguro",
    "trust.4": "Conforme RGPD",
    "trust.5": "4,7/5 satisfacción cliente",

    "offers.eyebrow":  "Nuestra financiación",
    "offers.h2":       "Un préstamo para cada proyecto",
    "offers.perso.h":  "Préstamo personal",
    "offers.perso.p":  "Para imprevistos, mudanzas o eventos de vida. Sin justificante de uso.",
    "offers.auto.h":   "Préstamo auto & moto",
    "offers.auto.p":   "Vehículo nuevo o de segunda mano, desde el 4,2% hasta 84 meses.",
    "offers.work.h":   "Préstamo obras",
    "offers.work.p":   "Reforma, ampliación o mejora energética de su vivienda.",
    "offers.pro.h":    "Préstamo profesional",
    "offers.pro.p":    "Tesorería, equipamiento o desarrollo para autónomos y pymes.",
    "offers.rdm.h":    "Reunificación de deudas",
    "offers.rdm.p":    "Agrupe sus préstamos en una sola cuota mensual reducida.",
    "offers.conseil.h":"Asesoramiento personalizado",
    "offers.conseil.p":"Un asesor dedicado estudia su expediente y le acompaña hasta la liberación de fondos.",
    "offers.more":     "Saber más →",

    "steps.eyebrow": "El proceso",
    "steps.h2":      "Tres pasos, un solo formulario",
    "step.1.h":      "Simule",
    "step.1.p":      "Ajuste importe y plazo para ver su cuota en tiempo real, sin compromiso.",
    "step.2.h":      "Envíe su solicitud",
    "step.2.p":      "Un formulario de 3 pasos, completable en menos de 5 minutos.",
    "step.3.h":      "Reciba su respuesta",
    "step.3.p":      "Respuesta de principio en 24 horas hábiles, fondos disponibles en 48h tras la firma.",

    "reviews.eyebrow": "Nos confiaron sus proyectos",
    "reviews.h2":      "Proyectos, personas, historias",
    "review.1.quote":  "« Simulación clara, expediente aprobado en menos de 24h. Por fin reformé mi baño sin estrés. »",
    "review.1.name":   "Camille R.",
    "review.1.loc":    "Préstamo obras, Lyon",
    "review.2.quote":  "« Mi asesor entendió mi actividad desde la primera llamada. La liberación de fondos fue rápida. »",
    "review.2.name":   "Saïd M.",
    "review.2.loc":    "Préstamo profesional, Burdeos",
    "review.3.quote":  "« Sin sorpresas en la tasa anunciada en la simulación. Exactamente lo que ponía en el contrato. »",
    "review.3.name":   "Léa B.",
    "review.3.loc":    "Préstamo auto, París",

    "cta.h2":      "Su proyecto merece una respuesta rápida.",
    "cta.lede":    "Simule su préstamo en 30 segundos, sin impacto en su historial crediticio.",
    "cta.btn.sim": "Simular mi préstamo",
    "cta.btn.apply":"Solicitar ahora",

    "footer.legal": "Entidad de crédito autorizada. El préstamo es un compromiso que debe devolverse. Compruebe su capacidad de pago antes de comprometerse.",
    "footer.loans": "Préstamos",
    "footer.company":"Empresa",
    "footer.legal.title":"Legal",
    "footer.mentions":"Aviso legal",
    "footer.privacy": "Privacidad",
    "footer.cgu":     "Condiciones",
    "footer.about":   "Sobre nosotros",
    "footer.how":     "Cómo funciona",
    "footer.faq":     "FAQ",
    "footer.contact": "Contacto",
    "footer.copy":    "© 2026 France Active Investissement — SA con capital de 2.500.000 €",
    "footer.rcs":     "RCS Paris 812 345 678 — ORIAS n°16 000 000",

    "apply.h1":       "Solicite un préstamo",
    "apply.lede":     "Tres pasos, cinco minutos. Recibirá una respuesta de principio en 24 horas hábiles por correo.",
    "apply.next":     "Continuar →",
    "apply.prev":     "← Volver",
    "apply.submit":   "Enviar mi solicitud",
    "apply.ok.h":     "Gracias por su solicitud.",
    "apply.ok.p":     "Un asesor le enviará una respuesta de principio en 24 horas hábiles.",

    "faq.q1": "¿La simulación afecta a mi historial crediticio?",
    "faq.a1": "No. La simulación es puramente indicativa y no genera ninguna consulta en los ficheros de crédito.",
    "faq.q2": "¿Qué documentos necesito?",
    "faq.a2": "DNI, nóminas, declaración de la renta, IBAN y justificante de domicilio — solo tras la aprobación de principio.",
    "faq.q3": "¿Cuánto tiempo tarda la respuesta?",
    "faq.a3": "Dentro de las 24 horas hábiles tras el envío completo de su solicitud.",
  },

  ar: {
    "nav.home":       "الرئيسية",
    "nav.simulate":   "محاكاة القرض",
    "nav.offers":     "قروضنا",
    "nav.how":        "كيف يعمل",
    "nav.faq":        "الأسئلة الشائعة",
    "nav.about":      "من نحن",
    "nav.contact":    "التواصل",
    "nav.cta.sim":    "محاكاة",
    "nav.cta.apply":  "طلب قرض",

    "hero.eyebrow":   "ائتمان استهلاكي ومهني",
    "hero.h1":        "القرض، موضح بوضوح، مُعتمد بسرعة.",
    "hero.lede":      "تموّل France Active Investissement مشاريعكم الشخصية والمهنية بمعدلات شفافة، وملف 100% إلكتروني، وفريق يستجيب بالفعل.",
    "hero.btn.sim":   "محاكاة قرضي",
    "hero.btn.apply": "تقديم طلب",
    "hero.stat.time": "رد مبدئي",
    "hero.stat.rate": "معدل يبدأ من",
    "hero.stat.files":"ملف ممول",

    "sim.title":     "محاكاة سريعة",
    "sim.tag":       "إرشادي",
    "sim.popular":   "المبالغ الشائعة",
    "sim.amount":    "المبلغ الدقيق",
    "sim.duration":  "مدة السداد",
    "sim.type":      "نوع التمويل",
    "sim.type.perso":"قرض شخصي",
    "sim.type.auto": "قرض سيارة",
    "sim.type.work": "قرض تجديد",
    "sim.type.pro":  "قرض مهني",
    "sim.taeg":      "المعدل السنوي (APR)",
    "sim.cost":      "التكلفة الإجمالية للائتمان",
    "sim.monthly":   "القسط الشهري التقديري",
    "sim.sub":       "رهناً بالموافقة",
    "sim.cta":       "طلب هذا القرض",

    "trust.1": "معتمد ACPR",
    "trust.2": "ORIAS n°16 000 000",
    "trust.3": "دفع آمن 100%",
    "trust.4": "متوافق مع RGPD",
    "trust.5": "4٫7/5 رضا العملاء",

    "offers.eyebrow":  "تمويلاتنا",
    "offers.h2":       "قرض لكل مشروع",
    "offers.perso.h":  "قرض شخصي",
    "offers.perso.p":  "لأي طارئ أو انتقال أو حدث في الحياة. دون إثبات استخدام.",
    "offers.auto.h":   "قرض سيارة ودراجة",
    "offers.auto.p":   "مركبة جديدة أو مستعملة، ممولة من 4٫2% لمدة تصل إلى 84 شهراً.",
    "offers.work.h":   "قرض أشغال",
    "offers.work.p":   "تجديد أو توسيع أو تحسين طاقي لمنزلكم.",
    "offers.pro.h":    "قرض مهني",
    "offers.pro.p":    "خزينة أو معدات أو توسع للعمال المستقلين والمقاولات الصغيرة.",
    "offers.rdm.h":    "توحيد القروض",
    "offers.rdm.p":    "اجمعوا قروضكم الجارية في قسط شهري واحد مخفف.",
    "offers.conseil.h":"استشارة مخصصة",
    "offers.conseil.p":"مستشار مخصص يدرس ملفكم ويرافقكم حتى تحرير الأموال.",
    "offers.more":     "اعرف أكثر ←",

    "steps.eyebrow": "المسار",
    "steps.h2":      "ثلاث خطوات، نموذج واحد",
    "step.1.h":      "محاكاة",
    "step.1.p":      "اضبط المبلغ والمدة لترى قسطك الشهري لحظياً، دون أي التزام.",
    "step.2.h":      "تقديم ملفكم",
    "step.2.p":      "نموذج من 3 خطوات، يمكن إكماله في أقل من 5 دقائق.",
    "step.3.h":      "استلام ردكم",
    "step.3.p":      "رد مبدئي خلال 24 ساعة عمل، ثم تحرير الأموال خلال 48 ساعة من التوقيع.",

    "reviews.eyebrow": "وثقوا بنا",
    "reviews.h2":      "مشاريع، وجوه، قصص",
    "review.1.quote":  "« محاكاة واضحة، الملف مقبول في أقل من 24 ساعة. أخيراً جددت الحمام دون توتر. »",
    "review.1.name":   "Camille R.",
    "review.1.loc":    "قرض تجديد، ليون",
    "review.2.quote":  "« فهم مستشاري نشاطي من أول مكالمة. تحرير الأموال كان سريعاً. »",
    "review.2.name":   "Saïd M.",
    "review.2.loc":    "قرض مهني، بوردو",
    "review.3.quote":  "« لا مفاجآت في المعدل المعلن في المحاكاة. تطابق تماماً مع العقد. »",
    "review.3.name":   "Léa B.",
    "review.3.loc":    "قرض سيارة، باريس",

    "cta.h2":      "مشروعكم يستحق رداً سريعاً.",
    "cta.lede":    "حاكوا قرضكم في 30 ثانية، دون أي تأثير على وضعكم البنكي.",
    "cta.btn.sim": "محاكاة قرضي",
    "cta.btn.apply":"تقديم طلب",

    "footer.legal": "مؤسسة ائتمانية معتمدة. القرض التزام يجب سداده. تحققوا من قدرتكم على السداد قبل الالتزام.",
    "footer.loans": "القروض",
    "footer.company":"المؤسسة",
    "footer.legal.title":"قانوني",
    "footer.mentions":"إشعارات قانونية",
    "footer.privacy": "الخصوصية",
    "footer.cgu":     "الشروط",
    "footer.about":   "من نحن",
    "footer.how":     "كيف يعمل",
    "footer.faq":     "الأسئلة الشائعة",
    "footer.contact": "التواصل",
    "footer.copy":    "© 2026 France Active Investissement — شركة برأسمال 2٫500٫000 €",
    "footer.rcs":     "RCS Paris 812 345 678 — ORIAS n°16 000 000",

    "apply.h1":       "تقديم طلب قرض",
    "apply.lede":     "ثلاث خطوات، خمس دقائق. ستتلقون رداً مبدئياً خلال 24 ساعة عمل عبر البريد الإلكتروني.",
    "apply.next":     "متابعة ←",
    "apply.prev":     "رجوع →",
    "apply.submit":   "إرسال طلبي",
    "apply.ok.h":     "شكراً على طلبكم.",
    "apply.ok.p":     "سيرسل لكم مستشار رداً مبدئياً خلال 24 ساعة عمل.",

    "faq.q1": "هل تؤثر المحاكاة على ملفي البنكي؟",
    "faq.a1": "لا. المحاكاة إرشادية تماماً ولا تستدعي أي استشارة في ملفات الائتمان.",
    "faq.q2": "ما الوثائق التي أحتاجها؟",
    "faq.a2": "وثيقة هوية، وقسائم راتب، وإقرار ضريبي، وبيانات حساب بنكي، وإثبات سكن — فقط بعد الموافقة المبدئية.",
    "faq.q3": "كم يستغرق الرد؟",
    "faq.a3": "خلال 24 ساعة عمل من إرسال الطلب الكامل.",
  }
};

/* -------- Moteur d'application -------- */
const RTL_LANGS = ["ar"];
const LANG_KEY  = "fai_lang";

function getLang() {
  return localStorage.getItem(LANG_KEY) || "fr";
}

function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
  applyLang(lang);
}

function t(key, lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.fr;
  return dict[key] || TRANSLATIONS.fr[key] || key;
}

function applyLang(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.fr;

  /* Direction RTL */
  document.documentElement.lang = lang;
  document.documentElement.dir  = RTL_LANGS.includes(lang) ? "rtl" : "ltr";

  /* Remplacer tous les éléments balisés [data-i18n] */
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] || TRANSLATIONS.fr[key]) {
      el.textContent = t(key, lang);
    }
  });

  /* Attributs placeholder, aria-label, title */
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    el.placeholder = t(el.dataset.i18nPh, lang);
  });
  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    el.title = t(el.dataset.i18nTitle, lang);
  });

  /* Mettre à jour les indicateurs dans le switcher flottant */
  document.querySelectorAll(".fai-lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

/* -------- Switcher flottant injecté sur chaque page -------- */
function injectSwitcher() {
  const wrap = document.createElement("div");
  wrap.id = "fai-lang-switcher";
  wrap.innerHTML = `
    <button class="fai-lang-trigger" aria-label="Changer de langue" title="Langue / Language">🌐</button>
    <div class="fai-lang-panel" id="fai-lang-panel" hidden>
      ${[
        {code:"fr", flag:"🇫🇷", label:"Français"},
        {code:"en", flag:"🇬🇧", label:"English"},
        {code:"es", flag:"🇪🇸", label:"Español"},
        {code:"ar", flag:"🇸🇦", label:"العربية"},
      ].map(l => `
        <button class="fai-lang-btn" data-lang="${l.code}">
          <span class="fai-flag">${l.flag}</span>
          <span>${l.label}</span>
        </button>`).join("")}
      <a class="fai-lang-manage" href="langue.html">⚙️ Gérer les langues</a>
    </div>
  `;

  const style = document.createElement("style");
  style.textContent = `
    #fai-lang-switcher{position:fixed;bottom:24px;right:24px;z-index:9999;font-family:var(--sans,sans-serif);}
    .fai-lang-trigger{
      width:50px;height:50px;border-radius:50%;background:#FF5A36;border:none;cursor:pointer;
      font-size:1.3rem;box-shadow:0 8px 24px rgba(255,90,54,.45);transition:transform .2s ease;
    }
    .fai-lang-trigger:hover{transform:scale(1.1);}
    .fai-lang-panel{
      position:absolute;bottom:62px;right:0;background:#fff;border:1px solid #E7E8F2;
      border-radius:18px;box-shadow:0 20px 50px rgba(22,26,43,.22);padding:10px;
      display:flex;flex-direction:column;gap:4px;min-width:180px;
    }
    .fai-lang-btn{
      display:flex;align-items:center;gap:10px;padding:11px 14px;border:none;background:none;
      border-radius:12px;cursor:pointer;font-size:.92rem;font-weight:700;color:#161A2B;
      transition:background .15s ease;text-align:left;
    }
    .fai-lang-btn:hover{background:#F4F5FB;}
    .fai-lang-btn.active{background:#FFE9E2;color:#E0431F;}
    .fai-flag{font-size:1.2rem;}
    .fai-lang-manage{
      display:flex;align-items:center;gap:8px;padding:10px 14px;margin-top:4px;
      border-top:1px solid #E7E8F2;text-decoration:none;font-size:.82rem;color:#767A8F;font-weight:700;
      border-radius:0 0 10px 10px;
    }
    .fai-lang-manage:hover{color:#FF5A36;}
  `;
  document.head.appendChild(style);
  document.body.appendChild(wrap);

  const trigger = wrap.querySelector(".fai-lang-trigger");
  const panel   = wrap.querySelector("#fai-lang-panel");

  trigger.addEventListener("click", () => {
    panel.hidden = !panel.hidden;
  });

  wrap.querySelectorAll(".fai-lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setLang(btn.dataset.lang);
      panel.hidden = true;
    });
  });

  document.addEventListener("click", e => {
    if (!wrap.contains(e.target)) panel.hidden = true;
  });
}

/* -------- Init -------- */
document.addEventListener("DOMContentLoaded", () => {
  injectSwitcher();
  applyLang(getLang());
});
