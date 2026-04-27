import fs from 'fs';

const text = `
1.  CH2=CH2 a) Ethane b) Ethene c) Ethyne d) Propene
2.  CH3-CH(Br)-CH2-CH(CH3)-CH3 a) 2-Bromo-4-methylpentane
    b) 4-Bromo-2-methylpentane c) 2-Methyl-4-bromopentane
    d) 2-Bromo-4-methylhexane
3.  حلقة بنزين متصل بها مجموعة CH3 a) Benzene b) Methylbenzene c) Ethylbenzene
    d) Hexylbenzene
4.  CH3-CH(OCH3)-CH2-CH3 a) 2-Methoxybutane b) 3-Methoxybutane c) Methyl
    sec-butyl ether d) 2-Butoxymethane
5.  حلقة خماسية يتصل بها مجموعة CH2CH3 a) Methylcyclopentane b)
    Ethylcyclopentane c) Propylcyclopentane d) Cyclopentylethane
6.  CH3-C≡CH a) 1-Propyne b) Propyne c) الإجابتان a و b صحيحتان d) 2-Propyne
7.  ما هو الاسم النظامي للمجموعة البديلة (الفرع): -CH3 a) Methyl b) Methane c)
    Ethyl d) Methylene
8.  المركب ذو التشكل الهندسي: CH3-CH=CH-CH3 (حيث مجموعتي الميثيل في نفس الاتجاه)
    a) trans-2-Butene b) cis-2-Butene c) 1-Butene d) 2-Methylpropene
9.  أي المركبات التالية يمثل الاسم: 1,1,1-Trichloroethane a) CCl3-CH3 b)
    CHCl2-CH2Cl c) CH2Cl-CH2Cl d) CCl3-CH2Cl
10. حلقة بنزين عليها مجموعتي ميثيل متقابلتين تماماً (مواقع 1 و 4)
    a) 1,4-Dimethylbenzene b) 1,2-Dimethylbenzene c) 1,3-Dimethylbenzene
    d) 2,4-Dimethylbenzene
11. عند وجود رابطة مزدوجة ورابطة ثلاثية في نفس السلسلة وتتساوى المسافة من
    الطرفين (مثال HC≡C-CH2-CH=CH2)، لمن تعطى الأولوية في أخذ الرقم الأقل؟
    a) الرابطة المزدوجة (-ene) b) الرابطة الثلاثية (-yne) c) لا يهم، الترقيم من
    أي طرف d) الأولوية للتفرعات أولاً
12. CH3-C(CH3)2-CH3 a) 2,2-Dimethylpropane b) 2-Methylbutane c) Pentane
    d) 2,2-Dimethylbutane
13. أي المركبات التالية يمثل الاسم: Cyclooctane a) حلقة بـ 6 ذرات كربون b) حلقة
    بـ 7 ذرات كربون c) حلقة بـ 8 ذرات كربون d) سلسلة مفتوحة بـ 8 ذرات كربون
14. حلقة بنزين متصل بها O-CH2-CH3 وفي الموقع المقابل (4) توجد ذرة Br
    a) 1-Bromo-4-ethoxybenzene b) 4-Bromo-1-ethoxybenzene
    c) 1-Ethoxy-4-bromobenzene d) p-Bromophenoxy ethane
15. أي المركبات التالية يمثل الاسم: 3,3-Dimethyl-1-butyne a) CH≡C-C(CH3)3 b)
    CH3-C≡C-CH(CH3)2 c) CH2=C(CH3)-C≡CH d) CH3-C(CH3)2-C≡CH
16. أي المركبات التالية يمثل الاسم: 1,3-Cyclopentadiene a) حلقة خماسية بها رابطة
    مزدوجة واحدة b) حلقة خماسية بها رابطتين مزدوجتين مفصولتين برابطة أحادية c)
    حلقة خماسية متصلة بسلسلة دايين d) حلقة سداسية بها رابطتين مزدوجتين
17. CH3-CH2-CH(CH3)-CH(CH2CH3)-CH2-CH2-CH3 a) 4-Ethyl-3-methylheptane
    b) 3-Methyl-4-ethylheptane c) 4-Ethyl-5-methylheptane
    d) 3-Ethyl-4-methylheptane
18. حلقة بنزين متصل بها مجموعة NH2 a) Aminobenzene b) Nitrobenzene c)
    Amidebenzene d) Ammonia ring
19. ما هو الاسم النظامي للمجموعة البديلة: -CH(CH3)2 a) (1-Methylethyl) b) Propyl
    c) (2-Methylethyl) d) Isobutyl
20. CH≡C-C≡CH a) 1,3-Butadiene b) 1,3-Butadiyne c) 1,4-Butadiyne d) Butatetrayne
21. CH3-O-CH3 a) Methoxymethane b) Dimethyl ether c) Methoxyethane d)
    Ethoxymethane
22. CH3-CH(CH3)-CH2-C(CH3)2-CH3 a) 2,4,4-Trimethylpentane
    b) 2,2,4-Trimethylpentane c) Octane d) 2,4-Dimethylhexane
23. CH3-CH=CH-CH3 a) 1-Butene b) 2-Butene c) 3-Butene d) Cyclobutane
24. حلقة بنزين متصل بها مجموعة CHO a) Benzenecarbaldehyde b)
    Hydroxycarbonylbenzene c) Benzyl alcohol d) Phenyl ether
25. حلقة مكونة من 3 ذرات كربون a) Propane b) Cyclopropane c) Cyclobutane d)
    Propene
26. ما هو الاسم النظامي للمجموعة البديلة: -CH(CH3)-CH2-CH3 a) (1-Methylpropyl)
    b) (2-Methylpropyl) c) (1,1-Dimethylethyl) d) Butyl
27. أي المركبات التالية يمثل الاسم: 1-Bromo-2-butyne a) CH3-C≡C-CH2Br b)
    Br-C≡C-CH2-CH3 c) CH3-CBr=C=CH2 d) CH2Br-CH2-C≡CH
28. حلقة سداسية تحتوي على رابطة مزدوجة واحدة a) Cyclohexane b) Cyclohexene c)
    Benzene d) Cyclohexadiene
29. أي الصيغ البنائية تمثل الاسم: 3-Ethyl-5-methylheptane a)
    CH3-CH2-CH(CH3)-CH2-CH(CH2CH3)-CH2-CH3 b)
    CH3-CH2-CH(CH2CH3)-CH2-CH(CH3)-CH2-CH3 c) CH3-CH(CH3)-CH2-CH2-CH(CH2CH3)-CH3
    d) CH3-CH2-CH2-CH(CH2CH3)-CH(CH3)-CH2-CH3
30. CH3-CH(O-CH2-CH3)-CH3 a) 2-Ethoxypropane b) 1-Ethoxypropane c) Methoxybutane
    d) Ethyl isopropyl ether
31. حلقة بنزين عليها 3 ذرات كلور متتالية a) 1,2,3-Trichlorobenzene
    b) 1,3,5-Trichlorobenzene c) 1,2,4-Trichlorobenzene
    d) 1,1,1-Trichlorobenzene
32. CH3-CH2-CH2-CH3 a) Butane b) Propane c) Pentane d) Hexane
33. CH2=C(CH2CH3)-CH2-CH3 a) 2-Ethyl-1-butene b) 3-Methyl-3-pentene
    c) 3-Ethyl-1-butene d) 3-Methylidenepentane
34. حلقة سداسية مشبعة يتصل بها مجموعة CH3 ومجموعة Cl على ذرتي كربون متجاورتين
    a) 1-Chloro-2-methylcyclohexane b) 2-Chloro-1-methylcyclohexane
    c) 1-Methyl-2-chlorocyclohexane d) Chloromethylcyclohexane
35. HC≡C-CH2-CH=CH2 a) 1-Penten-4-yne b) 4-Penten-1-yne c) 1-Yne-4-pentene
    d) 1,4-Pentyne
36. حلقة سداسية (Cyclohexane) متصل بها O-CH2-CH3 a) Ethoxycyclohexane b)
    Cyclohexyloxyethane c) Ethyl cyclohexyl ether d) Phenoxyethane
37. حلقة بنزين متصل بها مجموعة OH a) Benzenol b) Oxygenbenzene c) Cyclohexanol
    d) Benzyl alcohol
38. CH2(F)-CH2(F) a) 1,1-Difluoroethane b) 1,2-Difluoroethane c) Fluoroethane
    d) 1,2-Difluoromethane
39. CH2=CH-CH3 a) 1-Propene b) Propene c) الإجابتان a و b صحيحتان d) 2-Propene
40. ما هو الاسم النظامي للمجموعة البديلة: -CH2-CH(CH3)2 a) (2-Methylpropyl) b)
    (1-Methylpropyl) c) (1,1-Dimethylethyl) d) Butyl
41. CH3-CH2-C≡CH a) 2-Butyne b) 1-Butyne c) 3-Butyne d) Butene
42. مركب CH3-CH(C6H5)-CH2-CH3 a) 2-Phenylbutane b) 3-Phenylbutane c)
    Butylbenzene d) 2-Benzylbutane
43. أي المركبات التالية يمثل الاسم: 1,1,2-Trimethylcyclopentane a) حلقة خماسية،
    ذرة رقم 1 عليها مجموعتي ميثيل، وذرة 2 عليها ميثيل واحد b) حلقة خماسية، ذرة
    رقم 1 عليها ميثيل، وذرة 2 عليها مجموعتي ميثيل c) حلقة خماسية، ذرة 1 عليها
    ميثيل، و2 عليها ميثيل، و3 عليها ميثيل d) حلقة سداسية عليها 3 مجموعات ميثيل
44. CH3-CH2-C(CH3)(CH2CH3)-CH2-CH2-CH3 a) 3-Ethyl-3-methylhexane
    b) 3,3-Diethylpentane c) 4-Ethyl-4-methylhexane d) 3-Methyl-3-ethylhexane
45. أي المركبات التالية يمثل الاسم: 1,3,5-Hexatriene a) ست ذرات كربون بها 3
    روابط مزدوجة متتالية عند 1 و 3 و 5 b) ست ذرات كربون بها روابط مزدوجة
    عند 1 و 2 و 3 c) حلقة سداسية بها 3 روابط مزدوجة d) ست ذرات كربون مشبعة
46. CH3-CH2-O-CH3 a) Methoxyethane b) Ethoxymethane c) Ethyl methyl ether d)
    Propoxy ether
47. CH3-C≡C-CH2-CH3 a) 2-Pentyne b) 3-Pentyne c) 1-Pentyne d) 2-Pentene
48. CH3-CH(Cl)-CH3 a) 1-Chloropropane b) 2-Chloropropane c) Chlorobutane
    d) 2-Chlorobutane
49. حلقة بنزين متصل بها مجموعة CH=CH2 a) Ethenylbenzene b) Propylbenzene c)
    Ethylbenzene d) Ethynylbenzene
50. أي الأسماء التالية مكتوب بطريقة صحيحة تماماً حسب قواعد (IUPAC) لترتيب الحروف
    الأبجدية وعلامات الترقيم؟ a) 3-Ethyl-2-methylhexane
    b) 2-Methyl-3-ethylhexane c) 3-Ethyl-2-methyl Hexane
    d) 3,ethyl-2,methylhexane
51. CH3-CH=C(CH3)-CH2-CH3 a) 3-Methyl-2-pentene b) 3-Methyl-3-pentene
    c) 3-Ethyl-2-butene d) 2-Ethyl-2-butene
52. حلقة ثلاثية يتصل بها مجموعة Br ومجموعة CH3 على ذرتين مختلفتين
    a) 1-Bromo-2-methylcyclopropane b) 2-Bromo-1-methylcyclopropane c)
    Bromo-methyl-cyclopropane d) 1-Methyl-2-bromocyclopropane
53. أي المركبات يمثل الاسم: 2-Cyano-3-methylbutane a) CH3-CH(CN)-CH(CH3)-CH3 b)
    NC-CH2-CH(CH3)-CH2-CH3 c) CH3-CH(CH3)-CH(CN)-CH3 d) CH3-C(CN)(CH3)-CH2-CH3
54. CH3-O-CH2-CH2-CH3 a) 1-Methoxypropane b) Propoxymethane c) Methoxyethane
    d) 2-Methoxypropane
55. CH≡CH a) Ethene b) Ethane c) Ethyne d) Propyne
56. C6H5-CH2-CH2-C6H5 a) 1,2-Diphenylethane b) Dibenzyl c) Phenylethane d)
    Biphenyl
57. CH2=CH-CH2-CH=CH-CH2-CH3 a) 1,4-Heptadiene b) 1,5-Heptadiene
    c) 2,6-Heptadiene d) 1,4-Heptene
58. ما هو الاسم النظامي للمجموعة البديلة: -CH2-CH3 a) Ethyl b) Methyl c) Propyl
    d) Ethane
59. CH3-CH(NO2)-CH3 a) 2-Nitropropane b) 1-Nitropropane c) Aminopropane
    d) 2-Nitromethane
60. CH2=C(CH3)-CH3 a) 2-Methyl-1-propene b) 2-Methylpropene c) الإجابتان a و b
    صحيحتان d) 2-Butene
61. حلقة بنزين متصل بها مجموعة COOH a) Benzenecarboxylic acid b) Benzyl acid c)
    Hydroxycarbonylbenzene d) Formylbenzene
62. CH3-CH(CH3)-CH3 a) 1-Methylpropane b) 2-Methylpropane c) Butane
    d) 2-Methylbutane
63. أي المركبات التالية يمثل الاسم: 4-Methyl-2-hexyne a) CH3-C≡C-CH(CH3)-CH2-CH3
    b) CH3-CH(CH3)-C≡C-CH2-CH3 c) HC≡C-CH2-CH(CH3)-CH2-CH3 d)
    CH3-C≡C-CH2-CH(CH3)2
64. أي المركبات التالية يمثل الاسم: 3-Propyl-1-heptene a)
    CH2=CH-CH(CH2CH2CH3)-CH2CH2CH2CH3 b) CH3-CH=C(CH2CH2CH3)-CH2CH2CH3 c)
    CH2=C(CH2CH2CH3)-CH2CH2CH2CH3 d) CH3-CH2-CH=C(CH2CH3)-CH2CH2CH3
65. CH3-CH2-O-CH2-CH3 a) Ethoxyethane b) Diethyl ether c) Methoxypropane d)
    Butoxybutane
66. حلقة مكونة من 5 ذرات كربون a) Pentane b) Cyclohexane c) Cyclopentane d)
    Cyclobutane
67. حلقة بنزين عليها مجموعة إيثيل في ذرة 1 ومجموعة ميثيل في ذرة 3
    a) 1-Ethyl-3-methylbenzene b) 3-Ethyl-1-methylbenzene
    c) 1-Methyl-3-ethylbenzene d) Ethyl-methyl-benzene
68. CH3-CH(CH3)-C≡C-CH(CH3)-CH3 a) 2,5-Dimethyl-3-hexyne
    b) 2,5-Dimethyl-3-hexene c) 3,4-Diisopropylethyne d) 2,5-Dimethyl-2-hexyne
69. CH3-C(Cl)2-CH3 a) 2,2-Dichloropropane b) 1,2-Dichloropropane
    c) 2-Dichloropropane d) 2,2-Dichlorobutane
70. ما هو الاسم النظامي للمجموعة البديلة: -C(CH3)3 a) (1,1-Dimethylethyl) b)
    (2-Methylpropyl) c) (1-Methylpropyl) d) (2,2-Dimethylethyl)
71. المركب ذو التشكل الهندسي: CH3-CH=CH-CH3 (حيث مجموعتي الميثيل في اتجاهين
    متعاكسين) a) trans-2-Butene b) cis-2-Butene c) 1-Butene d) Isobutene
72. أي المركبات التالية يمثل الاسم: (1-Methylethyl)cyclobutane a) حلقة رباعية
    يتصل بها CH2CH2CH3 b) حلقة رباعية يتصل بها CH(CH3)2 c) حلقة رباعية يتصل
    بها C(CH3)3 d) حلقة ثلاثية يتصل بها CH(CH3)2
73. حلقة بنزين متصل بها O-CH3 a) Methoxybenzene b) Methyl phenyl ether c)
    Phenoxymethane d) Benzoxymethane
74. أي المركبات التالية يمثل الاسم: 1,4-Pentadiyne a) HC≡C-CH2-C≡CH b)
    CH3-C≡C-C≡CH c) HC≡C-C≡C-CH3 d) HC≡C-CH2-CH2-C≡CH
75. CH3-CH2-CH(CH2CH3)-CH2-CH2-CH3 a) 3-Ethylhexane b) 4-Ethylhexane
    c) 3-Propylpentane d) Octane
76. CH2=C(Cl)-CH2-CH3 a) 2-Chloro-1-butene b) 3-Chloro-3-butene
    c) 2-Chlorobutane d) 1-Chloro-1-butene
77. حلقة بنزين عليها مجموعتي ميثيل متجاورتين (مواقع 1 و 2)
    a) 1,2-Dimethylbenzene b) 1,3-Dimethylbenzene c) 1,4-Dimethylbenzene
    d) 1,5-Dimethylbenzene
78. المقطع المستخدم للدلالة على وجود 4 روابط مزدوجة في السلسلة الأم هو: a)
    -tetraene b) -triene c) -diene d) -tetrayne
79. أي الصيغ البنائية تمثل الاسم: 3-Bromo-2-chloro-4-methylpentane a)
    CH3-CH(Cl)-CH(Br)-CH(CH3)-CH3 b) CH3-CH(Br)-CH(Cl)-CH(CH3)-CH3 c)
    CH3-CH(Cl)-CH(CH3)-CH(Br)-CH3 d) CH2(Cl)-CH(Br)-CH2-CH(CH3)-CH3
80. CH3-CH=CH-C≡CH a) 3-Penten-1-yne b) 2-Penten-4-yne c) 1-Yne-3-pentene
    d) 4-Yne-2-pentene
81. حلقتي بنزين بينهما ذرة أكسجين C6H5-O-C6H5 a) Phenoxybenzene b) Diphenyl
    ether c) Benzoxybenzene d) Dibenzyl ether
82. أي المركبات التالية يمثل الاسم: 1-Ethyl-3-methylcyclohexane a) حلقة سداسية
    بها إيثيل وميثيل متجاوران b) حلقة سداسية بها إيثيل وميثيل بينهما ذرة كربون
    واحدة فارغة c) حلقة سداسية بها إيثيل وميثيل متقابلان تماماً d) حلقة خماسية
    بها إيثيل وميثيل
83. أي المركبات التالية يمثل الاسم: 2,3-Dimethyl-2-butene a)
    CH2=C(CH3)-CH(CH3)-CH3 b) CH3-C(CH3)=C(CH3)-CH3 c) CH3-CH=CH-CH(CH3)2 d)
    الإجابة (b) صحيحة (ويمكن كتابتها C(CH3)2=C(CH3)2)
84. حلقة بنزين متصل بها Br و NO2 متقابلين (مواقع 1 و 4)
    a) 1-Bromo-4-nitrobenzene b) 4-Bromo-1-nitrobenzene
    c) 1-Nitro-4-bromobenzene d) p-Bromonitrobenzene
85. CH3-CH2-CH(CH3)-CH2-CH2-CH3 a) 2-Ethylpentane b) 3-Methylhexane
    c) 4-Methylhexane d) 3-Ethylpentane
86. أي المركبات يمثل الاسم: 1-Cyclohexyl-1-propyne a) حلقة سداسية متصلة بـ
    C≡C-CH3 b) حلقة سداسية متصلة بـ CH2-C≡CH c) حلقة خماسية متصلة بـ C≡C-CH3
    d) حلقة سداسية بداخلها رابطة ثلاثية
87. CH2=CH-CH2-CH3 a) 2-Butene b) 1-Butene c) Butane d) Butyne
88. ما هو الاسم النظامي للمجموعة البديلة: -CH2-CH2-CH3 a) Propyl b)
    (1-Methylethyl) c) Butyl d) Ethyl
89. CH3-C≡C-CH3 a) 1-Butyne b) 2-Butyne c) Isobutyne d) 2-Butene
90. CH3-CH2-CH2-CH2-CH2-CH2-CH2-CH2-CH2-CH3 a) Octane b) Nonane c) Decane d)
    Heptane
91. حلقة سداسية تحتوي على رابطة مزدوجة، ويتصل بها مجموعة ميثيل على الذرة رقم 3
    a) 1-Methylcyclohexene b) 2-Methylcyclohexene c) 3-Methylcyclohexene
    d) 4-Methylcyclohexene
92. حلقة بنزين متصلة بـ C≡CH a) Ethynylbenzene b) Ethenylbenzene c) Ethylbenzene
    d) Propynylbenzene
93. حلقة رباعية يتصل بها مجموعتي CH3 على نفس الذرة a) 1,2-Dimethylcyclobutane
    b) 1,1-Dimethylcyclobutane c) Dimethylcyclobutane d) 2,2-Dimethylcyclobutane
94. أي المركبات يمثل الاسم: 4-Bromo-cyclopentene a) حلقة خماسية بها رابطة
    مزدوجة، وبروم متصل بذرة الرابطة المزدوجة b) حلقة خماسية بها رابطة
    مزدوجة، وبروم على الذرة رقم 4 (باعتبار الرابطة المزدوجة تأخذ 1,2
    والترقيم للوصول لأقل رقم للبروم) c) حلقة خماسية بها رابطة مزدوجة،
    وبروم على الذرة رقم 3 d) حلقة خماسية مشبعة بها بروم
95. حلقة بنزين متصل بها مجموعة CH(CH3)2 a) (1-Methylethyl)benzene b)
    Propylbenzene c) Butylbenzene d) Methylbenzene
96. CH3-CH(I)-CH(Br)-CH3 a) 2-Iodo-3-bromobutane b) 2-Bromo-3-iodobutane
    c) 3-Bromo-2-iodobutane d) 1-Bromo-2-iodobutane
97. CH3-CH(Cl)-CH2-C≡C-CH3 a) 5-Chloro-2-hexyne b) 2-Chloro-4-hexyne
    c) 5-Chloro-3-hexyne d) 2-Chloro-3-hexyne
98. CH2=CH-CH(Cl)-CH3 a) 3-Chloro-1-butene b) 2-Chloro-3-butene
    c) 1-Chloro-2-butene d) 4-Chloro-1-butene
99. أي المركبات التالية يمثل الاسم: 2,2,3,3-Tetramethylbutane a)
    CH3-C(CH3)2-C(CH3)2-CH3 b) CH3-CH(CH3)-CH(CH3)-CH3 c)
    CH3-C(CH3)2-CH2-CH(CH3)2 d) C(CH3)3-CH2-C(CH3)3
100. CH2=CH-CH=CH2 a) 1,3-Butene b) 1,3-Butadiene c) 1,4-Butadiene d) Butatriene
`;

