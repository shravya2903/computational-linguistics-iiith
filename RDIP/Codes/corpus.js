//corpus sentences in English and Hindi.
var English = '{"sentences":['+
'{"1":["a":"John‌ ‌ate‌ ‌an‌ ‌apple‌ ‌before‌ ‌afternoon","b":"before afternoon John ate an apple","c":"John before afternoon ate an apple"]},'+
'{"2":["a":"some students like to study in the night","b":"at night some students like to study"]},'+
'{"3":["a":"John and Mary went to church","b":"Mary and John went to church"]},'+
'{"4":["a":"John went to church after eating","b":"after eating John went to church","c":"John after eating went to church"]},'+
'{"5":["a":"did he go to market","b":"he did go to market"]},'+
'{"6":["a":"the woman who called my sister sells cosmetics","b":"the woman who sells cosmetics called my sister","c":"my sister who sells cosmetics called the woman","d":"my sister who called the woman sells cosmetics"]},'+
'{"7":["a":"John goes to the library and studies","b":"John studies and goes to the library"]},'+
'{"8":["a":"John ate an apple so did she","b":"she ate an apple so did John"]},'+
'{"9":["a":"the teacher returned the book after she noticed the error","b":"the teacher noticed the error after she returned the book","c":"after the teacher returned the book she noticed the error","d":"after the teacher noticed the error she returned the book","e":"she returned the book after the teacher noticed the error","f":"she noticed the error after the teacher returned the book","g":"after she returned the book the teacher noticed the error","h":"after she noticed the error the teacher returned the book"]},'+
'{"10":["a":"I told her that I bought a book yesterday","b":"I told her yesterday that I bought a book","c":"yesterday I told her that I bought a book","d":"I bought a book that I told her yesterday","e":"I bought a book yesterday that I told her","f":"yesterday I bought a book that I told her"]}]}';
var Hindi = '{"sentences":['+
'{"1":["a":"राम और श्याम बाजार गयें","b":"राम और श्याम गयें बाजार ", "c":"बाजार गयें राम और श्याम","d":"गयें बाजार राम और श्याम" },'+
'{"2":["a":"राम सोया और श्याम भी","b":"श्याम सोया और राम भी","c":"सोया श्याम और राम भी","d":"सोया राम और श्याम भी"]},'+
'{"3":["a":"मैंने उसे बताया कि राम सो रहा है","b":"मैंने उसे बताया कि सो रहा है राम","c":"उसे मैंने बताया कि राम सो रहा है", "d":"उसे मैंने बताया कि सो रहा है राम", "e":"मैंने बताया उसे कि राम सो रहा है", "f":"मैंने बताया उसे कि सो रहा है राम", "g":"उसे बताया मैंने कि राम सो रहा है", "h":"उसे बताया मैंने कि सो रहा है राम", "i":"बताया मैंने उसे कि राम सो रहा है", "j":"बताया मैंने उसे कि सो रहा है राम", "k":"बताया उसे मैंने कि राम सो रहा है", "l":"बताया उसे मैंने कि सो रहा है राम"]},'+
'{"4":["a":"राम खाकर सोया", "b":"खाकर राम सोया", "c":"राम सोया खाकर", "d":"खाकर सोया राम", "e":"सोया राम खाकर", "f":"सोया खाकर राम"]},'+
'{"5":["a":"बिल्लियों को मारकर कुत्ता सो गया","b":"मारकर बिल्लियों को कुत्ता सो गया","c":"बिल्लियों को मारकर सो गया कुत्ता","d":"मारकर बिल्लियों को सो गया कुत्ता","e":"कुत्ता सो गया बिल्लियों को मारकर","f":"कुत्ता सो गया मारकर बिल्लियों कोe","g":"सो गया कुत्ता बिल्लियों को मारकर","h":"सो गया कुत्ता मारकर बिल्लियों को"]},'+
'{"6":["a":"एक लाल किताब वहाँ है","b":"एक लाल किताब है वहाँ","c":"वहाँ है एक लाल किताब","d":"है वहाँ एक लाल किताबe"]},'+
'{"7":["a":"एक बड़ी सी किताब वहाँ है","b":"एक बड़ी सी किताब है वहाँ","c":"बड़ी सी एक किताब वहाँ है","d":"बड़ी सी एक किताब है वहाँ", "e":"वहाँ है एक बड़ी सी किताब", "f":"वहाँ है बड़ी सी एक किताब", "g":"है वहाँ एक बड़ी सी किताब","h":"है वहाँ बड़ी सी एक किताब"]}]}';

//obj = JSON.parse(English);
//document.write(obj.sentences[1].1.a);