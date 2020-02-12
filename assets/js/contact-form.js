/*
 --------------------------------
 Ajax Contact Form
 --------------------------------
 + https://github.com/mehedidb/Ajax_Contact_Form
 + A Simple Ajax Contact Form developed in PHP with HTML5 Form validation.
 + Has a fallback in jQuery for browsers that do not support HTML5 form validation.
 + version 1.0.1
 + Copyright 2016 Mehedi Hasan Nahid
 + Licensed under the MIT license
 + https://github.com/mehedidb/Ajax_Contact_Form
 */

(function ($, window, document, undefined) {
    'use strict';
    $(".reload").click(function () {
        location.reload(forcedReload);
    })

    $("input[data-type='currency']").on({
        keyup: function () {
            formatCurrency($(this));
        },
        blur: function () {
            formatCurrency($(this), "blur");
        }
    });

    $('#attendees').keyup(function () {
        var eventtype = $("#eventtype").val()
        var status = $("#status").val();
        var attendees = $(this).val();
        if (status === "Guest") {
            if (eventtype === "Lunch") {
                if (attendees !== "0" || attendees !== "") {
                    var totalattendee = parseInt(attendees) * 21500
                    $("#AmountToPay").text(PriceFormat(totalattendee));
                } else {
                    $("#AmountToPay").text(PriceFormat(0));
                }
            } else if (eventtype === "Dinner") {
                if (attendees !== "0" || attendees !== "") {
                    var totalattendee = parseInt(attendees) * 24000
                    $("#AmountToPay").text(PriceFormat(totalattendee));
                } else {
                    $("#AmountToPay").text(PriceFormat(0));
                }
            }
        } else if (status === "Investor") {
            if (eventtype === "Lunch") {
                if (attendees !== "0" || attendees !== "") {
                    if (attendees >= 2) {
                        var totalattendee = (parseInt(attendees) - 1) * 21500
                        $("#AmountToPay").text(PriceFormat(totalattendee));
                    } else {
                        $("#AmountToPay").text(PriceFormat(0));
                    }
                } else {
                    $("#AmountToPay").text(PriceFormat(0));
                }
            } else if (eventtype === "Dinner") {
                if (attendees !== "0" || attendees !== "") {
                    if (attendees >= 2) {
                        var totalattendee = (parseInt(attendees) - 1) * 24000
                        $("#AmountToPay").text(PriceFormat(totalattendee));
                    } else {
                        $("#AmountToPay").text(PriceFormat(0));
                    }
                } else {
                    $("#AmountToPay").text(PriceFormat(0));
                }
            }
        }

    });

    $("#eventtype").change(function () {
        var eventtype = $(this).val();
        var status = $("#status").val();
        var attendees = $("#attendees").val();
        if (status === "Guest") {
            if (eventtype === "Lunch") {
                if (attendees !== "0" || attendees !== "") {
                    var totalattendee = parseInt(attendees) * 21500
                    $("#AmountToPay").text(PriceFormat(totalattendee));
                } else {
                    $("#AmountToPay").text(PriceFormat(0));
                }
            } else if (eventtype === "Dinner") {
                if (attendees !== "0" || attendees !== "") {
                    var totalattendee = parseInt(attendees) * 24000
                    $("#AmountToPay").text(PriceFormat(totalattendee));
                } else {
                    $("#AmountToPay").text(PriceFormat(0));
                }
            }
        } else if (status === "Investor") {
            if (eventtype === "Lunch") {
                if (attendees !== "0" || attendees !== "") {
                    if (attendees >= 2) {
                        var totalattendee = (parseInt(attendees) - 1) * 21500
                        $("#AmountToPay").text(PriceFormat(totalattendee));
                    } else {
                        $("#AmountToPay").text(PriceFormat(0));
                    }
                } else {
                    $("#AmountToPay").text(PriceFormat(0));
                }
            } else if (eventtype === "Dinner") {
                if (attendees !== "0" || attendees !== "") {
                    if (attendees >= 2) {
                        var totalattendee = (parseInt(attendees) - 1) * 24000
                        $("#AmountToPay").text(PriceFormat(totalattendee));
                    } else {
                        $("#AmountToPay").text(PriceFormat(0));
                    }
                } else {
                    $("#AmountToPay").text(PriceFormat(0));
                }
            }
        }
    });

    $("#status").change(function () {
        var status = $(this).val();
        var eventtype = $("#eventtype").val();
        var attendees = $("#attendees").val();
        if (status === "Guest") {
            if (eventtype === "Lunch") {
                if (attendees !== "0" || attendees !== "") {
                    var totalattendee = parseInt(attendees) * 21500
                    $("#AmountToPay").text(PriceFormat(totalattendee));
                } else {
                    $("#AmountToPay").text(PriceFormat(0));
                }
            } else if (eventtype === "Dinner") {
                if (attendees !== "0" || attendees !== "") {
                    var totalattendee = parseInt(attendees) * 24000
                    $("#AmountToPay").text(PriceFormat(totalattendee));
                } else {
                    $("#AmountToPay").text(PriceFormat(0));
                }
            }
        } else if (status === "Investor") {
            if (eventtype === "Lunch") {
                if (attendees !== "0" || attendees !== "") {
                    if (attendees >= 2) {
                        var totalattendee = (parseInt(attendees) - 1) * 21500
                        $("#AmountToPay").text(PriceFormat(totalattendee));
                    } else {
                        $("#AmountToPay").text(PriceFormat(0));
                    }
                } else {
                    $("#AmountToPay").text(PriceFormat(0));
                }
            } else if (eventtype === "Dinner") {
                if (attendees !== "0" || attendees !== "") {
                    if (attendees >= 2) {
                        var totalattendee = (parseInt(attendees) - 1) * 24000
                        $("#AmountToPay").text(PriceFormat(totalattendee));
                    } else {
                        $("#AmountToPay").text(PriceFormat(0));
                    }
                } else {
                    $("#AmountToPay").text(PriceFormat(0));
                }
            }
        }
    });


    var $form = $("#contact-form");

    $form.submit(function (e) {
        // remove the error class
        $('.form-group').removeClass('has-error');
        $('.help-block').remove();

        // get the form data
        var formData = {
            'firstname': $('input[name="form-firstname"]').val(),
            'lastname': $('input[name="form-lastname"]').val(),
            'phone': $('input[name="form-phone"]').val(),
            'email': $('input[name="form-email"]').val(),
            'attendees': $('input[name="form-attendees"]').val(),
            'amount': "₦" + $('input[name="form-amount"]').val(),
            'eventtype': $('select[name="form-eventtype"]').val(),
            'amounttopay': $("#AmountToPay").text(),
            'status': $('select[name="form-status"]').val(),
        };
        if (formData.firstname !== "" || formData.lastname !== "" || formData.phone !== "" || formData.email !== "") {
            payWithPaystack(formData);
        } else {
            $form.html('<div class="alert alert-error">Please fill all inputs and reload the page to continue</div>');
        }
        e.preventDefault();
    });

    function payWithPaystack(formData) {
        var userDetail = formData.lastname + " " + formData.firstname;
        var paymentType = "Peinmoney Registration Fees";
        var useramount = formData.amounttopay;
        useramount = useramount.replace("₦", "");
        useramount = useramount.replace(",", "");
        var amttopay = parseInt(useramount + "00");
        if (amttopay !== 0) {
            var handler = PaystackPop.setup({
                // key: 'pk_test_b3685f824518679567d6356e2636fc184878e833', //put your public key here
                key: 'pk_live_aceff15435501dee6cc0007087b25992b08b8987', //put your public key here
                email: formData.email, //put your customer's email here
                amount: amttopay, //amount the customer is supposed to pay
                metadata: {
                    custom_fields: [{
                            display_name: "Customer Name",
                            variable_name: "Customer Name",
                            value: userDetail
                        },
                        {
                            display_name: "Payment Type",
                            variable_name: "Payment Type",
                            value: paymentType
                        }
                    ]
                },
                callback: function (response) {
                    formData["reference"] = response.reference;
                    var responseData = {
                        'reference': response.reference
                    };
                    $("#apploader").removeClass("d-none");
                    $.ajax({
                        type: 'POST',
                        url: './assets/email/verify.php',
                        data: responseData,
                        dataType: 'json',
                        encode: true
                    }).done(function (result) {
                        if (result.success === true) {
                            $.ajax({
                                type: 'POST',
                                url: './assets/email/contact.php',
                                data: formData,
                                dataType: 'json',
                                encode: true
                            }).done(function (data) {
                                // handle errors
                                $("#apploader").addClass("d-none");
                                if (!data.success) {
                                    $("#apploader").addClass("d-none");
                                    if (data.errors.firstname) {
                                        $('#firstname').addClass('has-error');
                                        $('#firstname').find('.form-input').append('<span class="help-block">' + data.errors.name + '</span>');
                                    }

                                    if (data.errors.email) {
                                        $('#email').addClass('has-error');
                                        $('#email').find('.form-input').append('<span class="help-block">' + data.errors.email + '</span>');
                                    }

                                    if (data.errors.lastname) {
                                        $('#lastname').addClass('has-error');
                                        $('#lastname').find('.form-input').append('<span class="help-block">' + data.errors.item + '</span>');
                                    }

                                    if (data.errors.phone) {
                                        $('#phone').addClass('has-error');
                                        $('#phone').find('.form-input').append('<span class="help-block">' + data.errors.phone + '</span>');
                                    }

                                    if (data.errors.attendees) {
                                        $('#attendees').addClass('has-error');
                                        $('#attendees').find('.form-input').append('<span class="help-block">' + data.errors.attendees + '</span>');
                                    }

                                    if (data.errors.amount) {
                                        $('#amount').addClass('has-error');
                                        $('#amount').find('.form-input').append('<span class="help-block">' + data.errors.amount + '</span>');
                                    }

                                    if (data.errors.eventtype) {
                                        $('#eventtype').addClass('has-error');
                                        $('#eventtype').find('.form-input').append('<span class="help-block">' + data.errors.eventtype + '</span>');
                                    }
                                    if (data.errors.status) {
                                        $('#status').addClass('has-error');
                                        $('#status').find('.form-input').append('<span class="help-block">' + data.errors.status + '</span>');
                                    }
                                } else {
                                    $("#apploader").addClass("d-none");
                                    $form.html('<div class="alert alert-success">' + data.message + '</div>');
                                }
                            }).fail(function (data) {
                                $("#apploader").addClass("d-none");
                                $form.html('<div class="alert alert-error">' + data.message + '</div>');
                            });
                        } else {
                            $("#apploader").addClass("d-none");
                            $form.html('<div class="alert alert-error"> Transaction was not successful</div>');
                        }
                    });
                },
                onClose: function () {
                    //when the user close the payment modal
                    $form.html('<div class="alert alert-error">' + 'Transaction cancelled' + '</div>');
                }
            });
            handler.openIframe(); //open the paystack's payment modal
        } else {
            $("#apploader").removeClass("d-none");
            $.ajax({
                type: 'POST',
                url: './assets/email/contact.php',
                data: formData,
                dataType: 'json',
                encode: true
            }).done(function (data) {
                // handle errors
                $("#apploader").addClass("d-none");
                if (!data.success) {
                    $("#apploader").addClass("d-none");
                    if (data.errors.firstname) {
                        $('#firstname').addClass('has-error');
                        $('#firstname').find('.form-input').append('<span class="help-block">' + data.errors.name + '</span>');
                    }

                    if (data.errors.email) {
                        $('#email').addClass('has-error');
                        $('#email').find('.form-input').append('<span class="help-block">' + data.errors.email + '</span>');
                    }

                    if (data.errors.lastname) {
                        $('#lastname').addClass('has-error');
                        $('#lastname').find('.form-input').append('<span class="help-block">' + data.errors.item + '</span>');
                    }

                    if (data.errors.phone) {
                        $('#phone').addClass('has-error');
                        $('#phone').find('.form-input').append('<span class="help-block">' + data.errors.phone + '</span>');
                    }

                    if (data.errors.attendees) {
                        $('#attendees').addClass('has-error');
                        $('#attendees').find('.form-input').append('<span class="help-block">' + data.errors.attendees + '</span>');
                    }

                    if (data.errors.amount) {
                        $('#amount').addClass('has-error');
                        $('#amount').find('.form-input').append('<span class="help-block">' + data.errors.amount + '</span>');
                    }

                    if (data.errors.eventtype) {
                        $('#eventtype').addClass('has-error');
                        $('#eventtype').find('.form-input').append('<span class="help-block">' + data.errors.eventtype + '</span>');
                    }
                    if (data.errors.status) {
                        $('#status').addClass('has-error');
                        $('#status').find('.form-input').append('<span class="help-block">' + data.errors.status + '</span>');
                    }
                } else {
                    $("#apploader").addClass("d-none");
                    $form.html('<div class="alert alert-success">' + data.message + '</div>');
                }
            }).fail(function (data) {
                $("#apploader").addClass("d-none");
                $form.html('<div class="alert alert-error">' + data.message + '</div>');
            });
        }

    }

    function PriceFormat(price) {
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'NGN',
            minimumFractionDigits: 2
        });
        price = formatter.format(price);
        price = price.replace("NGN", "₦");
        return price.replace(".00", "");
    }

    function formatCurrency(input, blur) {
        // appends $ to value, validates decimal side
        // and puts cursor back in right position.

        // get input value
        var input_val = input.val();

        // don't validate empty input
        if (input_val === "") {
            return;
        }

        // original length
        var original_len = input_val.length;

        // initial caret position 
        var caret_pos = input.prop("selectionStart");

        // check for decimal
        if (input_val.indexOf(".") >= 0) {

            // get position of first decimal
            // this prevents multiple decimals from
            // being entered
            var decimal_pos = input_val.indexOf(".");

            // split number by decimal point
            var left_side = input_val.substring(0, decimal_pos);
            var right_side = input_val.substring(decimal_pos);

            // add commas to left side of number
            left_side = formatNumber(left_side);

            // validate right side
            right_side = formatNumber(right_side);

            // On blur make sure 2 numbers after decimal
            if (blur === "blur") {
                right_side += "00";
            }

            // Limit decimal to only 2 digits
            right_side = right_side.substring(0, 2);

            // join number by .
            input_val = left_side;

        } else {
            // no decimal entered
            // add commas to number
            // remove all non-digits
            input_val = formatNumber(input_val);

            // final formatting
            if (blur === "blur") {
                input_val;
            }
        }

        // send updated string to input
        input.val(input_val);

        // put caret back in the right position
        var updated_len = input_val.length;
        caret_pos = updated_len - original_len + caret_pos;
        input[0].setSelectionRange(caret_pos, caret_pos);
    }

    function formatNumber(n) {
        // format number 1000000 to 1,234,567
        return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    $("#myBtn").click(function () {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    });
}(jQuery, window, document));