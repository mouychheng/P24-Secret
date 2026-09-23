/**
 * P24 Secrets - Products Data (16 Items Showcase)
 * ផ្លូវរូបភាព៖ ត្រូវដាក់រូបភាពក្នុង assets/images/products/ (ឧទាហរណ៍៖ p1.jpg, p2.jpg, ...)
 */

const productsData = [
    {
        id: 1,
        name: "P24 Secrets - សេរ៉ូម",
        subtitle: "សេរ៉ូមមាសចិញ្ចឹមស្បែកមុខជ្រៅ 🎀",
        badge: "ផលិតផលលេខ ០១",
        image: "assets/images/products/p1.jpg",
        description: "រូបមន្តសម្ងាត់សេរ៉ូមមាស ផ្តល់សំណើមជ្រៅ និងជួយឱ្យស្បែកមុខមានពន្លឺថ្លាចែងចាំងបែបធម្មជាតិ។",
        ingredients: "មាស ២៤K, អាស៊ីតហ៊ីយ៉ាលូរ៉ូនិច, កូឡាជែនធម្មជាតិ",
        usage: "ប្រើ ២-៣ តក់ជារៀងរាល់ព្រឹក និងយប់"
    },
    {
        id: 2,
        name: "P24 Secrets - ឡេការពារកម្តៅថ្ងៃ UV",
        subtitle: "គ្រីមបំប៉នការពារកម្តៅថ្ងៃ និង UV 🎀",
        badge: "ផលិតផលលេខ ០២",
        image: "assets/images/products/p2.jpg",
        description: "គ្រីមលាបការពារស្បែកពីពន្លឺព្រះអាទិត្យ កាំរស្មី UV និងពន្លឺអេក្រង់ ជួយឱ្យស្បែកស្រស់ថ្លាពេញមួយថ្ងៃ។",
        ingredients: "នីអាស៊ីណាម៉ាយ (Niacinamide), ទីតាញ៉ូម ឌីអុកស៊ីត (Titanium Dioxide), វីតាមីន E",
        usage: "លាបលើផ្ទៃមុខ និងក រៀងរាល់ព្រឹកមុនចេញក្រៅ"
    },
    {
        id: 3,
        name: "P24 Secrets - គ្រីមយប់ជួសជុលស្បែក",
        subtitle: "គ្រីមបំប៉នស្បែកពេលយប់ 🎀",
        badge: "ផលិតផលលេខ ០៣",
        image: "assets/images/products/p3.jpg",
        description: "គ្រីមយប់ជួយស្ដារ និងជួសជុលស្បែកក្នុងពេលរាត្រី ឱ្យប្រែជាទន់ល្មើយនៅពេលព្រឹក។",
        ingredients: "ប៉ិបថាយ (Peptides), ប្រេងស៊ាបាត់ទ័រ (Shea Butter), ប្រេងកុលាប (Rosehip)",
        usage: "លាប និងម៉ស្សាស្រាលៗមុនចូលគេង"
    },
    {
        id: 4,
        name: "P24 Secrets - ហ្វូមលាងមុខពពុះទន់",
        subtitle: "ហ្វូមលាងមុខសម្អាតជ្រៅ 🎀",
        badge: "ផលិតផលលេខ ០៤",
        image: "assets/images/products/p4.jpg",
        description: "ហ្វូមលាងមុខពពុះទន់ល្មើយ សម្អាតធូលីដី និងខ្លាញ់លើសបានយ៉ាងជ្រៅ ដោយមិនស្ងួតស្បែក។",
        ingredients: "សារធាតុចម្រាញ់តែបៃតង, អាស៊ីតសាលីស៊ីលីក (Salicylic Acid), គ្លីសេរីន",
        usage: "ប្រើប្រាស់សម្អាតផ្ទៃមុខ ព្រឹក-ល្ងាច"
    },
    {
    id: 5,
    name: "P24 Secrets - លេការពារកំដៅថ្ងៃ BB Creme",
    subtitle: "BB P24 លេខ០២ (សាច់ ស) ☀️",
    badge: "ផលិតផលលេខ ០៥",
    image: "assets/images/products/p5.jpg",
    description: "គ្រីមការពារកំដៅថ្ងៃ BB ជួយការពារស្បែកពីកាំរស្មី UVA & UVB (SPF 50+ PA++++), ប៉ូវបំប៉នស្បែក និងជួយឲ្យស្បែកមុខភ្លឺថ្លាបែបធម្មជាតិ។",
    ingredients: "UVA/UVB Protection, Non-Greasy Nourishing Formula",
    usage: "លាបលើផ្ទៃមុខ និងក មុនពេលចេញកំដៅថ្ងៃ ១៥-៣០ នាទី"
},
    {
    id: 6,
    name: "P24 Secrets - ទឹកជូតមុខ Purify Cleansing Water",
    subtitle: "ទឹកជូតមុខសំអាតជម្រៅ និងផ្តល់សំណើម 💧",
    badge: "ផលិតផលលេខ ០៦",
    image: "assets/images/products/p6.jpg",
    description: "ទឹកជូតមុខ Micellar Water ជួយជូតសំអាតគ្រឿងក្រអូប និងធូលីដីយ៉ាងជ្រៅ ជួយកាត់បន្ថយមុន ស្តារកម្រិត pH ធម្មជាតិ និងផ្តល់សំណើមដល់ស្បែក។",
    ingredients: "Soothing Micellar Water Formula, Hydrating Complex",
    usage: "ចាក់លើសំឡី រួចជូតសម្អាតឱ្យសព្វផ្ទៃមុខ និងក ហើយចាំលាងមុខជាមួយហ្វូម"
},
    {
  id: 7,
  name: "P24 Secrets - ម៉ាសបិតមុខ Whitening and Brightening",
  subtitle: "ម៉ាសបិតមុខរូបមន្តខ្យង និងក្រូចឆ្មារ 🍋",
  badge: "ផលិតផលថ្មី",
  image: "assets/images/products/p7.jpg",
  description: "ម៉ាសបិតមុខ Whitening and Brightening ជួយឱ្យស្បែកមុខស ភ្លឺថ្លា មានសំណើមជ្រៅ រឹតបន្តឹងរន្ធញើស និងធ្វើឱ្យស្បែកតឹងណែន។",
  ingredients: "សារធាតុចម្រាញ់ពីខ្យង (Snail Mucin), វីតាមីន C ពីក្រូចឆ្មារ, អាស៊ីត Hyaluronic",
  usage: "បិតម៉ាសលើផ្ទៃមុខដែលលាងស្អាត រួចទុករយៈពេល 15-20 នាទី បន្ទាប់មកដកចេញ ហើយម៉ាស្សាស្រាលៗឱ្យសេរ៉ូមជ្រាបចូលស្បែក។"
},
    {
  id: 8,
  name: "P24 Secrets - សំឡីជែលព្រឺក Hyaluronic Acid Moisturize Pad",
  subtitle: "សំឡីជូត និងផ្តិតបង្កើនសំណើមស្បែក 💧",
  badge: "ផលិតផលថ្មី",
  image: "assets/images/products/p8.jpg",
  description: "សំឡីជែល Hyaluronic Acid បង្កើនសំណើមស្បែក ធ្វើឱ្យស្បែកទន់រលោង កាត់បន្ថយស្នាមជ្រួញ ជួយឱ្យស្បែកតឹង និងទប់ស្កាត់ការបាត់បង់សំណើម។",
  ingredients: "Collagen, Hyaluronic Acid, Niacinamide",
  usage: "ប្រើសំឡីជូត ឬផ្តិតស្រាលៗលើផ្ទៃមុខបន្ទាប់ពីលាងសម្អាតមុខរួច (មានចំនួន 70 pads / 140ml)"
},
    {
  id: 9,
  name: "P24 Secrets - សំឡីជូតមុខពេលយប់ Salicylic Acid Ampoule Pad",
  subtitle: "សំឡីជូតមុខពេលយប់ Calming Toner Pad 🌙",
  badge: "ផលិតផលថ្មី",
  image: "assets/images/products/p9.jpg",
  description: "សំឡីជូតមុខពេលយប់ជួយព្យាបាលស្នាមមុនយ៉ាងមានប្រសិទ្ធភាព (មុនក្បាលខ្មៅ និងមុនខ្សាច់) កម្ចាត់កោសិកាស្បែកដែលងាប់ Exfoliate ធ្វើឱ្យស្បែកស្រស់ថ្លា និងបំបាត់បញ្ហាស្បែករលាកដោយសារមុន។",
  ingredients: "Salicylic Acid, Calming Botanical Extracts",
  usage: "ប្រើសំឡីជូត ឬផ្តិតស្រាលៗលើផ្ទៃមុខពេលយប់បន្ទាប់ពីលាងសម្អាតមុខរួច (មានចំនួន 70 pads / 140ml)"
},
    {
  id: 10,
  name: "P24 Secrets - ឡេក្លៀក",
  subtitle: "ឡេលាបក្លៀកឱ្យសរលោង និងបាត់ក្លិន 🌸",
  badge: "ផលិតផលថ្មី",
  image: "assets/images/products/p10.jpg",
  description: "គ្រីមលាបក្លៀកជួយធ្វើឱ្យស្បែកក្លៀកសភ្លឺថ្លា កាត់បន្ថយស្បែកមាន (Chicken Skin) ធ្វើឱ្យស្បែកទន់រលោង ព្រមទាំងជួយទប់ស្កាត់ និងបំបាត់ក្លិនក្លៀកបានយ៉ាងល្អ។",
  ingredients: "Niacinamide, Alpha Arbutin, Natural Extract Formula",
  usage: "លាបលើស្បែកក្លៀកជារៀងរាល់ថ្ងៃ បន្ទាប់ពីងូតទឹករួច (យប់)"
},
    {
  id: 11,
  name: "P24 Secrets - សាប៊ូកក់សក់ Born & Crafted! Shampoo",
  subtitle: "សាប៊ូកក់សក់ជួយឱ្យសក់រលាស់ និងមានទម្ងន់ 🌿",
  badge: "ផលិតផលថ្មី", 
  image: "assets/images/products/p11.jpg",
  description: "សាប៊ូកក់សក់រូបមន្តធម្មជាតិ Born & Crafted! ជួយសម្អាតស្បែកក្បាលបានស្អាតល្អ កាត់បន្ថយសក់ជ្រុះ ជួយឱ្យឫសសក់រឹងមាំ និងសក់ទន់រលោងមានទម្ងន់។",
  ingredients: "Natural Herb Extracts, Keratin, Essential Oils Formula",
  usage: "ចាក់សាប៊ូលើបាតដៃ រួចលាបលើសក់ដែលសើម ញីថ្នមៗឱ្យបង្កើតពពុះ បន្ទាប់មកលាងសម្អាតចេញដោយទឹកស្អាត"
},
    {
  id: 12,
  name: "P24 Secrets - គ្រីមអប់សក់ Born & Crafted! Hair Mask",
  subtitle: "គ្រីមអប់សក់ជួយស្តារសក់ខូចឱ្យទន់រលោង 🥑",
  badge: "ផលិតផលថ្មី",
  image: "assets/images/products/p12.jpg",
  description: "គ្រីមអប់សក់ Born & Crafted! Hair Mask ជួយចិញ្ចឹម និងស្តារសក់ស្ងួតបែកចុង សក់ខូចដោយសារការលាបពណ៌ ឬកំដៅ ឱ្យត្រឡប់មកទន់រលោង មានសំណើម និងមានទម្ងន់ឡើងវិញ។",
  ingredients: "Keratin, Argan Oil, Natural Nourishing Extracts",
  usage: "បន្ទាប់ពីកក់សក់រួច លាបគ្រីមអប់សក់ឱ្យសព្វ (ចៀសវាងស្បែកក្បាល) ទុករយៈពេល ៥-១០ នាទី រួចលាងទឹកចេញឱ្យស្អាត"
},
  {
    id: 13,
    name: "P24 Secrets - សេរ៉ូមលាបខ្លួន Deliver Intensive Nourishing 10 (Glow Boost)",
    subtitle: "សេរ៉ូមផ្តល់សំណើមជ្រៅ និងធ្វើឱ្យស្បែក Glow  ✨",
    badge: "ផលិតផលថ្មី",
    image: "assets/images/products/p13.jpg",
    description: "សេរ៉ូមបំប៉នស្បែកដងខ្លួនរូបមន្តប្រមូលផ្តុំ ជួយផ្តល់សំណើមយ៉ាងជ្រាលជ្រៅ ការពារស្បែកស្ងួត និងធ្វើឱ្យស្បែកទន់រលោងមានពន្លឺថ្លា។",
    ingredients: "Squalane, Hyaluronic Acid, Panthenol",
    usage: "លាបលើស្បែកដងខ្លួនជារៀងរាល់ថ្ងៃ បន្ទាប់ពីងូតទឹករួច"
  },
  {
    id: 14,
    name: "P24 Secrets - សេរ៉ូមលាបខ្លួន Extra Bright Crystal White Serum",
    subtitle: "សេរ៉ូមបង្កើនភាពសភ្លឺថ្លាដល់ស្បែកដងខ្លួន 💎",
    badge: "ផលិតផលថ្មី",
    image: "assets/images/products/p14.jpg",
    description: "សេរ៉ូមលាបខ្លួនរូបមន្ត Extra Bright ជួយកាត់បន្ថយស្នាមអុចខ្មៅ ជួយឱ្យស្បែកសភ្លឺថ្លាបែបធម្មជាតិ និងមានភាពទន់រលោង។",
    ingredients: "50x Vitamin C, Crystal White Formula, Pure Vitamin E",
    usage: "លាបលើស្បែកដងខ្លួនជារៀងរាល់ថ្ងៃ ព្រឹក និងយប់"
  },
    {
  id: 15,
  name: "P24 Secrets - ឡូសិនបំប៉នស្បែក Botanical Nourishment",
  subtitle: "ឡូសិនផ្សំដោយប្រេងរុក្ខជាតិធម្មជាតិ 🌿",
  badge: "ផលិតផលថ្មី",
  image: "assets/images/products/p15.jpg",
  description: "ឡូសិនបំប៉នស្បែកផ្សំដោយប្រេងរុក្ខជាតិធម្មជាតិ ជួយរក្សាសំណើម ការពារស្បែកស្ងួត និងជួយឱ្យស្បែកមានពន្លឺថ្លាចែងចាំងបែបធម្មជាតិ។",
  ingredients: "Botanical Extracts, Natural Oils (Macadamia/Argan Oil)",
  usage: "លាបលើស្បែកដងខ្លួនជារៀងរាល់ថ្ងៃ បន្ទាប់ពីងូតទឹករួច ដើម្បីទទួលបានស្បែកទន់រលោង"
},
    {
  id: 16,
  name: "P24 Secrets - ឡូសិន Softening & Intensive Skin Lotion",
  subtitle: "ឡូសិនផ្តល់សំណើមជ្រៅ និងធ្វើឱ្យស្បែកទន់រលោង 🧴",
  badge: "ផលិតផលថ្មី",
  image: "assets/images/products/p16.jpg",
  description: "ឡូសិនបំប៉នស្បែកដងខ្លួនរូបមន្តប្រមូលផ្តុំ Sodium Hyaluronate និង Shea Butter ជួយផ្តល់សំណើមជ្រៅ ជួសជុលស្បែកស្ងួតប្រេះស្រកា និងការពាររបាំងការពារស្បែកឱ្យមានសុខភាពល្អ។",
  ingredients: "Sodium Hyaluronate, Shea Butter, Squalane, Ceramide NP, Panthenol",
  usage: "លាបលើស្បែកដងខ្លួនជារៀងរាល់ថ្ងៃ ព្រឹក និងយប់ ឬប្រើប្រាស់បន្ទាប់ពីងូតទឹករួច"
}
];