var twinClass = [];
class Twin {constructor(pattern, template) {this.pattern = pattern;this.template = template;}}
/*
    TWIN TAIL CSS
    (C) 2023 TwinTailCSS
    (C) 2023 D1hydr0gen
    
    https://twintailcss.com 
    https://github.com/d1hydr0gen/twintailcss
*/

// Width and Height Classes
twinClass.push(new Twin(/^w-(\d{1,3})$/, ".w-[1]{ width: [1]px; }"));
twinClass.push(new Twin(/^h-(\d{1,3})$/, ".h-[1]{ height: [1]px; }"));
twinClass.push(new Twin(/^h-full$/, ".h-full{ height: 100%; }"));
twinClass.push(new Twin(/^h-screen$/, ".h-screen{ height: 100vh; }"));
twinClass.push(new Twin(/^w-full$/, ".w-full{ width: 100%; }"));
twinClass.push(new Twin(/^w-screen$/, ".w-screen{ width: 100vw; }"));
twinClass.push(new Twin(/^h-auto$/, ".h-auto{ height: auto; }"));
twinClass.push(new Twin(/^w-auto$/, ".w-auto{ width: auto; }"));

// Position and Alignment Classes
twinClass.push(new Twin(/^everything-center$/, ".everything-center{ text-align: center; align-items: center; justify-content: center; display: flex; flex-direction: column; margin: 0; padding: 0; }"));
twinClass.push(new Twin(/^text-center$/, ".text-center{ text-align: center; }"));
twinClass.push(new Twin(/^items-center$/, ".items-center{ align-items: center; }"));
twinClass.push(new Twin(/^justify-center$/, ".justify-center{ justify-content: center; }"));

twinClass.push(new Twin(/^top-(\d{1,3})$/, ".top-[1] { top: [1]; }"));
twinClass.push(new Twin(/^bottom-(\d{1,3})$/, ".bottom-[1] { bottom: [1]; }"));
twinClass.push(new Twin(/^left-(\d{1,3})$/, ".left-[1] { left: [1]; }"));
twinClass.push(new Twin(/^right-(\d{1,3})$/, ".right-[1] { right: [1]; }"));

twinClass.push(new Twin(/^static$/, ".static { position: static; }"));
twinClass.push(new Twin(/^fixed$/, ".fixed { position: fixed; }"));
twinClass.push(new Twin(/^absolute$/, ".absolute { position: absolute; }"));
twinClass.push(new Twin(/^relative$/, ".relative { position: relative; }"));
twinClass.push(new Twin(/^sticky$/, ".sticky { position: sticky; }"));


// Margin and Padding Classes
twinClass.push(new Twin(/^m-(\d{1,3})$/, ".m-[1]{ margin: [1]px; }"));
twinClass.push(new Twin(/^p-(\d{1,3})$/, ".p-[1]{ padding: [1]px; }"));

// Text & Font Classes
twinClass.push(new Twin(/^font-bold$/, ".font-bold{ font-weight: bold; }"));
twinClass.push(new Twin(/^font-extrabold$/, ".font-extrabold{ font-weight: 800; }"));
twinClass.push(new Twin(/^font-italic$/, ".font-italic{ font-style: italic; }"));
twinClass.push(new Twin(/^font-underline$/, ".font-underline{ text-decoration: underline; }"));

twinClass.push(new Twin(/^text-(\d{1,3})$/, ".text-[1]{ font-size: [1]px; }"));

// Text Alignment Classes
twinClass.push(new Twin(/^text-left$/, ".text-left{ text-align: left; }"));
twinClass.push(new Twin(/^text-right$/, ".text-right{ text-align: right; }"));
twinClass.push(new Twin(/^text-justify$/, ".text-justify{ text-align: justify; }"));

// Display Classes
twinClass.push(new Twin(/^block$/, ".block{ display: block; }"));
twinClass.push(new Twin(/^inline$/, ".inline{ display: inline; }"));
twinClass.push(new Twin(/^inline-block$/, ".inline-block{ display: inline-block; }"));
twinClass.push(new Twin(/^hidden$/, ".hidden{ display: none; }"));

