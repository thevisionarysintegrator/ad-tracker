function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

var sourceparam = getUrlParameter('source_id');
var source = Cookies.get('source_id');
if (source == null || source == ""){
	if (sourceparam != "") {
		Cookies.set('source_id', sourceparam, { expires: 365 });}
	else{
		Cookies.set('source_id', 'wo', { expires: 365 });}} //If no source URL Parameter present, then assume source was 'wo' or 'website organic'

var targetparam = getUrlParameter('target_id');
var target = Cookies.get('target_id');
if (target == null || target == ""){
	if (targetparam != "") {
		Cookies.set('target_id', targetparam, { expires: 365 });}}
 
var adparam = getUrlParameter('ad_id');
var ad = Cookies.get('ad_id');
if (ad == null || ad == ""){
	if (adparam != "") {
		Cookies.set('ad_id', adparam, { expires: 365 });}}

var fbclidparam = getUrlParameter('fbclid');
var fbclid = Cookies.get('fbclid');
if (fbclid == null || fbclid == ""){
	if (fbclidparam != "") {
		Cookies.set('campaign_id', fbclidparam, { expires: 365 });}}
 
