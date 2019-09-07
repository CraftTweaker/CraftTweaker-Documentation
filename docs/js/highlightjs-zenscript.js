/*
Language: ZenScript
Author: Jared Luboff <jluboff8@gmail.com>
Description: ZenScript language support
*/
var module$1 = module$1 ? module$1 : {}; // shim for browser use

function hljsZenScript(hljs) {
  return {
    aliases: ["zenscript", "zs"],
    keywords: {
      keyword: "import var val in has void as version for return while break instanceof export new public expand extern interface continue enum virtual class throws const private implements get alias struct function if else false true null",
      title: " < >",
      literal: "",
      built_in: ""
    },
    contains: [{
      className: "keyword",
      begin: "<",
      contains: [{
        className: "literal",
        begin: "\\w+",
        end: ":|>",
        excludeEnd: true,
        endsWithParent: true
      }]
    }, {
      className: "section",
      begin: "\\w+\\."
    }, {
      className: "section",
      begin: "\\s\\w+\\."
    }, {
      className: "keyword",
      begin: ";"
    }, {
      className: "title",
      begin: "\\(|\\)|\\{|\\}|\\[|\\]"
    }, {
      className: "variable",
      begin: "as\\s",
      end: "\\w+",
      excludeBegin: true
    }, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.C_NUMBER_MODE, hljs.QUOTE_STRING_MODE, hljs.HASH_COMMENT_MODE]
  };
}

module$1.exports = function (hljs) {
  hljs.registerLanguage("zenscript", hljsZenScript);
};

module$1.exports.definer = hljsZenScript;
//# sourceMappingURL=highlightjs-zenscript.js.map