// Border Classes
twinClass.push(new Twin(/^border$/, ".border{ border: 1px solid #000; }"));
twinClass.push(new Twin(/^border-2$/, ".border-2{ border-width: 2px; }"));
twinClass.push(new Twin(/^border-dashed$/, ".border-dashed{ border-style: dashed; }"));
twinClass.push(new Twin(/^border-rounded$/, ".border-rounded{ border-radius: 0.25rem; }"));

// Background Image Classes
twinClass.push(new Twin(/^bg-image-(\S+)$/, ".bg-image-[1]{ background-image: url('[1]'); }"));
twinClass.push(new Twin(/^bg-cover$/, ".bg-cover{ background-size: cover; }"));
twinClass.push(new Twin(/^bg-center$/, ".bg-center{ background-position: center; }"));

// Flexbox Classes
twinClass.push(new Twin(/^flex$/, ".flex{ display: flex; }"));
twinClass.push(new Twin(/^flex-col$/, ".flex-col{ flex-direction: column; }"));
twinClass.push(new Twin(/^flex-wrap$/, ".flex-wrap{ flex-wrap: wrap; }"));
twinClass.push(new Twin(/^items-start$/, ".items-start{ align-items: flex-start; }"));

// Rounded Corners
twinClass.push(new Twin(/^rounded$/, ".rounded{ border-radius: 0.25rem; }"));
twinClass.push(new Twin(/^rounded-full$/, ".rounded-full{ border-radius: 9999px; }"));
twinClass.push(new Twin(/^rounded-top$/, ".rounded-top{ border-radius: 0.25rem 0.25rem 0 0; }"));
twinClass.push(new Twin(/^rounded-bottom$/, ".rounded-bottom{ border-radius: 0 0 0.25rem 0.25rem; }"));
twinClass.push(new Twin(/^rounded-left$/, ".rounded-left{ border-radius: 0.25rem 0 0 0.25rem; }"));
twinClass.push(new Twin(/^rounded-right$/, ".rounded-right{ border-radius: 0 0.25rem 0.25rem 0; }"));

// Color And Opacity Classes
twinClass.push(new Twin(/^bg-(\d{1,3})-(\d{1,3})-(\d{1,3})$/, ".bg-[1]-[2]-[3]{ background-color: rgb([1],[2],[3]); }"));
twinClass.push(new Twin(/^text-(\d{1,3})-(\d{1,3})-(\d{1,3})$/, ".text-[1]-[2]-[3]{ color: rgb([1],[2],[3]); }"));
twinClass.push(new Twin(/^opacity-(\d{1,3})?$/, ".opacity-[1]{ opacity: [1]%; }"));


/*
    TWIN TAIL CSS LOGICS
*/
function init() {
    var styleElement = document.createElement('style');
    document.head.appendChild(styleElement);

    var allElements = document.getElementsByTagName('*');
    var classesByTag = {};

    for (var i = 0; i < allElements.length; i++) {
        var element = allElements[i];
        var tagName = element.tagName;
        var classes = Array.from(element.classList);
        if (!classesByTag[tagName]) {
            classesByTag[tagName] = [];
        }
        classesByTag[tagName] = classesByTag[tagName].concat(classes);
    }
    for (var tagName in classesByTag) {
        var classes = classesByTag[tagName];
        for (var i = 0; i < classes.length; i++) {
            let className = classes[i];
            for( let twin of twinClass ){
                let match = className.match(twin.pattern);
                if (match) {
                    let replacedString = twin.template.replaceAll("[1]",match[1]);
                    replacedString = replacedString.replaceAll("[2]",match[2]);
                    replacedString = replacedString.replaceAll("[3]",match[3]);
                    replacedString = replacedString.replaceAll("[4]",match[4]);
                    replacedString = replacedString.replaceAll("[5]",match[5]);
                    styleElement.appendChild(document.createTextNode(replacedString));
                }
            }
        }
    }
}

window.onload = function(){
    init();
};
