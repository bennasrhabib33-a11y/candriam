// Candriam Business — script partagé

/* ---------------- Configuration EmailJS ----------------
   Renseignez ces 4 valeurs depuis https://dashboard.emailjs.com
   (Account > Public Key, Email Services > Service ID, Email Templates > Template ID).
   La clé publique est faite pour être visible côté navigateur : sécurisez-la
   en limitant les domaines autorisés dans le tableau de bord EmailJS. */
const EMAILJS_CONFIG = {
  publicKey: "33L-ciK184uWw5GUU",
  serviceId: "service_gr4fh29",
  templateContact: "template_fxpwxqj",
  templateDemande: "template_5ipadwr"
};

function sendEmail(templateId, params) {
  if (typeof emailjs === "undefined") {
    return Promise.reject(new Error("SDK EmailJS non chargé"));
  }
  if (Object.values(EMAILJS_CONFIG).some(v => String(v).startsWith("VOTRE_"))) {
    return Promise.reject(new Error("Configuration EmailJS incomplète (assets/script.js)"));
  }
  return emailjs.send(EMAILJS_CONFIG.serviceId, templateId, params, {
    publicKey: EMAILJS_CONFIG.publicKey,
    blockHeadless: true,
    limitRate: { throttle: 10000 } // 1 envoi toutes les 10 s par page
  });
}

function emailErrorMessage(error) {
  if (error && error.status === 429) {
    return "Merci de patienter quelques secondes avant de renvoyer le formulaire.";
  }
  return "L'envoi a échoué. Merci de réessayer dans un instant ou de nous appeler au +32 2 507 62 66.";
}

document.addEventListener("DOMContentLoaded", () => {
  // Navigation mobile
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".main-nav");
  if (burger && nav) {
    burger.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  initSimulator();
  initDemandeForm();
  initContactForm();
});

/* ---------------- Simulateur de prêt ---------------- */
function formatEUR(n) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
}
function formatEUR2(n) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 2 }).format(n);
}

const RATES = {
  perso: 5.4,
  auto: 4.2,
  travaux: 4.6,
  pro: 5.9
};

