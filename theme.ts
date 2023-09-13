import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const MainTheme: CustomThemeConfig = {
    name: 'main-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #1e40af 
		"--color-primary-50": "221 226 243", // #dde2f3
		"--color-primary-100": "210 217 239", // #d2d9ef
		"--color-primary-200": "199 207 235", // #c7cfeb
		"--color-primary-300": "165 179 223", // #a5b3df
		"--color-primary-400": "98 121 199", // #6279c7
		"--color-primary-500": "30 64 175", // #1e40af
		"--color-primary-600": "27 58 158", // #1b3a9e
		"--color-primary-700": "23 48 131", // #173083
		"--color-primary-800": "18 38 105", // #122669
		"--color-primary-900": "15 31 86", // #0f1f56
		// secondary | #26a269 
		"--color-secondary-50": "222 241 233", // #def1e9
		"--color-secondary-100": "212 236 225", // #d4ece1
		"--color-secondary-200": "201 232 218", // #c9e8da
		"--color-secondary-300": "168 218 195", // #a8dac3
		"--color-secondary-400": "103 190 150", // #67be96
		"--color-secondary-500": "38 162 105", // #26a269
		"--color-secondary-600": "34 146 95", // #22925f
		"--color-secondary-700": "29 122 79", // #1d7a4f
		"--color-secondary-800": "23 97 63", // #17613f
		"--color-secondary-900": "19 79 51", // #134f33
		// tertiary | #1e293b 
		"--color-tertiary-50": "221 223 226", // #dddfe2
		"--color-tertiary-100": "210 212 216", // #d2d4d8
		"--color-tertiary-200": "199 202 206", // #c7cace
		"--color-tertiary-300": "165 169 177", // #a5a9b1
		"--color-tertiary-400": "98 105 118", // #626976
		"--color-tertiary-500": "30 41 59", // #1e293b
		"--color-tertiary-600": "27 37 53", // #1b2535
		"--color-tertiary-700": "23 31 44", // #171f2c
		"--color-tertiary-800": "18 25 35", // #121923
		"--color-tertiary-900": "15 20 29", // #0f141d
		// success | #26a269 
		"--color-success-50": "222 241 233", // #def1e9
		"--color-success-100": "212 236 225", // #d4ece1
		"--color-success-200": "201 232 218", // #c9e8da
		"--color-success-300": "168 218 195", // #a8dac3
		"--color-success-400": "103 190 150", // #67be96
		"--color-success-500": "38 162 105", // #26a269
		"--color-success-600": "34 146 95", // #22925f
		"--color-success-700": "29 122 79", // #1d7a4f
		"--color-success-800": "23 97 63", // #17613f
		"--color-success-900": "19 79 51", // #134f33
		// warning | #e5a50a 
		"--color-warning-50": "251 242 218", // #fbf2da
		"--color-warning-100": "250 237 206", // #faedce
		"--color-warning-200": "249 233 194", // #f9e9c2
		"--color-warning-300": "245 219 157", // #f5db9d
		"--color-warning-400": "237 192 84", // #edc054
		"--color-warning-500": "229 165 10", // #e5a50a
		"--color-warning-600": "206 149 9", // #ce9509
		"--color-warning-700": "172 124 8", // #ac7c08
		"--color-warning-800": "137 99 6", // #896306
		"--color-warning-900": "112 81 5", // #705105
		// error | #c01c28 
		"--color-error-50": "246 221 223", // #f6dddf
		"--color-error-100": "242 210 212", // #f2d2d4
		"--color-error-200": "239 198 201", // #efc6c9
		"--color-error-300": "230 164 169", // #e6a4a9
		"--color-error-400": "211 96 105", // #d36069
		"--color-error-500": "192 28 40", // #c01c28
		"--color-error-600": "173 25 36", // #ad1924
		"--color-error-700": "144 21 30", // #90151e
		"--color-error-800": "115 17 24", // #731118
		"--color-error-900": "94 14 20", // #5e0e14
		// surface | #020620 
		"--color-surface-50": "217 218 222", // #d9dade
		"--color-surface-100": "204 205 210", // #cccdd2
		"--color-surface-200": "192 193 199", // #c0c1c7
		"--color-surface-300": "154 155 166", // #9a9ba6
		"--color-surface-400": "78 81 99", // #4e5163
		"--color-surface-500": "2 6 32", // #020620
		"--color-surface-600": "2 5 29", // #02051d
		"--color-surface-700": "2 5 24", // #020518
		"--color-surface-800": "1 4 19", // #010413
		"--color-surface-900": "1 3 16", // #010310
		
	}
}
