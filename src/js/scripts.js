$('.dropdown-arrow').on('click', function () {
    $(this).toggleClass('open');
    $(this.parentNode).toggleClass('open');
});
$('input.city-field').keyup(function() {
    var el = $(this).parent();
    if ($(this).val()) {
        el.addClass('value');
    } else {
        el.removeClass('value');
    }
});
$('.clear-field').click(function () {
    console.log(this.value);
    $('input.city-field').val('');
});
$.ajax({
    url: "girls.json"
}).done(function(data) {
    var girls = data;
    girls.map(function (girl) {
        $('#new').append(
            `
                <div class=" col-xl-3 col-md-4 col-sm-6 col-12">
                <div class="filter-view_card">
                    <div class="filter-view_card_image" style="background-image: url('${girl.avatar}')">
                        <span class="filter-view_card_photo">${girl.photos}</span>
                        ${(girl.top === true)?('<span class="filter-view_card_top">TOP</span>'):('')}
                    </div>
                    <div class="filter-view_card_fav-chat-bar">
                        <div class="bar-item favorite">Избранное</div>
                        <div class="bar-item message">Написать</div>
                    </div>
                    <div class="filter-view_card_user-info">
                        <div class="name">${girl.name}, ${girl.age}<span class="online-status
                            ${(girl.online === true)?('online'):('')}
                        "></span></div>
                        <div class="user-geo">${girl.geo}</div>
                    </div>
                </div>
            </div>
            `
        );
        $('#online').append(
            (girl.online === true)?(
                `
                    <div class=" col-xl-3 col-md-4 col-sm-6 col-12">
                    <div class="filter-view_card">
                        <div class="filter-view_card_image" style="background-image: url('${girl.avatar}')">
                            <span class="filter-view_card_photo">${girl.photos}</span>
                            ${(girl.top === true)?('<span class="filter-view_card_top">TOP</span>'):('')}
                        </div>
                        <div class="filter-view_card_fav-chat-bar">
                            <div class="bar-item favorite">Избранное</div>
                            <div class="bar-item message">Написать</div>
                        </div>
                        <div class="filter-view_card_user-info">
                            <div class="name">${girl.name}, ${girl.age}<span class="online-status
                                ${(girl.online === true)?('online'):('')}
                            "></span></div>
                            <div class="user-geo">${girl.geo}</div>
                        </div>
                    </div>
                </div>
                `
            ):('')
        );
        $('#top').append(
            (girl.top === true)?(
                `
                    <div class=" col-xl-3 col-md-4 col-sm-6 col-12">
                    <div class="filter-view_card">
                        <div class="filter-view_card_image" style="background-image: url('${girl.avatar}')">
                            <span class="filter-view_card_photo">${girl.photos}</span>
                            ${(girl.top === true)?('<span class="filter-view_card_top">TOP</span>'):('')}
                        </div>
                        <div class="filter-view_card_fav-chat-bar">
                            <div class="bar-item favorite">Избранное</div>
                            <div class="bar-item message">Написать</div>
                        </div>
                        <div class="filter-view_card_user-info">
                            <div class="name">${girl.name}, ${girl.age}<span class="online-status
                                ${(girl.online === true)?('online'):('')}
                            "></span></div>
                            <div class="user-geo">${girl.geo}</div>
                        </div>
                    </div>
                </div>
                `
            ):('')
        )
    })
});
$('.filter-view_bar li').click(function () {
    var href = this.dataset.href;
    $('.filter-view_card-wrapper').css('display', 'none');
    $( '.filter-view_card-wrapper' ).each(function (i) {
        var cards =  $( '.filter-view_card-wrapper' );
        if(cards[i].dataset.target == href){
            $(cards[i]).css('display', 'flex')
        }
    });

});
$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });
    $('#scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});

$('.mobile-menu').click(function () {
    $('.mobile-menu').parent().toggleClass('open');
});