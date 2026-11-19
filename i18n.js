// France Active Investissement — sélecteur de langue (FR / EN / ES)
// Traduit tous les éléments portant un attribut data-i18n="cle"
// La langue choisie est mémorisée (localStorage) et appliquée sur toutes les pages du site.

const I18N_DICT = {
  fr: {
    nav_accueil: "Accueil",
    nav_simuler: "Simuler un prêt",
    nav_offres: "Nos prêts",
    nav_comment: "Comment ça marche",
    nav_faq: "FAQ",
    nav_apropos: "À propos",
    nav_contact: "Contact",
    nav_btn_simuler: "Simuler",
    nav_btn_demander: "Demander un prêt",
    brand_tagline: "Établissement de crédit",

    hero_eyebrow: "Crédit à la consommation & professionnel",
    hero_title: "Le prêt, expliqué clairement, accordé rapidement.",
    hero_lede: "France Active Investissement finance vos projets personnels et professionnels avec des taux transparents, un dossier 100&nbsp;% en ligne et une équipe qui répond, vraiment.",
    btn_simuler_mon_pret: "Simuler mon prêt",
    btn_faire_demande: "Faire une demande",
    stat_reponse: "Réponse de principe",
    stat_taux: "Taux à partir de",
    stat_dossiers: "Dossiers financés",

    sim_titre: "Simulation rapide",
    sim_indicatif: "Indicatif",
    sim_montants_populaires: "Montants populaires",
    sim_montant_exact: "Montant exact",
    sim_duree: "Durée de remboursement",
    sim_type: "Type de financement",
    sim_taux_annuel: "Taux annuel (TAEG)",
    sim_cout_total: "Coût total du crédit",
    sim_mensualite: "Mensualité estimée",
    sim_sous_reserve: "Sous réserve d'acceptation",
    sim_demander_ce_pret: "Demander ce prêt",

    footer_prets: "Prêts",
    footer_entreprise: "Entreprise",
    footer_legal: "Légal",
    footer_pret_perso: "Prêt personnel",
    footer_pret_auto: "Prêt auto",
    footer_pret_travaux: "Prêt travaux",
    footer_pret_pro: "Prêt professionnel",
    footer_apropos: "À propos",
    footer_comment: "Comment ça marche",
    footer_faq: "FAQ",
    footer_contact: "Contact",
    footer_mentions: "Mentions légales",
    footer_confidentialite: "Confidentialité",
    footer_cgu: "CGU",
    footer_disclaimer: "Établissement de crédit agréé. Le prêt vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager."
  },

  en: {
    nav_accueil: "Home",
    nav_simuler: "Loan simulator",
    nav_offres: "Our loans",
    nav_comment: "How it works",
    nav_faq: "FAQ",
    nav_apropos: "About",
    nav_contact: "Contact",
    nav_btn_simuler: "Simulate",
    nav_btn_demander: "Apply for a loan",
    brand_tagline: "Credit institution",

    hero_eyebrow: "Consumer & business credit",
    hero_title: "Loans, explained clearly, approved quickly.",
    hero_lede: "France Active Investissement funds your personal and business projects with transparent rates, a fully online application and a team that actually answers.",
    btn_simuler_mon_pret: "Simulate my loan",
    btn_faire_demande: "Apply now",
    stat_reponse: "Initial response",
    stat_taux: "Rates starting from",
    stat_dossiers: "Loans funded",

    sim_titre: "Quick simulation",
    sim_indicatif: "Indicative",
    sim_montants_populaires: "Popular amounts",
    sim_montant_exact: "Exact amount",
    sim_duree: "Repayment term",
    sim_type: "Loan type",
    sim_taux_annuel: "Annual rate (APR)",
    sim_cout_total: "Total cost of credit",
    sim_mensualite: "Estimated monthly payment",
    sim_sous_reserve: "Subject to approval",
    sim_demander_ce_pret: "Apply for this loan",

    footer_prets: "Loans",
    footer_entreprise: "Company",
    footer_legal: "Legal",
    footer_pret_perso: "Personal loan",
    footer_pret_auto: "Auto loan",
    footer_pret_travaux: "Home improvement loan",
    footer_pret_pro: "Business loan",
    footer_apropos: "About",
    footer_comment: "How it works",
    footer_faq: "FAQ",
    footer_contact: "Contact",
    footer_mentions: "Legal notice",
    footer_confidentialite: "Privacy",
    footer_cgu: "Terms of use",
    footer_disclaimer: "Licensed credit institution. A loan commits you and must be repaid. Check your repayment capacity before committing."
  },

  es: {
    nav_accueil: "Inicio",
    nav_simuler: "Simular un préstamo",
    nav_offres: "Nuestros préstamos",
    nav_comment: "Cómo funciona",
    nav_faq: "Preguntas frecuentes",
    nav_apropos: "Sobre nosotros",
    nav_contact: "Contacto",
    nav_btn_simuler: "Simular",
    nav_btn_demander: "Solicitar un préstamo",
    brand_tagline: "Entidad de crédito",

    hero_eyebrow: "Crédito al consumo y profesional",
    hero_title: "El préstamo, explicado con claridad, concedido rápidamente.",
    hero_lede: "France Active Investissement financia tus proyectos personales y profesionales con tasas transparentes, una solicitud 100&nbsp;% online y un equipo que realmente responde.",
    btn_simuler_mon_pret: "Simular mi préstamo",
    btn_faire_demande: "Solicitar ahora",
    stat_reponse: "Respuesta de principio",
    stat_taux: "Tasa desde",
    stat_dossiers: "Préstamos concedidos",

    sim_titre: "Simulación rápida",
    sim_indicatif: "Indicativo",
    sim_montants_populaires: "Importes populares",
    sim_montant_exact: "Importe exacto",
    sim_duree: "Plazo de devolución",
    sim_type: "Tipo de financiación",
    sim_taux_annuel: "Tasa anual (TAE)",
    sim_cout_total: "Coste total del crédito",
    sim_mensualite: "Cuota mensual estimada",
    sim_sous_reserve: "Sujeto a aprobación",
    sim_demander_ce_pret: "Solicitar este préstamo",

    footer_prets: "Préstamos",
    footer_entreprise: "Empresa",
    footer_legal: "Legal",
    footer_pret_perso: "Préstamo personal",
    footer_pret_auto: "Préstamo de auto",
    footer_pret_travaux: "Préstamo de reformas",
    footer_pret_pro: "Préstamo profesional",
    footer_apropos: "Sobre nosotros",
    footer_comment: "Cómo funciona",
    footer_faq: "Preguntas frecuentes",
    footer_contact: "Contacto",
    footer_mentions: "Aviso legal",
    footer_confidentialite: "Privacidad",
    footer_cgu: "Términos de uso",
    footer_disclaimer: "Entidad de crédito autorizada. Un préstamo te compromete y debe devolverse. Verifica tu capacidad de pago antes de comprometerte."
  }
};

const I18N_STORAGE_KEY = "fai_lang";

function i18nGetLang() {
  return localStorage.getItem(I18N_STORAGE_KEY) || "fr";
}

function i18nApply(lang) {
  const dict = I18N_DICT[lang] || I18N_DICT.fr;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });
  document.documentElement.setAttribute("lang", lang);
  const select = document.getElementById("lang-switch");
  if (select) select.value = lang;
}

function i18nSetLang(lang) {
  localStorage.setItem(I18N_STORAGE_KEY, lang);
  i18nApply(lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = i18nGetLang();
  i18nApply(lang);

  const select = document.getElementById("lang-switch");
  if (select) {
    select.addEventListener("change", (e) => i18nSetLang(e.target.value));
  }
});
