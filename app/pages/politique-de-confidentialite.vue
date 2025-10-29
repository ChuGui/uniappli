<template>
  <section class="min-h-screen bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-blue">
      <h1>Politique de confidentialité</h1>

      <p>
        Cette politique décrit la manière dont nous traitons vos données personnelles, conformément au Règlement (UE) 2016/679 (RGPD) et à la loi n°78-17 du
        6 janvier 1978 modifiée (Loi Informatique et Libertés).
      </p>

      <h2>Responsable du traitement</h2>
      <ul>
        <li><strong>Identité</strong> : Guillaume Churlet (Micro-entreprise)</li>
        <li><strong>Coordonnées</strong> : 128 rue des papillons, 40230 Benesse-Maremne, France — uniappli.web@gmail.com — 07 81 39 94 46</li>
      </ul>

      <h2>Finalités et bases légales</h2>
      <p>Nous traitons vos données pour les finalités suivantes :</p>
      <ul>
        <li>Gestion des demandes via le formulaire de contact — Intérêt légitime et/ou exécution de mesures précontractuelles.</li>
        <li>Fourniture des services UniAppli (mise en place de tunnels, CRM, automatisations, rendez-vous, formations) — Exécution du contrat.</li>
        <li>Prospection et communications commerciales (le cas échéant) — Consentement.</li>
        <li>Amélioration du site et mesures d’audience (le cas échéant) — Consentement.</li>
      </ul>

      <h2>Données collectées</h2>
      <ul>
        <li>Identité: nom, prénom (si fournis).</li>
        <li>Contact: adresse e-mail, numéro de téléphone.</li>
        <li>Professionnel: nom de l’entreprise, rôle/fonction (si fournis).</li>
        <li>Données de navigation: adresse IP, logs techniques, identifiants de cookies/traceurs (si acceptés).</li>
      </ul>

      <h2>Destinataires</h2>
      <p>
        Les données sont destinées aux équipes internes habilitées et, le cas échéant, à nos sous-traitants (hébergeur, outils d'emailing, analytics),
        soumis à des obligations de confidentialité et de sécurité.
      </p>

      <h2>Transferts hors UE</h2>
      <p>
        Les données peuvent être hébergées et traitées par nos prestataires techniques. Certains prestataires peuvent être situés hors de l’Union européenne,
        notamment aux États‑Unis (par exemple, Google LLC pour Google Analytics si vous y consentez). Le cas échéant, ces transferts sont encadrés par des
        garanties appropriées (clauses contractuelles types de la Commission européenne et, le cas échéant, mesures complémentaires). La liste précise des
        prestataires et pays de destination pourra être communiquée sur demande et sera précisée dans la présente politique en cas d’évolution.
      </p>

      <h2>Durées de conservation</h2>
      <ul>
        <li>Données de contact (prospects) : 3 ans à compter du dernier contact émanant de votre part.</li>
        <li>Données liées aux clients et à l’exécution des services : pendant la relation contractuelle puis archivage légal (jusqu’à 5 ans) ; pièces comptables: 10 ans.</li>
        <li>Logs techniques de connexion : 1 an.</li>
        <li>Cookies/traceurs : selon leur finalité, durée maximale de 13 mois pour les cookies soumis à consentement. Voir section « Cookies ».</li>
      </ul>

      <h2>Vos droits</h2>
      <p>
        Vous disposez des droits d'accès, de rectification, d'effacement, de limitation, d'opposition, de portabilité et de définir le sort de vos données
        après votre décès. Pour les exercer, contactez-nous à l’adresse suivante : uniappli.web@gmail.com. Une preuve d’identité pourra être demandée.
      </p>

      <h2>Réclamations</h2>
      <p>
        Vous pouvez adresser une réclamation auprès de la CNIL (www.cnil.fr) si vous estimez que vos droits ne sont pas respectés.
      </p>

      <h2>Cookies</h2>
      <p>
        Lors de votre navigation, des cookies peuvent être déposés sur votre terminal. Vous pouvez paramétrer vos choix via un bandeau de consentement ou via votre
        navigateur. Seuls les cookies strictement nécessaires au fonctionnement du site sont déposés sans consentement. Tout cookie de mesure d’audience ou de
        marketing ne sera déposé qu’avec votre accord préalable et pourra être retiré à tout moment.
      </p>
      <ul>
        <li>
          <strong>Google Analytics (gtag.js)</strong> — Finalité: mesure d’audience et analyse de l’usage du site. Éditeur: Google LLC. Base légale: consentement.
          Durée: jusqu’à 13 mois (selon la configuration de Google). Vous pouvez retirer votre consentement à tout moment depuis le bandeau (lorsqu’il est proposé)
          ou via les paramètres de votre navigateur.
        </li>
      </ul>

      <h2>Sécurité</h2>
      <p>
        Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour assurer la sécurité de vos données.
      </p>

      <h2>Mises à jour</h2>
      <p>
        La présente politique peut être mise à jour. Dernière mise à jour : 05/10/2025.
      </p>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useHead, useRequestURL } from '#imports'

const url = useRequestURL()
useHead({
  title: 'Politique de confidentialité · UniAppli',
  meta: [
    { name: 'description', content: 'Politique de confidentialité d’UniAppli (RGPD) : traitements, bases légales, durées, droits et cookies.' }
  ],
  link: [ { rel: 'canonical', href: url.href } ]
})
</script>

<script setup lang="ts">
// Page statique Politique de confidentialité
</script>
