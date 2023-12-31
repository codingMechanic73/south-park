/** @type {import("prettier").Options} */
module.exports = {
    trailingComma: 'es5',
    tabWidth: 2,
    semi: true,
    singleQuote: true,
    endOfLine: 'auto',
    importOrder: [
        "^(react/(.*)$)|^(react$)",
        "^(next/(.*)$)|^(next$)",
        "<THIRD_PARTY_MODULES>",
        "",
        "^types$",
        "^@/env(.*)$",
        "^@/types/(.*)$",
        "^@/config/(.*)$",
        "^@/lib/(.*)$",
        "^@/hooks/(.*)$",
        "^@/components/ui/(.*)$",
        "^@/components/(.*)$",
        "^@/context/(.*)$",
        "^@/features/(.*)$",
        "^@/layouts/(.*)$",
        "^@/pages/(.*)$",
        "^@/services/(.*)$",
        "^@/utils/(.*)$",
        "^@/styles/(.*)$",
        "^@/app/(.*)$",
        "",
        "^[./]",
    ],
    importOrderSeparation: false,
    importOrderSortSpecifiers: true,
    importOrderBuiltinModulesToTop: true,
    importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
    importOrderMergeDuplicateImports: true,
    importOrderCombineTypeAndValueImports: true,
    plugins: ["@ianvs/prettier-plugin-sort-imports"],
}