const answers = ['b', 'a', 'b', 'a', 'b', 'c', 'a', 'b', 'a', 'a', 'a', 'a', 'c', 'a', 'a', 'b', 'a', 'a', 'a', 'b', 'a', 'b', 'b', 'a', 'b', 'a', 'a', 'b', 'b', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'b', 'c', 'a', 'b', 'a', 'a', 'a', 'a', 'a', 'a', 'b', 'a', 'a', 'a', 'a', 'a', 'a', 'c', 'a', 'a', 'a', 'a', 'c', 'a', 'b', 'a', 'a', 'a', 'c', 'a', 'a', 'a', 'a', 'a', 'b', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'b', 'd', 'a', 'b', 'a', 'b', 'a', 'b', 'c', 'c', 'a', 'b', 'b', 'a', 'b', 'a', 'a', 'a', 'b'];

let qs = text.split(/\n\d+\.\s+/).filter(Boolean);

const questions = qs.map((q, i) => {
    let raw = q.replace(/\\n/g, ' ').replace(/\s+/g, ' ').trim();
    let parts = raw.split(/ a\) | b\) | c\) | d\) /);
    let questionText = parts[0].trim();
    return {
        id: i + 1,
        question: questionText,
        options: {
            a: parts[1]?.trim() || '',
            b: parts[2]?.trim() || '',
            c: parts[3]?.trim() || '',
            d: parts[4]?.trim() || ''
        },
        correctAnswer: answers[i]
    };
});

fs.writeFileSync('src/data/questions.json', JSON.stringify(questions, null, 2));
