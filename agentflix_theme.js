
export const myCustomTheme = {
    // name: 'my-custom-theme',
    // properties: {
	// 	// =~= Theme Properties =~=
	// 	"--theme-font-family-base": "system-ui",
	// 	"--theme-font-family-heading": "system-ui",
	// 	"--theme-font-color-base": "0 0 0",
	// 	"--theme-font-color-dark": "255 255 255",
	// 	"--theme-rounded-base": "9999px",
	// 	"--theme-rounded-container": "8px",
	// 	"--theme-border-base": "1px",
	// 	// =~= Theme On-X Colors =~=
	// 	"--on-primary": "255 255 255",
	// 	"--on-secondary": "255 255 255",
	// 	"--on-tertiary": "0 0 0",
	// 	"--on-success": "0 0 0",
	// 	"--on-warning": "0 0 0",
	// 	"--on-error": "255 255 255",
	// 	"--on-surface": "255 255 255",
	// 	// =~= Theme Colors  =~=
	// 	// primary | #5e63b6 
	// 	"--color-primary-50": "231 232 244", // #e7e8f4
	// 	"--color-primary-100": "223 224 240", // #dfe0f0
	// 	"--color-primary-200": "215 216 237", // #d7d8ed
	// 	"--color-primary-300": "191 193 226", // #bfc1e2
	// 	"--color-primary-400": "142 146 204", // #8e92cc
	// 	"--color-primary-500": "94 99 182", // #5e63b6
	// 	"--color-primary-600": "85 89 164", // #5559a4
	// 	"--color-primary-700": "71 74 137", // #474a89
	// 	"--color-primary-800": "56 59 109", // #383b6d
	// 	"--color-primary-900": "46 49 89", // #2e3159
	// 	// secondary | #4F46E5 
	// 	"--color-secondary-50": "229 227 251", // #e5e3fb
	// 	"--color-secondary-100": "220 218 250", // #dcdafa
	// 	"--color-secondary-200": "211 209 249", // #d3d1f9
	// 	"--color-secondary-300": "185 181 245", // #b9b5f5
	// 	"--color-secondary-400": "132 126 237", // #847eed
	// 	"--color-secondary-500": "79 70 229", // #4F46E5
	// 	"--color-secondary-600": "71 63 206", // #473fce
	// 	"--color-secondary-700": "59 53 172", // #3b35ac
	// 	"--color-secondary-800": "47 42 137", // #2f2a89
	// 	"--color-secondary-900": "39 34 112", // #272270
	// 	// tertiary | #0EA5E9 
	// 	"--color-tertiary-50": "219 242 252", // #dbf2fc
	// 	"--color-tertiary-100": "207 237 251", // #cfedfb
	// 	"--color-tertiary-200": "195 233 250", // #c3e9fa
	// 	"--color-tertiary-300": "159 219 246", // #9fdbf6
	// 	"--color-tertiary-400": "86 192 240", // #56c0f0
	// 	"--color-tertiary-500": "14 165 233", // #0EA5E9
	// 	"--color-tertiary-600": "13 149 210", // #0d95d2
	// 	"--color-tertiary-700": "11 124 175", // #0b7caf
	// 	"--color-tertiary-800": "8 99 140", // #08638c
	// 	"--color-tertiary-900": "7 81 114", // #075172
	// 	// success | #84cc16 
	// 	"--color-success-50": "237 247 220", // #edf7dc
	// 	"--color-success-100": "230 245 208", // #e6f5d0
	// 	"--color-success-200": "224 242 197", // #e0f2c5
	// 	"--color-success-300": "206 235 162", // #ceeba2
	// 	"--color-success-400": "169 219 92", // #a9db5c
	// 	"--color-success-500": "132 204 22", // #84cc16
	// 	"--color-success-600": "119 184 20", // #77b814
	// 	"--color-success-700": "99 153 17", // #639911
	// 	"--color-success-800": "79 122 13", // #4f7a0d
	// 	"--color-success-900": "65 100 11", // #41640b
	// 	// warning | #EAB308 
	// 	"--color-warning-50": "252 244 218", // #fcf4da
	// 	"--color-warning-100": "251 240 206", // #fbf0ce
	// 	"--color-warning-200": "250 236 193", // #faecc1
	// 	"--color-warning-300": "247 225 156", // #f7e19c
	// 	"--color-warning-400": "240 202 82", // #f0ca52
	// 	"--color-warning-500": "234 179 8", // #EAB308
	// 	"--color-warning-600": "211 161 7", // #d3a107
	// 	"--color-warning-700": "176 134 6", // #b08606
	// 	"--color-warning-800": "140 107 5", // #8c6b05
	// 	"--color-warning-900": "115 88 4", // #735804
	// 	// error | #D41976 
	// 	"--color-error-50": "249 221 234", // #f9ddea
	// 	"--color-error-100": "246 209 228", // #f6d1e4
	// 	"--color-error-200": "244 198 221", // #f4c6dd
	// 	"--color-error-300": "238 163 200", // #eea3c8
	// 	"--color-error-400": "225 94 159", // #e15e9f
	// 	"--color-error-500": "212 25 118", // #D41976
	// 	"--color-error-600": "191 23 106", // #bf176a
	// 	"--color-error-700": "159 19 89", // #9f1359
	// 	"--color-error-800": "127 15 71", // #7f0f47
	// 	"--color-error-900": "104 12 58", // #680c3a
	// 	// surface | #495a8f 
	// 	"--color-surface-50": "228 230 238", // #e4e6ee
	// 	"--color-surface-100": "219 222 233", // #dbdee9
	// 	"--color-surface-200": "210 214 227", // #d2d6e3
	// 	"--color-surface-300": "182 189 210", // #b6bdd2
	// 	"--color-surface-400": "128 140 177", // #808cb1
	// 	"--color-surface-500": "73 90 143", // #495a8f
	// 	"--color-surface-600": "66 81 129", // #425181
	// 	"--color-surface-700": "55 68 107", // #37446b
	// 	"--color-surface-800": "44 54 86", // #2c3656
	// 	"--color-surface-900": "36 44 70", // #242c46
		
	// }
	

    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": "system-ui",
		"--theme-font-family-heading": "system-ui",
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "255 255 255",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #b74363 
		"--color-primary-50": "244 227 232", // #f4e3e8
		"--color-primary-100": "241 217 224", // #f1d9e0
		"--color-primary-200": "237 208 216", // #edd0d8
		"--color-primary-300": "226 180 193", // #e2b4c1
		"--color-primary-400": "205 123 146", // #cd7b92
		"--color-primary-500": "183 67 99", // #b74363
		"--color-primary-600": "165 60 89", // #a53c59
		"--color-primary-700": "137 50 74", // #89324a
		"--color-primary-800": "110 40 59", // #6e283b
		"--color-primary-900": "90 33 49", // #5a2131
		// secondary | #d58403 
		"--color-secondary-50": "249 237 217", // #f9edd9
		"--color-secondary-100": "247 230 205", // #f7e6cd
		"--color-secondary-200": "245 224 192", // #f5e0c0
		"--color-secondary-300": "238 206 154", // #eece9a
		"--color-secondary-400": "226 169 79", // #e2a94f
		"--color-secondary-500": "213 132 3", // #d58403
		"--color-secondary-600": "192 119 3", // #c07703
		"--color-secondary-700": "160 99 2", // #a06302
		"--color-secondary-800": "128 79 2", // #804f02
		"--color-secondary-900": "104 65 1", // #684101
		// tertiary | #0e7698 
		"--color-tertiary-50": "219 234 240", // #dbeaf0
		"--color-tertiary-100": "207 228 234", // #cfe4ea
		"--color-tertiary-200": "195 221 229", // #c3dde5
		"--color-tertiary-300": "159 200 214", // #9fc8d6
		"--color-tertiary-400": "86 159 183", // #569fb7
		"--color-tertiary-500": "14 118 152", // #0e7698
		"--color-tertiary-600": "13 106 137", // #0d6a89
		"--color-tertiary-700": "11 89 114", // #0b5972
		"--color-tertiary-800": "8 71 91", // #08475b
		"--color-tertiary-900": "7 58 74", // #073a4a
		// success | #216955 
		"--color-success-50": "222 233 230", // #dee9e6
		"--color-success-100": "211 225 221", // #d3e1dd
		"--color-success-200": "200 218 213", // #c8dad5
		"--color-success-300": "166 195 187", // #a6c3bb
		"--color-success-400": "100 150 136", // #649688
		"--color-success-500": "33 105 85", // #216955
		"--color-success-600": "30 95 77", // #1e5f4d
		"--color-success-700": "25 79 64", // #194f40
		"--color-success-800": "20 63 51", // #143f33
		"--color-success-900": "16 51 42", // #10332a
		// warning | #ebedb6 
		"--color-warning-50": "252 252 244", // #fcfcf4
		"--color-warning-100": "251 251 240", // #fbfbf0
		"--color-warning-200": "250 251 237", // #fafbed
		"--color-warning-300": "247 248 226", // #f7f8e2
		"--color-warning-400": "241 242 204", // #f1f2cc
		"--color-warning-500": "235 237 182", // #ebedb6
		"--color-warning-600": "212 213 164", // #d4d5a4
		"--color-warning-700": "176 178 137", // #b0b289
		"--color-warning-800": "141 142 109", // #8d8e6d
		"--color-warning-900": "115 116 89", // #737459
		// error | #7b9178 
		"--color-error-50": "235 239 235", // #ebefeb
		"--color-error-100": "229 233 228", // #e5e9e4
		"--color-error-200": "222 228 221", // #dee4dd
		"--color-error-300": "202 211 201", // #cad3c9
		"--color-error-400": "163 178 161", // #a3b2a1
		"--color-error-500": "123 145 120", // #7b9178
		"--color-error-600": "111 131 108", // #6f836c
		"--color-error-700": "92 109 90", // #5c6d5a
		"--color-error-800": "74 87 72", // #4a5748
		"--color-error-900": "60 71 59", // #3c473b
		// surface | #acca47 
		"--color-surface-50": "243 247 227", // #f3f7e3
		"--color-surface-100": "238 244 218", // #eef4da
		"--color-surface-200": "234 242 209", // #eaf2d1
		"--color-surface-300": "222 234 181", // #deeab5
		"--color-surface-400": "197 218 126", // #c5da7e
		"--color-surface-500": "172 202 71", // #acca47
		"--color-surface-600": "155 182 64", // #9bb640
		"--color-surface-700": "129 152 53", // #819835
		"--color-surface-800": "103 121 43", // #67792b
		"--color-surface-900": "84 99 35", // #546323
		
	}
}