import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
$(document).ready(function (){
    var form = document.getElementById('payment-form');
    if(form){
        // On instancie Stripe et on lui passe notre clé publique
        let stripe = Stripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

        // Initialise les éléments du formulaire
        let elements = stripe.elements();

        // Récupère l'élement button
        let cardButton = document.getElementById('card-button');
        
        // Récupère l'élément qui contiendra le nom du titulaire de la carte
        let cardholderName = document.getElementById('cardholder-name');

        // Récupère l'attribut data-secret du bouton
        let clientSecret = cardButton.dataset.secret;

        // Crée les éléments de carte et les stocke dans la variable card
        let card = elements.create("card", {
            style: {
            base: {
                iconColor: '#f2f2f2',
                color: '#f2f2f2',
                fontWeight: '400',
                fontSize: '16px',
                '::placeholder': {
                color: '#AFAFAF',
                },
            },
            invalid: {
                iconColor: '#FFC7EE',
                color: '#FFC7EE',
            },
            },
        });
        card.mount("#card-element");
        card.addEventListener('change', function(event) {
            // On récupère l'élément qui permet d'afficher les erreurs de saisie
            let displayError = document.getElementById('card-errors');

            // Si il y a une erreur
            if (event.error) {
                // On l'affiche
                displayError.innerText = event.error.message;
            } else {
                // Sinon on l'efface
                displayError.innerText = '';
            }
        });
        cardButton.addEventListener('click', function(event) {
            event.preventDefault();

            var valid = true;
            var name = $('#cardholder-name').val();
            var email = $('#email').val();
            if (name.trim() == "") {
                valid = false;
            }
            if (email.trim() == "") {
                valid = false;
            }
            if(valid == false) {
                var errorElement = document.getElementById('card-errors');
                errorElement.innerText = "Veuillez remplir tous les champs !";
            } else {
                stripe.handleCardPayment(
                    clientSecret, card, {
                        receipt_email: document.getElementById('email').value,
                        payment_method_data: {
                            billing_details: {name: cardholderName.value}
                        }
                    }
                ).then(function(result) {
                    // Quand on reçoit une réponse
                    if (result.error) {
                        // Si on a une erreur, on l'affiche
                        document.getElementById("errors").innerText = result.error.message;
                    } else {
                        // Sinon on redirige l'utilisateur
                        form.submit();
                    }
                });
                // stripe.createToken(card).then(function(result) {
                //     if (result.error) {
                //         // Inform the customer that there was an error.
                //         var errorElement = document.getElementById('card-errors');
                //         errorElement.innerText = result.error.message;
                //     } else {
                //         // Send the token to your server.
                //         stripeTokenHandler(result.token);
                //     }
                // });
            }
        });
        // function stripeTokenHandler(token) {
        //     // Insert the token ID into the form so it gets submitted to the server
        //     var form = document.getElementById('payment-form');
        //     var hiddenInput = document.createElement('input');
        //     hiddenInput.setAttribute('type', 'hidden');
        //     hiddenInput.setAttribute('name', 'stripeToken');
        //     hiddenInput.setAttribute('value', token.id);
        //     form.appendChild(hiddenInput);
            
        //     // Submit the form
        //     form.submit();
        // }
    }
});