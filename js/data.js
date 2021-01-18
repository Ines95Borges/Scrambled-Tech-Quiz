const html5 = ["a","abbr","acronym","address","applet","area","article","aside","audio","base","basefont","bdi","bdo","bgsound","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","decorator","del","details","dfn","dir","div","dl","dt","element","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset",
"h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","img","input","ins","isindex","kbd","keygen","label","legend","li","link","listing","main","map","mark","marquee","menu","menuitem","meta","meter","nav","nobr","noframes","noscript","object","ol","optgroup","option","output","p","param","plaintext","pre","progress","rp","rt","ruby","samp","script","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","ul","var","video","wbr","xmp"];

const css3 = ["align-content", "align-items", "align-self", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style",  "border-top-width", "border-width", "bottom", "box-shadow", "box-sizing", "caption-side", "clear", "clip", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "cursor", "direction", "display", "empty-cells", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float",  "font", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "height", "justify-content", "left", "letter-spacing", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "max-height", "max-width", "min-height", "min-width", "opacity", "order", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "perspective", "perspective-origin", "position", "quotes", "resize", "right", "tab-size", "table-layout", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-indent", "text-justify", "text-overflow", "text-shadow", "text-transform", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "vertical-align", "visibility", "white-space", "width", "word-break", "word-spacing", "word-wrap", "z-index"];

const javascript = ["constructor()", "toExponential()", "toFixed()", "toLocaleString()", "toPrecision", "toString()", "valueOf()", "toSource()", "charAt()", "charCodeAt()", "concat()", "indexOf()", "lastIndexOf()", "localeCompare()", "length()", "match()", "replace()", "search()", "slice()", "split()", "substr()", "substring()", "toLocaleLowerCase()", "toLocaleUpperCase()", "toLowerCase()", "toUpperCase()", "anchor()", "big()", "blink()", "bold()", "fixed()", "fontcolor()", "fontsize()", "italics()", "link()", "small()", "strike()", "sub()", "sup()", "every()", "filter()", "forEach()", "join()", "map()", "pop()", "push()", "reduce()", "reduceRight()", "reverse()", "shift()", "some()", "sort()", "splice()", "unshift()", "Date()", "getDate()", "getDay()", "getFullYear()", "getHours()", "getMilliseconds()", "getMinutes()", "getMonth()", "getSeconds()", "getTime()", "getTimezoneOffset()", "getUTCDate()", "getUTCDay()", "getUTCFullYear()", "getUTCHours()", "getUTCMilliseconds()", "getUTCMinutes()", "getUTCMonth()", "getUTCSeconds()", "setDate()", "setFullYear()", "setHours()", "setMilliseconds()", "setMinutes()", "setMonth()", "setSeconds()", "setTime()", "setUTCDate()", "setUTCFullYear()",  "setUTCHours()", "setUTCMilliseconds()", "setUTCMinutes()", "setUTCMonth()", "setUTCSeconds()", "toDateString()", "toLocaleDateString()", "toLocaleFormat()", "toLocaleString()", "toLocaleTimeString()", "Date.parse()", "Date.UTC()", "abs()", "acos()", "asin()",  "atan()", "atan2()", "ceil()", "cos()", "exp()", "floor()", "log()", "max()", "min()", "pow()", "random()", "round()", "sin()", "sqrt()", "tan()", "exec()", "test()"];

const sql = ["ADD", "ADD CONSTRAINT", "ALTER", "ALTER COLUMN", "ALTER TABLE", "ALL", "AND", "ANY", "AS", "ASC", "BACKUP DATABASE", "BETWEEN", "CASE", "CHECK", "COLUMN", "CONSTRAINT", "CREATE", "CREATE DATABASE", "CREATE INDEX", "CREATE OR REPLACE VIEW", "CREATE PROCEDURE", "CREATE UNIQUE INDEX", "CREATE VIEW", "DATABASE", "DEFAULT", "DELETE", "DESC", "DISTINCT", "DROP", "DROP COLUMN", "DROP CONSTRAINT", "DROP DATABASE", "DROP DEFAULT", "DROP INDEX", "DROP TABLE", "DROP VIEW", "EXEC", "EXISTS", "FOREIGN KEY", "FROM", "FULL OUTER JOIN", "GROUP BY", "HAVING", "IN", "INDEX", "INNER JOIN", "INSERT INTO", "INSERT INTO SELECT", "IS NULL", "IS NOT NULL", "JOIN", "LEFT JOIN", "LIKE", "LIMIT", "NOT", "NOT NULL", "OR", "ORDER BY", "OUTER JOIN", "PRIMARY KEY", "PROCEDURE", "RIGHT JOIN", "ROWNUM", "SELECT", "SELECT DISTINCT", "SELECT INTO", "SELECT TOP", "SET", "TABLE", "TOP", "TRUNCATE TABLE", "UNION", "UNION ALL", "UNIQUE", "UPDATE", "VALUES", "VIEW", "WHERE"];

const php = ["abstract", "and", "as", "break", "callable", "case", "catch", "class", "clone", "const", "continue", "declare", "default", "do", "echo", "else", "elseif", "empty", "enddeclare", "endfor", "endforeach", "endif", "endswitch", "endwhile", "extends", "final", "finally", "fn", "for", "foreach", "function", "global", "goto", "if", "implements", "include", "include_once", "instanceof", "insteadof", "interface", "isset", "list", "namespace", "new", "or", "print", "private", "protected", "public", "require", "require_once", "return", "static", "switch", "throw", "trait", "try", "unset", "use", "var", "while", "xor", "yield", "yield_from"];

const java = ["abstract", "assert", "boolean", "break", "byte", "case", "catch", "char", "class", "continue", "default", "do", "double", "else", "enum", "exports", "extends", "final", "finally", "float", "for", "if", "implements", "import", "instanceof", "int", "interface", "long", "module", "native", "new", "package", "private", "protected", "public", "requires", "return", "short", "static", "strictfp", "super", "switch", "synchronized", "this", "throw", "throws", "transient", "try", "var", "void", "volatile", "while", "charAt()", "codePointAt()", "codPointBefore()", "codePointCount()", "compareTo()", "compareToIgnoreCase()", "concat()", "contains()", "contentEquals()", "copyValueOf()", "endsWith()", "equals()", "equalsIgnoreCase()", "format()", "getBytes()", "getChars()", "hashCode()", "indexOf()", "intern()", "isEmpty()", "lastIndexOf()", "length()", "matches()", "offsetByCodePoints()", "regionMatches()", "replace()", "replaceFirst()", "replaceAll()", "split()", "startsWith()", "subSequence()", "substring()", "toCharArray()", "toLowerCase()", "toString()", "toUpperCase()", "trim()", "valueOf()"];

const python = ["and", "as", "assert", "break", "class", "continue", "def", "del", "elif", "else", "except", "False", "finally", "for", "from", "global", "if", "import", "in", "is", "lambda", "None", "nonlocal", "not", "or", "pass", "raise", "return", "True", "try", "while", "with", "yield", "ArithmeticError", "AssertionError", "AttributeError", "Exception", "EOFError", "FloatingPointError", "GeneratorExit", "ImportError", "IndentationError", "IndexError", "KeyError", "KeyboardInterrupt", "LookupError", "MemoryError", "NameError", "NotImplementedError", "OSError", "OverflowError", "ReferenceError", "RuntimeError", "StopIteration", "SyntaxError", "TabError", "SystemError", "SystemExit", "TypeError", "UnboundLocalError", "UnicodeError", "UnicodeEncodeError", "UnicodeDecodeError", "ValueError", "ZeroDivisionError"];