function computeLoan(amount, months, type) {
  const rate = RATES[type] ?? 5.4;
  const monthlyRate = rate / 100 / 12;
  const mensualite = monthlyRate === 0
    ? amount / months
    : (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
  const total = mensualite * months;
  const cout = total - amount;
  return { rate, mensualite, total, cout };
}

function initSimulator() {
  const amountInput = document.getElementById("sim-amount");
  const durationInput = document.getElementById("sim-duration");
  const typeInput = document.getElementById("sim-type");
  if (!amountInput || !durationInput) return;

  const amountVal = document.getElementById("sim-amount-val");
  const durationVal = document.getElementById("sim-duration-val");
  const mensualiteOut = document.getElementById("sim-mensualite");
  const tauxOut = document.getElementById("sim-taux");
  const coutOut = document.getElementById("sim-cout");
  const totalOut = document.getElementById("sim-total");

  function update() {
    const amount = Number(amountInput.value);
    const months = Number(durationInput.value);
    const type = typeInput ? typeInput.value : "perso";

    amountVal.textContent = formatEUR(amount);
    durationVal.textContent = months + " mois";

    const { rate, mensualite, total, cout } = computeLoan(amount, months, type);
    tauxOut.textContent = rate.toFixed(2).replace(".", ",") + " %";
    mensualiteOut.textContent = formatEUR2(mensualite);
    coutOut.textContent = formatEUR2(cout);
    totalOut.textContent = formatEUR2(total);

    // pousse le résultat vers le formulaire de demande si on clique "Demander ce prêt"
    const passLink = document.getElementById("sim-to-demande");
    if (passLink) {
      const params = new URLSearchParams({ montant: amount, duree: months, type });
      passLink.href = "demande.html?" + params.toString();
    }
  }

  [amountInput, durationInput, typeInput].forEach(el => el && el.addEventListener("input", update));

  // Puces de montant rapide (façon "montants populaires")
  const chipsWrap = document.getElementById("sim-amount-chips");
  if (chipsWrap) {
    const chips = chipsWrap.querySelectorAll("button");
    chips.forEach(chip => {
      chip.addEventListener("click", () => {
        amountInput.value = chip.dataset.amount;
        chips.forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        update();
      });
    });
    amountInput.addEventListener("input", () => {
      chips.forEach(c => c.classList.toggle("active", c.dataset.amount === amountInput.value));
    });
  }

  update();
}

/* ---------------- Formulaire de demande (multi-étapes) ---------------- */
function initDemandeForm() {
  const form = document.getElementById("demande-form");
  if (!form) return;

  // Pré-remplissage depuis le simulateur
  const params = new URLSearchParams(window.location.search);
  ["montant", "duree", "type"].forEach(key => {
    const field = form.querySelector(`[name="${key === "montant" ? "montant" : key === "duree" ? "duree" : "type_pret"}"]`);
    if (field && params.get(key)) field.value = params.get(key);
  });

  const steps = Array.from(form.querySelectorAll(".form-step"));
  const dots = Array.from(document.querySelectorAll(".progress-steps span"));
  const nextBtns = form.querySelectorAll("[data-next]");
  const prevBtns = form.querySelectorAll("[data-prev]");
  let current = 0;

  function show(i) {
    steps.forEach((s, idx) => s.style.display = idx === i ? "block" : "none");
    dots.forEach((d, idx) => d.classList.toggle("done", idx <= i));
    window.scrollTo({ top: form.offsetTop - 120, behavior: "smooth" });
  }

  nextBtns.forEach(btn => btn.addEventListener("click", () => {
    const stepEls = steps[current].querySelectorAll("input, select, textarea");
    let valid = true;
    stepEls.forEach(el => { if (!el.checkValidity()) { el.reportValidity(); valid = false; } });
    if (!valid) return;
    if (current < steps.length - 1) { current++; show(current); }
  }));

  prevBtns.forEach(btn => btn.addEventListener("click", () => {
    if (current > 0) { current--; show(current); }
  }));

  show(current);

  // Zone d'erreur d'envoi
  const errBox = document.createElement("p");
  errBox.className = "alert";
  errBox.id = "demande-error";
  errBox.style.display = "none";
  form.appendChild(errBox);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Le formulaire est en "novalidate" : on valide ici la dernière étape
    let valid = true;
    steps[current].querySelectorAll("input, select, textarea").forEach(el => {
      if (valid && !el.checkValidity()) { el.reportValidity(); valid = false; }
    });
    if (!valid) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    const label = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = "Envoi en cours…";
    errBox.style.display = "none";

    const data = new FormData(form);
    const ref = "CB-" + Math.floor(100000 + Math.random() * 900000);

    try {
      await sendEmail(EMAILJS_CONFIG.templateDemande, {
        ref,
        prenom: data.get("prenom"),
        nom: data.get("nom"),
        from_email: data.get("email"),
        telephone: data.get("telephone"),
        adresse: data.get("adresse"),
        type_pret: data.get("type_pret"),
        montant: formatEUR(Number(data.get("montant") || 0)),
        duree: (data.get("duree") || "—") + " mois",
        objet: data.get("objet"),
        situation: data.get("situation"),
        revenu: data.get("revenu") + " €",
        charges: data.get("charges") + " €",
        logement: data.get("logement")
      });
    } catch (error) {
      console.error("EmailJS :", error);
      errBox.textContent = emailErrorMessage(error);
      errBox.style.display = "block";
      submitBtn.disabled = false;
      submitBtn.textContent = label;
      return;
    }

    const summary = document.getElementById("demande-confirmation");
    form.style.display = "none";
    document.querySelector(".progress-steps").style.display = "none";
    if (summary) {
      summary.querySelector("[data-r-nom]").textContent = `${data.get("prenom") || ""} ${data.get("nom") || ""}`.trim();
      summary.querySelector("[data-r-montant]").textContent = formatEUR(Number(data.get("montant") || 0));
      summary.querySelector("[data-r-duree]").textContent = (data.get("duree") || "—") + " mois";
      summary.querySelector("[data-r-ref]").textContent = ref;
      summary.style.display = "block";
      summary.scrollIntoView({ behavior: "smooth" });
    }
  });
}

/* ---------------- Formulaire de contact ---------------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  const ok = document.getElementById("contact-ok");
  const err = document.getElementById("contact-error");
  const btn = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Champ piège (honeypot) : un humain ne le remplit jamais
    const trap = form.elements["hp_k7x2"];
    if (trap && trap.value) {
      console.warn("Formulaire ignoré : champ piège rempli.");
      form.style.display = "none";
      ok.style.display = "block";
      return;
    }

    err.style.display = "none";
    const label = btn.textContent;
    btn.disabled = true;
    btn.textContent = "Envoi en cours…";

    const d = new FormData(form);
    try {
      await sendEmail(EMAILJS_CONFIG.templateContact, {
        from_name: `${d.get("prenom") || ""} ${d.get("nom") || ""}`.trim(),
        from_email: d.get("email"),
        phone: d.get("tel") || "Non renseigné",
        subject: d.get("sujet"),
        message: d.get("message")
      });
      form.style.display = "none";
      ok.style.display = "block";
      ok.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.error("EmailJS :", error);
      err.textContent = emailErrorMessage(error);
      err.style.display = "block";
      btn.disabled = false;
      btn.textContent = label;
    }
  });
}
