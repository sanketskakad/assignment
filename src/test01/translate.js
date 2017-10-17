export default translateLang;

function translateLang($translateProvider) {
    $translateProvider.translations('en', {
        Header1: 'Book An Appointment',
        Header2: 'Our Investing Topic',
        Header3: "Pick a topic, then we'll find a time and place",
        Button1: 'English',
        Button2: 'French',
        BackButton: 'Return to previous screen'

    });
    $translateProvider.translations('fr', {
        Header1: 'Prenez rendez-vous',
        Header2: "Notre sujet d'investissement",
        Header3: "Choisissez un sujet, puis nous trouverons un moment et un lieu",
        Button1: 'English',
        Button2: 'le français',
        BackButton: "Retour à l'écran précédent"
    });

    $translateProvider.preferredLanguage('en');

}