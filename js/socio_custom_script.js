jQuery(document).ready(function($){
    //alert('hi');
/*-----------------------Info-pages - Main -Menu---------------------*/
    var tab = window.location.hash.substr(1);
    if(tab == 'signin-page') {
        $('a[data-toggle="tab"][href="#sign-in"]').click();
    }
    else {
        $('a[data-toggle="tab"][href="#'+tab+'"]').click();
    }
    if($(window).width() > 767) {
        $(window).scrollTop(0);
    }


    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var href = $(e.target).attr('href');
        window.location.hash = href;
        if(href == '#signin-page') {
            $('a[data-toggle="tab"][href="#sign-in"]').click();
        }
        if($(window).width() > 767) {
            $(window).scrollTop(0);
        }
    });
/*-----------------------------------------------*/
    $('input.in-box').keyup(function()
    {
        $(".in-box-result").show();
        if($(this).val()) {
            $(".in-box-result").show()
        }else{
            $(".in-box-result").hide();
        }
    });
    $('input.showme-effect').keyup(function()
    {
        $(".showme-box-result").show();
        if($(this).val()) {
            $(".showme-box-result").show();
        }else{
            $(".showme-box-result").hide();
        }
    });
    $(document).on('click','.in-box-result ul li', function () {
        $countryName = $(this).text();
        $("input.open-country-dropbox:text").val($countryName);
        $(".in-box-result").hide();
    });
    $(document).on('click','.showme-box-result ul li', function () {
        $communityName = $(this).text();
        $("input.open-community-dropbox:text").val($communityName);
        $(".showme-box-result").hide();
    });
/*-------------------------------------search-result-page-----------------------------*/
    $('[data-toggle="tooltip"]').tooltip();
    $(".filtering-result-listing .filtering-full-result:first-child").addClass("filter-active-result");
    $(document).on('click','.filtering-full-result',function(){
        $(this).addClass('filter-active-result');
        $(this).siblings().removeClass('filter-active-result');
        $('.selected-member-bio').removeClass('member-bio-active');
        $(this).next('.selected-member-bio ').addClass('member-bio-active');
    });
    $(document).on('click','.filtering-full-result',function(){
        $(this).addClass('filter-active-result');
        $(this).siblings().removeClass('filter-active-result');
        $('.selected-member-bio').removeClass('member-bio-active');
        $(this).next('.selected-member-bio').addClass('member-bio-active');
    });
    $(document).on('click','.filtering-full-result',function(){
        $(this).parents('.left-result-listing').siblings('.right-full-result').find('.computer-version-bio').addClass('member-bio-active');
    });
    $(document).on('click','.close-profile',function(){
       $(this).parents('.selected-member-bio').removeClass('member-bio-active');
    });
    $(document).on('click','.follow-the-member > span.search-follow',function(){
        $(this).toggleClass('followed');
        $(this).text($(this).text() == 'Follow' ? 'Followed' : 'Follow');
    });
    $(document).on('mouseover','.follow-the-member > span.followed',function(){
        $(this).text("Unfollow");
    });
    $(document).on('mouseout','.follow-the-member > span.followed',function(){
        $(this).text("Followed");
    });
/*--------------------------------------Write-blog----------------------------*/
    $('#editor').keyup(function()
    {
        $(".custom-highlight-text").show();
    });
    $(document).on('click','img.dislike-image',function(){
        $(this).hide();
        $(this).siblings('img.like-image').show();
    });
    $(document).on('click','img.like-image',function(){
        $(this).hide();
        $(this).siblings('img.dislike-image').show();
    });
/*------------------------------------profile-page-------------------------*/
    $(document).on('click','li.user-profile-tags img',function(){
        $(this).parents('li.user-profile-tags').hide();
    });
/*----------------------------FAQs-page----------------------------------------*/
$(document).on('click','.faq-title',function(){
    $(this).parents('.faq-detail').siblings('.faq-detail').find('.faq-text').hide();
    $(this).siblings('.faq-text').slideToggle();
});
/*--------------------------Latest-Messages and Notifications----------------------*/
    $(document).on('click','ul li.profile-symbol img',function(){
        $('ul.open-settings-dropdpwn').toggle();
    });
    $(document).on('click','ul li.search-chat-symbol a.notify ',function(e){
        e.preventDefault();
    });
    $(document).on('click','ul li.search-notification-symbol a.notify ',function(e){
        e.preventDefault();
    });
    $(document).on('click','ul li.search-chat-symbol',function(){
        $('.latest-notifications-box').hide();
        $('.latest-messages-box').toggle();
    });
    $(document).on('click','ul li.search-notification-symbol',function(){
        $('.latest-messages-box').hide();
        $('.latest-notifications-box').toggle();
    });
/*------------------------------Organization-profile-----------------------------*/
    $(document).on('click','ul.organization-verify-profile-section li.follow-button > button',function(){
        $(this).toggleClass('followed');
        $(this).text($(this).text() == 'Follow' ? 'Followed' : 'Follow');
    });
    $(document).on('mouseover','ul.organization-verify-profile-section li button.followed',function(){
        $(this).text("Unfollow");
    });
    $(document).on('mouseout','ul.organization-verify-profile-section li button.followed',function(){
        $(this).text("Followed");
    });
});
