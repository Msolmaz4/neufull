const mongoose =require('mongoose')
const Products =require('./models/productModels')

const main = ()=>{
  mongoose.connect('mongodb://localhost:27017/eCommerce')//mongodb://ip/port/dbname
  .then(console.log('mongoose baglanti okey'))
  .catch((err)=>console.log(err))
}
main()


      

Products.insertMany(
  [

    {
      title: 'The &quot;',
      description: 'Ball is life for your family.\n' +
        '\n' +
        'FEATURES\n' +
        '\n' +
        '-Leather strap\n' +
        '-Ships FAST! \n' +
        '-100% cotton twill\n' +
        '-6-panel, unstructured, low-profile \n' +
        '-Cool-Crown mesh lining\n' +
        '-We take personalization requests\n' +
        '\n' +
        'PERSONALIZE\n' +
        '\n' +
        'This listing is only for a hat that is ready to ship. If you would like anything printed on the side or personalized, please contact us. We also have plenty of listings that are available for customization. \n' +
        '\n' +
        'Find them here: https://etsy.me/2N8q8pk\n' +
        '\n' +
        'SHIPPING\n' +
        '\n' +
        'Please click in the tab above titled &quot;Shipping & Policies&quot; to check specifically for your region, and be sure to check our policies before buying. We ship hats using USPS First Class which takes 2-5 days to arrive. We offer upgraded shipping services at checkout. \n' +
        '\n' +
        'SATISFACTION GUARANTEE\n' +
        '\n' +
        'If there is any problem, just contact us and we will solve the issue until you are fully satisfied! We also are happy to work with you for any bulk order or personalization requests!\n' +
        '\n' +
        'WHY SHOP WITH US?\n' +
        '\n' +
        'We LOVE the idea of offering a memorable and fun gift to our customers! That&#39;s is why we offer a wide variety of fun and unique dad hats to choose from. We take pride in designing, embroidering, and packaging our products. We also do not use mock-ups like plenty of hat shops do. We use real photos of our products so you know exactly what you are getting! All of our items are made with commercial equipment, which ensures a professional look and finish to your final product. \n' +
        '\n' +
        'VISIT OUR SHOP:\n' +
        'www.etsy.com/shop/EmmsEmbroideryCo',
      quantity: 09,
      num_favorers: 39,
      tags: [
        'girlfriend gift',
        'dad hat',
        'hats',
        'embroidery',
        'embroidered',
        'baseball cap',
        'personalized gift',
        'Baskteball Mom',
        'Team Mom',
        'Basketball dad hats',
        'Momslife',
        'Mom Coach',
        'Mom Gifts'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 22.99,
      img: 'https://i.etsystatic.com/14221782/r/il/623996/2906244845/il_fullxfull.2906244845_lhor.jpg',
      onSale: true,
      taxonomy_id: 1
    },
    {
      title: 'River Bend  2&quot;x4&quot;.',
      description: 'These steel belt buckles are individually handmade in Bozeman, Montana.T his belt buckle has an extremely durable, baked on powder coat finish to resist moisture and scratches.\n' +
        '\n' +
        'Each buckle is made from start to finish by heating, cutting, pounding, welding, grinding and finishing the steel until the design emerges. No two buckles are identical.  Belt not included. This buckle is made from 1/8&quot; plate steel.  It weighs approximately 1/3 lb.',
      quantity: 89,
      num_favorers: 74,
      tags: [
        'Belt Buckle',
        'Birthday',
        'Montana',
        'Barbed Wire',
        'Buckle',
        'Custom Welded',
        'Steel metal',
        'Contemporary Country',
        'Groomsman gifts',
        'Mens or Womens Gift',
        'Father Gift',
        'Boyfriend present',
        'Mens Belt Buckle'
      ],
      processing_min: 5,
      processing_max: 10,
      price: 119.95,
      img: 'https://i.etsystatic.com/7409307/r/il/96f4d3/664611099/il_fullxfull.664611099_n4fv.jpg',
      onSale: true,
      taxonomy_id: 1
    },
    {
      title: 'Pink and Blue Sequin Face Mask. 2 Tone Sequin Mask. Adults, Washable, Glam Mask, Sequin Mask',
      description: 'Sequin Face Mask\n' +
        '\n' +
        'Mask is 3-ply sequin cotton fabric; it functions as a physical barrier and it’s 3 layers offers stylish enhanced protection.\n' +
        '\n' +
        '100% reusable - masks are reusable and washer / dryer safe.\n' +
        '*Hand washing is recommended to preserve materials.\n' +
        '\n' +
        'High fashion, quality, comfortable masks with stretchable, adjustable ear loops.\n' +
        '\n' +
        'If you have concerns about size and/ or fit, Please message Me your head measurements and I can make the size accordingly. \n' +
        '\n' +
        '100% American Made in Los Angeles, California.\n' +
        '\n' +
        '\n' +
        'Non-medical grade mask, produced to help reduce the spread of Covid-19. \n' +
        '\n' +
        'Use of this cloth face covering is not intended to prevent any illness or disease. \n' +
        'Please visit the CDC website for additional information on the safe use of cloth face coverings. \n' +
        '\n' +
        '\n' +
        'PLEASE NOTE: \n' +
        'This is not a medical grade face mask. \n' +
        'Not intended for clinical use. \n' +
        'Face masks should not be worn by those who may have breathing difficulties whilst wearing it. \n' +
        'Mask is not intended for long term use, and it is also advised to remove the mask when you are not around people for proper flow of air. \n' +
        '\n' +
        '\n' +
        'ALL SALES FINAL\n' +
        'DUE TO REASONS OF SAFETY AND HYGIENE, WE CAN NOT ACCEPT RETURNS OR EXCHANGES ON THESE MASKS.',
      quantity: 3,
      num_favorers: 3,
      tags: [
        'Bling Mask',
        'Colorful Mask',
        'Two Tone Mask',
        'Blue Sequin Mask',
        'Pink Sequin Mask',
        'Luxury Mask',
        'Sequin Mask',
        'Washable Mask',
        'Fashion Mask',
        'Face Mask'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 21,
      img: 'https://i.etsystatic.com/25629522/r/il/0ea872/2678876474/il_fullxfull.2678876474_bn96.jpg',
      onSale: true,
      taxonomy_id: 1
    },
    {
      title: 'Blue White Peach Pink Patterned Face Mask Chain / Face Mask  Necklace / Gift for her / Face Mask Chain Holder Lanyard',
      description: 'Handmade Face Mask Chain. Fully Customizable! Pick your colors, add your name, support your favorite sports team, rock your school colors or even make it fancy with crystals! So many possibilities. Great for Adults and Kids!\n' +
        '\n' +
        'This chain allows you to remove your face mask, while leaving it close to you for easy access. \n' +
        '\n' +
        'Each chain is handmade with high quality materials. Beading wire creates a strong, long lasting chain. Lightweight materials create a comfortable experience while wearing. \n' +
        '\n' +
        'Attach to face mask ear loops using the 14mm lobster clasps\n' +
        '\n' +
        'Great for:\n' +
        '~Running errands\n' +
        '~In your office\n' +
        '~While on a walk when social distancing at times\n' +
        '~In a situation when you may not have to wear your mask at all times\n' +
        '\n' +
        'Cleaner than:\n' +
        '~leaving your mask in your purse/pocket\n' +
        '~laying on the seat next to you\n' +
        '~holding your mask in your hand\n' +
        '\n' +
        'Sizing:\n' +
        'Approx 24&quot;\n' +
        '\n' +
        'For custom orders send me a message. \n' +
        '~ specific colors\n' +
        '~ name or initials \n' +
        '~ favorite sports team\n' +
        '~ school colors\n' +
        '~ crystals\n' +
        '~ clasp colors\n' +
        '\n' +
        'Refer to the custom choices listing to view the many possibilities!\n' +
        '\n' +
        'This Specific Listing Information \n' +
        'Clasp Color:  gunmetal 14mm lobster clasp\n' +
        'Color(s): White, Pink, Peach, Blues, Gold\n' +
        'Bead Material: glass beads, metal beads, melted perler (peach)\n' +
        '\n' +
        'Shop Owner:\n' +
        'Your purchase will help support me, as a single Mom, raise my beautiful daughter. I love crafting and I am excited about coming up with new patterns for these chains. I look forward to hearing your unique ideas and turning them into a loved product.',
      quantity: 4,
      num_favorers: 17,
      tags: [
        'face mask chain',
        'face mask necklace',
        'face mask lanyard',
        'cyber monday',
        'mask holder',
        'face mask',
        'beaded necklace',
        'gift for her',
        'mask necklace',
        'face mask kids',
        'face mask adults',
        'eye glass chain',
        'back to work'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 12,
      img: 'https://i.etsystatic.com/24468208/r/il/9731e0/2616324193/il_fullxfull.2616324193_c82g.jpg',
      onSale: true,
      taxonomy_id: 1
    },
    {
      title: '37&quot;-40&quot; Maasai beaded belt, Leather beaded belt, Unisex leather belt',
      description: 'MEASUREMENT IS TAKEN FROM WHERE THE BUCKLE JOINS THE LEATHER TO THE FIRST & TO THE LAST OF 5 HOLES\n' +
        '\n' +
        'Waist Size to Belt Size\n' +
        '- Waist size =28, choose belt size =30\n' +
        '– Waist size = 32, choose belt size = 34\n' +
        '– Waist size = 34, choose belt size = 36\n' +
        '– Waist size = 36, choose belt size = 38\n' +
        '– Waist size = 38, choose belt size = 40\n' +
        '\n' +
        'For hundreds of years the Maasai people have been using bead work to embody their culture. Beaded jewellery Is used everyday as adornment to represent wealth, beauty, strength, warrior hood, marital status, age-sect, social status and other cultural traditions. The practice of bead work is specifically done by women, passed down from mother to daughter.\n' +
        '\n' +
        '*Handmade in Kenya from 100% Locally Sourced Materials. the collars are beautifully hand-beaded and \n' +
        '  then hand-stitched on robust but soft cow hide and finished on the inside with a soft goat skin lining\n' +
        '*Maasai Ceramic Beads\n' +
        '*Hand cast sturdy RECYCLED Solid Brass Hardware',
      quantity: 1,
      num_favorers: 10,
      tags: [
        'Unique belt',
        'Ladies belt',
        'Masai beaded belt',
        'Men gifts',
        'Belt',
        'Leather belts',
        'Leather belt',
        'Accessories',
        "children's belt"
      ],
      processing_min: 1,
      processing_max: 3,
      price: 58,
      img: 'https://i.etsystatic.com/16294850/r/il/2fca03/3398669710/il_fullxfull.3398669710_kksu.jpg',
      onSale: true,
      taxonomy_id: 1
    },
    {
      title: 'Travel bandage for baby',
      description: 'Travel bandage, essential to complete the baby exchange bag. Soft cotton fabric with padding and interior in printed waterproof fabric, very easy to clean. The interior in waterproof fabric does not have a &quot;plastic&quot; effect but has a fabric-type workmanship that makes it very soft and comfortable. Very comfortable even for the sea bag to take to the beach. Measurements are: open 70 x 49 cm, closed 24 x 20 cm',
      quantity: 1,
      num_favorers: 0,
      tags: [
        'travel changing table',
        'diaper change',
        'baby bandage',
        'baby accessories',
        'accessories newborn',
        'birth gift idea',
        'gearbox mattress',
        'new born',
        'baby exchange bag',
        'Bath'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 32,
      img: 'https://i.etsystatic.com/17343440/r/il/f1e563/2193297777/il_fullxfull.2193297777_afi5.jpg',
      onSale: true,
      taxonomy_id: 1
    },
    {
      title: 'Elf hairbow, Christmas hairbow,  Toddler hairbow,  Small hairbow, 3 inch faux leather Christmas elf bow',
      description: 'This listing is for one faux leather 3 inch hairbow.  This bow measures just over 3 inches and is attached to an alligator clip with a non slip grip.',
      quantity: 2,
      num_favorers: 2,
      tags: [
        'girls hairbow',
        'toddler hair clips',
        'toddler hairbow',
        'christmas hairbow',
        'red and white bow',
        'small hairbows',
        'red hairbow',
        'Christmas hair clip',
        'elf hair clip',
        'elf hairbow',
        'Christmas elf',
        'white and red bow',
        '3 inch hairbow'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 3.99,
      img: 'https://i.etsystatic.com/19376249/r/il/fe9d3c/2676581082/il_fullxfull.2676581082_lib2.jpg',
      onSale: true,
      taxonomy_id: 1
    },
    {
      title: 'ROBERTO CAVALLI. +NEW+ Rimless Eyewear Gold Plated. Rimatara 701 028. Made in Italy',
      description: 'Brand:\tROBERTO CAVALLI\n' +
        'Model:\tRimatara 701 028\n' +
        'Country/Region of Manufacture:\tItaly\n' +
        'Circa:\t2000s\n' +
        'Front width:\t136 mm\n' +
        'Front height:\t34 mm\n' +
        'Lens size:\t55 mm\n' +
        'Bridge size:\t17 mm\n' +
        'Temple length:\t135 mm\n' +
        'Frame color:\tGold\n' +
        'Frame material:\tMetal \n' +
        'Lens material:\tPolycarbonate. Demo \n' +
        'Lens color:\tClear\n' +
        'Lens diopter:\tDemo\n' +
        'Hinges:\tSpring\n' +
        'Accesories:\t----\n' +
        'Condition:\tNEW',
      quantity: 1,
      num_favorers: 3,
      tags: [
        'ROBERTO CAVALLI',
        'NEW',
        'Rimless Eyewea',
        'Gold Plated',
        'Rimatara 701 028',
        'Made in Italy'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 450,
      img: 'https://i.etsystatic.com/23025860/r/il/f590c5/3011438492/il_fullxfull.3011438492_3piw.jpg',
      onSale: true,
      taxonomy_id: 1
    },
    {
      title: 'Cotton shawl',
      description: 'Cotton thread shawl, diamond shaped and tassels at all four ends.',
      quantity: 1,
      num_favorers: 9,
      tags: [ 'Crochet', 'Wool', 'Cotton', 'Shawl', 'Work' ],
      processing_min: 1,
      processing_max: 1,
      price: 35.2,
      img: 'https://i.etsystatic.com/10308572/r/il/842e62/1652871607/il_fullxfull.1652871607_njfz.jpg',
      onSale: true,
      taxonomy_id: 1
    },
    {
      title: 'Newsboy Cap, Boys Flat Cap, Kids Grey Corduroy Newsboy Cap - Children',
      description: 'This GREY Corduroy newsboy cap has long been a favorite in Tweed and Linen. ‘What about corduroy?’ a customer asked. We listened, and very good it is too!  \n' +
        '\n' +
        'Fabric:  100% Cotton – Corduroy Finish\n' +
        'Color:    Grey\n' +
        'Brim:     2 inch brim\n' +
        'Care:     Spot Clean\n' +
        'Product of America – Little Lids\n' +
        'Two Sizes:    52 cms (1-3 years) and 54 cms. (2-6 years) Adjustable snap on side to ensure a proper and comfortable fit.\n' +
        '\n' +
        'Available in other colors:  Blue - Khaki - Black - Please see other colors under Children&#39;s Flat Caps',
      quantity: 5,
      num_favorers: 0,
      tags: [
        'grey boys cap',
        'grey children cap',
        'grey newsboy cap',
        'grey Scally cap kids',
        'grey baby cap',
        'grey newsboy',
        'grey kids flat cap',
        'grey ivy cap kids'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 18,
      img: 'https://i.etsystatic.com/8557689/r/il/9818be/3423987381/il_fullxfull.3423987381_kqzt.jpg',
      onSale: true,
      taxonomy_id: 1
    },
    {
      title: 'Boerboel South African Mastiff Breed of Dog Lanyard Key Card Holder Perfect Gift',
      description: 'The complete length that goes around your neck measures approximately 91.5cm or 36 inches and just less than 2.5cm or 1 inch wide not including the metal fittings.\n' +
        '\n' +
        'The material is a soft ribbon with a tight weave and narrow ribbing. Images are permanent and will not crack, fade or rub off. Ribbons can be washed and ironed on directly.\n' +
        '\n' +
        'Practical but decorative items made by us, Tailz Gifts, showing a series of prints of your favourite breed of dog.\n' +
        '\n' +
        'Perfect as a gift all year round or perfect just to keep for yourself.\n' +
        '\n' +
        'Thank you for looking but before you go......\n' +
        '\n' +
        'Check out our shop where you will find a wide range of other dog breeds and other animals including cats, aquatic, wild animals, countryside, birds, insects, horses etc etc......in our shop.\n' +
        '\n' +
        'Thank you from Tailz Gifts',
      quantity: 3,
      num_favorers: 5,
      tags: [
        'Dog',
        'Pet',
        'Dog theme gift',
        'Pet themed gift',
        'lanyard',
        'key holder',
        'keyring',
        'card holder',
        'work lanyard',
        'dog lanyard',
        'Boerboel',
        'Boerboel lanyard',
        'mastiff lanyard'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 9.99,
      img: 'https://i.etsystatic.com/12030156/r/il/d65245/2109668405/il_fullxfull.2109668405_fegi.jpg',
      onSale: true,
      taxonomy_id: 1
    },
    {
      title: 'Christmas face Mask - festive face covering - Small, Medium, Large - novelty gift',
      description: 'Why not make your face mask festive with these Christmas themed coverings!\n' +
        '\n' +
        'A light hearted way to bring some fun & Christmas Joy to those around you during these difficult times. \n' +
        '\n' +
        'Face masks are available in 3 sizes - sizing does not include strap area (face area measurement only)\n' +
        'Approx measurements;\n' +
        'Small - 15.5cm X 10cm\n' +
        'Medium - 16cm X 11.5cm\n' +
        'Large - 20cm X 12cm \n' +
        '\n' +
        'Please note that these are not medical grade masks. REACH compliant.\n' +
        '\n' +
        'Can be machine washed; we recommend low temperature - do not tumble dry\n' +
        '\n' +
        '\n' +
        'Looking For Something Personalised?\n' +
        'Feel free to contact us if you&#39;re looking for something more specific - we&#39;re happy to try help where we can. \n' +
        '\n' +
        'Please take your time to read our FAQs prior to ordering. The information provided within this section is important to the ordering process and acts alongside our shop policies.\n' +
        '\n' +
        '\n' +
        '&#39;image: Flaticon.com&#39;. This cover has been designed using resources from Flaticon.com',
      quantity: 14,
      num_favorers: 0,
      tags: [
        'Christmas theme',
        'Facial coverings',
        'gifts for him',
        'gifts for her',
        'the grinch',
        'bah humbug',
        'covid19 masks',
        'christmas face mask',
        'ya filthy animal',
        'novelty gift ideas',
        'corona virus',
        'xmas stocking filler',
        'Christmas 2021'
      ],
      processing_min: 5,
      processing_max: 10,
      price: 9,
      img: 'https://i.etsystatic.com/13773914/r/il/745624/2531589926/il_fullxfull.2531589926_f6nf.jpg',
      onSale: true,
      taxonomy_id: 1
    },
    {
      title: 'Cotton Bow ties for man handmade with Grid Pattern Suit Groomsmen Pocket Square set Party and Wedding Bowties Stripe Pattern in Gold',
      description: 'One of the best groomsman accessories, the necktie, bowties, and pocket square are suitable for different circumstances like a party, wedding, opening day, back to school or even on a date! \n' +
        '\n' +
        'Cotton made material which provides very soft and easy to wear for every size of a man. \n' +
        '\n' +
        'With different colors, you may choose more than one color to match your dressing style. \n' +
        '\n' +
        'Please contact us if you need more information. We are willing to help. \n' +
        '\n' +
        'Material: Cotton\n' +
        '\n' +
        'For more combinations, please feel free contact us.\n' +
        'You can click the following link to our store for more options.\n' +
        'https://www.etsy.com/shop/mandyclothing?ref=seller-platform-mcnav\n' +
        '\n' +
        'Note: Photos are an approximate representation of the actual color. The color may be different by your device.\n' +
        '\n' +
        '\n' +
        'Shipping:\n' +
        'We will ship the items within 3 to 4 business days after receiving the payment by USPS. Please feel free to contact us for Express shipping.',
      quantity: 999,
      num_favorers: 1,
      tags: [
        'groomsmen',
        'bow ties',
        'bowtie for man',
        'bowtie for boy',
        'adjustable bow tie',
        'handmade',
        'party dress code',
        'wedding',
        'Wedding gress',
        'Bird print',
        'Necktie',
        'Pocket square',
        'back to school'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 90,
      img: 'https://i.etsystatic.com/22254155/r/il/50acfd/2461586358/il_fullxfull.2461586358_kph3.jpg',
      onSale: true,
      taxonomy_id: 1
    },
    {
      title: 'Cashmere Fingerless Gloves - Upcycled Cashmere Handwarmers - Made from a Recycled Cashmere Sweater - blue cashmere with crocheted edging - M',
      description: 'These cozy fingerless gloves are made from an upcycled sweater. The blue cashmere is soft and warm, using the edge from the sweater as the cuff. The hand edge is crocheted with a pretty blue yarn, making a comfortable, flexible fit. \n' +
        '\n' +
        'Materials: 100% cashmere with 60% merino wool, 40% silk edging\n' +
        '\n' +
        'Size: Adult M',
      quantity: 1,
      num_favorers: 0,
      tags: [
        'handwarmers',
        'fingerless gloves',
        'fingerless',
        'upcycled cashmere',
        'upcycled wool',
        'wristlets',
        'armwarmers',
        'upcycled handwarmers',
        'upcycled gloves',
        'upcycled fingerless',
        'cashmere gloves',
        'cashmere handwarmers',
        'cashmere fingerless'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 28,
      img: 'https://i.etsystatic.com/11078930/r/il/e455a0/3532186534/il_fullxfull.3532186534_9p3m.jpg',
      onSale: true,
      taxonomy_id: 1
    },
    {
      title: 'Baby Headband/New Baby Gift/ Hairbow/Baby Shower Gift/1st Birthday Gift/Baby Girl/Hair Bow/Baby Gift Set/Ribbed Hairband/Girls Hair Bow',
      description: 'Beautiful Ribbed Headbands\n' +
        '\n' +
        'Beautifully made soft ribbed knit headbands in a choice of 20 soft and subtle colour tones.\n' +
        '\n' +
        'Great for a newborn baby gift or general gift all year round.\n' +
        '\n' +
        'Suitable from 0-24months.\n' +
        '\n' +
        'Postage and Packaging\n' +
        'Courier- Royal Mail \n' +
        '\n' +
        'Packaging - All orders are beautifully wrapped in tissue paper inside a postal box. If your order is to be sent directly as a gift and you would like a personal message to be included, please contact us for support.\n' +
        '\n' +
        'The Gifternator Customer Experience Promise\n' +
        'If you&#39;re not 100% satisfied with your purchase for any reason, please contact us directly so we have the opportunity to make things right before you leave a review. We place customer satisfaction at the heart of our business and work hard to deliver no less than 100% customer service at all times.',
      quantity: 668,
      num_favorers: 18,
      tags: [
        'New baby',
        'baby gift',
        'baby girl gift',
        'baby hairbow',
        'baby hair accessory',
        'baby accessories'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 3.99,
      img: 'https://i.etsystatic.com/24737566/r/il/917fea/3638604056/il_fullxfull.3638604056_3olk.jpg',
      onSale: true,
      taxonomy_id: 1
    },
    {
      title: 'Girl and baby hair band in cotton jersey, headbands, turban',
      description: 'Our creations are the result of the imagination of our designer Valentina who creates each item by hand.\n' +
        'This band is in soft pure cotton jersey suitable for children and even babies, THE FLOWER is HAND-SEWN\n' +
        '\n' +
        'It is an indispensable accessory for girls who feel like little princesses but it can also be very useful to protect their ears from the wind and cold\n' +
        '\n' +
        'This accessory can not be missed in the beautiful spring and summer days and will give a touch of originality to the outfit of your child.\n' +
        'Our bands are completely handmade and for this reason the imagination of the band can change according to the cut of the fabric, and any small defects are a guarantee of their craftsmanship.\n' +
        'Hand washing and ironing done with a protective cloth is recommended\n' +
        'When ordering, tell me the age and size of the child',
      quantity: 1,
      num_favorers: 0,
      tags: [
        'sash',      'elastic',
        'heandband', 'turban',
        'tiara',     'Baby',
        'girl',      'Girls'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 12,
      img: 'https://i.etsystatic.com/17460843/r/il/0605f3/3059150231/il_fullxfull.3059150231_iswg.jpg',
      onSale: true,
      taxonomy_id: 1
    },
    {
      title: 'READY TO SHIP / Knit Mohair Turban, Winter Headband, Soft Kid Mohair, Women Knitted Headband, Knit Ear Warmer, Mohair Luxury Wool',
      description: 'Hand knit turban headband in kid mohair blend that feels super soft and cozy on the skin. With a snugly fit that ensures protection from the cold and a draped design that allows you to adjust its width.\n' +
        '\n' +
        'Knitted by hand in 8 versatile colors so you can match -or mismatch - it with our soft handmade scarves https://etsy.me/2C2Ku0w for an effortless look of elegant coziness.\n' +
        '\n' +
        'Ready to ship, ships in 1-3 business days.\n' +
        '\n' +
        'Handcrafted in Greece.\n' +
        '\n' +
        'DETAILS\n' +
        '· Super soft, premium quality Italian mohair\n' +
        '· 60% kid mohair, 40% microfiber\n' +
        '· Hand wash in cold water\n' +
        '\n' +
        'SIZE & FIT\n' +
        '· One size, fits most\n' +
        '· Custom sizing available upon request\n' +
        '\n' +
        'COLORS\n' +
        '· Ready to ship in selected colors, for more colors see here https://www.etsy.com/listing/654040178\n' +
        '· Video shows colors Honey, Petal and Night\n' +
        '· Made to order in 8 colors\n' +
        '\n' +
        'SHIPPING & RETURNS:\n' +
        '· Free shipping\n' +
        '· Gift-ready packaging\n' +
        '· Ready to ship in selected colors, ships in 1-3 business days. \n' +
        '· 30-day return policy https://etsy.me/2zLMBEv\n' +
        '\n' +
        'See more of our Mohair capsule collection here: https://etsy.me/2EdgmRy\n' +
        '\n' +
        '· · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·  \n' +
        '\n' +
        'PLEXIDA KNITWEAR\n' +
        'Handcrafted Knitwear — Made in Greece\n' +
        'plexida.etsy.com',
      quantity: 7,
      num_favorers: 3,
      tags: [
        'Knit Mohair Turban',
        'Winter Headband',
        'Knit Ear Warmer',
        'Super Soft Headband',
        'Women Headbands',
        'Knitted Headband',
        'Warm Mohair Wool',
        'premium quality knit',
        'snugly head warmer',
        'plexida luxury gift',
        'dark grey headband',
        'soft Kid Mohair',
        'bridesmaid gift'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 38,
      img: 'https://i.etsystatic.com/7558906/r/il/aa400d/1720554240/il_fullxfull.1720554240_ftis.jpg',
      onSale: true,
      taxonomy_id: 1
    },
    {
      title: 'Girl and baby hair band in cotton jersey, headbands, turban',
      description: 'Our creations are the result of the imagination of our designer Valentina who creates each item by hand.\n' +
        'This band is in soft pure cotton jersey suitable for children and even babies, THE FLOWER is HAND-SEWN\n' +
        '\n' +
        'It is an indispensable accessory for girls who feel like little princesses but it can also be very useful to protect their ears from the wind and cold\n' +
        '\n' +
        'This accessory can not be missed in the beautiful spring and summer days and will give a touch of originality to the outfit of your child.\n' +
        'Our bands are completely handmade and for this reason the imagination of the band can change according to the cut of the fabric, and any small defects are a guarantee of their craftsmanship.\n' +
        'Hand washing and ironing done with a protective cloth is recommended\n' +
        'When ordering, tell me the age and size of the child',
      quantity: 1,
      num_favorers: 0,
      tags: [ 'Bands', 'turban', 'tiara', 'girl', 'fixings', 'elastic' ],
      processing_min: 1,
      processing_max: 3,
      price: 13,
      img: 'https://i.etsystatic.com/17460843/r/il/cec8b6/3011440772/il_fullxfull.3011440772_t43x.jpg',
      onSale: true,
      taxonomy_id: 1
    },
    {
      title: 'READY TO SHIP / Mens Beanie Hat, Slouchy Winter Hat, Boyfriend Beanie, Rolled up Beanie, Customizable Beanie, Made to Order',
      description: 'Hand knit beanie hat, made from a warm and soft wool blend. You can adjust the hat to your prefer fitting; roll up the rib for a snug fit or leave it unrolled for a slouchy one (or roll some of it for something in between!). Ready to ship in selected colors and  in two sizes, women&#39;s and men&#39;s.\n' +
        '\n' +
        'Ships in 1-3 business days.\n' +
        '\n' +
        'Handcrafted in Greece.\n' +
        '\n' +
        'DETAILS\n' +
        '· Adjustable folded brim\n' +
        '· Soft wool blend\n' +
        '· Hand wash in cold water\n' +
        '\n' +
        'SIZE & FIT\n' +
        '· Comes in two standard sizes, Women&#39;s and Men&#39;s\n' +
        '· Custom sizing available upon request, you can send us a message with your head circumference\n' +
        '\n' +
        'COLORS\n' +
        '· Here shown in Burgundy and Deep Teal \n' +
        '· Video shows color Light Grey\n' +
        '· Ready to ship in selected colors\n' +
        '· Made to order in 20 colors here https://www.etsy.com/listing/753065575\n' +
        '\n' +
        'SHIPPING & RETURNS:\n' +
        '· Free shipping\n' +
        '· Gift-ready packaging\n' +
        '· Ready to ship in selected colors, ships in 1-3 business days. \n' +
        '· 30-day return policy https://etsy.me/2zLMBEv\n' +
        '\n' +
        '· · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · \n' +
        '\n' +
        'PLEXIDA KNITWEAR\n' +
        'Handcrafted Knitwear — Made in Greece\n' +
        'plexida.etsy.com\n' +
        '- Less',
      quantity: 29,
      num_favorers: 4,
      tags: [
        'Turn Up Beanie',
        'Mens Beanie Hat',
        'Slouchy Beanie',
        'Boyfriend Beanie',
        'Rolled up Beanie',
        'Snug Beanie',
        'Customizable Beanie',
        'Light Grey Beanie',
        'Slouchy Winter Hat',
        'Wool Skit Hat',
        'Unisex Woolen Hat',
        'Tight Womens Beanie',
        'gifts for him'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 38,
      img: 'https://i.etsystatic.com/7558906/r/il/53eccd/2083796290/il_fullxfull.2083796290_3izh.jpg',
      onSale: true,
      taxonomy_id: 1
    },
    {
      title: 'Metal keychain with desired engraving Model: Truck with desired engraving',
      description: 'Metal keychain with your personal engraving\n' +
        '\n' +
        'The ideal gift for professional drivers, for example.\n' +
        'With this original key hanger, your loved ones always have the certainty of being loved, even on distant highways.\n' +
        '\n' +
        'Dimensions: 9 x 3.5 x 0.3 cm\n' +
        '\n' +
        'On request also with back engraving!',
      quantity: 100,
      num_favorers: 0,
      tags: [
        'Favorite person',
        'Gift for men',
        'Gift for women',
        'Text',
        'Keychain with engraving',
        'Key fob',
        'Favorite Person Pendant',
        'Pendant with engraving',
        'Trailer personalized',
        'Gift',
        'Partner Keychain',
        'Love',
        'Keychain Engraving'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 16.9,
      img: 'https://i.etsystatic.com/15676571/r/il/89b019/3537767828/il_fullxfull.3537767828_srqu.jpg',
      onSale: true,
      taxonomy_id: 1
    },
    {
      title: 'Teapot Keychain VERY SMALL Tea Pot Keyring Tea Keychain Tea Gift Tea Cup Keychain Mother&#39;s Day Keychain Tea Party Gift Bridesmaid Keychain',
      description: 'This listing is for a personalized gold teapot and teacup keychain with a hand-stamped initial charm. This can be made into a necklace instead, just choose your chain-length from the drop-down menu. You will be able to choose between a key ring, link chain, or ball chain when checking out. You will also be able to choose your initial! :) **Please see the second picture for scale. This is a VERY SMALL charm.\n' +
        '\n' +
        '\n' +
        'This keychain is made of steel and pewter. The initial charm measures 3/8&quot;.\n' +
        '\n' +
        '**Please note that this is gold-colored and not actually made from real gold.\n' +
        '\n' +
        '\n' +
        '\n' +
        'Keychains make excellent gifts for everybody! They&#39;re an especially good gift for the men in your life who are so tricky to buy for. They make a great present for either men or women. :)\n' +
        '\n' +
        '\n' +
        '♥ If you&#39;d like to add dangling birthstones to this necklace, you can purchase them by following this link:\n' +
        'https://www.etsy.com/listing/205689382/add-a-swarovski-crystal-birthstone?ref=shop_home_active_5\n' +
        '\n' +
        '♥ If you&#39;d like to add round birthstones to this necklace, you can purchase them by following this link:\n' +
        'https://www.etsy.com/listing/205688968/add-a-swarovski-crystal-birthstone?ref=shop_home_active_6\n' +
        '\n' +
        '♥ If you&#39;d like to add letter charms, you can purchase them here:\n' +
        'https://www.etsy.com/listing/205668256/add-a-letter-charm?ref=shop_home_active_4\n' +
        '\n' +
        '♥ You can add dangling beads to this necklace by purchasing them here:\n' +
        'https://www.etsy.com/listing/205688328/add-a-dangling-bead?ref=shop_home_active_7\n' +
        '\n' +
        'Our items are hand stamped. You&#39;ll receive a completely unique piece of jewelry made especially for you!\n' +
        '\n' +
        '\n' +
        '\n' +
        '-----\n' +
        '\n' +
        'Have a design idea?  Just let us know!  We love working with our customers to make meaningful custom jewelry.\n' +
        '\n' +
        'If you buy more than one item, please know that we always bundle and refund excess shipping.\n' +
        '\n' +
        'This is our second jewelry shop on Etsy. Our other shop is called MetalSpeak - www.etsy.com/shop/metalspeak. We sell necklaces and keychains on both sites. If you see the same item listed on our other shop for a different price, please feel free to contact us so that we can correct the error. :)\n' +
        '- - - - - - \n' +
        '\n' +
        'We offer both 3/4&quot; and 1&quot; keyrings for most of our listings.  The keyring size refers to the actual keyring itself and not the charms.',
      quantity: 1,
      num_favorers: 34,
      tags: [
        'keychain',
        'custom keychain',
        'metalspeaktoo',
        'mothers day keychain',
        "mother's day gift",
        'bridesmaid keychain',
        'teacup keychain',
        'teapot keychain',
        'tea pot keyring',
        'tea keychain',
        'tea gift',
        'tea party gift',
        'personalized'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 18.95,
      img: 'https://i.etsystatic.com/10075634/r/il/3bc0bb/753819794/il_fullxfull.753819794_no7k.jpg',
      onSale: true,
      taxonomy_id: 1
    },
    {
      title: 'Nuno Felt Scarf',
      description: 'This beautiful pink and brown scarf is made using soft merino wool and tussah silk fibers. It is a perfect addition to your wardrobe.\n' +
        '\n' +
        'It is one of a kind and 100% handmade.\n' +
        '\n' +
        'Wool is naturally a water repellent/stain resistant and a wonderful insulator against the cold.If it gets wet just hang it to dry.\n' +
        '\n' +
        'The scarf is hand washable if required in warm water with mild shampoo or silk/wool detergent. Squeeze gently.\n' +
        'Drying: on a flat surface.',
      quantity: 1,
      num_favorers: 9,
      tags: [],
      processing_min: 1,
      processing_max: 3,
      price: 65,
      img: 'https://i.etsystatic.com/10938221/r/il/bfa8cc/2729701700/il_fullxfull.2729701700_9o42.jpg',
      onSale: true,
      taxonomy_id: 1
    },
    {
      title: 'Necktie Crochet',
      description: 'For that special someone that craves to &quot;not be like everyone else&quot;.  \n' +
        '\n' +
        'I have been crocheting for over 50 years. I take great pride in my work.   Each tie is designed and crocheted by me.\n' +
        '\n' +
        'Having a hand crocheted tie is truly a special gift to yourself or some special to you.\n' +
        '\n' +
        'The width starting at the bottom is approximately 3&quot; and 52&quot; in length. \n' +
        '\n' +
        'This tie is made from 30% U.S. Merino Wool /70% Acrylic yarn. \n' +
        '\n' +
        'Please wash gently by hand and lay flat to dry. This will help maintain the shape.',
      quantity: 1,
      num_favorers: 0,
      tags: [
        'necktie',
        'crochet tie',
        'one of a kind',
        'one of a kind gift',
        'special gift',
        'Gift'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 20,
      img: 'https://i.etsystatic.com/32633468/r/il/daed19/3537765828/il_fullxfull.3537765828_tmrg.jpg',
      onSale: true,
      taxonomy_id: 1
    },
    {
      title: 'Vintage Sunglasses Daytona DA 857S Safilo authentic Aviator glasses wiht original sun lenses Made in Italy New Old Stock',
      description: 'DAYTONA VINTAGE SUNGLASSES\n' +
        '\n' +
        'Vintage Sunglasses Daytona DA 857S\n' +
        'Made in Italy\n' +
        'Time period: 90’s\n' +
        'Brand: Daytona\n' +
        'Model: Aviator\n' +
        'Material: Acetate, Metal\n' +
        'Frame color: Tortoise\n' +
        'Lenses color: Smoke\n' +
        'Original vintage\n' +
        'Condition: New\n' +
        'Industry: Safilo, Padova\n' +
        'Delivery with hard case box\n' +
        '\n' +
        'Details\n' +
        '\n' +
        'Original sun lenses with &quot;DAYTONA&quot; logo \n' +
        'Ultra rare HANDMADE metal frames\n' +
        'TOP QUALITY Hand Made in Italy \n' +
        'Original vintage frame from &#39;90s \n' +
        'ULTRA RARE collector&#39;s item \n' +
        'New Old Stock, never worn \n' +
        '\n' +
        '\n' +
        'DIMENSIONS:\n' +
        '\n' +
        'Temple length: 140 mm\n' +
        'Vertical height: 49 mm\n' +
        'Horizontal width: 140 mm\n' +
        'Nose Bridge: 14 mm\n' +
        'Eye size: 61 mm',
      quantity: 1,
      num_favorers: 2,
      tags: [
        'Vintage eyewear',
        'Vintage',
        'Made in Italy',
        'Handmade',
        'Safilo',
        'Lunettes',
        'Vintage sunglasses',
        'Persol',
        'Aviator',
        'Tortoise',
        'Daytona',
        'designer sunglasses',
        'Steampunk'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 93,
      img: 'https://i.etsystatic.com/17851528/r/il/70ea7c/2305347751/il_fullxfull.2305347751_5165.jpg',
      onSale: true,
      taxonomy_id: 1
    },
    {
      title: 'Custom Warrant Officer Leather Patch Beanie | Eagle Rising',
      description: 'Super warm and cozy beanie with custom engraved leather patch.\n' +
        '\n' +
        'Keep warm in style. Made of soft rib knit fabric with stretch for a customized fit every time, it’ll keep you cozy without feeling stuffy or restrictive. One size fits most. \n' +
        '\n' +
        '* Ribbed texture\n' +
        '* Stretch knit fabrication\n' +
        '* One size fits most\n' +
        '* Hand wash cold, do not bleach, dry flat, do not iron',
      quantity: 8,
      num_favorers: 10,
      tags: [
        'warrant officer gear',
        'new warrant officer',
        'WO class swag',
        'Eagle rising',
        'warrant officer swag',
        'army warrant officer',
        'retirement gift',
        'warrant officer',
        'mens beanie',
        'leather patch',
        'leather beanie',
        'engraved leather hat',
        'leather engraved'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 20,
      img: 'https://i.etsystatic.com/23003262/r/il/c700dd/3611058611/il_fullxfull.3611058611_d8zf.jpg',
      onSale: true,
      taxonomy_id: 1
    },
    {
      title: 'Go Your Own Way Vintage Style Lyrics Typography wall art print framed',
      description: 'Statement Lyrics typography art print. Go Your Own Way vintage style typography.\r\n' +
        '\n' +
        'This gorgeous print will look amazing as a large framed focal point or as a smaller piece of art within a gallery wall. Whatever your choice of style this will add something a bit different to your walls.\n' +
        'Printed in our studio onto high grade 250gsm fine art paper, using high grade archival pigment inks. All unframed prints have a small white border (4mm) that protects the design when handling and makes framing easier.\n' +
        'Our frames are FSC sustainably produced pine frames, with either black, or white smooth matte finish. All framed prints arrive ready to hang, and have perspex window which makes these both safer, and lighter when hanging on your wall.\n' +
        '\n' +
        'FREE DELIVERY OVER £80\n' +
        '30 DAYS RETURN POLICY\n' +
        'EXPRESS DELIVERY AVAILABLE',
      quantity: 2698,
      num_favorers: 8,
      tags: [],
      processing_min: 1,
      processing_max: 2,
      price: 9.99,
      img: 'https://i.etsystatic.com/20219766/r/il/56b6cd/3759507769/il_fullxfull.3759507769_95ei.jpg',
      onSale: true,
      taxonomy_id: 2
    },
    {
      title: 'Surfing Svg, Surfer Man Riding Wave Silhouette, Palm Tree, Beach Life, Sublimation Design, SVG Scalable Vector Graphics',
      description: 'Surfing Silhouette Design drawn by me.\n' +
        '\n' +
        'THIS IS A DIGITAL FILE- NO PHYSICAL PRODUCT WILL BE SENT\n' +
        '\n' +
        'How you can use files: \n' +
        '- You may use my designs for personal and commercial use. Commercial use is limited to 500 physical items that you can make and sell to each design.\n' +
        '\n' +
        '- Do not use this file on print on demand sites (Redbubble, Zazzle etc) that print digital designs onto physical products for sale. You must be the creator of the physical item. \n' +
        '- Do not modify the design for the purpose of reselling it (For example, remove the border and adding another frame around a design etc).\n' +
        '- You must not resell or share the original files.\n' +
        '\n' +
        '\n' +
        'Contents -1 Zipped Folder Containing:\n' +
        '- 1 EPS Digital Cutting File\n' +
        '- 1 AI Digital Cutting File\n' +
        '- 1 SVG Digital Cutting File\n' +
        '- 1 DXF Digital Cutting File\n' +
        '- 1 PNG Transparent Clipart File\n' +
        '- 1 PDF Digital Cutting File\n' +
        '\n' +
        '\n' +
        'Compatible With:\n' +
        '- Cricut Design Space\n' +
        '- Silhouette Studio Basic Edition\n' +
        '- Silhouette Studio Designer Edition\n' +
        '- Adobe Illustrator\n' +
        '- Adobe Photoshop\n' +
        '- CorelDraw\n' +
        '- Inkscape',
      quantity: 200,
      num_favorers: 0,
      tags: [
        'surf',
        'svg',
        'surfing',
        'summer beach',
        'palm tree beach',
        'surfboard svg',
        'summer vibes',
        'ocean wave svg',
        'beach summer svg',
        'palm tree',
        'summer time',
        'ocean wave',
        'riding wave'
      ],
      processing_min: null,
      processing_max: null,
      price: 3.3,
      img: 'https://i.etsystatic.com/25467458/r/il/47d1b7/3860616075/il_fullxfull.3860616075_1x2q.jpg',
      onSale: true,
      taxonomy_id: 2
    },
    {
      title: 'file SVG mom to be kinder surprise, compatible with plotter cricut silhouette scanncut',
      description: 'Svg files to create maternity party t-shirts and gadgets, gender reveal and new arrival announcement.\n' +
        '\n' +
        'The file is in English, it is compatible with all cutting plotters that support svg and you can adjust the size as you prefer.\n' +
        '\n' +
        'IF YOU NEED HELP DO NOT HESITATE TO WRITE ME.\n' +
        '\n' +
        'Thanks for being here, Creativelle',
      quantity: 89,
      num_favorers: 17,
      tags: [
        'mom to be',
        'premaman',
        'svg',
        'cricut',
        'silhouette',
        'svg kinder',
        'kinder surprise',
        'gender reveal'
      ],
      processing_min: null,
      processing_max: null,
      price: 1,
      img: 'https://i.etsystatic.com/18444289/r/il/c76f7b/2967992154/il_fullxfull.2967992154_9tww.jpg',
      onSale: true,
      taxonomy_id: 2
    },
    {
      title: 'ARCTIC WOLF ARTWORKS for Living Room, Forest Double Exposure Prints, Animal Canvas Art, Above Bed Decor, Oversized Wall Art',
      description: '★. ★. ★. ★. ★. ★     𝐈𝐊𝐎𝐍𝐈𝐂𝐊 𝐀𝐑𝐓 𝐄𝐑𝐀      ★. ★. ★. ★. ★. ★\r\n' +
        '\r\n' +
        '------ These canvas prints are sure to make a statement in any space. ------\r\n' +
        '. . . . . . . . . . . . . . . . . . . . . . . . . . .\r\n' +
        '𝙒𝙝𝙮 𝘾𝙝𝙤𝙤𝙨𝙚 𝙄𝙆𝙊𝙉𝙄𝘾𝙆 𝘼𝙍𝙏 𝙀𝙍𝘼?\r\n' +
        '- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\r\n' +
        '✅ ECO-friendly - Safe for Kids and Pets\r\n' +
        '\r\n' +
        '✅ Best Natural Cotton Canvas Used On Market\r\n' +
        '\r\n' +
        '✅ Stretched on Wooden Frame\r\n' +
        '\r\n' +
        '✅ Ready to Hang - Right Out The Box\r\n' +
        '\r\n' +
        '✅ Our Prints Comes with Black Borders for an Outstanding Look\r\n' +
        '\r\n' +
        '✅ Shipping - FREE - FAST (1 Day Production Available) \n' +
        '✅ Free Fast Replacement if Arrives Damaged\r\n' +
        '\r\n' +
        '✅ Satisfaction Guarantee \r\n' +
        '\r\n' +
        '✅ MADE IN USA\r\n' +
        '. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .\r\n' +
        '. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .\r\n' +
        'Check Our Collections For More Designs:\r\n' +
        '\r\n' +
        'https://www.etsy.com/shop/IkonickARTera\r\n' +
        '. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .\r\n' +
        '. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .\r\n' +
        '\n' +
        'BACK TO BROWSING MY SHOP\r\n' +
        '\n' +
        'IkonickARTera.Etsy.Com',
      quantity: 10989,
      num_favorers: 0,
      tags: [
        '3 CANVAS WALL ART',
        'ABOVE BED DECOR',
        'ANIMAL PORTRAIT',
        'ARCTIC WOLF ARTWORKS',
        'BEST FRIEND GIFT',
        'FRAMED CANVAS',
        'HOME OFFICE GIFTS',
        'LIVING ROOM PRINTS',
        'MODERN PRINTS',
        'NATURE LANDSCAPE',
        'OVERSIZED WALL ART',
        'TREE DOUBLE EXPOSURE',
        'WILDLIFE CANVAS'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 34.74,
      img: 'https://i.etsystatic.com/34503997/r/il/aba729/3813094526/il_fullxfull.3813094526_2myf.jpg',
      onSale: true,
      taxonomy_id: 2
    },
    {
      title: 'Terry price difference',
      description: 'This is an addition to the main order. \n' +
        'Do not buy alone. 🎨\n' +
        '\n' +
        'Add more people.',
      quantity: 949,
      num_favorers: 0,
      tags: [
        'add deceased',
        'digital portrait',
        'add loved one',
        'drawing from photo',
        'personalized gift',
        'loss of loved one',
        'memorial portrait',
        'combine merge photos',
        'add family member',
        'black and white',
        'photo editing',
        'custom drawing',
        'sepia photo gift'
      ],
      processing_min: null,
      processing_max: null,
      price: 4.35,
      img: 'https://i.etsystatic.com/32543643/r/il/02e429/3812221004/il_fullxfull.3812221004_60f7.jpg',
      onSale: true,
      taxonomy_id: 2
    },
    {
      title: 'She is Strong License Plate PNG Sublimation Design, She is Strong Png,License Plate Png, Car License Plate Templates, Digital Downloads',
      description: 'This listing is for the\n' +
        'Digital Download Only\n' +
        '\n' +
        '1x PNG File \n' +
        '1x JPG/JPEG File \n' +
        '(High Resolution 300 DPI PNG Files/Digital Download)\n' +
        '\n' +
        'Size; 12 X 6 inches\n' +
        '\n' +
        '-This file is perfect for sublimation/waterslide printing. \n' +
        '\n' +
        '*Image will not have JAHUS DESIGN SHOP watermark on it.\n' +
        '\n' +
        'Remember, digital files are easily re-sizable! \n' +
        'Make the size that you need easily!\n' +
        '\n' +
        '-COLORS WILL VARY DEPENDING ON MONITOR SETTINGS!\n' +
        '\n' +
        'THIS IS NOT A SVG FILE AND WILL NOT BECOME A SVG FILE.\n' +
        '\n' +
        '-PLEASE make sure to have knowledge of the software you are using before buying any files. All software is different and JAHUS DESIGN SHOP is NOT obligated to help with ANY technical questions you might have with YOUR software.\n' +
        '\n' +
        '*JUST DOWNLOAD AND PRINT YOUR OWN!\n' +
        '\n' +
        'Terms of Use: ***YOU CANNOT RESELL DESIGNS AS A DIGITAL DOWNLOAD!\n' +
        '\n' +
        'P.S. All my designs are created on RGB Color Mode. Please  check your programs color mode before you print it.\n' +
        'If it is CMYK Color Mode make sure that you have change it to RGB Color Mode.',
      quantity: 964,
      num_favorers: 52,
      tags: [
        'instant download',
        'sublimation design',
        'license plate png',
        'license templates',
        'car license plate'
      ],
      processing_min: null,
      processing_max: null,
      price: 4,
      img: 'https://i.etsystatic.com/28158696/r/il/5a9a73/3655640478/il_fullxfull.3655640478_50u3.jpg',
      onSale: true,
      taxonomy_id: 2
    },
    {
      title: 'Custom character commission for RPG',
      description: 'Custom character commission \n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'Full body character colored without the background is . USD$ 60 each\n' +
        '\n' +
        '   -delivery time is up to 14 days after purchase\n' +
        '\n' +
        'Send me a brief description and reference image, about the illustration you need\n' +
        '\n' +
        '\n' +
        'The largest size I work with is A3 300 dpi\n' +
        '\n' +
        'delivery file is jpg\n' +
        '\n' +
        '\n' +
        'For more complex illustrations please contact me\n' +
        '\n' +
        '\n' +
        '(Note: Drawing real people is not my specialty, I can not guarantee the recognition of their faces)\n' +
        '\n' +
        '\n' +
        'I only work with my style of illustration that is the same as my samples',
      quantity: 10,
      num_favorers: 845,
      tags: [
        'commission art',
        'character',
        'concept art',
        'rpg',
        'illustration'
      ],
      processing_min: 5,
      processing_max: 10,
      price: 60,
      img: 'https://i.etsystatic.com/21889911/r/il/01d816/2754990283/il_fullxfull.2754990283_4gqz.jpg',
      onSale: true,
      taxonomy_id: 2
    },
    {
      title: 'Choose Your Album Poster | Custom Album Cover Print, Music Poster, Wall Art, Music Gift',
      description: 'Custom Album Poster - designed by RB Prints.\n' +
        '\n' +
        'All Posters are printed on premium Gloss paper and are dispatched in a safe cardboard container. \n' +
        '\n' +
        'Let us know if you would like us to add any additional albums.\n' +
        '\n' +
        'Please note: Picture frame is not included, this is for display purposes only.\n' +
        '\n' +
        'Feel free to contact RB Prints if you have any questions.',
      quantity: 17,
      num_favorers: 95,
      tags: [
        'Art',
        'poster',
        'print',
        'wall decor',
        'Album cover',
        'Music Poster',
        'Music Print',
        'Music art',
        'Custom Album cover',
        'Choose your own',
        'Custom music print',
        'Custom album',
        'Personalised Poster'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 5.99,
      img: 'https://i.etsystatic.com/27978583/r/il/dc1e6b/3570527792/il_fullxfull.3570527792_3ay0.jpg',
      onSale: true,
      taxonomy_id: 2
    },
    {
      title: 'raise them wild svg floral svg raise them kind svg wild and free svg wildflowers raising wildflowers svg trendy shirt design retro boho svg',
      description: 'raise them wild svg floral svg raise them kind svg wild and free svg wildflowers raising wildflowers svg trendy shirt design retro boho svg\n' +
        '\n' +
        'THIS LISTING IS FOR A INSTANT DOWNLOAD!\n' +
        'This is a digital product and NO physical product will be shipped to you.\n' +
        '\n' +
        'Digital files will be available once you have purchased and payment is confirmed.\n' +
        'You will receive an email with your download link.\n' +
        '\n' +
        'Your purchase includes a ZIP file with these 4 file formats: SVG/PNG/EPS/DXF.\n' +
        '\n' +
        'You can make shirts, mugs, stickers, decals, cushions, posters, and so many more projects with these digital files.\n' +
        '\n' +
        'By purchasing, you are agreeing to the following terms and use:\n' +
        'IMPORTANT:\n' +
        '◆ You can use the designs for unlimited personal purposes. A small commercial license is included in each product, which allows you to sell up to 500 physical products for small business use.\n' +
        '◆ The files may not be sold or distributed for free in any digital format. The files may not be mass produced or uploaded onto any print on demand websites.\n' +
        '◆ These files can only be sold in a finished, physical product. You may NOT share or sell this digital file in any format and you may not claim it as your own design.\n' +
        '◆ Due to the digital nature of this listing, no refunds will be given. All sales are final.\n' +
        '◆ This is not a finished product. Pictures of finished products are for illustrative purposes only. You will receive non watermarked digital downloads.\n' +
        '\n' +
        'By purchasing and downloading these files, you are agreeing to the terms and conditions stated above.\n' +
        '\n' +
        'Before purchasing, please make sure that you have the necessary knowledge or software to work with files. Please check that your cutting machine is compatible with any of these file formats.\n' +
        '\n' +
        '© padgetsvgs 2021',
      quantity: 12,
      num_favorers: 13,
      tags: [
        'raise them wild',
        'raise them kind',
        'wild and free svg',
        'wildflowers',
        'raising wildflowers',
        'raising wild things',
        'wild things',
        'svg',
        'trendy shirt design',
        'wildflowers svg',
        'boho svg',
        'retro svg',
        'cricut svg'
      ],
      processing_min: null,
      processing_max: null,
      price: 4.29,
      img: 'https://i.etsystatic.com/27223766/r/il/45d45d/3582532387/il_fullxfull.3582532387_t9jj.jpg',
      onSale: true,
      taxonomy_id: 2
    },
    {
      title: 'PRINTABLE Happy Birthday Card | Gender Neutral Baby Card | Birthday Card for Kids | Instant Download Card | Minimal Birthday Card',
      description: 'This is a listing for a super cute and minimalistic printable birthday card. Simply download, print, cut it out and fold down the middle to create this greeting card ready to use. \n' +
        '\n' +
        'This product is an INSTANT DOWNLOAD meaning no physical products will be shipped. Instant download purchases can not be refunded or exchanged. After downloading the files, you can print either from your home printer or using a local print shop or online print service.\n' +
        '\n' +
        'With your purchase you will get 1 PDF file. \n' +
        '\n' +
        'Cut out the card along the crop lines and fold down the middle, it’s that simple! \n' +
        'Once folded, the card will measure 105 x 148 mm (DIN A6) or 4.1 x 5,8&quot; inches.\n' +
        'The inside of the card is left blank for you to write your own personal message. \n' +
        '\n' +
        '\n' +
        'PLEASE NOTE:\n' +
        '\n' +
        'No Physical products will be shipped. This listing is for a DIGITAL DOWNLOAD only. \n' +
        '\n' +
        'Digital file purchases cannot be returned, refunded or exchanged.\n' +
        'Actual colours may vary due to the colour settings for your screen and printer.\n' +
        '\n' +
        'This purchase is for personal use only. Reselling, reproducing, distributing or profiting in any way from the product is prohibited.\n' +
        '\n' +
        '\n' +
        '\n' +
        'Please make sure to visit our other listings. \n' +
        '\n' +
        'Have a lovely day, \n' +
        '\n' +
        'Anni and Tara \n' +
        'from \n' +
        '\n' +
        'ⒸMatsandNeo',
      quantity: 99,
      num_favorers: 0,
      tags: [
        'A6 Card',
        'Genderneutral',
        'Birthday for Kids',
        'Toddler Gift',
        'Celebration',
        'first birthday',
        'minimalistic',
        'animal',
        'cute gift',
        'toddler',
        'baby gift',
        'babyshower',
        'smiley'
      ],
      processing_min: null,
      processing_max: null,
      price: 4,
      img: 'https://i.etsystatic.com/34000925/r/il/13a9e1/3813090560/il_fullxfull.3813090560_osbl.jpg',
      onSale: true,
      taxonomy_id: 2
    },
    {
      title: 'Valentinstag-Liebes-Illustrations-Satz,Paar Clipartt, Hochzeit Clipart, Liebe Paar ClipArt, Paar Portrait PNG.',
      description: '✅ 300 DPI AUFLÖSUNG\n' +
        '\n' +
        '✅ SRGB-FARBPROFIL\n' +
        '\n' +
        '✅ GRÖSSE 5×6 Zoll\n' +
        '\n' +
        '✅ 6 FARBOPTIONEN\n' +
        '\n' +
        '✅ 2 HAUTTÖNE\n' +
        '\n' +
        '✅ 640MB\n' +
        '\n' +
        'LIZENZ\n' +
        '- Sie können es für persönliche Zwecke verwenden, ohne ein Urheberrecht kaufen zu müssen.\n' +
        '- Kommerziell: Bilder können verwendet werden, um kommerzielle Druck- und physische Waren zu erstellen.\n' +
        'Wenn Sie In-Product-Bilder für digitale Verkäufe verwenden (Tassen, T-Shirts, Ornamente, Decken ...), muss Ihr Produkt flach, vollständig und komplett entworfen werden.\n' +
        '- Sie können das Produkt nicht so verkaufen, wie es ist, oder neue digitale Produkte zum Entwerfen erstellen (Büroklammern, digitales Papier, Designelemente usw.)',
      quantity: 999,
      num_favorers: 0,
      tags: [
        'Cute couple sitting clipart',
        'Male and Female',
        'Valentine Day clipart',
        'Valentine Day',
        'Pair of clipart',
        'Dear Couple ClipArt',
        'Pair Portrait PNG',
        'Couple Clipart',
        'Male Clipart',
        'Boyfriend Girlfriend Clipart',
        'Female Clipart',
        'Love clipart',
        'couple sitting clipart'
      ],
      processing_min: null,
      processing_max: null,
      price: 6.99,
      img: 'https://i.etsystatic.com/34740155/r/il/70af19/3860602583/il_fullxfull.3860602583_nc4h.jpg',
      onSale: true,
      taxonomy_id: 2
    },
    {
      title: 'Muhammad Ali Poster, Black And White, Muhammad Ali Print, Muhammad Ali Canvas, Muhammad Ali Wall Art, Boxing Poster, Vintage Poster',
      description: 'Muhammad Ali Poster, Black And White, Muhammad Ali Print, Muhammad Ali Canvas, Muhammad Ali Wall Art, Boxing Poster, Vintage Poster\n' +
        '\n' +
        'This printable poster is super high in quality.\n' +
        '\n' +
        'This Digital Download Include 5 PNG&#39;s files, resolution 300dpi image quality\n' +
        '\n' +
        'File 1 - 2:3 ratio - up to 24x36&quot; inches, Can be adjusted to sizes:\n' +
        'Inch: 4x6&quot;, 6x9&quot;, 8x12&quot;, 10x15&quot;, 12x18&quot;, 16x24&quot;, 20x30&quot;, 24x36&quot;\n' +
        'Cm: 10x15, 20x30, 30x45, 40x60, 50x75, 60x90\n' +
        '\n' +
        'File 2 - 3:4 ratio - up to 18x24&quot; inches, Can be adjusted to sizes:\n' +
        'Inch: 6x8&quot;, 9x12&quot;, 12x16&quot;, 15x20&quot;, 18x24&quot;\n' +
        'Cm: 15x20, 22x30, 30x40, 38x50, 45x60\n' +
        '\n' +
        'File 3 - 4:5 ratio - up to 16x20&quot; inches, Can be adjusted to sizes:\n' +
        'Inch: 4x5&quot;, 8x10&quot;, 11x14&quot;, 12x15&quot;, 16x20&quot;\n' +
        'Cm: 10x12, 20x25, 28x35, 30x38, 40x50\n' +
        '\n' +
        'File 4 - Super high-quality print upto 11x14&quot;\n' +
        '\n' +
        'File 5 - 5:7 ratio - A1, A2, A3, A4, A5\n' +
        '\n' +
        'HOW TO ORDER\n' +
        '1. Buy the listing\n' +
        '2. After your payment has been cleared you can download files under “Purchases/Reviews.” An email will also be sent to you with your download link.\n' +
        '3. Click “Download,” save the zip file to your computer, print and enjoy!\n' +
        '\n' +
        'The digital file is a high quality instant downloadable printable wall art. Easy to print, you can get them printed at home, or at local print shop, or upload the print files to an online printing service and have them up in no time.\n' +
        '\n' +
        '\n' +
        'If you need any other size or color or background color, just drop us a message. We will happily email you the same for no extra charge!\n' +
        '\n' +
        'Visit my shop for more amazing prints\n' +
        'https://www.etsy.com/shop/SortedPrints\n' +
        '\n' +
        'Curated with ♡ SortedPrints | Thank You',
      quantity: 58,
      num_favorers: 135,
      tags: [
        'Muhammad Ali Poster',
        'Black And White',
        'Muhammad Ali Print',
        'Muhammad Ali Canvas',
        'Boxing Poster',
        'Vintage Poster',
        'Muhammad Ali',
        'Wall Art',
        'Poster Print',
        'Gym Poster',
        'Muhammad Ali Art',
        'Canvas Art',
        'Canvas Print'
      ],
      processing_min: null,
      processing_max: null,
      price: 10,
      img: 'https://i.etsystatic.com/25510945/r/il/a7708b/3395866343/il_fullxfull.3395866343_e6ak.jpg',
      onSale: true,
      taxonomy_id: 2
    },
    {
      title: 'Fraggle Rock',
      description: 'Please Note:\n' +
        '\n' +
        'This digital file is an INSTANT DOWNLOAD!\n' +
        'NO physical item will be sent to you! These are digital files ONLY.\n' +
        'The file you will download will NOT have the watermark!\n' +
        '\n' +
        'You must have a cutting machine to use these designs.\n' +
        '\n' +
        'You will receive:\n' +
        'SVG file\n' +
        'PNG file\n' +
        'JPG FIle \n' +
        '\n' +
        'Due to the electronic nature of the file, no refunds will be issued. But, if you have a problem with a file, please contact me and we will work to resolve the problem. Please allow up to 48 hours for a response.\n' +
        '\n' +
        'I own these designs you cannot sell these files.\n' +
        '\n' +
        'These digital designs may be used for any personal projects and commercial work.\n' +
        'They may not be sold or distributed for free in their original format. You cannot sell this file as a digital file.',
      quantity: 91,
      num_favorers: 18,
      tags: [
        'Fraggle Rock', 'Muppet',
        'Jim Henson',   '80s',
        'TV',           'Gobo',
        'Red',          'Mokey',
        'Wembley',      'Boober',
        'doozers'
      ],
      processing_min: null,
      processing_max: null,
      price: 1.99,
      img: 'https://i.etsystatic.com/18590127/r/il/49676d/3478483593/il_fullxfull.3478483593_5rud.jpg',
      onSale: true,
      taxonomy_id: 2
    },
    {
      title: 'Lets Cruise Ship Ocean Sublimation Print - Ready to Press! Shipped Sublimation',
      description: 'Sizes:\n' +
        'Adult - Image is printed as large as possible on 8.5x11 \n' +
        'I print the same size transfers for all adult clothing sizes \n' +
        'Youth - 6&quot; (single or 2 per sheet, varies by design shape)\n' +
        'Infant - 4” (single or 4 per sheet)\n' +
        'Koozie - 3” (6 per sheet) \n' +
        '**Sizes are approximate**\n' +
        '\n' +
        'Very detailed instructions are included with every order. \n' +
        '\n' +
        'SUBLIMATION TRANSFER - BASICS - \n' +
        '\n' +
        '-Sublimation ink transfers to the fibers of your t-shirt, unlike craft supplies like iron on transfer paper that sit on top of the fibers of your t-shirt. \n' +
        '-Sublimation is a professional product\n' +
        '-I HIGHLY recommend 100% white polyester fabric for the best results. \n' +
        '-50% poly will give a vintage look\n' +
        '-Light fabric or bleached works best\n' +
        '-Dark fabric cannot be used as-is, the ink will not show (bleaching or vinyl needs to be used on dark or black t-shirts) \n' +
        '-White areas on the transfer will not print, these are &#39;blank&#39; areas and will be the color of the t-shirt \n' +
        '\n' +
        '__________________________________________________________________\n' +
        'WHERE CAN I FIND TSHIRTS?\n' +
        'Shirt Space\n' +
        'Jiffy Shirts\n' +
        'Shirt Max\n' +
        'There are also small shops that sell pre-bleached t-shirts \n' +
        '\n' +
        'NEW WEBSITE NOW LIVE, MAINSTREETIRONONS.COM \n' +
        'DESIGNS ARE BEING ADDED DAILY. \n' +
        '\n' +
        'If you&#39;re new to sublimation there are great youtube videos showing how to do the process. \n' +
        '\n' +
        'Please look over the polices page on this listing - Including the shipping and turn around times. \n' +
        '\n' +
        'Orders of $35+ always ship for free! $80+ get free Priority shipping! \n' +
        '\n' +
        '*** FREE Mock Ups! ***\n' +
        'If you use these free mockups for pre-orders or to sell the finished designs please add your shop logo or another watermark specific to your business/shop! \n' +
        'https://drive.google.com/drive/folders/1le7Cw4mllVUXWnQDETK9-WrY4dsXykeS\n' +
        '\n' +
        'If you&#39;re purchasing these sublimation transfers for your business, save your digital receipt! They&#39;re a tax write off! \n' +
        '\n' +
        'Thank you for looking, please reach out with any questions you may have!',
      quantity: 480,
      num_favorers: 31,
      tags: [
        'sublimation',
        'sublimation prints',
        'sublimation transfer',
        'mailed sublimation',
        'Disney Sublimation',
        'Disney',
        'Disney png',
        'Fall Vibes Disney',
        'Lets Cruise',
        'Cruise Sublimation',
        'Disney Cruise',
        'Retro Cruise',
        'Kids Cruise'
      ],
      processing_min: 2,
      processing_max: 3,
      price: 0.99,
      img: 'https://i.etsystatic.com/10370982/r/il/ae3245/3372120857/il_fullxfull.3372120857_7x53.jpg',
      onSale: true,
      taxonomy_id: 2
    },
    {
      title: 'SEXY WOMAN POSTER Prints for Bedroom, Model Girl Decor, Makeup Lady Art, Trendy Room Canvas, 3 Piece Canvas Wall Art',
      description: '★. ★. ★. ★. ★. ★     𝐈𝐊𝐎𝐍𝐈𝐂𝐊 𝐀𝐑𝐓 𝐄𝐑𝐀      ★. ★. ★. ★. ★. ★\r\n' +
        '\r\n' +
        '------ These canvas prints are sure to make a statement in any space. ------\r\n' +
        '. . . . . . . . . . . . . . . . . . . . . . . . . . .\r\n' +
        '𝙒𝙝𝙮 𝘾𝙝𝙤𝙤𝙨𝙚 𝙄𝙆𝙊𝙉𝙄𝘾𝙆 𝘼𝙍𝙏 𝙀𝙍𝘼?\r\n' +
        '- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\r\n' +
        '✅ ECO-friendly - Safe for Kids and Pets\r\n' +
        '\r\n' +
        '✅ Best Natural Cotton Canvas Used On Market\r\n' +
        '\r\n' +
        '✅ Stretched on Wooden Frame\r\n' +
        '\r\n' +
        '✅ Ready to Hang - Right Out The Box\r\n' +
        '\r\n' +
        '✅ Our Prints Comes with Black Borders for an Outstanding Look\r\n' +
        '\r\n' +
        '✅ Shipping - FREE - FAST (1 Day Production Available) \n' +
        '✅ Free Fast Replacement if Arrives Damaged\r\n' +
        '\r\n' +
        '✅ Satisfaction Guarantee \r\n' +
        '\r\n' +
        '✅ MADE IN USA\r\n' +
        '. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .\r\n' +
        '. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .\r\n' +
        'Check Our Collections For More Designs:\r\n' +
        '\r\n' +
        'https://www.etsy.com/shop/IkonickARTera\r\n' +
        '. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .\r\n' +
        '. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .\r\n' +
        '\n' +
        'BACK TO BROWSING MY SHOP\r\n' +
        '\n' +
        'IkonickARTera.Etsy.Com',
      quantity: 10989,
      num_favorers: 0,
      tags: [
        '3 CANVAS WALL ART',
        'AFFORDABLE DECOR',
        'BEST FRIEND GIFT',
        'ELEGANT ROOM DECOR',
        'GUEST ROOM INTERIOR',
        'HOME OFFICE POSTER',
        'LUXURY HOME POSTERS',
        'MAKEUP LADY ART',
        'MODEL GIRL DECOR',
        'NUDE WOMAN PRINTS',
        'OVERSIZED WALL ART',
        'SEXY WOMAN POSTER',
        'TRENDY ROOM CANVAS'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 34.74,
      img: 'https://i.etsystatic.com/34503997/r/il/92b8e3/3860616229/il_fullxfull.3860616229_9xhj.jpg',
      onSale: true,
      taxonomy_id: 2
    },
    {
      title: 'Bella Canvas 3501 Heather Forest Mockup, Bella 3501 Heather Forest, Heather Forest mockup, Mockup, Bella Mockup, Heather Forest 3501',
      description: 'DESCRIPTION\n' +
        'Bella Canvas 3501 Heather Forest Mockup\n' +
        '\n' +
        'INSTANT DOWNLOAD\n' +
        'Do you design and sell printed shirts? Would you like an easy way to showcase your designs? With the purchase of my mockup photos, you can use an editing software to simply layer your design on to the blank t-shirt image and create a great looking representation of your finished product. You will then upload this photo to your online store. \n' +
        '\n' +
        '\n' +
        'YOU WILL RECEIVE\n' +
        'One Digital JPEG File in high resolution (available within minutes of your purchase)\n' +
        'No physical item will be sent to you\n' +
        '\n' +
        '\n' +
        'FOR THE ORIGINAL PURCHASER: \n' +
        'You DO have permission to use these photos to display/advertise your product by using a software to place your design over the image and display in your online store.\n' +
        '\n' +
        'You DO NOT have permission to resale or redistribute these images in any way.\n' +
        'You DO NOT have permission to share or give this image away.\n' +
        'You DO NOT have permission to alter these images in any way.\n' +
        '\n' +
        'The watermarks and logo will be removed on your downloaded image.\n' +
        '\n' +
        '\n' +
        'NO REFUNDS will be given due to the nature of this item. \n' +
        '\n' +
        'Thank you again for stopping by my shop. Please feel free to contact me for any questions you may have. \n' +
        '\n' +
        'Thank you,\n' +
        'Rhonda',
      quantity: 40,
      num_favorers: 1,
      tags: [
        'Bella Canvas mockup',
        'Flat Lay mockup',
        'Bella Mockup',
        '3501',
        'Bella 3501',
        'Fall Bella 3501',
        'Bella 3501 Fall',
        '3501 Mockup',
        'Mockup',
        'Long Sleeve Mockup',
        '3501 Forest',
        'Heather Forest',
        '3501 Green Mockup'
      ],
      processing_min: null,
      processing_max: null,
      price: 6,
      img: 'https://i.etsystatic.com/19772879/r/il/c918ae/3279566643/il_fullxfull.3279566643_c6ie.jpg',
      onSale: true,
      taxonomy_id: 2
    },
    {
      title: 'Bella Canvas B8882 Mauve Crop mockup, Bella 8882 Mauve, Crop Top mockup, Mauve t-shirt mockup, Flat Lay mockup, Bella Mockup',
      description: 'DESCRIPTION\n' +
        'Bella Canvas B8882 Women&#39;s Mauve Crop Mockup\n' +
        '\n' +
        'INSTANT DOWNLOAD\n' +
        'Do you design and sell printed shirts? Would you like an easy way to showcase your designs? With the purchase of my mockup photos, you can use an editing software to simply layer your design on to the blank t-shirt image and create a great looking representation of your finished product. You will then upload this photo to your online store. \n' +
        '\n' +
        '\n' +
        'YOU WILL RECEIVE\n' +
        'One Digital JPEG File in high resolution (available within minutes of your purchase)\n' +
        'No physical item will be sent to you\n' +
        '\n' +
        '\n' +
        'FOR THE ORIGINAL PURCHASER: \n' +
        'You DO have permission to use these photos to display/advertise your product by using a software to place your design over the image and display in your online store.\n' +
        '\n' +
        'You DO NOT have permission to resale or redistribute these images in any way.\n' +
        'You DO NOT have permission to share or give this image away.\n' +
        'You DO NOT have permission to alter these images in any way.\n' +
        '\n' +
        'The watermarks and logo will be removed on your downloaded image.\n' +
        '\n' +
        '\n' +
        'NO REFUNDS will be given due to the nature of this item. \n' +
        '\n' +
        'Thank you again for stopping by my shop. Please feel free to contact me for any questions you may have. \n' +
        '\n' +
        'Please visit my other shop at www.etsy.com/shop/SimplyEmmaJs for finished products. \n' +
        '\n' +
        'Thank you,\n' +
        'Rhonda',
      quantity: 40,
      num_favorers: 1,
      tags: [
        'Bella Canvas mockup',
        'Flat Lay mockup',
        'Bella Mockup',
        'B8882 Crop Mockup',
        'Bella Crop Mockup',
        'Bella B8882 Mockup',
        'Bella T-shirt Mockup',
        'B8882 Mauve',
        'B8882 Mauve Mockup',
        'Bella B8882 Mauve',
        'Mauve Crop Top',
        'Bella Mauve B8882',
        'Bella B8882 Flat Lay'
      ],
      processing_min: null,
      processing_max: null,
      price: 6,
      img: 'https://i.etsystatic.com/19772879/r/il/44ed78/3281460745/il_fullxfull.3281460745_ceuq.jpg',
      onSale: true,
      taxonomy_id: 2
    },
    {
      title: 'Blue Jays Png Retro Vintage, Baseball font Png, City Png, Baseball Png, Sport Png,Hand Drawn Blue Jays Baseball Shirt Print, Toronto Retro',
      description: 'PNG - DIGITAL DOWNLOAD\n' +
        '\n' +
        'These are Digital Designs - No physical items will be sent. You will able to download your file as soon as you place your order. A copy will also be sent to your email address should you wish to.\n' +
        '\n' +
        'Files Included: (Please make sure your machine supports one of these files)\n' +
        '\n' +
        '• PNG file - for projects that require a clear/transparent background\n' +
        '\n' +
        'Get creative and have fun! Use to make t-shirts, prints, coffee mugs, tumblers, hats, signs, bags and more!\n' +
        '\n' +
        '------------------\n' +
        '\n' +
        'NEED THIS ITEM FOR COMMERCIAL USE?:\n' +
        '\n' +
        'My Commercial Use License is only $24.99 (1-1000 items) - Get it here: https://www.etsy.com/listing/1171931684/happy-as-i-travel-digital-commercial\n' +
        '\n' +
        'For Extended Use Commercial License (more than 1000 items) - Get it here: https://www.etsy.com/listing/1185889217/happy-as-i-travel-digital-extended\n' +
        '\n' +
        'A commercial license will allow you to use our designs to sell finished products like shirts, pillows, mugs, invitations, wooden signs, ornaments, printed transfers, sublimation etc. You may not resell the files digitally, must be physical items. (Print on demand is allowed)\n' +
        '\n' +
        '------------------\n' +
        '\n' +
        '&gt;&gt;&gt; It is the buyer’s responsibility to check the relevant trademark database for trademarks before selling any items with our designs. We check our phrases/designs periodically, however, with people trademarking phrases everyday, it’s possible that a saying or phrase we use will be trademarked in the future. It’s best to continue to check the phrases you use on items you sell throughout the year.\n' +
        '\n' +
        '&gt;&gt;&gt; Our Happy as I Travel Digital designs (whole or in part) may not be copyrighted or trademarked, incorporated into any digital product for resale\n' +
        '\n' +
        '&gt;&gt;&gt; This file is NOT to be resold or used to create a new file being resold. Please do not re-sell or distribute this file.\n' +
        '\n' +
        '&gt;&gt;&gt; By purchasing and downloading these files, you are agreeing to the terms and conditions stated above.',
      quantity: 97,
      num_favorers: 0,
      tags: [
        'Png sublimination',
        'svg for sticker',
        'baseball svg',
        'baseball shirt svg',
        'hand drawn svg',
        'phillies svg',
        'phillies cricut',
        'phillies dxf',
        'city svg',
        'baseball cricut',
        'bat svg',
        'sport Png',
        '300dpi'
      ],
      processing_min: null,
      processing_max: null,
      price: 5,
      img: 'https://i.etsystatic.com/29351616/r/il/745b18/3813085586/il_fullxfull.3813085586_489l.jpg',
      onSale: true,
      taxonomy_id: 2
    },
    {
      title: 'Bella Canvas 3501 Grey Tri-blend Mockup, Grey Tri-blend, t-shirt mockup, Flat Lay mockup, Bella Mockup, Grey unisex, Long sleeve',
      description: 'DESCRIPTION\n' +
        'Bella Canvas 3501 Grey Tri-blend Mockup\n' +
        '\n' +
        'INSTANT DOWNLOAD\n' +
        'Do you design and sell printed shirts? Would you like an easy way to showcase your designs? With the purchase of my mockup photos, you can use an editing software to simply layer your design on to the blank t-shirt image and create a great looking representation of your finished product. You will then upload this photo to your online store. \n' +
        '\n' +
        '\n' +
        'YOU WILL RECEIVE\n' +
        'One Digital JPEG File in high resolution (available within minutes of your purchase)\n' +
        'No physical item will be sent to you\n' +
        '\n' +
        '\n' +
        'FOR THE ORIGINAL PURCHASER: \n' +
        'You DO have permission to use these photos to display/advertise your product by using a software to place your design over the image and display in your online store.\n' +
        '\n' +
        'You DO NOT have permission to resale or redistribute these images in any way.\n' +
        'You DO NOT have permission to share or give this image away.\n' +
        'You DO NOT have permission to alter these images in any way.\n' +
        '\n' +
        'The watermarks and logo will be removed on your downloaded image.\n' +
        '\n' +
        '\n' +
        'NO REFUNDS will be given due to the nature of this item. \n' +
        '\n' +
        'Thank you again for stopping by my shop. Please feel free to contact me for any questions you may have. \n' +
        '\n' +
        'Thank you,\n' +
        'Rhonda',
      quantity: 40,
      num_favorers: 6,
      tags: [
        'Bella Canvas mockup',
        'Bella Mockup',
        'Grey Tri-blend',
        'Bella 3501 Grey',
        'Bella 3501',
        '3501 Grey Mockup',
        'Long Sleeve Mockup',
        'Nurse T-shirt Mockup',
        '3501 Long Sleeve',
        'Bella Long Sleeve',
        '3501 Grey Tri-Blend',
        'Long Sleeve Gray',
        'Bella 3501 Gray'
      ],
      processing_min: null,
      processing_max: null,
      price: 6,
      img: 'https://i.etsystatic.com/19772879/r/il/133b0c/3271325452/il_fullxfull.3271325452_80qa.jpg',
      onSale: true,
      taxonomy_id: 2
    },
    {
      title: '1988-89 FIVE Celtic &quot;Not The View&quot; Celtic Fanzine Magazines 30 + Pages Each. Ideal Christmas Gift, Fathers Day, Birthday Present For Him',
      description: '1988-89 Original FIVE Celtic &quot;Not The View&quot; Celtic Fanzine Magazines 30 + Pages Each.\n' +
        '1) No. 5 Front and back cover slightly worn/creased. 36 pages\n' +
        '2) No. 6  Very good condition. 36 pages.\n' +
        '3) No. 7  Very good condition. 40 pages\n' +
        '4) No. 10 (February/March 1989), creased, corner fold, 40 pages.\n' +
        '5) No. 11 (March/April 1989), very good condition, 40 pages. \n' +
        'Ideal Christmas Gift, Fathers Day, Birthday Present, Football Gift For Boyfriend, Husband, Wedding Anniversary.\n' +
        '\n' +
        'CONDITION \n' +
        'Please see each individual item&#39;s condition above.\n' +
        'Please note I inspect all items thoroughly, from page to page, and give you an accurate description of the item´s condition. However, there is a 14 day MONEY BACK GUARANTEE if you are not happy!\n' +
        '\n' +
        'PAYMENT INFORMATION\n' +
        'TEN various secure paying methods available, PayPal, Credit/Debit cards, etc., etc.\n' +
        '\n' +
        '*******************************************************************************\n' +
        'Please SAVE/BOOKMARK my secure Etsy Shop: www.bestfootballprogrammes.com\n' +
        'and visit often - you never know what you will find here!\n' +
        '*******************************************************************************\n' +
        '\n' +
        'SHIPPING INFORMATION\n' +
        'Price includes hard-board backed envelope for protection. \n' +
        'Items dispatched, from the UK, within 1-3 days of receiving payment, via &quot;Recorded Delivery&quot;, for your peace of mind! \n' +
        'Will post WORLDWIDE!\n' +
        'UK post free!\n' +
        'Outside UK postage  - see &quot;everywhere else&quot; below.\n' +
        '\n' +
        'CONTACTS\n' +
        'Should you require further information, please do NOT hesitate to send me a message via ETSY &quot;conversations&quot; !\n' +
        'I will respond within 24 hours!\n' +
        'Thanks for your business - I appreciate your custom.\n' +
        '(Stock ref: 52440-3500). \n' +
        '\n' +
        'DELIVERIES:\n' +
        'Approximate time for your order to arrive?\n' +
        'Australia/New Zealand 3-4 weeks\n' +
        'Canada: 2-3 weeks\n' +
        'Europe: 6-8 business days\n' +
        'Japan: 3-4 weeks\n' +
        'Latin America/Caribbean: 4-5 weeks\n' +
        'Middles East 4-5 weeks\n' +
        'North Africa 4-5 weeks\n' +
        'North America: 4-5 weeks\n' +
        'United Kingdom: 1-2 business days\n' +
        'United States: 2-3 weeks',
      quantity: 1,
      num_favorers: 2,
      tags: [
        'gift ideas',
        'fathers day',
        'birthday present',
        'christmas gift',
        'Celtic FC',
        'Celtic memorabilia',
        'Celtic collectables',
        'Celtic Football',
        'Celtic Handbook',
        '1988-89 Celtic FC',
        '1988 Celtic FC',
        '1989 Celtic FC',
        'Celtic Fanzine'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 32.99,
      img: 'https://i.etsystatic.com/9105102/r/il/302acd/2728684526/il_fullxfull.2728684526_jspn.jpg',
      onSale: true,
      taxonomy_id: 2
    },
    {
      title: 'The Batman 2022 Teaser Poster A5 A4 A3 A2 A1',
      description: 'Jazz up that empty space, or update an old picture, compliments home or office, great in bedrooms, halls, lounges, offices, or any living or working space.\n' +
        '\n' +
        'Made to order, these posters are printed on premium grade 260gsm Satin photo paper.\n' +
        '\n' +
        '\n' +
        '\n' +
        'Features:\n' +
        '•\tA Great Range Of Sizes\n' +
        '•\tBorderless Printing (Edge-To-Edge)\n' +
        '•\tPremium Quality Satin Photo Paper\n' +
        '•\tOriginal Manufacturers Quality Fade/Splash Resistant Inks\n' +
        '•\tGenuine Large Single Sheet Prints\n' +
        '•\tCommercial Grade Print Quality\n' +
        '•\tCompetitive Pricing\n' +
        '•\tReady For Hanging Or Framing\n' +
        '•\tQuick Turn-Around\n' +
        '•\tFree Delivery\n' +
        '•\tUK Seller\n' +
        '\n' +
        '\n' +
        'Size Guide:\n' +
        'A5 - 210x148.5mm\n' +
        'A4 - 297x210mm\n' +
        'A3 - 420x297mm\n' +
        'A2 - 594x420mm\n' +
        'A1 - 841x594mm\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'Please Note:\n' +
        'Colours between monitors and printed works vary, such as saturation, brightness, contrast, etc.\n' +
        'Images are not to scale, and sizes are approximate.',
      quantity: 177,
      num_favorers: 56,
      tags: [ 'Poster', 'Movie' ],
      processing_min: 1,
      processing_max: 3,
      price: 1.49,
      img: 'https://i.etsystatic.com/13367669/r/il/2e9267/3672417369/il_fullxfull.3672417369_7pi0.jpg',
      onSale: true,
      taxonomy_id: 2
    },
    {
      title: 'Pirates Of The Caribbean Dead Men Tell No Tales Movie Poster',
      description: 'Jazz up that empty space, or update an old picture, compliments home or office, great in bedrooms, halls, lounges, offices, or any living or working space.\n' +
        '\n' +
        'Made to order, these posters are printed on premium grade 260gsm Satin photo paper.\n' +
        '\n' +
        '\n' +
        '\n' +
        'Features:\n' +
        '•\tA Great Range Of Sizes\n' +
        '•\tBorderless Printing (Edge-To-Edge)\n' +
        '•\tPremium Quality Satin Photo Paper\n' +
        '•\tOriginal Manufacturers Quality Fade/Splash Resistant Inks\n' +
        '•\tGenuine Large Single Sheet Prints\n' +
        '•\tCommercial Grade Print Quality\n' +
        '•\tCompetitive Pricing\n' +
        '•\tReady For Hanging Or Framing\n' +
        '•\tQuick Turn-Around\n' +
        '•\tFree Delivery\n' +
        '•\tUK Seller\n' +
        '\n' +
        '\n' +
        'Size Guide:\n' +
        'A5 - 210x148.5mm\n' +
        'A4 - 297x210mm\n' +
        'A3 - 420x297mm\n' +
        'A2 - 594x420mm\n' +
        'A1 - 841x594mm\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'Please Note:\n' +
        'Colours between monitors and printed works vary, such as saturation, brightness, contrast, etc.\n' +
        'Images are not to scale, and sizes are approximate.',
      quantity: 196,
      num_favorers: 36,
      tags: [ 'Movie Poster', 'Johnny Depp' ],
      processing_min: 1,
      processing_max: 3,
      price: 1.49,
      img: 'https://i.etsystatic.com/13367669/r/il/52f7f5/3378154432/il_fullxfull.3378154432_2t39.jpg',
      onSale: true,
      taxonomy_id: 2
    },
    {
      title: 'Bella Canvas B8882 Dark Heather Gray Crop mockup, Bella 8882 Dark Grey, Crop Top mockup, Grey t-shirt mockup, Flat Lay mockup, Bella Mockup',
      description: 'DESCRIPTION\n' +
        'Bella Canvas B8882 Women&#39;s Dark Heather Grey Crop Mockup\n' +
        '\n' +
        'INSTANT DOWNLOAD\n' +
        'Do you design and sell printed shirts? Would you like an easy way to showcase your designs? With the purchase of my mockup photos, you can use an editing software to simply layer your design on to the blank t-shirt image and create a great looking representation of your finished product. You will then upload this photo to your online store. \n' +
        '\n' +
        '\n' +
        'YOU WILL RECEIVE\n' +
        'One Digital JPEG File in high resolution (available within minutes of your purchase)\n' +
        'No physical item will be sent to you\n' +
        '\n' +
        '\n' +
        'FOR THE ORIGINAL PURCHASER: \n' +
        'You DO have permission to use these photos to display/advertise your product by using a software to place your design over the image and display in your online store.\n' +
        '\n' +
        'You DO NOT have permission to resale or redistribute these images in any way.\n' +
        'You DO NOT have permission to share or give this image away.\n' +
        'You DO NOT have permission to alter these images in any way.\n' +
        '\n' +
        'The watermarks and logo will be removed on your downloaded image.\n' +
        '\n' +
        '\n' +
        'NO REFUNDS will be given due to the nature of this item. \n' +
        '\n' +
        'Thank you again for stopping by my shop. Please feel free to contact me for any questions you may have. \n' +
        '\n' +
        'Please visit my other shop at www.etsy.com/shop/SimplyEmmaJs for finished products. \n' +
        '\n' +
        'Thank you,\n' +
        'Rhonda',
      quantity: 40,
      num_favorers: 1,
      tags: [
        'Bella Canvas mockup',
        'Flat Lay mockup',
        'Bella Mockup',
        'B8882 Crop Mockup',
        'Bella Crop Mockup',
        'Bella B8882 Mockup',
        'Bella T-shirt Mockup',
        'B8882 Grey Mockup',
        'B8882 Grey Bella',
        'Grey B8882 Mockup',
        'Bella B8882 Grey',
        'Grey Crop Top'
      ],
      processing_min: null,
      processing_max: null,
      price: 6,
      img: 'https://i.etsystatic.com/19772879/r/il/35182e/3233465158/il_fullxfull.3233465158_a68h.jpg',
      onSale: true,
      taxonomy_id: 2
    },
    {
      title: 'Bella Canvas 3501 Heather Maroon Mockup, 3501 Heather Maroon, Mockup, Flat Lay mockup, Bella Mockup, Heather Maroon 3501',
      description: 'DESCRIPTION\n' +
        'Bella Canvas 3501 Heather Maroon Long Sleeve Mockup\n' +
        '\n' +
        'INSTANT DOWNLOAD\n' +
        'Do you design and sell printed shirts? Would you like an easy way to showcase your designs? With the purchase of my mockup photos, you can use an editing software to simply layer your design on to the blank t-shirt image and create a great looking representation of your finished product. You will then upload this photo to your online store. \n' +
        '\n' +
        '\n' +
        'YOU WILL RECEIVE\n' +
        'One Digital JPEG File in high resolution (available within minutes of your purchase)\n' +
        'No physical item will be sent to you\n' +
        '\n' +
        '\n' +
        'FOR THE ORIGINAL PURCHASER: \n' +
        'You DO have permission to use these photos to display/advertise your product by using a software to place your design over the image and display in your online store.\n' +
        '\n' +
        'You DO NOT have permission to resale or redistribute these images in any way.\n' +
        'You DO NOT have permission to share or give this image away.\n' +
        'You DO NOT have permission to alter these images in any way.\n' +
        '\n' +
        'The watermarks and logo will be removed on your downloaded image.\n' +
        '\n' +
        '\n' +
        'NO REFUNDS will be given due to the nature of this item. \n' +
        '\n' +
        'Thank you again for stopping by my shop. Please feel free to contact me for any questions you may have. \n' +
        '\n' +
        'Thank you,\n' +
        'Rhonda',
      quantity: 40,
      num_favorers: 0,
      tags: [
        'Bella Canvas mockup',
        'Flat Lay mockup',
        'Bella Mockup',
        'Bella 3501',
        '3501 Mockup',
        '3501',
        'Heather Maroon',
        '3501 Heather Maroon',
        'Bella Long Sleeve',
        'Long Sleeve Mockup',
        'Bella 3501 Maroon',
        'Bella 3501 Mockup',
        'Maroon Long Sleeve'
      ],
      processing_min: null,
      processing_max: null,
      price: 6,
      img: 'https://i.etsystatic.com/19772879/r/il/5455ec/3279639473/il_fullxfull.3279639473_ane7.jpg',
      onSale: true,
      taxonomy_id: 2
    },
    {
      title: 'Next Level N5080 Desert Pink/Royal Pine Crop mockup, N5080 Desert Pink and Royal Pine, Crop Top mockup, Lay mockup, Crop Mockup',
      description: 'DESCRIPTION\n' +
        'Next Level N5080 Women&#39;s Desert Pink/Royal Pine Crop Mockup\n' +
        '\n' +
        'INSTANT DOWNLOAD\n' +
        'Do you design and sell printed shirts? Would you like an easy way to showcase your designs? With the purchase of my mockup photos, you can use an editing software to simply layer your design on to the blank t-shirt image and create a great looking representation of your finished product. You will then upload this photo to your online store. \n' +
        '\n' +
        '\n' +
        'YOU WILL RECEIVE\n' +
        'One Digital JPEG File in high resolution (available within minutes of your purchase)\n' +
        'No physical item will be sent to you\n' +
        '\n' +
        '\n' +
        'FOR THE ORIGINAL PURCHASER: \n' +
        'You DO have permission to use these photos to display/advertise your product by using a software to place your design over the image and display in your online store.\n' +
        '\n' +
        'You DO NOT have permission to resale or redistribute these images in any way.\n' +
        'You DO NOT have permission to share or give this image away.\n' +
        'You DO NOT have permission to alter these images in any way.\n' +
        '\n' +
        'The watermarks and logo will be removed on your downloaded image.\n' +
        '\n' +
        '\n' +
        'NO REFUNDS will be given due to the nature of this item. \n' +
        '\n' +
        'Thank you again for stopping by my shop. Please feel free to contact me for any questions you may have. \n' +
        '\n' +
        'Please visit my other shop at www.etsy.com/shop/SimplyEmmaJs for finished products. \n' +
        '\n' +
        'Thank you,\n' +
        'Rhonda',
      quantity: 40,
      num_favorers: 0,
      tags: [
        'Flat Lay mockup',
        'Mockup',
        'T-shirt Mockup',
        'N5080 Desert Pink',
        'N5080 Mockup',
        'N5080 Crop Mockup',
        'Crop Top Mockup',
        'Next Level Mockup',
        'Pink Crop Mockup',
        'N5080 Crop',
        'N5080 Pink Mockup',
        'Next Level N5080',
        'N5080 Royal Pine'
      ],
      processing_min: null,
      processing_max: null,
      price: 7,
      img: 'https://i.etsystatic.com/19772879/r/il/7f158c/3289167483/il_fullxfull.3289167483_dr0d.jpg',
      onSale: true,
      taxonomy_id: 2
    },
    {
      title: 'Personalised Leather iPad Mini Slip Case with Strap',
      description: 'Beautiful iPad Mini slip case … nice and padded for added protection.  \n' +
        '\n' +
        'Handmade in the very finest luxury Italian Nappa, textured leather.  \n' +
        '\n' +
        'Features a retaining strap to help keep the iPad securely in the case.\n' +
        '\n' +
        'External dimensions -- 21.5 x 15.5 cm.\n' +
        '\n' +
        '*PERSONALISATION DISCLOSURE* - The position and finish of our embossing may vary slightly from item to item. Our products are embossed by hand and due to the textured surface of the leather, on rare occasions, some very small areas of the embossing may not be visible.  Personalisation is not a requirement and all our products are available without personalisation if preferred.',
      quantity: 20,
      num_favorers: 74,
      tags: [
        'iPad Case',
        'Byron and Brown',
        'iPad Mini Case',
        'iPad Mini',
        'iPad Mini Cover',
        'iPad cover'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 12.95,
      img: 'https://i.etsystatic.com/12111167/r/il/1143fc/1194176249/il_fullxfull.1194176249_9183.jpg',
      onSale: true,
      taxonomy_id: 3
    },
    {
      title: 'Personalised Leather iPad Mini Slip Case with Strap',
      description: 'Beautiful iPad Mini slip case … nice and padded for added protection.  \n' +
        '\n' +
        'Handmade in the very finest luxury Italian Nappa, textured leather.  \n' +
        '\n' +
        'Features a retaining strap to help keep the iPad securely in the case.\n' +
        '\n' +
        'External dimensions -- 21.5 x 15.5 cm.\n' +
        '\n' +
        '*PERSONALISATION DISCLOSURE* - The position and finish of our embossing may vary slightly from item to item. Our products are embossed by hand and due to the textured surface of the leather, on rare occasions, some very small areas of the embossing may not be visible.  Personalisation is not a requirement and all our products are available without personalisation if preferred.',
      quantity: 20,
      num_favorers: 74,
      tags: [
        'iPad Case',
        'Byron and Brown',
        'iPad Mini Case',
        'iPad Mini',
        'iPad Mini Cover',
        'iPad cover'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 12.95,
      img: 'https://i.etsystatic.com/12111167/r/il/1143fc/1194176249/il_fullxfull.1194176249_9183.jpg',
      onSale: true,
      taxonomy_id: 3
    },
    {
      title: 'Women Leather Shoulder Bag, Quilted Leather Bag, Crossbody Bag, Fashion Bag, Classic Shoulder Bag, Blue Leather bag - allezy',
      description: 'Women Leather Shoulder Bag, Quilted Leather Bag, Crossbody Bag, Fashion Bag, Classic Shoulder Bag, Blue Leather bag\n' +
        '\n' +
        'FREE EXPRESS SHIPPING on all orders.\n' +
        '\n' +
        '• 100% Genuine Leather\n' +
        '• Leather Hand-Held Strap\n' +
        '• Adjustable Long Leather strap\n' +
        '• Carry your essentials always with you\n' +
        '• Zip closure\n' +
        '• 3 main compartment with zip & 1 zip pocket inside\n' +
        '• 1 cell phone pocket & 1 Tab pocket inside\n' +
        '• Antique brass hardware\n' +
        '• 100% Cotton lining inside\n' +
        '\n' +
        '\n' +
        '\n' +
        '=== Dimensions ===\n' +
        'Height : 27 cm\n' +
        'Width : 42 cm\n' +
        'Depth : 12 cm\n' +
        '\n' +
        '\n' +
        'All of our items are made by hand in premium quality leather in a small team of friendly makers!\n' +
        '\n' +
        'This Women Shoulder Bag is made of high quality of leather. This Women Shoulder bag is handcrafted of crocodile leather this bag ages beautifully, and can take you from work to play!\n' +
        '\n' +
        'We have color variation so you can choose color form drop down menu. Questions? Contact us, we are happy to help you.\n' +
        '\n' +
        'Strap options:\n' +
        '\n' +
        'Shoulder straps: There are two leather straps. These have a 24 cm drop from the top of the hand-held strap of the bag, These strap is 2 cm wide.\n' +
        '\n' +
        'Long Strap : A single, longer adjustable strap, which attaches at the sides of the bag. This strap adjusts with a Antique brass buckle, and can adjust in length. The long strap can be detachable.\n' +
        '\n' +
        'This bag though. I love it so much. Simple, classic, and ready to go with you everywhere. We have been working for years perfecting our bags.\n' +
        '\n' +
        'This bag has all of the options to make sure you are getting exactly what you need!\n' +
        '\n' +
        'The bag is lined with 100% high quality cotton.\n' +
        '\n' +
        'If you cannot find the answer to your question or for custom order please write to us via Etsy messaging.\n' +
        'We may need to reach out for more information, so please keep an eye on your ETSY inbox.\n' +
        '\n' +
        'Thanks for Visiting our shop',
      quantity: 1,
      num_favorers: 0,
      tags: [
        'Handbag',
        'Handbags',
        'Leather Handbag',
        'Leather Handbags',
        'Woman Handbag',
        'Woman Handbags',
        'Quilted',
        'Quilted Leather',
        'Shoulder Bag',
        'Leather bag',
        'Woman Bag',
        'quilted leather bag',
        'custom leather bag'
      ],
      processing_min: 5,
      processing_max: 7,
      price: 78.69,
      img: 'https://i.etsystatic.com/34393563/r/il/c99c2b/3813097894/il_fullxfull.3813097894_scml.jpg',
      onSale: true,
      taxonomy_id: 3
    },,
    {
      title: 'Felt cover Kobo Libra 2 // Handmade e-reader cover model FINN ',
      description: 'E-book reader felt cover FINN for Kobo Libra 2 - Handmade wool felt cover\n' +
        '\n' +
        '* Custom-made protective cover for your Kobo Libra 2.\n' +
        '* eBook reader pocket pending felt. 100% merino wool.\n' +
        '* Secure hold thanks to the elastic band on the side.\n' +
        '* Interesting but simple play of colors.\n' +
        '* Lining. Made of soft wool felt.\n' +
        '* Made in Germany. Sewn for you by us.\n' +
        '-----------------------------------------\n' +
        'E-book reader felt cover FINN\n' +
        '\n' +
        'This bag is tailored to fit the Kobo Libra 2. They are made from government wool felt. Together with the colorful lining, there is an interesting but simple play of colors. The rubber band prevented the e-reader from falling out. You can get your Kobo Libra in and out more easily. Consciously increasing 3mm felt offer your own protection.\n' +
        '----------------------------------\n' +
        'Advantages of felt\n' +
        '\n' +
        'The processed Merino sheep&#39;s wool is extremely hard-wearing and offers many other advantages:\n' +
        ' * Light material\n' +
        ' * Insulates against heat and cold\n' +
        ' * Moisture and water repellent\n' +
        ' * Insensitively removed dirt\n' +
        ' * Non flammable\n' +
        ' * Wrinkle and wrinkle free\n' +
        '----------------------------------\n' +
        'Checklist:\n' +
        '\n' +
        ' * Material: wool felt\n' +
        ' * Suitable for: Kobo Libra 2\n' +
        ' * Weight: approx. 60 g\n' +
        ' * Closure: 10 mm elastic band, dimensionally stable\n' +
        ' * Wool felt: Made in Europe, from 100% merino wool, Oeko-Tex certified\n' +
        ' * Yarn: Made in Germany, made of tear-resistant polyester, approx. 80% recycled PET bottles, Oeko-Tex certified\n' +
        ' * Care: wool felt is dirt-repellent and self-cleaning. Dab off any dirt with a damp cloth. Full washing or containment management to shrink, a natural characteristic of wool.\n' +
        ' * Made in: Germany, Trier\n' +
        '-----------------------------------\n' +
        '\n' +
        'Our promise:\n' +
        'We produce 100% in Germany and the EU at fair conditions and prices. We also source our materials from German and European manufacturers.\n' +
        'You get a high quality product that fits your device perfectly.\n' +
        '---------------------------------\n' +
        '\n' +
        'WE LOVE TREES:\n' +
        'We have EDEN reforestation projects and plant a tree for every possible article.\n' +
        '\n' +
        'All All brand names, product names and trademarks are the property of their own rights.',
      quantity: 193,
      num_favorers: 6,
      tags: [
        'Ebook cover',
        'wool felt protection',
        'ebook bag',
        'Amazon felt bag',
        'Custom-made bag',
        'wool felt',
        'light material',
        'handmade cover',
        'non-toxic case',
        'Ereader sleeve',
        'felt bag Paperwhite',
        'Kindle Paperwhite',
        'Non flammable'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 21.95,
      img: 'https://i.etsystatic.com/18219480/r/il/bcecae/2253910898/il_fullxfull.2253910898_8el8.jpg',
      onSale: true,
      taxonomy_id: 3
    },
    {
      title: 'Custom Eighth Anniversary Keychain - Tally Mark Keychain - Traditional 8th Anniversary Gift - Our Eighth - in Bronze',
      description: 'The perfect 8th Traditional Anniversary Gift -- 8 down, forever to go! \n' +
        '\n' +
        'Celebrate your Bronze Anniversary with our lovely 18-gauge, hand-hammered disc is the perfect canvas for your personalized piece. Measuring at 1&#39;&#39; across (slightly larger than a quarter), this keychain is finished to a weathered patina and slight dome. Prefer a 1.25&#39;&#39; piece -- select this larger size when you order!\n' +
        '\n' +
        'Choose from: \n' +
        '\n' +
        'We love the look of 8 tallies in the middle, with I STILL DO on the edge. Or, choose your own personalized phrase = 25 spaces or less fits best on a 1&quot; piece, 35 or less fits best on a 1.25&quot; piece. Keychain comes with attached steel double ring.\n' +
        '\n' +
        'Not exactly what you were looking for? Check out some other custom options here: http://www.etsy.com/shop/theCopperPoppy/search?search_query=dad&search_submit=&search_type=user_shop_ttt_id_5803746&shopname=theCopperPoppy\n' +
        '\n' +
        'You came to Etsy looking for handmade, one of a kind work - and here you&#39;ll find it! All of our pieces are hand-stamped, so the text will not be perfectly straight. With all my pieces, imperfections are part of the character...each piece will be unique. \n' +
        '\n' +
        'Any questions? Please convo me!\n' +
        '\n' +
        'Traditionally Yours,\n' +
        'The Copper Poppy',
      quantity: 1,
      num_favorers: 1034,
      tags: [
        'eighth',
        'custom keychain',
        'husband gift',
        'bronze anniversary',
        '8th anniversary gift',
        'anniversary present',
        'engraved keychain',
        'tally mark keychain',
        'gift for him',
        'copper anniversary',
        'metal anniversary',
        'bronze keychain',
        'custom ID tag'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 29,
      img: 'https://i.etsystatic.com/5803746/r/il/88e337/1854293319/il_fullxfull.1854293319_ijve.jpg',
      onSale: true,
      taxonomy_id: 3
    },
    {
      title: 'Plague Lords Phone Case #3 iPhone 12 / 12 Mini /12 Pro, As Well As For The Iphone13 / 13 Mini / 13 Pro / 13 Pro Max',
      description: 'The Plague Lords phone cases combine premium looks with a custom attitude. Enjoy a slim profile that maintains your iPhone&#39;s aesthetics and a polycarbonate construction that protects it from bumps and scratches. This personalized phone case is available for the iPhone 12 / 12 Mini /12 Pro, as well as for the iPhone13 / 13 Mini / 13 Pro / 13 Pro Max.\n' +
        '.: Slim design and glossy premium finish\n' +
        '.: Durable and impact resistant\n' +
        '.: Available for all iPhone 12 and 13 models',
      quantity: 6993,
      num_favorers: 0,
      tags: [
        'iphone case', 'phone case',
        'stylish',     'crazy',
        'hypnotic',    'psychedelic',
        'pro',         '13',
        'phone',       'back cover',
        'quality',     'premium',
        'max'
      ],
      processing_min: 1,
      processing_max: 7,
      price: 26.92,
      img: 'https://i.etsystatic.com/35339039/r/il/537829/3860620113/il_fullxfull.3860620113_oxan.jpg',
      onSale: true,
      taxonomy_id: 3
    },
    {
      title: 'Daisy neck circumference',
      description: 'Neck circumference for badge holder\n' +
        'Handmade in Oeko Tex fabric.\n' +
        '\n' +
        'Possibility to match the cap with the neck circumference, on request\n' +
        '\n' +
        'Machine washable.\n' +
        'One size fits all\n' +
        'Neat shipping by quick letter\n' +
        '\n' +
        'If you want to buy a lot, contact me in private message :)',
      quantity: 1,
      num_favorers: 3,
      tags: [],
      processing_min: 3,
      processing_max: 5,
      price: 6,
      img: 'https://i.etsystatic.com/33998199/r/il/3fcdfd/3667298116/il_fullxfull.3667298116_hikp.jpg',
      onSale: true,
      taxonomy_id: 3
    },
    {
      title: 'Buchstaben Schlüsselanhänger M mit Gold Flocken und Lila Konfetti aus Epoxidharz',
      description: 'Personalisierte Schlüsselanhänger\n' +
        'Buchstaben Schlüsselanhänger M mit Gold Flocken und Lila Konfetti aus Epoxidharz\n' +
        '\n' +
        'Das perfekte Geschenk: für deine beste Freundin & Freund, Familie, deine Bekannten oder wem du sonst so eine Freude machen möchtest. Mit dem personalisierten Buchstabenanhänger verschenkst du Freude.\n' +
        '\n' +
        'Individuell gestaltbare Schlüsselanhänger aus Kunstharz.\n' +
        'Maße: ca: 3,5cm x 4,5cm.\n' +
        'Die Anhänger sind handgemacht und jedes einzelne Produkt wird mit viel Liebe erarbeitet. Jedes Stück ist ein Unikat & einzigartig für dich hergestellt.\n' +
        '\n' +
        'Ich biete alle Buchstaben im Alphabet und auch Zahlen an.\n' +
        '\n' +
        'Die Schlüsselringfarbe wird immer passend zum Detail ausgesucht.\n' +
        '\n' +
        'Wenn wir keine Rückmeldung zu den Buchstaben des Anhängers erhalten, nehmen wir zum Wahren der Lieferfristen den Buchstaben vom Vornamen des Bestellers.\n' +
        '\n' +
        'Die Anhänger werden in einem Großbriefkarton versendet, für versicherten Versand würde ein Aufpreis anfallen.\n' +
        '\n' +
        'P.S.: kleine Luftbläschen sind nicht immer zu vermeiden, da es sich um Handarbeit handelt. Aber keine Sorge, sie machen den Anhänger nicht weniger schön 🤍',
      quantity: 1,
      num_favorers: 0,
      tags: [
        'Letters Keychain M',
        'Epoxy',
        'Colorful keychain',
        'Gift for every occasion',
        'Friendship',
        'Letter Unique',
        'Production',
        'Birthday present',
        'Pendant',
        'Memory',
        'Special',
        'Keychain Letter',
        'Unique'
      ],
      processing_min: 5,
      processing_max: 7,
      price: 10,
      img: 'https://i.etsystatic.com/33769693/r/il/e75412/3860616303/il_fullxfull.3860616303_d26x.jpg',
      onSale: true,
      taxonomy_id: 3
    },,
    {
      title: 'Lash Drama Cotton Tote Bag',
      description: 'The cotton canvas tote bag is the ideal grab &amp; go accessory. Made of 100% cotton, it features long, reinforced shoulder straps for exceptional comfort. This super cute bag is perfectly sized at 42cm x 42cm and with our super cute designs you&#39;ll find one that fits right in with your style.\n' +
        'This is part of our brand new apparel line&nbsp;which is environmentally friendly since each piece is only printed once you order, saving on wastage so less items end up in landfill and allowing us to offer a wide variety of sizes an colours. Select your item and add to cart and it will be printed and shipped directly to you from the manufacturer. Please note all lash apparel items have a separate shipping fee and times will vary especially at the moment due to the latest covid out break.&nbsp;\n' +
        '.: 100% cotton canvas\\n.: Medium-heavy fabric (9.44 oz/yd&sup2; (320 g/m&sup2;))\\n.: Reinforced shoulder straps\\n.: One size',
      quantity: 1998,
      num_favorers: 0,
      tags: [],
      processing_min: 1,
      processing_max: 7,
      price: 25,
      img: 'https://i.etsystatic.com/33658858/r/il/53af9f/3813096568/il_fullxfull.3813096568_qoob.jpg',
      onSale: true,
      taxonomy_id: 3
    },
    {
      title: 'Personalised Bead Keychain, Name Keychain, Name Keyring, Custom Beaded Name Keychain, Bracelet Keychain, Beaded Keyring, Beaded Keychain',
      description: 'Handmade personalised keychain in either pearl beads or pastel bubblegum beads \n' +
        '\n' +
        '\n' +
        'Each keychain comes in a jewellery pouch, making it perfect for gifting or a treat to yourself! We also package each order in biodegradable mailing envelopes for postage.\n' +
        '\n' +
        '\n' +
        '♥️Care Instructions♥️\n' +
        '\n' +
        'In order to keep your pieces in perfect condition, keep out of contact with water. \n' +
        '\n' +
        'Don&#39;t hesitate to reach out for any further details or personalisation requests!\n' +
        '\n' +
        'Follow us on instagram: @EtoileByMaria',
      quantity: 10,
      num_favorers: 25,
      tags: [
        'personalised',
        'custom keychain',
        'beaded keychain',
        'beaded keyring',
        'bead keychain',
        'bead keyring',
        'name keychain',
        'name keyring',
        'pastel bead keychain',
        'pearl keychain',
        'custom name keychain',
        'bead keychain name',
        'name'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 8.5,
      img: 'https://i.etsystatic.com/24721005/r/il/2fa0f0/3462099121/il_fullxfull.3462099121_63c5.jpg',
      onSale: true,
      taxonomy_id: 3
    },
    {
      title: 'Myra Genuine Leather And Rug Aztec Tribal Fringe Print Purse Bag',
      description: 'Genuine Leather and Rug Materials featuring Leather Fringe\n' +
        '\n' +
        'Materials RUG & LEATHER\n' +
        'Item Width 14\n' +
        'Item Depth 4\n' +
        'Item Height 14\n' +
        'Shoulder 22',
      quantity: 7,
      num_favorers: 1636,
      tags: [
        'daughter gift',
        'gift mother',
        'cowgirl',
        'country',
        'western',
        'purse',
        'hand-tooled',
        'womens',
        'bag',
        'cow',
        'cowgirl couture',
        'holy cow couture'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 132.88,
      img: 'https://i.etsystatic.com/11505583/r/il/1f76cb/3252694705/il_fullxfull.3252694705_hkj6.jpg',
      onSale: true,
      taxonomy_id: 3
    },
    {
      title: 'Lash Print Shoulder Tote Bag',
      description: 'The cotton canvas tote bag is the ideal grab &amp; go accessory. Made of 100% cotton, it features long, reinforced shoulder straps for exceptional comfort. This super cute bag is perfectly sized at 42cm x 42cm and with our super cute designs you&#39;ll find one that fits right in with your style.\n' +
        'This is part of our brand new apparel line&nbsp;which is environmentally friendly since each piece is only printed once you order, saving on wastage so less items end up in landfill and allowing us to offer a wide variety of sizes an colours. Select your item and add to cart and it will be printed and shipped directly to you from the manufacturer. Please note all lash apparel items have a separate shipping fee and times will vary especially at the moment due to the latest covid out break.&nbsp;\n' +
        '.: 100% cotton canvas\\n.: Medium-heavy fabric (9.44 oz/yd&sup2; (320 g/m&sup2;))\\n.: Reinforced shoulder straps\\n.: One size',
      quantity: 999,
      num_favorers: 0,
      tags: [],
      processing_min: 1,
      processing_max: 7,
      price: 25,
      img: 'https://i.etsystatic.com/33658858/r/il/3f325d/3860618929/il_fullxfull.3860618929_c111.jpg',
      onSale: true,
      taxonomy_id: 3
    },
    {
      title: 'Hand painted blue speckles keyring.',
      description: 'A lovely bright keyring.\n' +
        'Hand painted  acrylic abstract art.\n' +
        'Blue speckles.\n' +
        '5-6 cm diameter wooden disk.\n' +
        'Metal spin lock ring.\n' +
        'Varnished but slight chipping may occur on the bark edge with use.',
      quantity: 1,
      num_favorers: 0,
      tags: [
        'Abstract art',
        'Acrylic paint',
        'Hand painted',
        'Gift',
        'Keyring'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 7,
      img: 'https://i.etsystatic.com/35011532/r/il/108e6e/3860615571/il_fullxfull.3860615571_pz3e.jpg',
      onSale: true,
      taxonomy_id: 3
    },
    {
      title: 'Avacado, Green, Minimalist Phone Cover For iPhone 13, 12, 11 Pro, Xs, Xr, 7, 8+, SE Samsung S22, S21, S20, S10, A12, Huawei P30, P20 Lite',
      description: 'Heyoo, Welcome to Pocahontascase shop!\n' +
        '\n' +
        '◀ ABOUT THIS DESIGN ▶\n' +
        'This Vintage elegant phone case will bring your phone game to the next level! Not only it can protect your precious mobile phone from accidental fall damage, but it can make it look good whilst doing that! Retro 80s phone cover can be the perfect gift for your friends and family! This is the trend to look out for right now! Be the most stylish p Always remember Look good- Feel good.\n' +
        '◀ OTHER PHONE MODELS AVAILABLE ▶\n' +
        'Check the product description section to see all available phone models. If your phone model is not included in the drop-down menu, but it is included in the description lists, you can order your case for any other model and leave a note to seller that you want your case on a different phone model.\n' +
        '◀ SEE ALL OUR PHONE CASES ▶\n' +
        'www.etsy.com/pocahontascase \n' +
        '◀ HOW TO PERSONALIZE A DESIGN ▶\n' +
        'We can add your name or other personal text on your cover. Put your text in the personalization box or leave a note to seller for that. (It will not cost extra)\n' +
        '\n' +
        'While choosing the text color for fragmental printed designs (clear cases), it is worth considering the color of the device. Black text will not be as visible on a black device and vice versa.\n' +
        '\n' +
        'For any customization outside of these options, please contact us first before placing your order.\n' +
        '◀ ABOUT OUR CASES ▶\n' +
        'GEL cases / HARD cases\n' +
        '•\tDesign is printed on back only – sides are not printed and are clear;\n' +
        '•\tHigh-Definition UV print;\n' +
        '•\tVery Easy to Install, fits your device perfectly;\n' +
        '•\tSoft Button Covers;\n' +
        '•\tEasy access to all ports;\n' +
        '•\tSupports touch pay and wireless charging;\n' +
        '•\tPhone case cut outs “lip” is high enough to protect your camera lenses as well;\n' +
        '•\tHigh quality TPU GEL material – flexible and very durable at the same time.\n' +
        'GEL/TPU material cases:\n' +
        '• Soft, but very durable;\n' +
        '• Flexible and easy to bend.\n' +
        '\n' +
        'HARD PLASTIC material cases:\n' +
        '• Hard plastic material;\n' +
        '• A lot harder to bend;\n' +
        '• Thinner than GEL cases;\n' +
        'IMPORTANT \n' +
        '*We print on Soft TPU GEL / Rubber cases by default.\n' +
        'Please leave us a note if You want a Hard Case Instead*\n' +
        '◀ SHIPPING ▶\n' +
        'UK, USA and Germany orders are delivered with express delivery!\n' +
        '* Ready to ship in 1 day;\n' +
        '• United States: 4-8 days;\n' +
        '• United Kingdom: 4-8 days;\n' +
        '• Germany: 4-8 days;\n' +
        '• Europe: 10-18 days\n' +
        '• Anywhere else: 18-21 days\n' +
        '◀ ALL AVAILABLE DEVICES ▶\n' +
        'iPhone:\n' +
        '13/ 13 Mini/ 13 Pro/ 13 Pro Max/ 12/ 12 Pro/ 12 Pro Max/ 12 Mini/ 11/ 11 Pro/ 11 Pro Max/ X/ XR/ XS/ XS Max/ 4/ 4s/ 5/ 5s/ SE/ 5c/ 6+/ 6s+/ 6/ 6s/ 7/ 8/ SE 2020/ 7+/ 8+/\n' +
        'Huawei:\n' +
        'P40 / P40 lite / P40 lite e / P40 Pro / P30 / P30 lite / P30 Pro / P20 / P20 lite / P20 Pro / P10 / P10 lite / P9 / P9 lite / Mate 20 / Mate 20 Pro / Mate 20 X / Mate 30 / Mate 30 Pro / Mate 40 / Mate 40 Pro / Mate 40 Pro+\n' +
        'Samsung:\n' +
        'A20 / A20 e / A30 / A3 (2016) / A3 (2017) / A40 / A5 (2016) / A5 (2017) / A50 / A505 / A51 (4G) / A6 (2018) / A6+ (2018) / A60 / A6s / A7 (2016) / A7 (2017) / A7 (2018) / A70 / A71 / A8+ (2018) / A8/A5 (2018) / A80 / A8s / A9 (2018) / A90 / J3 (2016) / J3 (2017) / J4 (2018) / J5 (2016) / J5 (2017) / J6 (2018) / J7 (2016) / J7 (2017) / J8 (2018) / Note 10 / Note 10 + / Note 10 lite/ Note 9 / S10 / S10 lite / S10 + / S10 e / S20 / S20 Ultra / S20 + / S5 / S6 / S6 Edge / S6 Edge Plus / S7 / S7 Edge / S8 / S8 + / S9 / S9 + / S22/ S22+/ S22 Ultra/ S21 FE/  S21 / S21+ / S21 Ultra / A12 5G / M51 / M01 / M30 / M30s / M31 / M31s/ A12/ A32 4g/ A52 5g/ A52 4g/ A72 5g/\n' +
        'Xiaomi:\n' +
        'Mi 11 / Mi 10T Lite/ Mi 10T / Mi 10T Pro 5G / Mi 10T lite 5G / Poco M3 / Poco X3 / Poco X3 NFC / Redmi Note 8 Pro / Redmi Note 9 4G / Redmi Note 9 Pro 5G\n' +
        '◀ PLEASE NOTE ▶\n' +
        '•\tColors might look slightly different as they vary on different computer monitor settings;\n' +
        '•\tThere may be slight arrangement differences from the main Etsy image;\n' +
        '•\tAll designs are printed, not engraved.\n' +
        '◀ REFUNDS, RETURNS AND EXCHANGES ▶\n' +
        '•\tIf buyer places an order by mistake or changes his/her mind, we cannot accept refund/return/exchange!\n' +
        '•\tDo not hesitate to contact us on any problems with your order, we will gladly help.\n' +
        '\n' +
        'If there are any questions, feel free to contact us.\n' +
        'Thank you for choosing PocahontasCase!\n' +
        'Have a wonderful day!',
      quantity: 100,
      num_favorers: 1,
      tags: [
        'Iphone 11 Case',
        'Iphone X Case',
        'Iphone 11 PRO Case',
        'Iphone 12 Case',
        'Iphone 13 Case',
        'Iphone XR Case',
        'Iphone 8 Case',
        'Samsung S22 Case',
        'Samsung S21 Case',
        'Huawei P30 Case',
        'Aesthetic Painting',
        'Avacado Phone Case',
        'Minimalist Green'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 13,
      img: 'https://i.etsystatic.com/35289020/r/il/1dc5d6/3813052246/il_fullxfull.3813052246_jrb0.jpg',
      onSale: true,
      taxonomy_id: 3
    },
    {
      title: 'Large Crossbody hobo bag, Shoulder bag, crossbody bag, Crossbody purse, handbag, Vegan leather, Black and brown, Large hobo bag',
      description: 'Crossbody hobo bag, Shoulder bag, crossbody bag, Crossbody purse, handbag, vegan leather\n' +
        '\n' +
        '*Exterior:\n' +
        '-light but sturdy canvas in black\n' +
        '-vegan faux leather in brown\n' +
        '-silver tone hardware\n' +
        '-removable and adjustable strap\n' +
        '\n' +
        '*Interior:\n' +
        '-cotton fabric in tan colour with two slip pockets\n' +
        '-magnetic snap closure\n' +
        '\n' +
        '*Dimensions:\n' +
        '\n' +
        'Height : 15&quot;\n' +
        'Width (opening): 14&quot;\n' +
        'Depth: 3&quot;\n' +
        'Strap: shortest position 28&quot;\n' +
        'Longest:51&quot; \n' +
        '\n' +
        'Lightweight bag that can carry all you day to day things. \n' +
        'Very versatile, practical and stylish. It can be carried as shoulder bag or crossbody. \n' +
        ' \n' +
        'If you have any questions please let me know!',
      quantity: 1,
      num_favorers: 1226,
      tags: [
        'crossbody hobo bag',
        'hobo bag',
        'crossbody bag',
        'shoulder bag',
        'handbag',
        'crossbody purse',
        'hobo',
        'slouchy bag',
        'hobo crossbody',
        'large bag',
        'bags and purses',
        'hobo bags',
        'large purse'
      ],
      processing_min: 2,
      processing_max: 4,
      price: 56,
      img: 'https://i.etsystatic.com/6633870/r/il/9df273/3809610659/il_fullxfull.3809610659_mnwm.jpg',
      onSale: true,
      taxonomy_id: 3
    },
    {
      title: 'Smile iPhone 13 12 11 Pro Max case iPhone 13 12 mini case iPhone XR case iPhone XS Max Case iPhone 7 Plus iPhone 8 Plus iPhone SE Case',
      description: '💗OUR PRODUCTS \n' +
        'SOFT SILICONE CASE\n' +
        '--High definition UV printing with TPU Ink\n' +
        '--Premium silicon\n' +
        '--Covers all sides of the device\n' +
        '--Every item is Made to order \n' +
        '--Want something just for you? We can customize all our designs.\n' +
        '\n' +
        '…………………………………\n' +
        '💗AVAILABLE DEVICES\n' +
        'Apple:\n' +
        'iPhone11 iPhone11Pro iPhone11ProMax iPhone12 iPhone4 iPhone4S iPhone5 iPhone5c iPhone5S iPhone6 iPhone6Plus iphone6s iPhone6SPlus iPhone7 iPhone7Plus iPhone8 iPhone8Plus iPhoneSE iPhoneSE-2020 iPhoneX\n' +
        'iPhoneXR iphoneXS iPhoneXSMax ……\n' +
        '\n' +
        'Samsung：\n' +
        'A8 A8-2018 A81 A8Plus-2018 A8S A8Star A9-2018 A91 A9s A9StaePro A9Star A9Star-2018 C10 C9 C9Pro M10 M11 M20 M21 M30 M30S M31 M40 Note10 Note10Plus Note10Pro NOTE10 Note20 Note20Plus Note3 Note4 Note5 Note5Edge Note8 Note9 S10 S10-5G S10E S10Plus S10CITE S20 S20PLUS S20Ultra S5 S6 S6Edge S6EdgePlus S7 S7Edge S8 S8Plus S9 S9Plus ……\n' +
        '\n' +
        'Huawei OnePlus OPPO LG MOTO VIVO Honor Mi Redmi ……\n' +
        '\n' +
        '(We do not list all our models, feel free to ask if you can’t find your model here!)\n' +
        '\n' +
        '…………………………………\n' +
        '⚡️SHIPPING \n' +
        '• Ready to ship in 1 - 5 business days\n' +
        '• With Tracking Number\n' +
        '• Shipping usually takes is about 7-10 business days on average in US / EU / Asian countries\n' +
        '• Other countries is about 10-20 business days.\n' +
        '• Want faster? Shipping upgrades available in the cart\n' +
        '\n' +
        '…………………………………\n' +
        '💗NOTES \n' +
        '• Colors might look slightly different as they vary on different screen.\n' +
        '• All graphics are printed, not engraved or painted.\n' +
        '• Feel free to contact me if you have any questions.\n' +
        '\n' +
        '💗Thank you so much for choosing CaseSpace!!',
      quantity: 169,
      num_favorers: 18906,
      tags: [
        'iPhone 8 Plus Case',
        'iPhone XS Max Case',
        'iPhone 11 Pro Case',
        'iPhone XR Case',
        'iPhone 11 Pro Max',
        'iPhone 12 mini case',
        'iPhone 12 Pro Case',
        'iPhone 12 Pro Max',
        'iPhone 11 Case',
        'iPhone 12 Case',
        'iPhone 13 Case',
        'iPhone 13 Pro Case',
        'iPhone 13 Pro Max'
      ],
      processing_min: 1,
      processing_max: 5,
      price: 97.1,
      img: 'https://i.etsystatic.com/25509531/r/il/dc6dea/3086976404/il_fullxfull.3086976404_rbns.jpg',
      onSale: true,
      taxonomy_id: 3
    },
    {
      title: 'Believe In Your Sparkle Cotton Tote Bag',
      description: 'The cotton canvas tote bag is the ideal grab &amp; go accessory. Made of 100% cotton, it features long, reinforced shoulder straps for exceptional comfort. This super cute bag is perfectly sized at 42cm x 42cm and with our super cute designs you&#39;ll find one that fits right in with your style.\n' +
        'This is part of our brand new apparel line&nbsp;which is environmentally friendly since each piece is only printed once you order, saving on wastage so less items end up in landfill and allowing us to offer a wide variety of sizes an colours. Select your item and add to cart and it will be printed and shipped directly to you from the manufacturer. Please note all lash apparel items have a separate shipping fee and times will vary especially at the moment due to the latest covid out break.&nbsp;\n' +
        '.: 100% cotton canvas\\n.: Medium-heavy fabric (9.44 oz/yd&sup2; (320 g/m&sup2;))\\n.: Reinforced shoulder straps\\n.: One size',
      quantity: 1998,
      num_favorers: 0,
      tags: [],
      processing_min: 1,
      processing_max: 7,
      price: 25,
      img: 'https://i.etsystatic.com/33658858/r/il/002d7d/3860618559/il_fullxfull.3860618559_183f.jpg',
      onSale: true,
      taxonomy_id: 3
    },
    {
      title: 'ROBERTA di CAMERINO VINTAGE - borsa in fettuccia intrecciata anni &#39;60 - 60&#39;s braided tap purse',
      description: 'ROBERTA di CAMERINO VINTAGE \n' +
        '- borsa in fettuccia intrecciata anni &#39;60 \n' +
        '- 60&#39;s braided tap purse',
      quantity: 1,
      num_favorers: 0,
      tags: [],
      processing_min: 1,
      processing_max: 3,
      price: 270,
      img: 'https://i.etsystatic.com/21356984/r/il/55cfae/3813094026/il_fullxfull.3813094026_92q5.jpg',
      onSale: true,
      taxonomy_id: 3
    },
    {
      title: 'Handwoven Large Straw Tote Bag |Handmade Bag| Shoulder Wicker Bag| Natural Bag | Boho Bag',
      description: '🖐Handmade Woven Straw Tote Bag - High Quality and Excellent Price.\n' +
        'Material: Straw\n' +
        'Dimension: \n' +
        'Size S - Diameter 32 cm. Strap approx 70 cm \n' +
        'Size M- Diameter 35 cm. Strap approx 76 cm \n' +
        '\n' +
        '\n' +
        'This stunning bag is 100% handmade with very lightweight straw by Vietnamese Artisans with love and care. Because of the handcrafted nature, every bag is one-of-a-kind and very unique in its own way. It requires time and specially handcrafted skillsets to make this bag. The size is perfect for a small purse, phone, sunglasses, small books, keys, a lipstick, accessories, and other mini necessities.\n' +
        '\n' +
        '*If you are a fashionista, this is the best choice for you. This bag brings nature, unique and chic!\n' +
        '\n' +
        'Please note: Due to the handmade nature, there might be slight variation in the size, color, and appearance.\n' +
        '\n' +
        'allbitsbamboo Team with Love! We are a UK-based business ☺️',
      quantity: 8,
      num_favorers: 47,
      tags: [
        'summer bag',
        'beach bag',
        'raffia bag',
        'round bag',
        'straw tote bag',
        'tote bag',
        'square bag',
        'Straw Bag',
        'Shoulder Handbag',
        'Wicker Bag',
        'rattan bag',
        'Crossbody Bag',
        'handmade bag'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 29.99,
      img: 'https://i.etsystatic.com/24013342/r/il/239575/2732021642/il_fullxfull.2732021642_jlja.jpg',
      onSale: true,
      taxonomy_id: 3
    },
    {
      title: 'Crossbody leather bag, Small crossbody purse, Geometric print, Navy bag,Teal, Slouchy style, Everyday Purse, Cross body bag',
      description: 'This small crossbody bag is made of lightweight cotton fabric in dark teal blue and white geometric print for the top part. \n' +
        'The bottom part and the strap are made of faux vegan leather in brown. \n' +
        '\n' +
        '*Cotton lining in black\n' +
        '*Slip pocket\n' +
        '* Zipper closure\n' +
        '\n' +
        'Dimensions:\n' +
        'approx.\n' +
        'Opening: 9&quot;\n' +
        'Height: 8&quot;\n' +
        'Strap: regular length is 46&quot; /117 cm . \n' +
        'You can choose the adjustable option if shorter strap is needed (the longest position is 46 inches). \n' +
        '\n' +
        'If longer (more than 46&quot;) strap is needed please let me know. \n' +
        '\n' +
        '____________________\n' +
        '*Note that due to different monitor settings the colors may slightly vary.\n' +
        '*Please read the listing description and the shop policy before purchase. There you can find information about the production time, shipping time etc.',
      quantity: 1,
      num_favorers: 19726,
      tags: [
        'bags and purses', 'bymart',
        'crossbody bag',   'crossbody purse',
        'nautical bag',    'everyday purse',
        'striped bag',     'summer bag',
        'navy blue',       'casual bag',
        'crossbody',       'bag',
        'purse'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 27,
      img: 'https://i.etsystatic.com/6633870/r/il/a06d6a/3683690232/il_fullxfull.3683690232_aaga.jpg',
      onSale: true,
      taxonomy_id: 3
    },
    {
      title: 'Lash Super Power Tough Cases',
      description: 'Accessorize your phone without sacrificing security thanks to these super cute Tough Cases featuring our custom designs. These phone cases are made with impact-resistant polycarbonate outer shell and feature an inner TPU liner for extra protection against accidental drops. Keep your phone secure &amp; stylish whether you&#39;re headed to the office or wrapped in pastels for a spring time soir&eacute;e.\n' +
        'This is part of our brand new apparel line&nbsp;which is environmentally friendly since each piece is only printed once you order, saving on wastage so less items end up in landfill and allowing us to offer a wide variety of sizes an colours. Select your item and add to cart and it will be printed and shipped directly to you from the manufacturer. Please note all lash apparel items have a separate shipping fee and times will vary especially at the moment due to the latest covid out break.\n' +
        '.: Dual layer case for extra durability and protection\\n.: Impact resistant Polycarbonate outer shell\\n.: Photographic print quality\\n.: Clear, open ports for connectivity',
      quantity: 45954,
      num_favorers: 0,
      tags: [],
      processing_min: 1,
      processing_max: 7,
      price: 26,
      img: 'https://i.etsystatic.com/33658858/r/il/788b30/3860618139/il_fullxfull.3860618139_627j.jpg',
      onSale: true,
      taxonomy_id: 3
    },
    {
      title: 'Versace Electric Blue Embossed Leather Wallet. Half Retail Price. Rarely Used. In Excellent Excellent Condition.',
      description: 'I NO LONGER SHIP TO AUSTRALIA.\n' +
        '\n' +
        'VERSACE GOLD MEDUSA HEAD BLUE LEATHER WALLET.\n' +
        '\n' +
        'ORIGINAL RETAIL £390, $510, 460 EUROS.\n' +
        '\n' +
        '100% LEATHER, MADE IN ITALY\n' +
        '\n' +
        'This authentic Versace wallet has been rarely used and is in excellent, excellent condition.\n' +
        '\n' +
        'Absolute minimal surface wear.\n' +
        '\n' +
        'A vibrant blue high quality shiny  embossed leather exterior with a gold plated Medusa plaque on it&#39;s front.\n' +
        '\n' +
        'CLOSEST PANTONE COLOR MATCH IS 294 C.\n' +
        '\n' +
        'Holds 4 credit cards with 3 compartments behind.\n' +
        '\n' +
        'A further 3 compartments behind a coin purse, closes with a snap.\n' +
        '\n' +
        '2 compartments the length of wallet for notes.\n' +
        '\n' +
        'Fully lined in leather and satin embossed Gianni Versace.\n' +
        '\n' +
        'Closed wallet measures 5 inches, that&#39;s 13 cms in length.\n' +
        '\n' +
        'Top to bottom wallet measures 3 3/4 inches, that&#39;s 9.5 cms.\n' +
        '\n' +
        'Open wallet measures 10 inches in length, that&#39;s 25.5 cms.\n' +
        '\n' +
        'The note/bill section measures 9 1/2 inches in length, that&#39;s 24 cms.\n' +
        '\n' +
        'PLEASE CHECK THE SIZE OF YOUR NOTES/BILLS TO MAKE SURE THEY FIT THIS WALLET.\n' +
        '\n' +
        'Leather exterior has some minimal surface marks, nothing serious, likewise the interior - SEE PHOTOS.\n' +
        '\n' +
        'Gold hardware intact and super shiny.\n' +
        '\n' +
        'THIS WALLET IS GENUINE VERSACE.\n' +
        '\n' +
        'THIS IS THE REAL DEAL - NOT AN ASIAN COPY.\n' +
        '\n' +
        'ALL SALES ARE FINAL.\n' +
        '\n' +
        'SHIPPED WITH TRACKING.\n' +
        '\n' +
        'Please read fully the descriptions, all measurements and shipping terms. I try to give as much information as possible - if you are still unsure of condition, size, color etc please ask before bidding.\n' +
        '\n' +
        'THE PHOTOS ARE OF THE ACTUAL ITEM FOR SALE AND FORM PART OF THE DESCRIPTION.\n' +
        '\n' +
        'ALL COMPUTER MONITORS ARE NOT THE SAME-SO COLORS VARY. IF YOU WANT AN EXACT COLOR MATCH GO TO A SHOP WHERE YOU CAN PHYSICALLY LOOK AT THE ITEM AND BUY IT THERE.\n' +
        '\n' +
        'BUYERS REMORSE IS NO EXCUSE FOR FALSE EXCUSES IN ORDER TO RETURN GOODS.\n' +
        'I DO NOT ACCEPT RETURNS BECAUSE YOU HAVE CHANGED YOUR MIND, MADE A MISTAKE WITH SIZE OR COLOR, WORE THE ITEM AND DECIDED YOU DO NOT LIKE IT, ETC, ETC.\n' +
        '\n' +
        'If you insist on returning goods due to buyer&#39;s remorse there will almost certainly be customs duties payable by you on returned goods - I am not responsible for, nor can I control these charges.\n' +
        '\n' +
        'YOUR ITEM WILL BE THOROUGHLY CHECKED BEFORE MAILING.\n' +
        '\n' +
        'IF YOU ARE UNSURE ABOUT A PURCHASE GO FIND A VINTAGE STORE AND BUY THE ITEM THERE.\n' +
        '\n' +
        'Please only buy if you accept the above and my terms and conditions, and if you intend to pay.',
      quantity: 1,
      num_favorers: 0,
      tags: [
        'Gianni Versace',
        'Versace',
        'Leather',
        'Wallet',
        'Purse',
        'Embossed'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 250,
      img: 'https://i.etsystatic.com/12562616/r/il/5e1edf/3860609637/il_fullxfull.3860609637_k3a2.jpg',
      onSale: true,
      taxonomy_id: 3
    },
    {
      title: 'Lash Drama Tough Cases',
      description: 'Accessorize your phone without sacrificing security thanks to these super cute Tough Cases featuring our custom designs. These phone cases are made with impact-resistant polycarbonate outer shell and feature an inner TPU liner for extra protection against accidental drops. Keep your phone secure &amp; stylish whether you&#39;re headed to the office or wrapped in pastels for a spring time soir&eacute;e.\n' +
        'This is part of our brand new apparel line&nbsp;which is environmentally friendly since each piece is only printed once you order, saving on wastage so less items end up in landfill and allowing us to offer a wide variety of sizes an colours. Select your item and add to cart and it will be printed and shipped directly to you from the manufacturer. Please note all lash apparel items have a separate shipping fee and times will vary especially at the moment due to the latest covid out break.\n' +
        '.: Dual layer case for extra durability and protection\\n.: Impact resistant Polycarbonate outer shell\\n.: Photographic print quality\\n.: Clear, open ports for connectivity',
      quantity: 45954,
      num_favorers: 0,
      tags: [],
      processing_min: 1,
      processing_max: 7,
      price: 26,
      img: 'https://i.etsystatic.com/33658858/r/il/375ecd/3813095422/il_fullxfull.3813095422_lijq.jpg',
      onSale: true,
      taxonomy_id: 3
    },
    {
      title: 'Girl Boss Tough Cases',
      description: 'Accessorize your phone without sacrificing security thanks to these super cute Tough Cases featuring our custom designs. These phone cases are made with impact-resistant polycarbonate outer shell and feature an inner TPU liner for extra protection against accidental drops. Keep your phone secure &amp; stylish whether you&#39;re headed to the office or wrapped in pastels for a spring time soir&eacute;e.\n' +
        'This is part of our brand new apparel line&nbsp;which is environmentally friendly since each piece is only printed once you order, saving on wastage so less items end up in landfill and allowing us to offer a wide variety of sizes an colours. Select your item and add to cart and it will be printed and shipped directly to you from the manufacturer. Please note all lash apparel items have a separate shipping fee and times will vary especially at the moment due to the latest covid out break.\n' +
        '.: Dual layer case for extra durability and protection\\n.: Impact resistant Polycarbonate outer shell\\n.: Photographic print quality\\n.: Clear, open ports for connectivity',
      quantity: 45954,
      num_favorers: 0,
      tags: [],
      processing_min: 1,
      processing_max: 7,
      price: 26,
      img: 'https://i.etsystatic.com/33658858/r/il/b07b05/3813095386/il_fullxfull.3813095386_l53b.jpg',
      onSale: true,
      taxonomy_id: 3
    },
    {
      title: 'Holographic Waist Bag Fanny Pack Womens Bag Mens Bag Sling Bag Chest Bag Travel Bag',
      description: 'I&#39;m always obsessed with the colors, especially the holographic color. It&#39;s magical to me and I&#39;m naturally drawn by it. \n' +
        '\n' +
        'These bags are made of PU leather with nylon lining. \n' +
        '\n' +
        'Inspired by dumplings, they feature a front zipper pocket that&#39;s large enough for a phone and a back zipper pocket. \n' +
        '\n' +
        'If you are looking to complete your daily look with something edgy and different, then you&#39;ve come to the right place. \n' +
        '\n' +
        'Eight colors to choose from: silver, champagne, black, multicolor, light purple, rose red, green, and blue\n' +
        'Size info: see picture. \n' +
        '\n' +
        'Size info: see pic \n' +
        '\n' +
        'Shop now. \n' +
        '\n' +
        'Thank you so much.',
      quantity: 1,
      num_favorers: 0,
      tags: [
        'waist bag',     'fanny pack',
        'womens bag',    'crossbody bag',
        'gothic bag',    'edgy',
        'bag for women', 'holographic bag',
        'chest bag',     'sling bag',
        'dumpling bag',  'mens bag',
        'travel bag'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 42.43,
      img: 'https://i.etsystatic.com/28120379/r/il/cbd8e5/3860595255/il_fullxfull.3860595255_r5l9.jpg',
      onSale: true,
      taxonomy_id: 3
    },
    {
      title: 'Sex Toy Mystery Box Random Lucky Dip So Take A Walk On The Wild Side & Enjoy A Slice Of Heaven',
      description: 'Sex Toy Mystery Box Random Lucky Dip, So Take A Walk On The Wild Side & Enjoy A Slice Of Heaven.\n' +
        '\n' +
        'These pictures do not represent the actual item(s) being sold.\n' +
        '\n' +
        ' They are just used as a representation of what you will get in your Mystery Box. \n' +
        '\n' +
        'All Mystery Boxes are completely random as to what you items will receive.\n' +
        '\n' +
        'The more you pay the better the products are that you will actually receive. \n' +
        '\n' +
        'All these items are brand new.\n' +
        '\n' +
        'All items that you will receive are completely random & we do not cater to anyones needs, circumstances, age etc. \n' +
        '\n' +
        'These are Mystery Boxes after all so you will receive what you receive. \n' +
        '\n' +
        'SHIPPING\n' +
        '\n' +
        'All Mystery Boxes will take 20-408 days to get to you, depending on your location, border restrictions, handling times, Covid etc.\n' +
        '\n' +
        'Full tracking will be provided.\n' +
        '\n' +
        'If your parcel has NOT arrived after 30 days! Check out the tracking and find out what you can before contacting us.\n' +
        '\n' +
        'We DO NOT take responsibility for any LOST, STOLEN, DAMAGED, DELAYED parcels! As we have no control over a parcel once it has been shipped. \n' +
        '\n' +
        'If you reckon your parcel is lost, delayed etc then you will need to contact the courier / shipping company & sort it out with them. As they will be able to help you out a lot more than we will be able to. \n' +
        '\n' +
        'Check out all the other great items we have for sale. \n' +
        '\n' +
        'Thank you for your time & take care. ',
      quantity: 100,
      num_favorers: 0,
      tags: [
        'Sex',    'Sex Toy',
        'Dildo',  'Vibrator',
        'Vagina', 'Penis',
        'Breast', 'Hot',
        'Wild',   'Masterbate',
        'Pussy',  'Dong',
        'Anal'
      ],
      processing_min: 2,
      processing_max: 4,
      price: 100,
      img: 'https://i.etsystatic.com/32084404/r/il/a87126/3813099268/il_fullxfull.3813099268_kftx.jpg',
      onSale: true,
      taxonomy_id: 4
    },
    {
      title: 'Solid Color Nylon Headband, Baby Headband, Baby Girl Headband, Newborn Headband, Baby Girl Hair Bow, Baby Shower Gift, Baby Girl Headwrap',
      description: 'These trendy nylon headbands are the perfect accessory! These are a one size fits all super soft nylon headband. \n' +
        '\n' +
        'These are designed to fit starting at newborn all the way up to child size. \n' +
        '\n' +
        'With our flat rate shipping, you can choose your favorite solid colors!',
      quantity: 1904,
      num_favorers: 1006,
      tags: [
        'Newborn Bow',
        'Newborn headband',
        'baby girl headband',
        'nylon headband',
        'big bow headband',
        'baby shower gift',
        'baby girl bow',
        'baby girl',
        'Large bow',
        'newborn photo prop',
        'big bow',
        'stretchy headband',
        'simple bow'
      ],
      processing_min: 1,
      processing_max: 4,
      price: 6.99,
      img: 'https://i.etsystatic.com/11066376/r/il/fc9b1e/2570946290/il_fullxfull.2570946290_fxt4.jpg',
      onSale: true,
      taxonomy_id: 4
    },
    {
      title: 'Press on nails sizing kit!',
      description: 'Press on nails sizing kit!\n' +
        '\n' +
        'These sizing kits are great if you want accurate measurements of each nail so your chosen set fits you correctly. \n' +
        '\n' +
        'Nail sizes all vary slightly for each nail shape. One size can be different from another shape size, if you are looking to order more than 1 nail set in different shapes, I recommend buying a sizing kit for each of the shapes you would like your chosen sets to be in.\n' +
        '\n' +
        'Instructions:\n' +
        '\n' +
        '- Take the nails one by one and match a size up to your natural nail by pressing them on flush against your nail bed\n' +
        '\n' +
        '- Write down each size on the card provided from thumb to pinky. If in doubt between 2 sizes, opt for the larger one\n' +
        '\n' +
        '- When you go to order your chosen set, simply add in the nail sizes in the &#39;personalisation&#39; box  \n' +
        '\n' +
        'Now you know your nails will fit you perfectly!',
      quantity: 3,
      num_favorers: 10,
      tags: [
        'Nail sizing kit',
        'False nails',
        'Press on nails',
        'Fake nails'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 2.99,
      img: 'https://i.etsystatic.com/28970224/r/il/c5abae/3224708748/il_fullxfull.3224708748_7f39.jpg',
      onSale: true,
      taxonomy_id: 4
    },
    {
      title: 'Halloween Scrunchie, Spider Scrunchie, Bat Scrunchie, Skull Scrunchie, Skeleton Scrunchie, Spooky Scrunchie, Gothic Scrunchie, Scrunchies UK',
      description: 'Halloween Scrunchie, Spider Scrunchie, Bat Scrunchie, Skull Scrunchie, Skeleton Scrunchie, Spooky Srunchie, Halloween Costume, Halloween Gift\n' +
        '\n' +
        'Handmade Halloween Scrunchies\n' +
        '\n' +
        'Available in different prints - black and white\n' +
        'Made with strong elastic\n' +
        'Cotton Fabric\n' +
        'Can wrap around 2-3 times depending upon hair\n' +
        'Halloween Collection, available to buy single and gift set, please check my listings for more options!\n' +
        '\n' +
        '4 different patterns in 2 different colours. Please note that: Black means &#39;Black Objects in white background&quot; for example, Black Spider = Black coloured spiders in white background and vice versa.\n' +
        '\n' +
        'Ideal for Halloween gifts or treat yourself!\n' +
        'Please note that the pattern may differ, when fabric was cut. Fabric is placed next to scrunchies to show the pattern.\n' +
        '\n' +
        'Hair accessories can not be returned due to hygiene reasons, however if you have any problem with the product, please contact me. I will try my best to resolve the issue. \n' +
        '\n' +
        '*Please allow slight variation in colour due to lighting and photography settings.\n' +
        '*Handwash recommended only due to delicate nature of the fabric.\n' +
        '*Basket/props/fabric materials not included, decorations purpose only.',
      quantity: 85,
      num_favorers: 44,
      tags: [
        'halloween scrunchie',
        'skull scrunchie',
        'skeleton scrunchie',
        'spider scrunchie',
        'bat scrunchie',
        'spooky scrunchie',
        'spooky gift',
        'halloween costume',
        'scrunchies',
        'black scrunchie',
        'Gothic Scrunchie',
        'gothic',
        'horror scrunchies'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 2.95,
      img: 'https://i.etsystatic.com/25146947/r/il/9a52d5/3349297207/il_fullxfull.3349297207_79mz.jpg',
      onSale: true,
      taxonomy_id: 4
    },
    {
      title: 'Cream with very light pink feathers fascinator headband weddings, races, prom',
      description: 'Cream with very light pink feathers fascinator headband weddings, races, prom',
      quantity: 1,
      num_favorers: 0,
      tags: [ 'cream and pink' ],
      processing_min: 1,
      processing_max: 1,
      price: 9.99,
      img: 'https://i.etsystatic.com/15372711/r/il/59d246/3767134226/il_fullxfull.3767134226_klk8.jpg',
      onSale: true,
      taxonomy_id: 4
    },
    {
      title: 'Nail Polish Wraps - Nail Wraps - Nail Strips - Nail stickers  - black - metallic  space nails - night sky - planets',
      description: 'Hello! I am so glad you are here!! We have an great selection of amazing non toxic nail wraps just for you!\n' +
        '\n' +
        'nails EH! wraps are self adhesive and require no heat to activate!! Just peel, stick and file and you will have yourself an amazing mani in a matter of minutes!!\n' +
        '\n' +
        'Detailed instructions and a nail file are included in each purchase!\n' +
        '\n' +
        '\n' +
        'Your experience is important to me! If you have any questions or issues, send me a message and I will help you out as quick as possible!\n' +
        '\n' +
        'Thank you for your ongoing support!!',
      quantity: 7,
      num_favorers: 35,
      tags: [
        'nail wraps',
        'nail strips',
        'nail polish wraps',
        'nail polish strips',
        'nail stickers',
        'nail design',
        'moon nails',
        'sky nails',
        'nail decals',
        'night nails',
        'planets',
        'outer space',
        'midnight'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 5.7,
      img: 'https://i.etsystatic.com/17398570/r/il/6325f6/3363064786/il_fullxfull.3363064786_svtq.jpg',
      onSale: true,
      taxonomy_id: 4
    },
    {
      title: 'Grey beach wave headband wig, gym wig, bandfall wig, sports wig, swim wig',
      description: 'Our headband wigs are perfect for the gym or holidays. They have been specifically designed to be worn up and styled with no visible wefts. These are great for hot weather as they don&#39;t have the heaviness of a full wig while still giving total coverage. They hair looks very natural, right down to the fly away strands. \n' +
        '\n' +
        'The wig comes attached to a base band which is made from a secure elastic and has a velcro fastening. This provides the needed security if you want to tie the hair up high. There is anti slip material hand stitched into the wig so it will not move during physical activity. You can choose 1 coloured headband to go with your wig.\n' +
        '\n' +
        'This colour is mocha melt. This is a 10 inch length and is a beach wave style\n' +
        '\n' +
        'We use a mixed fiber synthetic hair.  You are not buying an off the peg headband wig, you are purchasing a high quality custom product which is perfect for everyday use. \n' +
        '\n' +
        'Please note- Chlorine & salt water are damaging to both natural hair & synthetic hair. Please try to avoid consisitenly getting your wig soaked in either as this will inevitably shorten the life span of your wig. If you do get either in your wig please wash with synthetic hair shampoo, rinse in cold water, spray with fiber oil conditioner & comb through.\n' +
        '\n' +
        'Additional headband colours to choose from are-\n' +
        '\n' +
        'Black,petrol, Baby Pink, Fuscia, Plum, Coral, Teal, Lilac, charcoal, Marl Grey, Vintage blue. .\n' +
        '\n' +
        'Simply place your order & email us your colour choice of headband.\n' +
        '\n' +
        'Please note that all of our Etsy listings includes Etsy fees, if you would prefer to purchase without these fees you can shop all of our products directly from our website https://www.headscarvesbyciara.co.uk/',
      quantity: 1,
      num_favorers: 124,
      tags: [
        'beach wig',    'short wig',
        'bandfall wig', 'sports wig',
        'swim wig',     'hairband wig',
        'cancer wig',   'holiday wig',
        'updo wig',     'wonder wig',
        'ponytail wig', 'pony wig',
        'pomy wig'
      ],
      processing_min: 15,
      processing_max: 20,
      price: 77,
      img: 'https://i.etsystatic.com/17435555/r/il/e10828/2438868818/il_fullxfull.2438868818_4m9v.jpg',
      onSale: true,
      taxonomy_id: 4
    },
    {
      title: 'Statement Dummy Clip ,Personalised Dummy Clip, Soother Holder, Pacifier Clip, Silicone Dummy Clip,Dummy Holder,Baby Shower Gift, New baby',
      description: 'CARE INSTRUCTIONS\n' +
        '\n' +
        '-Wash gently in warm soapy water ,letting air dry before use.\n' +
        '-Ensure metal clip doesn&#39;t get wet , if so pat dry to prevent rusting.\n' +
        '-Do not use any cleaning solutions/products as this may compromise the quality of the dummy clip.\n' +
        '\n' +
        'SAFETY\n' +
        '\n' +
        '-Check carefully before use discard immediately at the first signs of weakness or damage. \n' +
        '-Never length the dummy clip.\n' +
        '-Don&#39;t use when baby/toddler is in a cot or bed and should only be used under adult supervision.\n' +
        '\n' +
        'If you would like any variations of colours styles please don&#39;t hesitate to email our shop .\n' +
        'PLEASE NOTE PRICES VARY FOR BEAD STYLE + SIZE not name length.\n' +
        'Wild & Three Co🌙..\n' +
        '\n' +
        'If you have a MAM soother please ensure you add an adaptor on .\n' +
        '\n' +
        'FACEBOOK : Wild&Three\n' +
        'INSTA: Wild.andthree',
      quantity: 10,
      num_favorers: 36,
      tags: [
        'newbaby',
        'dummyclip',
        'pacifierclip',
        'dummy holder',
        'name dummy clip',
        'pastel dummy clip',
        'wooden dummy clip',
        'soother holder',
        'babyshower gift',
        'silicone dummy clip',
        'personalised clip',
        'dummy',
        'baby'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 6,
      img: 'https://i.etsystatic.com/33753876/r/il/93f7e7/3719983777/il_fullxfull.3719983777_qgky.jpg',
      onSale: true,
      taxonomy_id: 4
    },
    {
      title: 'GOAT MILK SHAMPOO Bar - 100% natural, Handmade, cold processed, with scalp soothing essential oils, zero waste, organic shampoo',
      description: 'GOAT MILK SHAMPOO BAR (approx. 4oz)\n' +
        '\n' +
        'This soap has goat milk and essential oils that are specifically chosen to help nourish your hair and scalp and stop dandruff. Goat&#39;s Milk adds nutrients to strengthen and condition your hair, while giving you a nice lathering bar. All shampoo bars are hand-cut and 100% natural. Made with coconut, olive oils, and other natural and skin nourishing oils.\n' +
        '\n' +
        'NOTE: Natural shampoo bars should be followed up with a natural conditioner. I offer a conditioner spray in my shop: https://www.etsy.com/listing/1039211555/herbal-conditioner-spray-for-after\n' +
        '\n' +
        '\n' +
        'No detergents, dyes, or artificial fragrances\n' +
        'Handmade in Pennsylvania\n' +
        'All Natural ingredients\n' +
        'Cold Processed\n' +
        'Luxurious!\n' +
        '\n' +
        'Scented with 100% natural, pure essential oils of:\n' +
        '\n' +
        'TEA TREE ESSENTIAL OIL: (Melaleuca alternifolia) steam distilled from China\n' +
        '\n' +
        'ROSEMARY ESSENTIAL OIL: (Rosmarinus officinalis) steam distilled from Spain\n' +
        '\n' +
        'LAVENDER ESSENTIAL OIL: (Lavandula angustifolia) steam distilled from Bulgaria\n' +
        '\n' +
        'CAMPHOR ESSENTIAL OIL: (Cinnamomum camphora) steam distilled from China\n' +
        '\n' +
        'INGREDIENT LIST: Coconut oil, shea butter, olive oil, castor oil, sweet almond oil, cocoa butter, filtered water, tea tree, rosemary, lavender, and camphor essential oils.\n' +
        '\n' +
        'WHY COLD PROCESSED: Most of today&#39;s soaps have natural glycerin removed, only to be placed in lotions and marketed for people as a necessity after skin is stripped of its natural oils. Cold processed soaps are all glycerin soaps (the saponification process produces glycerin), and provide other natural oils for the skin. You cleanse, while nurturing.\n' +
        '\n' +
        'HOW IT&#39;S MADE: Cold Processed soaps are made in a traditional method that produces and natural and gentle soap. Oils are combines with a lye water mixture so that the oil and lye molecules can combine to make something new: soap! I make all of my soaps with at least a 5% superfat content. This means that 5% or more of the luxurious oils that I add are left in the soap to nourish your skin and 0% of lye. The end result is a creamy lather, beautiful bubbles, and a pure soap that will nourish your skin whether you have oily skin, dry, skin, or suffer from acne or eczema.\n' +
        '\n' +
        '\n' +
        'GET THE LATEST COUPONS: http://eepurl.com/by6Arr\n' +
        '\n' +
        'All my special deals (repeat customer deals, free shipping, coupons, etc) will be sent out once a month in that newsletter, so make sure you sign up!\n' +
        '\n' +
        'You can also find recipes and more on my blog: http://simplelifemom.com\n' +
        'Facebook: https://www.facebook.com/thesimplelifemom\n' +
        'Pinterest: https://www.pinterest.com/simplelifemom/\n' +
        '\n' +
        'OTHER SHAMPOO BARS:\n' +
        '\n' +
        'Tropical Paradise Shampoo Bar:\n' +
        'https://www.etsy.com/listing/207878540/tropical-paradise-shampoo-bar-no-tree?ref=shop_home_active_8\n' +
        '\n' +
        'Luxurious Shampoo Bar:\n' +
        'https://www.etsy.com/listing/172255137/luxurious-shampoo-bar-herbal-shampoo?ref=shop_home_active_1\n' +
        '\n' +
        'Raw Milk and Honey Shampoo Bar:\n' +
        'https://www.etsy.com/listing/172239242/milk-honey-shampoo-bar-100-natural?ref=shop_home_active_18\n' +
        '\n' +
        'TRY SOME SOAPS AS WELL:\n' +
        '\n' +
        'Acne Detox Bar:\n' +
        'https://www.etsy.com/listing/216774033/acne-handmade-detox-soap-with-tea-tree?ref=shop_home_feat_4\n' +
        '\n' +
        '5 Soap Sampler:\n' +
        'https://www.etsy.com/listing/174059606/handmade-5-soap-sampler-natural-organic?ref=shop_home_active_22\n' +
        '\n' +
        'PICTURE BY DUNKLEY PHOTOGRAPHY: https://www.facebook.com/dunkleyphotography/',
      quantity: 23,
      num_favorers: 292,
      tags: [
        'goat milk bar',
        'lavender shampoo',
        'camphor shampoo',
        'handmade soap',
        'essential oil soap',
        'shampoo bar',
        'organic shampoo',
        'natural shampoo bar',
        'handmade shampoo',
        'goat milk shampoo',
        'dandruff shampoo',
        'soothing shampoo',
        'goat milk soap'
      ],
      processing_min: 1,
      processing_max: 5,
      price: 6.75,
      img: 'https://i.etsystatic.com/8747013/r/il/e0847b/1031413753/il_fullxfull.1031413753_sq8a.jpg',
      onSale: true,
      taxonomy_id: 4
    },
    {
      title: 'Ammuri  Quality Derma Roller Micro Needle Titanium for Skin Internal Regeneration Acne Scar Wrinkle Collagen Cellulite  Mark Treatment',
      description: '✔️  𝐑𝐄𝐉𝐔𝐕𝐄𝐍𝐀𝐓𝐄 𝐘𝐎𝐔𝐑 𝐒𝐊𝐈𝐍:Made of the Medical grade needle and ABS. The derma roller through the small needles to penetrate the stratum corneum and open a channel that impedes the absorption of the skin, thus promoting the effective absorption of care products and stimulates collagen hyperplasia by the skin Self-healing ability without any healthy skin damage.\n' +
        '\n' +
        '✔️  𝐄𝐅𝐅𝐄𝐂𝐓𝐈𝐕𝐄 𝐒𝐊𝐈𝐍 𝐂𝐀𝐑𝐄 𝐀𝐓 𝐇𝐎𝐌𝐄: Use this Derma Roller with Ammuri SPF Vitamin C Cream or Ammuri Vitamin C Serum for optimal results. Effective for Internal Regeneration, Anti Aging, Repair Acne Scarring, Wrinkle Reduction, Cellulite Reduction, Hair Loss Treatments, etc.\n' +
        '\n' +
        '✔️  𝐇𝐎𝐖 𝐓𝐎 𝐔𝐒𝐄: This Kit is used to all parts of your body. Fine (0.5mm) needles length for crow&#39;s feet & eye area, medium (0.75/1.0mm) needles length for face to shrink pores\n' +
        '\n' +
        '✔️  𝐀𝐍 𝐀𝐌𝐀𝐙𝐈𝐍𝐆 𝐁𝐄𝐀𝐔𝐓𝐘 𝐓𝐎𝐎𝐋 𝐅𝐎𝐑 𝐒𝐊𝐈𝐍 𝐑𝐄𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐈𝐎𝐍- The Derma Roller is a revolutionary device which has the amazing ability to naturally stimulate collagen and elastin production in the skin without damaging it. Different needle lengths have different usages, Home use, 0.2mm 2. Clinical use, 0.5mm/0.75mm 3. Medical use, 1.0mm 4. Physician use: 1.5mm/2.5mm/3.0mm.\n' +
        '\n' +
        '✔️  𝐁𝐄𝐆𝐈𝐍𝐍𝐈𝐍𝐆 𝐖𝐈𝐓𝐇 𝐎𝐍𝐂𝐄 𝐀 𝐖𝐄𝐄𝐊,allow your skin a few days of rest. 8. After a month, can use it 2-3 times a week. 9. Never use on open pores. 10. Submerge roller in Hyrogen Peroxide or Achohol to disinfect. 11. Follow up treatment with a Ammuri moisturiser or Ammuri Vitamin C serum to get your skin looking great. Package Including 1 * Ammuri 540-Needles Micro-needle Roller Medical Therapy Skin Care Tool - 0.3mm Needle Length 1 * Transparent Plastic Box for the Roller',
      quantity: 20,
      num_favorers: 0,
      tags: [
        'Quality Derma Roller',
        'Roller Micro Needle',
        'Anti Aging',
        'Repair Acne Scarring',
        'Wrinkle Reduction',
        'Cellulite Reduction',
        'Hair Loss Treatments',
        'amazing roller',
        'for whole body',
        'Micro-needle Rolle',
        'Medical Therapy Skin',
        'anti wrinkle',
        'best for face'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 9.99,
      img: 'https://i.etsystatic.com/26580620/r/il/fc9517/3860607371/il_fullxfull.3860607371_6mj6.jpg',
      onSale: true,
      taxonomy_id: 4
    },
    {
      title: 'Vintage Lipstick Case, Green Silk Asian Motif Mirrored Lipstick Holder',
      description: 'Green Silk Lipstick Case\n' +
        '\n' +
        'This is a beautiful lipstick holder covered in green silk with an Asian motif.  Inside there is a mirror and red lining.  The case measures 3-3/8&quot; x 1-1/8&quot; and is in very good condition, unsigned.  Add a favorite lipstick to complete a gift.\n' +
        '\n' +
        '☛ Free U.S. Shipping.  \n' +
        '☛ Combined Shipping for Overseas Buyers:  Buy 2 or more items, pay shipping for one only \n' +
        '\n' +
        '☛ In a Hurry?  Shipping upgrades to Priority Mail are available for U.S. Buyers at checkout\n' +
        '☛ Have a question for me? Click the &quot;Ask a Question&quot; button next to the price at the top.\n' +
        '☛ See more of my vintage jewelry here: www.etsy.com/shop/LeesVintageJewels\n' +
        '\n' +
        'NOTES TO OVERSEAS CLIENTS:  Please allow up to 10 to 12 weeks from the day it is shipped for you to receive the item. \n' +
        'International customers are responsible for all fees imposed, including import taxes, customs duties, and fees levied by the buyer&#39;s country. These charges are not included in the item price or the shipping charge. Please check with your country&#39;s customs office to determine what these additional costs will be prior to making a purchase. All international orders will have full value declared on customs forms.',
      quantity: 1,
      num_favorers: 6,
      tags: [
        'Green Lipstick Case',
        'Silk Lipstick Case',
        'Vintage Case',
        'Green Silk Case',
        'Lipstick Holder',
        'Asian Lipstick Case',
        'Unique Vintage Gift',
        'Gift for Her',
        'LeesVintageJewels',
        'Mirrored Case',
        'Travel Lipstick Case',
        "Mother's Day Gift",
        'Birthday Gift'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 24,
      img: 'https://i.etsystatic.com/7947958/r/il/5e03b3/3809140000/il_fullxfull.3809140000_amun.jpg',
      onSale: true,
      taxonomy_id: 4
    },
    {
      title: 'Eid Hijab Hamper/Hijab Gift Set/Eid Gift/Ramadan Gift/Wedding/Engagement/Birthday/Bridal Shower/Graduation/Islamic Gift for her/Muslimah',
      description: 'This beautiful Islamic Hijab gift hamper makes the perfect gift for any occasion!\n' +
        '\n' +
        'The hamper contains:\n' +
        '\n' +
        '-Crinkle Hijab tied with ribbon ( if you would like a different coloured hijab please message us) \n' +
        '\n' +
        '- Subhanallah Alhamdulillah Allahuakbar scented glass candle \n' +
        '\n' +
        '- Beautiful oud collection eau de parfum 20ml (may vary from picture)\n' +
        '\n' +
        '- Zam Zam water bottle. Approx 100ml\n' +
        '\n' +
        '- Copper or Silver frame &#39;Start with Bismillah, Hope with Inshaallah, End with Alhamdulillah&#39;\n' +
        '\n' +
        '- Beautiful crystal tasbeeh\n' +
        '\n' +
        '- A pack of ferrero Rochers chocolates\n' +
        '\n' +
        '- A cellophaned pack of khajoor, almonds, cashews and dried mixed fruit\n' +
        '\n' +
        'The items come in a white box, wrapped in white tissue paper. The box will come securely wrapped to ensure safety of the box and its contents.\n' +
        '\n' +
        'For more hampers please visit my shop.',
      quantity: 1,
      num_favorers: 9,
      tags: [
        'Hijab hamper',
        'hijab gift box',
        'zamzam gift',
        'muslim gift',
        'happy birthday gift',
        'eid mubarak gift',
        'wedding gift',
        'engagement gift',
        'graduation gift',
        'bridal shower',
        'gift for muslim',
        'gift for her',
        'pamper hamper'
      ],
      processing_min: 5,
      processing_max: 7,
      price: 30.99,
      img: 'https://i.etsystatic.com/30361180/r/il/b794d4/3837752407/il_fullxfull.3837752407_93lk.jpg',
      onSale: true,
      taxonomy_id: 4
    },
    {
      title: 'Jersey Highbush Blueberry Plant - Vaccinium - 2.5&quot; Pot - Hardy',
      description: 'Jersey is a highbush blueberry cultivar which is well known for good cold hardiness, vigor, and large numbers of 1/4&quot; - 1/2&quot; sized fruit with excellent sweetness. Jersey shrubs will mature at a slightly larger size than many other highbush varieties if left to grow naturally, and untrimmed. To obtain maximum fruit yield, a second variety of Blueberry is recommended to be planted within close proximity - doing so will usually increase both fruit set, as well as fruit size. Foliage of Jersey is rather large leaved ( up to 3&quot; - 3 1/2&quot; long ), oval shaped, and very nice deep green in color. Fall coloration is a very attractive orange / red color.\n' +
        '\n' +
        'White bell shaped blooms begin in May, with fruit set beginning shortly after - beginning to ripen in mid season ( late June thru early July in East TN ). Most all blueberry cultivars tend to have rather shallow root systems, which will require adequate amounts of water........especially during fruiting.\n' +
        '\n' +
        'Starter plant in a 2.5&quot; Pot. Dormant shipping in winter. Cannot ship to Washington state due to USDA regulations.',
      quantity: 44,
      num_favorers: 128,
      tags: [],
      processing_min: 1,
      processing_max: 3,
      price: 5.99,
      img: 'https://i.etsystatic.com/8947703/r/il/ce7928/3860218015/il_fullxfull.3860218015_bxvz.jpg',
      onSale: true,
      taxonomy_id: 4
    },
    {
      title: 'Blue wedding hat, hat for races, hatinator, ladies fascinator, floral fascinator, race day, ladies day, formal event, headband, disc',
      description: 'Gorgeous oxford blue sinamay disc fascinator (hatinator) decorated with a large full feather flower in matching colour. A simple yet stunning design perfect for any special event. Made on a headband.\n' +
        '\n' +
        'This hat is the ideal headpiece for a wedding, races, ladies day or formal event.\n' +
        '\n' +
        'Designs can be made to order in a range of different colours or styles, see our colour chart: www.jacquivaledesigns.com/colour_chart.html Please contact me if you would like a design in a different colour.\n' +
        '\n' +
        'We can make a range of ladies hats, fascinators and accessories for any type occasion. Such as weddings, proms, christenings, race days (Aintree, Ascot, Derby etc) and formal events.\n' +
        '\n' +
        'We make every effort to ensure that designs are made as accurately as possible to photos shown, however due to them being handmade and made using natural materials there may be slight variations. We cannot guarantee exact colours due to each customers monitor display being set up differently.\n' +
        '\n' +
        'You can also follow us on Instagram, Twitter & Facebook to stay up to date on the latest designs, offers and coupon codes.\n' +
        '\n' +
        'Instagram: www.instagram.com/jacquivaledesigns/\n' +
        '\n' +
        'Facebook: www.facebook.com/Jacquivaledesigns/\n' +
        '\n' +
        'Twitter: www.twitter.com/JacquiVDesigns\n' +
        '\n' +
        'Our full range of designs can be viewed on our website: www.jacquivaledesigns.com',
      quantity: 1,
      num_favorers: 38,
      tags: [
        'Blue wedding hat',
        'hat for races',
        'ladies hatinator',
        'ladies fascinator',
        'floral fascinator',
        'race day',
        'ladies day',
        'formal event',
        'headband fascinator',
        'disc fascinator',
        'blue fascinator',
        'floral hat',
        'ladies hat'
      ],
      processing_min: 10,
      processing_max: 15,
      price: 69.99,
      img: 'https://i.etsystatic.com/14582884/r/il/350096/1660617229/il_fullxfull.1660617229_pbi4.jpg',
      onSale: true,
      taxonomy_id: 4
    },
    {
      title: 'Universe Calla Lily Bulb 14/16cm - Lemon Yellow',
      description: 'Universe Calla Lily Bulbs or Zantedeschia Bulbs are not fragrant pure dark lemon yellow large open flowers with lightly spotted foliage. Compact growers excellent for summer pots and patio containers. Its’ calla lily yellow flower bouquet, alone or mixed with other flowers, is very elegant. The Calla lily flower is one of the longest lasting.\n' +
        '\n' +
        'Blooms summer. Deer resistant, cut flower, container plant. Attracts hummingbirds and butterflies.\n' +
        'These beautiful cup-shaped, upright trumpets are about 5&quot; tall and 2 - 3 &quot; across. Enjoying full sun to partial shade and growing 8 - 24 &quot; tall, they are the best varieties available anywhere. Calla Lilies are natives of South Africa, now grown in southern California and can be used in beds, borders, patio pots or planters... also indoor house plants. Attractive broad sword-like green foliage.',
      quantity: 74,
      num_favorers: 16,
      tags: [],
      processing_min: 1,
      processing_max: 3,
      price: 4.99,
      img: 'https://i.etsystatic.com/8947703/r/il/f3dc64/3859260941/il_fullxfull.3859260941_ppnp.jpg',
      onSale: true,
      taxonomy_id: 4
    },
    {
      title: 'Body Lotion, Gift For Best Friend Female, Body Butter, Funny Gifts For Friends, Presents For Friends, Lotion',
      description: 'Made with premium ingredients this body lotion is brimming with moisturizing and repairing qualities. This body butter is not greasy and won’t clog your pores. \n' +
        '\n' +
        'Pick your favorite scent from our six signature scents and let the aromatherapy from our quality fragrance oils help you breathe a big sigh of relief and ease your mind. \n' +
        '\n' +
        'Our whipped body butter makes a great self-care gift or gift for your friends and family. Ships fast and free.\n' +
        '\n' +
        '• Cruelty Free\n' +
        '• Women Owned and Operated\n' +
        '• Ships Fast and Free\n' +
        '• Premium Ingredients\n' +
        '• 6 Scents to Choose From\n' +
        '\n' +
        'SCENT DESCRIPTIONS -\n' +
        '\n' +
        'WARM VANILLA & CANDIED FIG\n' +
        'Sweet vanilla musk wrapped with ripe fig, bergamot, fresh peach, candied rum and dark amber.\n' +
        '\n' +
        'RED HIBISCUS & SUGARED CITRUS\n' +
        ' A totally delightful blend of tropical fruits and sugared oranges, lemons and limes with hints of exotic tropical florals and mountain greens..\n' +
        '\n' +
        'ROSEMARY MINT\n' +
        'A refreshing blend of rosemary, fresh garden herbs and zesty mint\n' +
        '\n' +
        'SWEET RED RASPBERRY\n' +
        'A delightful sweet treat! Juicy, candy fruity top notes with long-lasting, sugary sweet bottom notes. A scrumptious, sweet-as-candy blend of sugared raspberries, hints of plum and tiny little hint of floral mint!\n' +
        '\n' +
        'ISLAND COCONUT & AGAVE NECTAR\n' +
        'Sweet, creamy coconut with hints of warm vanilla and exotic musk.\n' +
        '\n' +
        'WILD POPPIES & PEACH PROSECCO\n' +
        'A joyful blend of sparkling prosecco and peach melba accented with bright waterfruit, sheer magnolia, and sugared musk. Compare to Wild Peach Poppies by Bath & Body Works. Products this scent will be a peachy color.\n' +
        '\n' +
        'LAVENDER & SWEET MINT\n' +
        'Bright refreshing notes of crushed mint leaves and lavender.\n' +
        '\n' +
        '| Processing |\n' +
        'Your items(s) will be processed in the order in which they were received, Processing typically takes 1-3 days this does not include actual time in the mail, so it may take a couple days once it is shipped to get to you. If you need your order to be rushed, please select the expedited processing at the time of check out and your order will go to the top of our list. Explicit Essentials will not be held responsible for lost, damaged, delayed, or stolen items once they have been shipped.\n' +
        '\n' +
        '| Returns or Exchanges |\n' +
        'Your happiness is our goal so if something is physically wrong with the item upon receiving it, we will be more than happy to replace it with proof. I do NOT offer exchanges, replacements or returns for any reason other than a mistake on my part in the creation of the item. . Please message us in case of any grievance or complaint and we would be happy to resolve it for you with two options. 1. Exchange your item for store credit and we’ll put that amount towards something else in our shop once we’ve received the item back in good condition. 2. Return your item for a full refund. For an exchange or refund please message us 2 days after you’ve received the items. We will not accept returns or exchanges 14 days after the item has been sold. PLEASE NOTE: we will not accept exchanges or returns on items that are custom made.otion is brimming with moisturizing and repairing qualities. This body butter is not greasy and won’t clog your pores. \n' +
        '\n' +
        'Pick your favorite scent from our six signature scents and let the aromatherapy from our quality fragrance oils help you breathe a big sigh of relief and ease your mind. \n' +
        '\n' +
        'Our whipped body butter makes a great self-care gift or gift for your friends and family. Ships fast and free.\n' +
        '\n' +
        '• Cruelty Free\n' +
        '• Women Owned and Operated\n' +
        '• Ships Fast and Free\n' +
        '• Premium Ingredients\n' +
        '• 6 Scents to Choose From\n' +
        '\n' +
        'SCENT DESCRIPTIONS -\n' +
        '\n' +
        'WARM VANILLA & CANDIED FIG\n' +
        'Sweet vanilla musk wrapped with ripe fig, bergamot, fresh peach, candied rum and dark amber.\n' +
        '\n' +
        'RED HIBISCUS & SUGARED CITRUS\n' +
        ' A totally delightful blend of tropical fruits and sugared oranges, lemons and limes with hints of exotic tropical florals and mountain greens..\n' +
        '\n' +
        'STRAWBERRIES & CHAMPAGNE\n' +
        ' An intoxicating blend of strawberry, champagne and bright cassis.\n' +
        '\n' +
        'ISLAND COCONUT & AGAVE NECTAR\n' +
        'Sweet, creamy coconut with hints of warm vanilla and exotic musk.\n' +
        '\n' +
        'WILD POPPIES & PEACH PROSECCO\n' +
        'Sweet, creamy coconut with hints of warm vanilla and exotic musk.\n' +
        '\n' +
        'LAVENDER & SWEET MINT\n' +
        'Bright refreshing notes of crushed mint leaves and lavender.\n' +
        '\n' +
        'This product is an amazing combination of Aloe Vera and Refined Shea Butter. Aloe has long been considered to be a premier product for moisturizing and healing the skin while Shea Butter is thought to aid dry skin. MINERAL OIL AND PARABEN FREE.   8 oz bottle.\n' +
        '\n' +
        'Pick your favorite scent and let the aromatherapy from our quality fragrance oils help you breathe a big sigh of relief and ease your mind. Our scent descriptions are here etsy.com/shop/explicitessentials under our &quot;about&quot; section.\n' +
        '\n' +
        '| Processing |\n' +
        'Your items(s) will be processed in the order in which they were received, Processing typically takes 1-3 days this does not include actual time in the mail, so it may take a couple days once it is shipped to get to you. If you need your order to be rushed, please select the expedited processing at the time of check out and your order will go to the top of our list. Explicit Essentials will not be held responsible for lost, damaged, delayed, or stolen items once they have been shipped.\n' +
        '\n' +
        '| Returns or Exchanges |\n' +
        'Your happiness is our goal so if something is physically wrong with the item upon receiving it, we will be more than happy to replace it with proof. I do NOT offer exchanges, replacements or returns for any reason other than a mistake on my part in the creation of the item. . Please message us in case of any grievance or complaint and we would be happy to resolve it for you with two options. 1. Exchange your item for store credit and we’ll put that amount towards something else in our shop once we’ve received the item back in good condition. 2. Return your item for a full refund. For an exchange or refund please message us 2 days after you’ve received the items. We will not accept returns or exchanges 14 days after the item has been sold. PLEASE NOTE: we will not accept exchanges or returns on items that are custom made.',
      quantity: 12,
      num_favorers: 364,
      tags: [
        'Lotion',
        'Body Butter',
        'Body Lotion',
        'Funny Gifts',
        'Gifts For Friends',
        'Presents For Friends',
        'Gift For Best Friend',
        'Best Friend Female',
        'Hand Lotion',
        'Best Friend Gift',
        'Gift For Friend',
        'Best Friends Gifts',
        'Funny Friend Gift'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 24.99,
      img: 'https://i.etsystatic.com/17417983/r/il/a287c4/2583118283/il_fullxfull.2583118283_480s.jpg',
      onSale: true,
      taxonomy_id: 4
    },
    {
      title: 'Rose Sucking Vibrator with Dildo & Free Gift',
      description: 'This rose shaped vibrator has all the features of the infamous TikTok viral version but with the added feature of a thrusting dildo.\n' +
        '\n' +
        'The rose has 10 Intense Suction Modes - The rotating airflow generated by the vibrator is totally a pro clit sucker. It simulates oral sex perfectly. \n' +
        '\n' +
        'Rose sucking vibrator 2 in 1, The clitoris sucking vibrator is shaped like a rose. It is cute and portable with 10 vibrator and sucking modes for you to experience the ultimate pleasure of oral sex at any time.\n' +
        '\n' +
        'Free Handcuffs or Mini bullet vibrator',
      quantity: 186,
      num_favorers: 21,
      tags: [
        'rose toy for women',
        'roses for women',
        'pleasure rose',
        'rose vibrator',
        'women vibrator',
        'sucking vibrator',
        'gift',
        'clit',
        'vibrator',
        'dildo',
        'clit vibrator',
        'rose toy',
        'wand'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 38,
      img: 'https://i.etsystatic.com/32050177/r/il/344e63/3819497589/il_fullxfull.3819497589_kk3l.jpg',
      onSale: true,
      taxonomy_id: 4
    },
    {
      title: '100ml Ginger 100% Pure Essential Oil',
      description: 'Wild-crafted in France from the roots of the ginger plant, our ginger essential oil has been carefully steam distilled to capture its purest form and is well-known as a potent natural healer.\n' +
        '\n' +
        'Ginger is a perennial herb with a long association with traditional folk medicine. Known also by its botanical name, zingiber officinale, it grows to a metre in height and bears narrow green leaves and yellow flowers.\n' +
        '\n' +
        'Ginger is somewhat of a marvel amongst natural medicines and is commonly used by aromatherapists, known for its warming properties.\n' +
        '\n' +
        'With its medium to strong aroma, ginger essential oil blends well with bergamot, sandalwood, ylang-ylang, and other spice oils, adding a warm, spicy, woody fragrance with hints of lemon and pepper.\n' +
        '\n' +
        'The origins of ginger can be found in the tropical rainforests of Southern Asia where it once grew wild. It arrived in Europe in the first century AD as part of the highly lucrative spice trade and was widely used for both culinary and medicinal purposes by the Romans.\n' +
        '\n' +
        'Our 100% pure ginger essential oil is available in bottle sizes from 10ml up to 5000ml.\n' +
        '\n' +
        'Botanical Name - Zingiber officinalis\n' +
        'Plant Part - Root\n' +
        'Extraction Method - Steam\n' +
        'Origin - China\n' +
        'Colour - Light Yellow\n' +
        'Consistency - Light\n' +
        'Note - Middle-Base\n' +
        'Strength of Aroma - Medium to Strong\n' +
        'Blends well with - Ginger blends well with bergamot, sandalwood, ylang-ylang, and other spice oils.\n' +
        'Aromatic Scent - Ginger has a warm, spicy, woody scent with a hint of lemon and pepper.\n' +
        '\n' +
        'Please note: All of our 100ml essential oils are supplied in a glass amber bottle with tamper evident cap and internal dropper.',
      quantity: 934,
      num_favorers: 31,
      tags: [ 'essential', 'oil', 'aromatherapy', 'ginger' ],
      processing_min: 1,
      processing_max: 3,
      price: 9.89,
      img: 'https://i.etsystatic.com/18578812/r/il/cef446/1765653310/il_fullxfull.1765653310_pfw0.jpg',
      onSale: true,
      taxonomy_id: 4
    },
    {
      title: 'Bridal hair pins, set of 3 wedding hair pins, bridesmaid pins, pearl flower bridal, wedding accessories, bridal accessory, boho floral vine',
      description: '&#39;Country Garden&#39;\n' +
        '\n' +
        'Set of 3 hair pins made with beautiful keishi and freshwater pearls and sparkling Swarovski crystal beads.\n' +
        '\n' +
        'Perfect to place in any bridal hairstyle or one for each bridesmaid! Please message for alternative quantities or colours.\n' +
        '\n' +
        'These measure approximately 4.5&quot; in length (including the pin) and 1.75&quot; in width.\n' +
        '\n' +
        'All item are supplied in a gift box.\n' +
        '\n' +
        'Returns are accepted if you contact me within 14 days of delivery and I receive the piece back within 30 days of delivery. Please note if you return items from your order, the amount it cost for me to ship your order is not refunded. The standard shipping prices are as follows:\n' +
        '\n' +
        'UK:\n' +
        '•jewellery items £3\n' +
        '•hair accessories £5\n' +
        '\n' +
        'Europe and International:\n' +
        '•jewellery items £8.50\n' +
        '•hair accessories £10\n' +
        '\n' +
        'The customer is responsible for the cost of returning an order, for any customs charges incurred, and for returns lost in the mail, so a secure, tracked method of mailing is recommended. Items must be returned in their original condition and within their box, which also must be in its original condition.\n' +
        '\n' +
        'Standard shipping time guide: *please note that due to the effect of the coronavirus pandemic on the mail service I currently cannot guarantee any shipping times other than Express Delivery*\n' +
        '\n' +
        'U.K. 1-2 days\n' +
        'Europe 3-5 business days \n' +
        'International 5-7 business days\n' +
        '\n' +
        'International Express Mail is guaranteed to arrive within 1-4 business days from dispatch.\n' +
        '\n' +
        'Full shipping information and policies (including extra details within the FAQ section) can be found on the shop homepage.',
      quantity: 9,
      num_favorers: 65,
      tags: [
        'bridal hair',
        'wedding hair pin',
        'hair pins',
        'bridesmaid pins',
        'bridesmaid gift',
        'bridal accessories',
        'wedding accessory',
        'pearl pins',
        'flower pins',
        'floral bridal',
        'bride flower',
        'bride hair'
      ],
      processing_min: 5,
      processing_max: 10,
      price: 105,
      img: 'https://i.etsystatic.com/8310887/r/il/b6eca6/1258346059/il_fullxfull.1258346059_8jbe.jpg',
      onSale: true,
      taxonomy_id: 4
    },
    {
      title: 'Cum Rag, Gag Gift, Gift for Him,Naughty Gifts, Boyfriend Gifts, Embroidered Gifts,Gift for Men,Christmas Stocking Stuffer,Bachelorette Gifts',
      description: '12x12 inch black towel\n' +
        'Gold thread\n' +
        'Good quality cotton towel\n' +
        'Premium quality face cloth \n' +
        'Highly absorbent and soft feel to the fingertips\n' +
        '\n' +
        'Please double check your shipping address before ordering',
      quantity: 365,
      num_favorers: 658,
      tags: [
        'Cum Rag',
        'Gift for Him',
        'Boyfriend Gifts',
        'Husband Gifts',
        'Bachelor Gift',
        'Stocking Stuffer',
        'Valentines Gift',
        'naughty gifts',
        'funny boyfriend gift',
        'sexy gift for him',
        'embroidered towel',
        'after sex towel',
        'gag gifts'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 12.5,
      img: 'https://i.etsystatic.com/25254876/r/il/bd961d/3407007978/il_fullxfull.3407007978_b4o8.jpg',
      onSale: true,
      taxonomy_id: 4
    },
    {
      title: 'Paw paw lightening body lotion 125ml,soap and oil(travel pack)',
      description: 'Moisturizing \nLightening',
      quantity: 4,
      num_favorers: 0,
      tags: [ 'Papaya lotion', 'papaya oil' ],
      processing_min: 1,
      processing_max: 1,
      price: 35,
      img: 'https://i.etsystatic.com/35197161/r/il/a12d94/3813091878/il_fullxfull.3813091878_f45n.jpg',
      onSale: true,
      taxonomy_id: 4
    },
    {
      title: 'Charlotte Flower Girl Crown, Silver / Rose Gold - Sparkly Girls Tiara - Glam Wedding - Crystal Kids Tiara, Perfect for 2022 Weddings',
      description: 'Your favorite flower girl will look even more exquisite when she&#39;s outfitted in this charming tiara. The perfect size for kids of all ages, it comes to life thanks to shimmering gemstones that effortlessly catch the light. She&#39;ll feel extra special when she has on her flower girl dress and this luxe metal flower girl tiara. \n' +
        '\n' +
        'Features sparkly crystals in a floral motif. Available in Rose Gold or Silver. \n' +
        '\n' +
        'Loops at each end allow you to secure it in place using bobby pins. A ribbon could also be added, although is not included. \n' +
        '\n' +
        'Check out my other listings for more adorable accessories for flower girls, birthday girls, and more!\n' +
        '\n' +
        'Please Let Me Know If You Need It By A Certain Event Date',
      quantity: 1,
      num_favorers: 282,
      tags: [
        'Sparkly Tiara',
        'Crystal Crown',
        'Flower Girl Crown',
        'Winter Wedding',
        'Rose Gold Crown',
        'Silver Tiara',
        'Dress Up Crown',
        'Kids Crown',
        'Girls Tiara',
        'Wedding Hairpiece',
        'flower girl tiara',
        'flowergirl',
        'First Communion'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 16,
      img: 'https://i.etsystatic.com/27778559/r/il/ff600a/3271805857/il_fullxfull.3271805857_tj8f.jpg',
      onSale: true,
      taxonomy_id: 4
    },
    {
      title: 'Pack of 3 to 15 Mini Deluxe Natural Handmade Henna Mehndi Cones',
      description: 'A beautiful rich and smooth blend of 100% natural  professionally sifted Rajasthani henna and pure eucalyptus oil, delivered ready to use in a carefully rolled cone for easy application and beautifully dark stain results. \n' +
        '\n' +
        'I hope that my henna which I’ve been using for over 20 years now, will help other artists create their own beautiful henna art using professional products made with love and care.\n' +
        '\n' +
        'Each cone contains 10 grams of henna paste, with a choice of either being:\n' +
        '\n' +
        '- Completely sealed (for artists who prefer to snip the tip of the cone to their own preferred size).\n' +
        '- A tip size of 0.32.mm (extra fine lines for intricate designs like portraits)\n' +
        '- A tip size of 0.38mm (produces fine lines for intricate designs and perfect for mehndi shading).\n' +
        '- A tip size of 0.45mm (produces a standard sized henna flow, perfect for beginners, design outlines and henna fills).\n' +
        '- A tip size of 0.56mm (easy flowing and perfect for designs requiring thick lines e.g. gulf style).\n' +
        '\n' +
        'Every order will receive storage and aftercare instructions to help achieve optimum results.\n' +
        '\n' +
        'I aim to make the henna paste for your order within 1 to 2 working days, and then post out promptly to ensure freshness of the product.\n' +
        '\n' +
        'Whilst this product is 100% natural and chemical free, there can be sensitivity or reactions in people who have underlying health issues such as skin conditions. In such instances, a 24 hour patch test is recommended. \n' +
        '\n' +
        'Please check the ingredients for any products that may cause allergies prior to purchase. If you have any questions about this, please get in touch.\n' +
        '\n' +
        'This product is not suitable for pregnant women.\n' +
        '\n' +
        'Ingredients - Henna Powder (Lawsonia Inermis), Water, Eucalyptus oil, sugar and spice extract\n' +
        '\n' +
        'Packaging may vary slightly from the listing photo. \n' +
        '\n' +
        'Important information about delivery\n' +
        '\n' +
        'I aim to make the henna for your order within 24 - 48 hours, and post promptly to ensure freshness of the product. Henna requires soaking time, and I do not stock pre-made henna cones to send out immediately. Please consider this when placing your order. \n' +
        '\n' +
        'There are three delivery options available: 1st class (aims to deliver in 1 to 2 days, but not guaranteed), recorded 1st class delivery (same delivery time as 1st class but you sign for your package) and Royal Mail Guaranteed Special next day delivery (for weekdays only). Please select your postage preference appropriately. \n' +
        '\n' +
        'The Royal Mail Guaranteed Special Delivery option may not mean that the product arrives the next day. Processing time as per the listing is 1 to 3 days.\n' +
        '\n' +
        'If you require the henna urgently, please get in touch and I would be happy to confirm the earliest time that I could place any order into the post for you.\n' +
        '\n' +
        '\n' +
        'Happy Henn-ing!',
      quantity: 91,
      num_favorers: 75,
      tags: [
        'henna',
        'mehndi',
        'mendhi',
        'naturalhenna',
        'hennasupplier',
        'bodyart',
        'temporary tattoo',
        'mendhicones',
        'eucalyptushenna',
        'hennacones',
        'mehndicones'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 6.9,
      img: 'https://i.etsystatic.com/25791396/r/il/6ca74e/2992369896/il_fullxfull.2992369896_j5tm.jpg',
      onSale: true,
      taxonomy_id: 4
    },
    {
      title: 'Custom Nipple Attachment',
      description: 'Nipple attachment to personalize with the first name of your choice.\n' +
        'Composed of natural wood beads, wood/macramé pearls and silicone beads (BPA-free)\n' +
        'Several colors available.\n' +
        '\n' +
        'For the composition of your nipple attachment, you can choose the clip as well as 2 colors of colored beads among those available.\n' +
        'Depending on the size of the first name, the number of natural wood pearls can vary while keeping a harmonization.\n' +
        '\n' +
        'For compound first names, a &quot;heart&quot; pearl will be put as a separation. It is a pearl of the same shape as alphabet pearls but with a heart instead of the letter.\n' +
        '\n' +
        'NEW! Would you like to be surprised by the composition of your pacifier attachment? then let the designer choose for you the color of your pacifier attachment. You just have to choose the clip and note the first name and Cofia&#39;Créations takes care of choosing the colors while keeping a harmonization.\n' +
        'A photo will be sent to you for validation.\n' +
        '\n' +
        'This item is not a toy, DO NOT LEAVE the pacifier clip on the child unattended, DO NOT make the child SLEEP with the pacifier clip.\n' +
        'Cofia&#39;Créations can not be held responsible for the use of the artiche purchased, the use remains under the full responsibility of an adult.\n' +
        '\n' +
        'Order processing time: 2 to 3 weeks depending on a large number of orders.',
      quantity: 115,
      num_favorers: 786,
      tags: [
        'lollipop attachment',
        'susu attachment',
        'tutute attachment',
        'newborn gift',
        'baby gift',
        'baby',
        'birth',
        'nipple hook',
        'tutute hook',
        'soother holder',
        'birth list'
      ],
      processing_min: 10,
      processing_max: 15,
      price: 9.9,
      img: 'https://i.etsystatic.com/32344783/r/il/b0c3d9/3439597023/il_fullxfull.3439597023_stg4.jpg',
      onSale: true,
      taxonomy_id: 4
    },
    {
      title: 'African Exfoliating Bath Sponge - Nylon Net Sponge - African Sponge - Sapo Sponge -  Ghana Sponge - African Net Sponge - Long Length',
      description: 'The generous size allows you to exfoliate all your hard-to-reach areas.\n' +
        'Great for hard-to-reach areas such as your back (see photos).\n' +
        'Generates a really nice lather.\n' +
        'It rinses easily and dries quickly.\n' +
        'Unlike a loofah, it does not breed bacteria - much more hygenic!\n' +
        'Gets rid of dead skin cells which leaves your skin feeling really soft.\n' +
        'Improves blood circulation.\n' +
        'Long-lasting and durable.\n' +
        'Machine washable.\n' +
        '\n' +
        '*Apx 55in stretched & Apx 30in not stretched\n' +
        '\n' +
        '100% Authentic - sourced & made in Africa',
      quantity: 107,
      num_favorers: 224,
      tags: [
        'African Bath Sponge',
        'African Net Sponge',
        'Sapo Sponge',
        'Ghana Sponge',
        'Exfoliating Sponge',
        'Mesh Sponge',
        'Nylon Sponge',
        'Bath Sponge',
        'Sapor Sponge',
        'Nigerian Sponge',
        'African Bath Net',
        'Skin Exfoliator',
        'African Sponge'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 11,
      img: 'https://i.etsystatic.com/24136257/r/il/f733f2/3091443897/il_fullxfull.3091443897_taf4.jpg',
      onSale: true,
      taxonomy_id: 4
    },
    {
      title: 'My week pink with rabbit motif - Block A5 Weekly Calendar Planner Children Weekly Planner',
      description: 'Are there always 1000 thoughts or important appointments buzzing around in your head? Then my weekly calendar with &quot;50 sheets to leave&quot; is just the thing!\n' +
        'Here you can enter your appointments, appointments and notes for each day, so that nothing is forgotten.\n' +
        '\n' +
        'Size: DIN (A5 14.8 x 21 cm)\n' +
        '50 sheets in 80g/m²\n' +
        'Grey cardboard\n' +
        '\n' +
        'For yourself or the perfect gift for Christmas, birthday or just like that.\n' +
        '\n' +
        '*Note:*\n' +
        'The colors of the finished print product can be changed from the color representation of your monitor\n' +
        'or in the case of inkjet output, or Offset printing deviate. Color deviations due to different monitor settings and print media are inevitable.',
      quantity: 48,
      num_favorers: 19,
      tags: [
        'weekly planner',
        'calendar',
        'writing pad',
        'planner',
        'diary',
        'stundenlan',
        'Weekly',
        'notepad',
        'block',
        'Children'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 6.95,
      img: 'https://i.etsystatic.com/7801144/r/il/54f979/1698323004/il_fullxfull.1698323004_ryf5.jpg',
      onSale: true,
      taxonomy_id: 5
    },
    {
      title: 'Vintage book 1000 Beautiful House Plants and How to Grow Them by Jack Kramer',
      description: '1000 Beautiful House Plants and How to Grow Them by Jack Kramer features 46 plants in color and 73 black and white photographs. The book is filled with all you need to know about growing house plants. There are instructions on how to keep them thriving and how to repair any damage. There are also a few ideas about how to integrate house plants into your decor. The book is in good condition with the corners of the cover a bit frayed and a couple of pin holes in the spine. The dust jacket is trashed. I can not even begin to guess what happened to it.',
      quantity: 1,
      num_favorers: 0,
      tags: [
        'vintage book',
        '1000 beautiful',
        'house plants and',
        'how to grow them',
        'houseplants',
        'growing houseplants',
        'indoor gardening'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 10,
      img: 'https://i.etsystatic.com/5590589/r/il/13ce26/3067766769/il_fullxfull.3067766769_bnna.jpg',
      onSale: true,
      taxonomy_id: 5
    },
    {
      title: 'Personalised Leather iPad Mini Slip Case with Strap',
      description: 'Beautiful iPad Mini slip case … nice and padded for added protection.  \n' +
        '\n' +
        'Handmade in the very finest luxury Italian Nappa, textured leather.  \n' +
        '\n' +
        'Features a retaining strap to help keep the iPad securely in the case.\n' +
        '\n' +
        'External dimensions -- 21.5 x 15.5 cm.\n' +
        '\n' +
        '*PERSONALISATION DISCLOSURE* - The position and finish of our embossing may vary slightly from item to item. Our products are embossed by hand and due to the textured surface of the leather, on rare occasions, some very small areas of the embossing may not be visible.  Personalisation is not a requirement and all our products are available without personalisation if preferred.',
      quantity: 20,
      num_favorers: 74,
      tags: [
        'iPad Case',
        'Byron and Brown',
        'iPad Mini Case',
        'iPad Mini',
        'iPad Mini Cover',
        'iPad cover'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 12.95,
      img: 'https://i.etsystatic.com/12111167/r/il/1143fc/1194176249/il_fullxfull.1194176249_9183.jpg',
      onSale: true,
      taxonomy_id: 5
    },,
    {
      title: 'The Sapphic Utopia Zine',
      description: '⍟ The Sapphic Utopia Zine is an 8 page zine, featuring illustrations celebrating love and intimacy between women and femmes, often with spiritual and magical themes. “Utopia” imagines a world in which sapphic love is free from the constraints placed upon it by society, and reimagines what queer love and futures can look like. The depiction of the sapphic lovers within nature challenges the idea that queer love and intimacy is unnatural. ⍟\n' +
        '\n' +
        '⍟ Being a Middle-Eastern lesbian and a passionate intersectional feminist, communist, environmentalist, pacifist and vegan, I believe in the use of art as a means to activism. Though it is not always direct or explicitly stated, I hope that the ecological, feminist, body positive and intersectional themes of my art can be empowering to those who often feel underrepresented in art, such as women, BIPOC people, and LGBTQIA+ people. ⍟\n' +
        '\n' +
        '⍟ This zine is dedicated to my girlfriend Molly. Thank you for inspiring me to make sapphic art and for helping me write the “about” section! ⍟\n' +
        '\n' +
        '⍟ Eco-friendly packaging in reusable brown envelopes! ⍟',
      quantity: 26,
      num_favorers: 604,
      tags: [
        'zine',         'mini zine',
        'handmade',     'queer zine',
        'lgbt zine',    'sapphic',
        'lesbian',      'queer',
        'occult art',   'pagan art',
        'feminist art', 'feminist zine',
        'riot grrrl'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 2,
      img: 'https://i.etsystatic.com/31256914/r/il/b93c4f/3290098791/il_fullxfull.3290098791_o119.jpg',
      onSale: true,
      taxonomy_id: 5
    },
    {
      title: '20 Digital Notebook Covers, Good Notes Notability covers.',
      description: '20 Digital Notebook covers\n' +
        '\n' +
        '✔︎ 20 Colours : Black, Grey, Green, Red, Dark purple, Brown\n' +
        '✔︎ For Digital use with Goodnotes, Notability and other Digital Notebooks\n' +
        '✔︎Textured\n' +
        '\n' +
        '\n' +
        'Please note! \n' +
        '\n' +
        'This is a Digital Product and NO physical item will be shipped to you.\n' +
        '\n' +
        'This can be used on any tablet device in any app that supports PDF annotations (Goodnotes, Notability, Xodo, Noteshelf, etc).\n' +
        '\n' +
        'App is NOT included with your purchase. GoodNotes / Notability / etc need to be purchased separately.\n' +
        '\n' +
        'Colors may vary from the product images depending on your choice of device and screen settings.\n' +
        '\n' +
        '\n' +
        '\n' +
        'How to use these templates?\n' +
        '\n' +
        'Download the ZIP files.\n' +
        'Unzip and Import files into APP. (Goodnotes, Notability, etc)\n' +
        'Use over and over again.\n' +
        '\n' +
        'Terms:\n' +
        '\n' +
        'Due to the digital nature of the product, all sales are final. \n' +
        'I do not accept any returns, cancellations or refunds. \n' +
        'But if you have any problems with your order, don&#39;t hesitate to contact me. I will be happy to help!\n' +
        '\n' +
        'All digital files are for PERSONAL only and cannot be redistributed or shared.\n' +
        '\n' +
        '\n' +
        'Pink&Teal designs',
      quantity: 100,
      num_favorers: 0,
      tags: [
        'Notebook Covers',
        'Goodnotes Covers',
        'Notability covers',
        'digital notebook',
        'iPad notebook',
        'Ipad covers'
      ],
      processing_min: null,
      processing_max: null,
      price: 1.99,
      img: 'https://i.etsystatic.com/32757387/r/il/d22529/3860616453/il_fullxfull.3860616453_kfml.jpg',
      onSale: true,
      taxonomy_id: 5
    },
    {
      title: 'Felt cover Kobo Libra 2 // Handmade e-reader cover model FINN ',
      description: 'E-book reader felt cover FINN for Kobo Libra 2 - Handmade wool felt cover\n' +
        '\n' +
        '* Custom-made protective cover for your Kobo Libra 2.\n' +
        '* eBook reader pocket pending felt. 100% merino wool.\n' +
        '* Secure hold thanks to the elastic band on the side.\n' +
        '* Interesting but simple play of colors.\n' +
        '* Lining. Made of soft wool felt.\n' +
        '* Made in Germany. Sewn for you by us.\n' +
        '-----------------------------------------\n' +
        'E-book reader felt cover FINN\n' +
        '\n' +
        'This bag is tailored to fit the Kobo Libra 2. They are made from government wool felt. Together with the colorful lining, there is an interesting but simple play of colors. The rubber band prevented the e-reader from falling out. You can get your Kobo Libra in and out more easily. Consciously increasing 3mm felt offer your own protection.\n' +
        '----------------------------------\n' +
        'Advantages of felt\n' +
        '\n' +
        'The processed Merino sheep&#39;s wool is extremely hard-wearing and offers many other advantages:\n' +
        ' * Light material\n' +
        ' * Insulates against heat and cold\n' +
        ' * Moisture and water repellent\n' +
        ' * Insensitively removed dirt\n' +
        ' * Non flammable\n' +
        ' * Wrinkle and wrinkle free\n' +
        '----------------------------------\n' +
        'Checklist:\n' +
        '\n' +
        ' * Material: wool felt\n' +
        ' * Suitable for: Kobo Libra 2\n' +
        ' * Weight: approx. 60 g\n' +
        ' * Closure: 10 mm elastic band, dimensionally stable\n' +
        ' * Wool felt: Made in Europe, from 100% merino wool, Oeko-Tex certified\n' +
        ' * Yarn: Made in Germany, made of tear-resistant polyester, approx. 80% recycled PET bottles, Oeko-Tex certified\n' +
        ' * Care: wool felt is dirt-repellent and self-cleaning. Dab off any dirt with a damp cloth. Full washing or containment management to shrink, a natural characteristic of wool.\n' +
        ' * Made in: Germany, Trier\n' +
        '-----------------------------------\n' +
        '\n' +
        'Our promise:\n' +
        'We produce 100% in Germany and the EU at fair conditions and prices. We also source our materials from German and European manufacturers.\n' +
        'You get a high quality product that fits your device perfectly.\n' +
        '---------------------------------\n' +
        '\n' +
        'WE LOVE TREES:\n' +
        'We have EDEN reforestation projects and plant a tree for every possible article.\n' +
        '\n' +
        'All All brand names, product names and trademarks are the property of their own rights.',
      quantity: 193,
      num_favorers: 6,
      tags: [
        'Ebook cover',
        'wool felt protection',
        'ebook bag',
        'Amazon felt bag',
        'Custom-made bag',
        'wool felt',
        'light material',
        'handmade cover',
        'non-toxic case',
        'Ereader sleeve',
        'felt bag Paperwhite',
        'Kindle Paperwhite',
        'Non flammable'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 21.95,
      img: 'https://i.etsystatic.com/18219480/r/il/bcecae/2253910898/il_fullxfull.2253910898_8el8.jpg',
      onSale: true,
      taxonomy_id: 5
    },
    {
      title: 'Digital Planner Stickers African American  Pre-Cropped Goodnotes and PNG Digital Planner Stickers -  Black Girl Magic Planner Stickers SET 3',
      description: 'This sticker set is a follow-up to my other 2 Black Girl Magic digital sticker sets. These are by far my most popular items, so I wanted to add to them. Happy Planning! \n' +
        '\n' +
        '40 Digital Planner Stickers\n' +
        'Stickers are pre-cropped and ready to go!\n' +
        '\n' +
        '🌟Includes:\n' +
        '1 ZIP FILE OF PNG STICKERS\n' +
        '1 GOODNOTES FILE OF STICKERS SHEETS\n' +
        '1 GOODNOTES TIP SHEET\n' +
        '\n' +
        '🌟Need Some place to put your new stickers? Check out my digital journal and planner listings: 🌟\n' +
        '\n' +
        'https://www.etsy.com/shop/LoveJenell?ref=search_shop_redirect&section_id=32480353\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        '🌟 NOTE\n' +
        '1. THESE STICKERS ARE DIGITAL. NO PHYSICAL PRODUCT WILL BE SENT.\n' +
        '\n' +
        '2. THESE STICKERS ARE FOR PERSONAL USE ONLY. YOU ARE NOT ALLOWED TO RESALE THEM IN \n' +
        'ANY WAY.',
      quantity: 50,
      num_favorers: 1507,
      tags: [
        'DIGITAL STICKERS',
        'PLANNER STICKERS',
        'goodnote stickers',
        'precropped stickers',
        'MONTHLY HABIT',
        'DIGITAL PLANNER',
        'DIGITAL STICKER KIT',
        'DIGITAL STICKERS PNG',
        'POSITIVITY GOODNOTES',
        'Black Women Planner',
        'Black Girl Magic',
        'BGM Planner Stickers',
        'Black owned'
      ],
      processing_min: null,
      processing_max: null,
      price: 3.99,
      img: 'https://i.etsystatic.com/13102287/r/il/caa465/3387117323/il_fullxfull.3387117323_t9tm.jpg',
      onSale: true,
      taxonomy_id: 5
    },
    {
      title: 'Easter Scavenger Hunt, Indoor Scavenger Hunt, Game for Kids, Treasure Hunt Clues, Easter Activity',
      description: 'A fun indoor Easter scavenger hunt for your little ones! Comes with clues, a letter from the Easter bunny, and a clue guide so you know exactly where to place every clue! \n' +
        '\n' +
        'Comes in A4 and Letter Size.\n' +
        '\n' +
        'Included is a PDF print file for each design and each size.\n' +
        '\n' +
        '\n' +
        '→Copy and paste this link into your search bar and sign up for our newsletter to immediately get 10% OFF your first order:\n' +
        '\n' +
        'https://www.greenpostgoods.com/printables\n' +
        '\n' +
        '\n' +
        'If you would like a custom scavenger hunt, just shoot me a message and we can get it done!\n' +
        '\n' +
        '\n' +
        '\n' +
        '**This is an instant digital download product. No physical items will be shipped.\n' +
        '\n' +
        'No returns or exchanges. Distribution of this product is not allowed.**',
      quantity: 847,
      num_favorers: 291,
      tags: [
        'scavenger hunt',
        'treasure hunt',
        'Treasure Hunt Clues',
        'easter scavenger',
        'easter treasure hunt',
        'hard treasure hunt',
        'crack the code',
        'easter activity',
        'indoor easter hunt',
        'kids treasure hunt',
        'kids activity',
        'easter games',
        'kids easter games'
      ],
      processing_min: null,
      processing_max: null,
      price: 5,
      img: 'https://i.etsystatic.com/27819455/r/il/f28d73/3801947583/il_fullxfull.3801947583_nw9u.jpg',
      onSale: true,
      taxonomy_id: 5
    },
    {
      title: 'Vintage Book Set. Old Books. Decorative. Vintage Prop. Display. Colourful. 5 Books. GC',
      description: 'Beautiful set of 5 colourful vintage and antique books. Make a stunning, decorative, eclectic display on a shelf. Interesting books to read or just display. \n' +
        '\n' +
        'They would be a lovely, colourful addition to any vintage loving, shabby chic, country style, eclectic home.\n' +
        '\n' +
        'Son of Black Beauty - Phyllis Brigg\n' +
        '\n' +
        'Variable Winds at Jalna - Mazo De-La- Roche - 1955\n' +
        '\n' +
        'The Master Enters - Leslie A Newman - 1945\n' +
        '\n' +
        'Paul of Tarsus - T R Glover - 1938\n' +
        '\n' +
        'The Lady of the Lake - Sir Walter Scott - 1920\n' +
        '\n' +
        'Good vintage/antique condition. All have signs of age and wear. See photos\n' +
        '\n' +
        'They have been sourced for a display primarily.\n' +
        '\n' +
        'Please take a look at my other vintage and handmade items. Link below. Follow me as more added each week. I am happy to combine postage for multiple purchases. Just message me \n' +
        '\n' +
        'https://www.etsy.com/shop/HappyHyacinthVintage\n' +
        '\n' +
        'As much as possible packaging will be reused and recycled for environmental reasons \n' +
        '\n' +
        'Posting out Monday and Friday',
      quantity: 1,
      num_favorers: 0,
      tags: [
        'book decor',
        'vintage library',
        'vintage prop',
        'decorative vintage',
        'old books',
        'vintage decor'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 18,
      img: 'https://i.etsystatic.com/18406526/r/il/e32d3f/3813094390/il_fullxfull.3813094390_7xf1.jpg',
      onSale: true,
      taxonomy_id: 5
    },
    {
      title: 'Friends Book JGA / Bachelor Party / Happy Bride Friends Book / Wedding Friends Book with thetruebride',
      description: 'Our friends&#39; books for the bachelor party are simply perfect for any bachelor party.\n' +
        'With this book of friends you will remember the special day for the bride.\n' +
        '\n' +
        'In the hardcover A5 book 22 friends have space to immortalize themselves.\n' +
        '\n' +
        'This great friends book was created in collaboration with the big wedding blog thetruebride.de.',
      quantity: 18,
      num_favorers: 28,
      tags: [
        'Books',
        'Adults',
        'Friends Book JGA',
        'JGA Book',
        'Reminder JGA',
        'Friends Book Adults',
        'Hardcover Book JGA',
        'JGA Guestbook',
        'Party Fun Book',
        'Bride2020',
        'JGA Bride Memory',
        'Friends Book Bride',
        'Friends Book Bridal Crew'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 24.9,
      img: 'https://i.etsystatic.com/18944598/r/il/8fe47c/2198464581/il_fullxfull.2198464581_fx3h.jpg',
      onSale: true,
      taxonomy_id: 5
    },
    {
      title: 'Bronze Anniversary Bookmark, 8th Anniversary Gift - Custom Quote Bookmark, Personalized Bookmark, Gift for Book Lovers',
      description: 'Perfect for your 8th / 19th (Bronze) Anniversary-- or just because!\n' +
        '\n' +
        'We start with a sturdy 14-gauge, 3/8&#39;&#39; x 6&#39;&#39; bronze bookmark and hand stamp &quot;My Favorite Love Story is Ours&quot;. Each letter is stamped by hand, with a hammer and forged steel stamp. Alignment/straightness will be imperfect -- that&#39;s what makes your piece unique! \n' +
        '\n' +
        'Want to use your own phrase on front instead? About 25 spaces or less fits best. Interested in adding your initials or date on the back-- just elect that option in the dropdown box.\n' +
        ' \n' +
        'The piece is lightly distressed, oxidized, and hand-rubbed to bring out it&#39;s beautiful natural shine. Your bookmark will come finished with a suede tassel.\n' +
        '\n' +
        'Not exactly what you were looking for? Check out some other custom options here: http://www.etsy.com/shop/theCopperPoppy/search?search_query=dad&search_submit=&search_type=user_shop_ttt_id_5803746&shopname=theCopperPoppy\n' +
        '\n' +
        'You came to Etsy looking for handmade, one of a kind work - and here you&#39;ll find it! All of our pieces are hand-stamped, so the text will not be perfectly straight. With all my pieces, imperfections are part of the character...each piece will be unique. \n' +
        '\n' +
        'Any questions? Please convo me!\n' +
        '\n' +
        'Traditionally Yours,\n' +
        'The Copper Poppy',
      quantity: 1,
      num_favorers: 138,
      tags: [
        'bronze anniversary',
        'bronze gift',
        'custom bookmark',
        'engraved bookmark',
        'book lover gift',
        '8th anniversary gift',
        '19th anniversary',
        'copper anniversary',
        'bronze bookmark',
        'metal bookmark',
        'anniversary gift',
        'wedding gift',
        'hand stamped'
      ],
      processing_min: 5,
      processing_max: 7,
      price: 38,
      img: 'https://i.etsystatic.com/5803746/r/il/83d83c/3482210996/il_fullxfull.3482210996_h5gd.jpg',
      onSale: true,
      taxonomy_id: 5
    },
    {
      title: 'Personalized floral name bookmark in resin - Gift',
      description: 'These are 15 cm bookmarks made with transparent epoxy resin, in which I embed dried flowers and gold/silver/rose gold leaves.\n' +
        '\n' +
        '🌹 DESCRIPTION:\n' +
        '\n' +
        'Bookmarks are 15 cm long and less than 4 mm thick. A second layer is made to cover the flowers well and therefore that the bookmark is smooth.\n' +
        '\n' +
        'Customization with vinyl is possible. You can choose the first name to write in white :)\n' +
        '\n' +
        '🌹DESCRIPTION:\n' +
        '\n' +
        'Customization comes in the form of a writing that will be glued to the resin. It is only very difficult to remove, scratching it strongly and voluntarily.\n' +
        '\n' +
        '🌹 DELIVERY:\n' +
        '\n' +
        'I do everything possible to send your order as soon as possible. It will be prepared and shipped in 1 to 3 working days, depending on the number of items in the order. You should therefore receive it in less than a week:)\n' +
        '\n' +
        '🌹 MAINTENANCE ADVICE:\n' +
        '\n' +
        'Avoid prolonged exposure of the resin to heat or moisture. Washing should be done by hand with a soft cloth.',
      quantity: 576,
      num_favorers: 197,
      tags: [
        'personalized bookmark',
        'brandspageresinefrance',
        'brandingpageresineflowersschees',
        'bookmarkpersonnalised',
        'custom objects',
        'accessoriescustomized reading',
        'bookmarkcolorflower',
        'signetfrance',
        'fleursecheefrance',
        'customizingprenom'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 11.9,
      img: 'https://i.etsystatic.com/25209970/r/il/646a12/3367763192/il_fullxfull.3367763192_t5h8.jpg',
      onSale: true,
      taxonomy_id: 5
    },
    {
      title: 'Housse/pochette noire avec des motifs planètes rembourrée pour livres de poche',
      description: 'Cette housse de transport cousue main pour livres de poches a des coins d&#39;environ 3 cm de profondeur sur le bas pour ne pas abîmer le livre. Le tissu extérieur en coton. La doublure est en coton  bleu canard (cela ne rend pas sur la photo).\n' +
        'Elle contient du molleton qui permet une protection contre les chutes et les objets dans les sacs. \n' +
        '\n' +
        'Peut contenir un livre de poche de 400 pages environ ou plusieurs fins. Elle est un peu plus petite que les autres modèles.\n' +
        '\n' +
        'Lavage à 30 degrés délicat, séchage à plat, repassage 1\n' +
        '\n' +
        'Envoi : Lettre suivie\n' +
        '\n' +
        'J&#39;ai d&#39;autres modèles, n&#39;hésitez pas à regarder la boutique 🤗\n' +
        '\n' +
        'Photos et couleurs : J&#39;ai fait mon possible pour que les photos reflètent les bonnes couleurs des objets, mais selon les écrans le rendu sera différent.\n' +
        '\n' +
        'N&#39;hésitez pas à me contacter pour toutes demandes d&#39;information, je suis disponible et y répondrai volontiers.',
      quantity: 2,
      num_favorers: 2,
      tags: [
        'Cover',      'pocket square',
        'protection', 'fabric',
        'book',       'reading',
        'pocket',     'paperback',
        'padded',     'handmade',
        'stars',      'Planets',
        'Space'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 17,
      img: 'https://i.etsystatic.com/31381858/r/il/cbaea3/3579199085/il_fullxfull.3579199085_tdlt.jpg',
      onSale: true,
      taxonomy_id: 5
    },
    {
      title: '1984 Cooking With Convenience Foods: Favorite Recipes of Home Economics Teachers, Cookbook',
      description: '*1984 Cooking With Convenience Foods: Favorite Recipes of Home Economics Teachers\n' +
        '\n' +
        '*Spiral bound paperback\n' +
        '\n' +
        '*In very good condition, no loose or missing pages or marks\n' +
        '\n' +
        '*127 pages\n' +
        '\n' +
        '*Life can be busy and the need for uncomplicated home cooked delicious meals is a must.  With the help of some pantry items such as baking mix or instant potatoes, you&#39;ll find some delicious &quot;semi-homemade&quot;  recipes that will delight your taste buds.  \n' +
        '\n' +
        'Please feel free to contact me if you have any questions.  I combine shipping and ship within one business day.',
      quantity: 1,
      num_favorers: 0,
      tags: [
        'vintage cookbooks',
        'collectible cookbook',
        'favorite cookbooks',
        'culinary history',
        'Baking bakery',
        'yeasts breads',
        'grandmas recipes',
        'kitchen favorites',
        'homemade bread',
        'quick breads',
        'gift for cook',
        'semi-homemade',
        'rare collectible'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 10,
      img: 'https://i.etsystatic.com/26765314/r/il/09cb66/3813085464/il_fullxfull.3813085464_83h8.jpg',
      onSale: true,
      taxonomy_id: 5
    },
    {
      title: 'No Spend Challenge | No Spend Month Tracker | Bullet Journal Planner',
      description: 'Is it time to reset your budget? Give it a try with the 1 month (30 day) &quot;No-Spend Challenge&quot;. This fiscal fast will help you reboot your savings after letting your finances run rampant.  For one month, ONLY purchase items necessary to live and NO impulsive purchases: no clothes, no shoes, no eating out. Allow your bank account to recover, and your mind to refresh.  And who says you need to stop at one month?  Continue this lifestyle change to help you pay off your debts or reach your savings goal.  Hold yourself accountable by tracking your progress daily with this downloadable worksheet!\n' +
        '\n' +
        'This is an INSTANT DIGITAL DOWNLOAD listing. No physical item will be sent to you in the mail. Print in color or Greyscale.',
      quantity: 17,
      num_favorers: 169,
      tags: [
        'Success',
        'Planner',
        'No Spend Calendar',
        'No Spend Tracker',
        'Essentialism',
        'Money Management',
        'Savings Goals',
        'No Spend Month',
        'No Spend Challenge',
        'Minimalism',
        'Financial Freedom',
        'Self Help',
        'New Years Resolution'
      ],
      processing_min: null,
      processing_max: null,
      price: 2,
      img: 'https://i.etsystatic.com/26851523/r/il/5681bc/2820633425/il_fullxfull.2820633425_hfk1.jpg',
      onSale: true,
      taxonomy_id: 5
    },
    {
      title: 'Printable Easter Coloring Pages',
      description: 'This listing is for a digital download containing 14 pages of Easter Coloring Pages.  These pages are digital download, no physical items will be sent to you.\n' +
        '\n' +
        'This is an easy, printable, quarantine friendly activity.  \n' +
        '\n' +
        '\n' +
        'Please see pictures for details.\n' +
        '\n' +
        '\n' +
        'Print this file at home or at your local printer.  Many places even allow you to upload your print online.  \n' +
        '\n' +
        '*****************************************\n' +
        '\n' +
        'This file is a PDF print.  You will need a free program called Adobe Reader in order to download and print it. \n' +
        '\n' +
        '****************************************\n' +
        '\n' +
        'This is a Digital Download.  No physical items will be sent to you.  Upon payment confirmation you will receive a link to your digital download. \n' +
        '\n' +
        'For more information about receiving your download click here:\n' +
        '\n' +
        'https://help.etsy.com/hc/en-us/articles/115013328108-Downloading-a-Digital-Item?segment=shopping\n' +
        '\n' +
        'This item is for personal use only.  It cannot be resold, reproduced, given away for free or altered in any way.  All rights Reserved.',
      quantity: 57,
      num_favorers: 20,
      tags: [
        'easter coloring',
        'easter printable',
        'easter activity',
        'coloring pages',
        'easter color page',
        'easter pages',
        'easter',
        'printable coloring',
        'coloring paper'
      ],
      processing_min: null,
      processing_max: null,
      price: 1.5,
      img: 'https://i.etsystatic.com/12399460/r/il/08f026/2976769670/il_fullxfull.2976769670_oe4c.jpg',
      onSale: true,
      taxonomy_id: 5
    },
    {
      title: 'Gnome Family Magnetic Bookmark Set, Gifts for book lovers, Teacher Gifts, Cute gifts for kids, Planner Supplies, Page holder',
      description: 'I love having some cute whimsical characters like these Gnome family  to mark my pages! \n' +
        '\n' +
        'These bookmarks are printed on 115 gsm professional grade glossy photo paper and laminated to be more durable and finger-marks free.  Hand-cut magnet sheets are fixed on the inside of the bookmarks to hold book pages together. Suitable for use in books or planners, recipe books and can hold about 4 pages. The height  of these bookmarks is approx. 2 inches (depending on the illustration). These bookmarks are printed with the same image  on both front and rear, so you see the same cuteness as you flip the pages of our favourite book or planner. What&#39;s more? You get a good deal if you buy  all 5 bookmarks. Like, wouldn&#39;t it be awesome to buy for your friends and family, even your kids!\n' +
        '\n' +
        'Each bookmark is illustrated in house and handmade with love! I hope you support a handmade business. \n' +
        'Oh boy, these cute illustrations are also available as a sticker set! Find it in our Artistique sticker section. Message us if you are looking for wholesale or bulk orders.\n' +
        '\n' +
        '**Warning: Choking hazard and flammable. \n' +
        '\n' +
        '————————————\n' +
        '**Note: Printed bookmarks colours may vary slightly from screen views  due to different colour backlit monitors.**\n' +
        '————————————\n' +
        '\n' +
        '\n' +
        '\n' +
        'Processing and Shipping Time\n' +
        '————————————\n' +
        '\n' +
        'These bookmarks are made to order and the processing time is 1-2 working days. \n' +
        '\n' +
        'Domestic Shipping: \n' +
        'All orders with Standard Post takes  around 3-6 business days (depending on your location, countryside may take longer). Please take note standard post DOES NOT include tracking. If you need faster delivery with tracking you can choose to upgrade to Express Post which takes around 2-4 business days. Some States may take longer. \n' +
        '\n' +
        'International Shipping:\n' +
        'Take note that we are based in Sydney, Australia and international shipping can take between  about 4 weeks or longer depending on your location. Please take note that currently,  Australia post DO NOT deliver in ALL countries. If no delivery is available in your country, we will refund your order. If you want to check before ordering if AustPost delivers in your country please refer to link provided below or message us directly and we will check for you. All international order will be shipped via Economy Air Post and DOES NOT include tracking to keep costs low. If you need a faster delivery you can upgrade to Standard Parcel Post which can take around 3 weeks. Custom duties if any are payable by the customer. \n' +
        '\n' +
        'Above delivery times are guides only and can be longer due to delays caused by COVID-19 restrictions. We cannot be held liable  for unexpected delay as the delivery time depends largely on the destination country&#39;s  custom and postal services.\n' +
        '\n' +
        'Please check this link as advised by Austpost to find out if delivery in your country is available.\n' +
        'https://auspost.com.au/service-updates/international-delivery-times.\n' +
        '\n' +
        'Many Thanks for choosing our Shop!\n' +
        '\n' +
        'All designs are copyrighted by TheLilRoom.',
      quantity: 29,
      num_favorers: 2,
      tags: [
        'Cute gifts for kids',
        'Planner Supplies',
        'Page holder',
        'Gnome Family',
        'Gifts for',
        'book lovers',
        'Magnetic Bookmark',
        'fantasy bookmark',
        'Gifts for students',
        'bookmark set',
        'Teacher Gifts',
        'Birthday gifts',
        'for friend'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 4.5,
      img: 'https://i.etsystatic.com/30926513/r/il/2ac8c5/3654821303/il_fullxfull.3654821303_2ygi.jpg',
      onSale: true,
      taxonomy_id: 5
    },
    {
      title: 'Purple Theme Digital Notebook Template With Tabs For Student, 6 Tabs hyperlinked, Lined, Dotted, Grid, Cornell, Goodnotes, Notability,',
      description: 'Sample: http://tiny.cc/wwjjuz\n' +
        '\n' +
        'This purple pastel notebook is perfect for those who likes purple theme for school! It comes with many features to easily organize all your notetaking, ideas, or doodling all in ONE notebook. Copy and paste templates as many as you like!\n' +
        '\n' +
        'Features:\n' +
        '•\t4 covers\n' +
        '•\t6 tabs (hyperlink)\n' +
        '•\tContent pages are all hyperlink to easily navigate.\n' +
        '•\t22 x 2 templates\n' +
        '•\tBoth light and dark mode available \n' +
        '\n' +
        '-Blank\n' +
        '-Lined\n' +
        '-Dotted\n' +
        '-Cornell ( will be under the section of those three)\n' +
        '\n' +
        'Size: A4 paper\n' +
        '\n' +
        'Colour: Purple\n' +
        'Check my Etsy store for other colours.\n' +
        '\n' +
        'Item included:\n' +
        '1x PDF 55 pages total\n' +
        '\n' +
        'Notetaking templates 22 x 2 light and dark mode:\n' +
        '\n' +
        '-Blank\n' +
        '-Two columns blank\n' +
        '-1/3 columns blank\n' +
        '-Cornell blank\n' +
        '\n' +
        '-Lined\n' +
        '-Two columns lined\n' +
        '-1/3 columns lined x 2 version\n' +
        '-Cornell lined x 2 version\n' +
        '\n' +
        '-Grid\n' +
        '-Two columns grid\n' +
        '-1/3 columns grid x 2 version\n' +
        '-Cornell grid x 2 version\n' +
        '\n' +
        '-Dotted\n' +
        '-Two columns dotted\n' +
        '-1/3 columns dotted x 2 version\n' +
        '-Cornell dotted x 2 version\n' +
        '\n' +
        '\n' +
        'BEFORE BUY PLEASE READ:\n' +
        '\n' +
        '-This is a DIGITAL PRODUCT to use for apps like Goodnotes (recommended). NO physical product will be shipped to you. Apps like Goodnotes, tablet and pen stylus are NOT PART of the purchased. \n' +
        '\n' +
        '-Due to the nature of this product, the product CANNOT be returned and refunded. \n' +
        '\n' +
        '-Please try the sample first before buying to see if your apps and tablet are compatible. Check if your apps can duplicate the pages and hyperlink is clickable. If you have any questions, please contact me beforehand. \n' +
        '\n' +
        '-I haven’t tried other apps like Notability or Noteshelf but in theory, it should work with any apps that support pdf. I highly suggest trying the sample. \n' +
        '\n' +
        '-Instant download: After payment is completed-\n' +
        '\n' +
        'Etsy account: Go to Your Account -&gt; Purchases and Review. Downloads are available once your payment is confirmed. If you paid with PayPal or a with credit card on Etsy, confirmation might take a few minutes.\n' +
        '\n' +
        'Guest account:  A link will be sent to your receipt email after purchase. Please check the spam folder if you cannot find it. \n' +
        '\n' +
        '-This product is for personal use only. The products are not to be redistributed, reproduced, recreated, or resold.',
      quantity: 98,
      num_favorers: 6,
      tags: [
        'digital notebook',
        'goodnotes notebook',
        'student notebook',
        'homeschool notebook',
        'school notebook',
        'colorful notebook',
        'purple notebook',
        'pastel notebook',
        'cute notebook',
        'kawaii notebook',
        'student templates',
        'journal notebook',
        'hyperlinked notebook'
      ],
      processing_min: null,
      processing_max: null,
      price: 24,
      img: 'https://i.etsystatic.com/31707056/r/il/4510e4/3402149571/il_fullxfull.3402149571_3xml.jpg',
      onSale: true,
      taxonomy_id: 5
    },
    {
      title: 'Lash Print Hardcover Journal Matte',
      description: 'Make your everyday journaling more personal, private, and stylish with this matte hardcover journal. Available in 5.75&quot;x8&quot; size of 75 lined single pages, these sturdy hardcover journals are amazing quality and each feature one of our designs. The matte laminate coating on the cover will make them stay true to your personal style.&nbsp;\n' +
        'PLEASE NOTE: If you would like this journal personalised with your logo instead that can be arranged. Simply contact us and we can make you up a design all we need is your lgo on a transparent background.&nbsp;\n' +
        'This is part of our brand new apparel line&nbsp;which is environmentally friendly since each piece is only printed once you order, saving on wastage so less items end up in landfill and allowing us to offer a wide variety of sizes an colours. Select your item and add to cart and it will be printed and shipped directly to you from the manufacturer. Please note all lash apparel items have a separate shipping fee and times will vary especially at the moment due to the latest covid out break.\n' +
        '.: Full wraparound print\\n.: 75 lined single pages\\n.: Matte finish\\n.: Casewrap binding\\n.: Note: 0.5&quot;x0.5&quot; production barcode visible on the back cover',
      quantity: 999,
      num_favorers: 0,
      tags: [],
      processing_min: 1,
      processing_max: 7,
      price: 25,
      img: 'https://i.etsystatic.com/33658858/r/il/c75d8f/3860618333/il_fullxfull.3860618333_g4ts.jpg',
      onSale: true,
      taxonomy_id: 5
    },
    {
      title: 'Perpetual Birthday Calendar Watercolor Stripe Calendar | Wall calendar | Perpetual calendar Monthly calendar for entering birthdays',
      description: 'The everlasting, handmade wall calendar reminds you year after year of all birthdays & anniversaries.\n' +
        'This means that no important day is forgotten.\n' +
        '\n' +
        'The calendar is independent of the year. This means: Enter all data 1x and use it again year after year.\n' +
        'The design is simple & minimalist and designed with love\n' +
        '\n' +
        'AN IDEAL CHRISTMAS PRESENT:\n' +
        'If desired, I add a free card and wrap the gift lovingly.\n' +
        'Please specify in the comment field when ordering.\n' +
        '\n' +
        '- The calendar is printed with mineral oil-free inks & climate-neutral.\n' +
        '\n' +
        '- 250g/m2 100% recycled paper natural white. (Looks slightly grayish).\n' +
        '- 13 sheets; Size: 10.5 x 29.7 cm,\n' +
        '- On each monthly sheet there is a small picture as well as a small monthly saying.\n' +
        '\n' +
        '- For hanging with black Wire-O spiral binding. Hand-tied.\n' +
        '\n' +
        'The perfect gift for grandma or mom or even the best friend\n' +
        '\n' +
        'Each screen displays colors differently. Therefore, there may be slight color deviations, these are unintentional. Delivery without decoration.',
      quantity: 46,
      num_favorers: 306,
      tags: [
        'Perpetual calendar',
        'calendar',
        'Sheet almanac',
        'strip calendar',
        'perpetual calendar',
        'everlasting',
        'kitchen calendar',
        'birthday present',
        'calendar 2022',
        'Best friend',
        'Easter',
        'Easter Gift'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 14.5,
      img: 'https://i.etsystatic.com/27455545/r/il/956c67/3744553466/il_fullxfull.3744553466_ezt2.jpg',
      onSale: true,
      taxonomy_id: 5
    },
    {
      title: 'Graduation Gift, Best Friend Gift, BFF, Class of 2022, Friends, Graduation, Journal, Notebook, Personalized, Writing Journal, Card, Graduate',
      description: 'The perfect gift for your Best Friends as you Graduate, share your favorite memories of  school and hopes for the future. A true Keepsake. \n' +
        '\n' +
        'WHAT&#39;S INCLUDED\n' +
        '* Graduation Journal as shown with Lined or Blank Pages, You Pick front cover color!  \n' +
        '\n' +
        'HOW TO PERSONALIZE\n' +
        'If you would like a name at the bottom, Please put name in  &quot;Notes to Seller&quot; box at checkout! If no name is given, none will be used\n' +
        '\n' +
        'JUST THE FACTS!\n' +
        '* Hand Made \n' +
        '* Journal is 5.5&quot; W x 8.5&quot; L\n' +
        '* Listing is for Journal Only.  \n' +
        '* 50 sheets (100 front and back) of 24lb paper\n' +
        '* Cover is made from heavy weight card stock\n' +
        '* Back is a thicker sturdy chipboard\n' +
        '* Double wire spiral bound\n' +
        '* Can be personalized, JUST ASK! (bottom front cover)\n' +
        '* Only front cover can be printed\n' +
        '\n' +
        'Want to double your pages? You can add that here.\n' +
        'https://www.etsy.com/listing/221778588/double-your-pages-in-one-notebook \n' +
        '\n' +
        'Also check out our  pencil sets (Not Included), a great addition to your notebook Journal. Listing is for JOURNAL ONLY! \n' +
        '\n' +
        'Monitor colors can vary, paper colors should be close to the appearance on your screen but may vary slightly depending on your monitor settings. \n' +
        'Graphic images by Design by Nedti, www.nedti.etsy.com\n' +
        '\n' +
        'Thanks for taking a look! \n' +
        'Mister Scribbles',
      quantity: 29,
      num_favorers: 193,
      tags: [
        'graduation',
        'graduation notebook',
        'keepsake',
        'graduation Day',
        'senior',
        'high school',
        'Best Friends',
        'BFF',
        'Gift for Friends',
        'Graduation Gift',
        'Best Friend Gift',
        'Journal',
        'Class of 2022'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 13.99,
      img: 'https://i.etsystatic.com/10141814/r/il/11098e/3712499970/il_fullxfull.3712499970_jtdt.jpg',
      onSale: true,
      taxonomy_id: 5
    },
    {
      title: 'The Cloister and the Hearth by Charles Reade',
      description: 'Title: The Cloister and the Hearth\n' +
        'Author: Charles Reade\n' +
        '\n' +
        'Publisher: Odhams Press\n' +
        'Publication date: c.1930s\n' +
        'Format: hardback\n' +
        'Size: 19cm x 12.5cm \n' +
        'Pages: 660\n' +
        '\n' +
        'Condition: good for age, yellowing of pages consistent with age otherwise clean. Signs of use and age/shelf related wear (see photos). Original dust jacket is in acceptable condition for age. \n' +
        '\n' +
        'Delivery: 1st class signed for within the UK and International tracked outside the UK.',
      quantity: 1,
      num_favorers: 0,
      tags: [
        'Cloisterandthehearth',
        'charles reade',
        'cloister and hearth',
        'Vintage Charlesreade',
        'Odhams Press',
        'Vintage books'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 14.95,
      img: 'https://i.etsystatic.com/24922819/r/il/1edfda/3860615877/il_fullxfull.3860615877_syrv.jpg',
      onSale: true,
      taxonomy_id: 5
    },
    {
      title: 'Wendy 587 Dressing up - for dolls clothes knit jumpers coats beanies dresses pattern book great condition',
      description: 'Vintage knitting pattern book in very good condition\n' +
        'Any questions, please convo me!\n' +
        '\n' +
        'List of patterns:\n' +
        'Ski suit and hat\n' +
        'Evening dress\n' +
        'Sweater and skirt\n' +
        'Outdoor outfits\n' +
        'Disco outfits\n' +
        'Long sweater\n' +
        'Hooded jacket\n' +
        'Tracksuit and hat (beanie)\n' +
        'Dungarees, sweater and socks\n' +
        'Cardigan or sweater\n' +
        'Sleeping bag and mitts\n' +
        'Knitted teddy bear\n' +
        'Dress, bonnet and bag',
      quantity: 1,
      num_favorers: 0,
      tags: [
        'doll clothes knit',
        'small doll clothes',
        'large doll clothes',
        'doll tracksuit',
        'doll dungarees',
        'doll overalls',
        'doll teddy bear',
        'doll evening dress',
        'sewing pattern'
      ],
      processing_min: 5,
      processing_max: 7,
      price: 14,
      img: 'https://i.etsystatic.com/6471116/r/il/9bd014/3145214554/il_fullxfull.3145214554_mzmj.jpg',
      onSale: true,
      taxonomy_id: 5
    },
    {
      title: 'Wendy 605 Little Bo Peep dolls clothes knit nursery rhyme wardrobe jumpers coats beanies dresses pattern book great condition',
      description: 'Vintage knitting pattern book in very good condition\n' +
        'Any questions, please convo me!\n' +
        '\n' +
        'List of patterns:\n' +
        'Little Bo Peep\n' +
        'Wee Willy Winkie\n' +
        'Little Miss Muffet\n' +
        'Jack and Jill\n' +
        'Mary had a little lamb\n' +
        'Bobby Shaftoe&#39;s gone to sea\n' +
        'Ride-a-cock horse to Banbury Cross\n' +
        'Mary Mary Quite Contrary\n' +
        'Rock a bye Baby',
      quantity: 1,
      num_favorers: 0,
      tags: [
        'beanie',
        'baby',
        'doll clothes knit',
        'small doll clothes',
        'large doll clothes',
        'nursery rhyme knits',
        'nursery rhymes knit',
        'knit mary contrary',
        'knit wee willie',
        'knit miss muffet',
        'knit jack and jill',
        'sewing pattern'
      ],
      processing_min: 5,
      processing_max: 7,
      price: 14,
      img: 'https://i.etsystatic.com/6471116/r/il/add363/3145202122/il_fullxfull.3145202122_9cka.jpg',
      onSale: true,
      taxonomy_id: 5
    },
    {
      title: 'I&#39;d Like My Life Back',
      description: 'I&#39;D LIKE MY LIFE BACK\n' +
        '\n' +
        '200 page black and white collection of my favourite posters from the last 10 years.',
      quantity: 8,
      num_favorers: 8,
      tags: [],
      processing_min: 5,
      processing_max: 10,
      price: 20,
      img: 'https://i.etsystatic.com/13701139/r/il/c69689/3827686221/il_fullxfull.3827686221_t9ao.jpg',
      onSale: true,
      taxonomy_id: 5
    },
    {
      title: 'Worst Birthday Ever #quarantine Ladies T-Shirt',
      description: 'Ladies soft cotton fitted t-shirt. Machine washable.\n' +
        '\n' +
        'Produced by Direct 23. Direct 23 ® is a registered trademark of Direct 23 Ltd.',
      quantity: 75,
      num_favorers: 2,
      tags: [
        'funny',      'gift',
        'novelty',    'top',
        'quarantine', 'lock down',
        'lockdown',   'uk',
        'present',    'printed',
        'joke',       'isolating',
        '2021'
      ],
      processing_min: 1,
      processing_max: 6,
      price: 8.5,
      img: 'https://i.etsystatic.com/16243837/r/il/721c1a/2257756648/il_fullxfull.2257756648_ihew.jpg',
      onSale: true,
      taxonomy_id: 6
    },
    {
      title: 'Pug Mom Sweatshirt, Pug Lover, Pug Print Shirt, Dog Mom Sweatshirt, Pug Shirt, Dog Face Hoodie, Pug Owner Gift, Pet Sweatshirt, Pug Mom',
      description: 'Get ready to be OBSESSED with your new PUG LIFE, BIGGIE PAWS hoodie sweatshirt. It&#39;s the cutest and most trendy way to emit all those Pug lover vibes! Plus, it makes a great gift for your Pug mom!\n' +
        '\n' +
        '• Q U I C K • F A C T S •\n' +
        '✺ Due to lighting effects and computer color, the actual color may be slightly different from the picture, please understand.\n' +
        '✺ 50% Cotton 50% Polyester\n' +
        '✺ Machine wash: warm (max 40C or 105F); Bleach as needed; Tumble dry: medium; Iron, steam or dry: low heat; Do not dryclean.\n' +
        '✺ Professionally Direct-To-Garment (DTG) printed (no vinyl, screenprint, or sublimation)\n' +
        '\n' +
        '• S I Z I N G •\n' +
        '✺ Runs true to size\n' +
        '✺ Please consult the size chart (in images) before placing your order\n' +
        '\n' +
        '• S H I P P I N G • T I M E S •\n' +
        '✺ Our items are individually made with love for each of our buyers. Because of this, our processing time is 5-7 business days (depending on order volume) plus transit time, but typically much faster. We know our customers want their items as quickly as possible! Due to disruptions from COVID-19 and potential shipping carrier delays, there’s a chance your package may not arrive on the originally estimated date. We will keep you updated with any carrier notifications.\n' +
        '\n' +
        '• K E E P • S H O P P I N G •\n' +
        '✺ Shop our the crewneck version here: https://www.etsy.com/listing/1121504233/pug-sweatshirt-pug-print-shirt-pug-gifts\n' +
        '✺ Shop our entire Virtual RealiTEES collection here: https://www.etsy.com/shop/virtualrealiTEES\n' +
        '\n' +
        '*****Customer service and satisfaction is our top priority. If you have any issues or questions about the products or your order, please contact us first through Etsy messenger. We will reply to you as soon as possible to resolve any issue and answer questions.*******',
      quantity: 999,
      num_favorers: 0,
      tags: [
        'Pug Mom Sweatshirt',
        'Pug Lover',
        'Pug Print Shirt',
        'Dog Mom Sweatshirt',
        'Pug Shirt',
        'Dog Face Hoodie',
        'Pug Owner Gift',
        'Pet Sweatshirt',
        'Pug Mom',
        'dog mom hoodie',
        'pug gift',
        'animal sweatshirt',
        'pug sweatshirt'
      ],
      processing_min: 1,
      processing_max: 6,
      price: 45,
      img: 'https://i.etsystatic.com/32256581/r/il/903df5/3584787165/il_fullxfull.3584787165_54f1.jpg',
      onSale: true,
      taxonomy_id: 6
    },
    {
      title: 'High Tide T-shirt',
      description: 'T-shirt with Tidus from Final Fantasy X holding the Brotherhood blade.\n' +
        '\n' +
        'Check the image gallery for the size chart. Other colors may be available upon request.\n' +
        '\n' +
        '---\n' +
        '\n' +
        '• Brand: Bella + Canvas\n' +
        '• Adult unisex sizes\n' +
        '• 100% combed and ring-spun cotton (Heather colors contain polyester)\n' +
        '• Shoulder-to-shoulder taping\n' +
        '• Cover stitched and hemmed sleeves\n' +
        '• Side-seamed\n' +
        '\n' +
        '---\n' +
        '\n' +
        'Disclaimers\n' +
        '\n' +
        '• Product images are mockups. Actual colors may vary.\n' +
        '• Although the T-shirts are pre-shrunk, some shrinkage may occur after washing.\n' +
        '• You may notice some discoloration or off-white residue on your apparel. This is a special solution used for printing and can sometimes leave marks during the drying process. These are not stains and will wash off.\n' +
        '\n' +
        '---\n' +
        '\n' +
        'By placing an order at NerdFuel you agree to the store&#39;s terms and conditions. Contact me for more information or check the &quot;Shipping & Policies&quot; or the FAQ.',
      quantity: 2079,
      num_favorers: 61,
      tags: [
        'video game t-shirt',
        'playstation',
        'final fantasy x',
        'tidus',
        'brotherhood',
        'ps2',
        'ps3',
        'ps4'
      ],
      processing_min: 5,
      processing_max: 10,
      price: 26.99,
      img: 'https://i.etsystatic.com/12906150/r/il/b50353/3088901417/il_fullxfull.3088901417_n54w.jpg',
      onSale: true,
      taxonomy_id: 6
    },
    {
      title: 'Sheer red Nylon Pantaloons Sissy lace Adult Knickers bloomers Pants feminine UK black white baby pink',
      description: 'LIMITED EDITION REALLY CUTE- UK CUSTOM MADE- Very Pretty soft sheer nylon Baggy lace edged Sissy/Bloomers/Pantaloons/knickers.\n' +
        '\n' +
        '\n' +
        '\n' +
        'The have been made in a soft sheer nylon with a elasticated drop waistband.\n' +
        '\n' +
        '\n' +
        '\n' +
        'These pantaloons have a elasticated section for extra fullness with matching bows and lace edging . They are made to be baggy and loose fitting lovely and soft on the skin.\n' +
        '\n' +
        '\n' +
        '\n' +
        'Length 15 inches\n' +
        '\n' +
        '\n' +
        '\n' +
        'TOTALLY EXCLUSIVE NOT AVAILABLE IN THE SHOPS\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'PLEASE NOTE THIS IS SO MUCH BETTER THAN MY BAD PHOTO',
      quantity: 3,
      num_favorers: 81,
      tags: [
        'shorts',   'women',
        'bloomers', 'Sequoia',
        'gothic',   'lolita',
        'black',    'lace',
        'fetish',   'Adult fun',
        'Knickers', 'Pantaloons',
        'nylon'
      ],
      processing_min: 3,
      processing_max: 3,
      price: 34,
      img: 'https://i.etsystatic.com/5306347/r/il/97a7e6/2237832925/il_fullxfull.2237832925_h8gp.jpg',
      onSale: true,
      taxonomy_id: 6
    },
    {
      title: 'Embroidered Comic Characters embroidered Sweatshirt, embroidered Hoodie',
      description: 'Comic Characters Illustrated as a Graphic Art and Embroidered on Crewneck Sweatshirt, Hoodie \n' +
        '\n' +
        'Unisex size for adults.\n' +
        '\n' +
        'Unisex size with variable sizes from XS to 3XL.',
      quantity: 364,
      num_favorers: 58,
      tags: [
        'Embroidered crewneck',
        'embroidered hoodie',
        'Disney Sweatshirt',
        'captain America',
        'marvel',
        'avengers sweatshirt',
        'ironman hoodie',
        'spiderman sweatshirt',
        'moon knight shirt',
        'oscar isaac',
        'moon knight hoodie',
        'moon knight sweater',
        'moon knight marvel'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 47,
      img: 'https://i.etsystatic.com/32992107/r/il/830611/3778892678/il_fullxfull.3778892678_rdcm.jpg',
      onSale: true,
      taxonomy_id: 6
    },
    {
      title: 'Turning Red 4*TOWN 2002 Tour Shirt, 4Town Shirt, 4townies Shirt, Turning Red Pixar Shirt, Meilin Lee Turning Red Shirt, Turning Red Boy band',
      description: 'WELCOME\n' +
        '\n' +
        'Welcome to our online store. We hope you will enjoy our designs as much as we enjoyed creating them.\n' +
        '\n' +
        'We&#39;re always here to help, so please let us know if you have any questions.\n' +
        '\n' +
        '\n' +
        'HOW TO ORDER\n' +
        '\n' +
        '1- Please, check and review all photos.\n' +
        '\n' +
        '2- Select your t-shirt color.\n' +
        '\n' +
        '3- Select your t-shirt size.\n' +
        '\n' +
        '4- Choose your quantity.\n' +
        '\n' +
        '5- Please click the “Proceed to Check Out” button\n' +
        '\n' +
        '6- When you check out, you can add a note to seller for any request ( Add Message to Seller)\n' +
        '\n' +
        '\n' +
        'PRODUCTION AND SHIPPING\n' +
        '\n' +
        'Processing is 1-3 days.\n' +
        '\n' +
        'First Class Shipping is 2-5 business days (after processing time)\n' +
        '\n' +
        'Expedited shipping is available. If you need your order sooner please upgrade shipping.\n' +
        '\n' +
        '\n' +
        'RETURNS&EXCHANGES\n' +
        '\n' +
        'Accepted\n' +
        '\n' +
        '\n' +
        'S I Z E\n' +
        '\n' +
        'This style is a unisex\n' +
        '\n' +
        'Size Chart included in pictures\n' +
        '\n' +
        'Women are recommended to order one size down for a fitted look\n' +
        '\n' +
        'If you are unsure about the size, please refer to the size chart in the pictures or contact us\n' +
        '\n' +
        '\n' +
        'CARE INSTRUCTIONS\n' +
        '\n' +
        'Wash inside out, gentle cycle, cold water, tumble dry low.\n' +
        '\n' +
        'Do not bleach, do not dry clean, do not iron directly on the design.\n' +
        '\n' +
        '\n' +
        'Thanks for choosing us! We would like to serve you again!\n' +
        '\n' +
        'To help us, please take a moment to leave your feedback.',
      quantity: 841,
      num_favorers: 284,
      tags: [
        '4 town shirt',
        '4 town tour',
        '4 town concert',
        '4town turning red',
        'disney turning red',
        'Turning Red Pixar',
        'nobody like u',
        'disney shirt',
        'disneyland shirt',
        'disney trip shirt',
        'disney vacation 2022',
        'turning red',
        'walt disney world'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 15.9,
      img: 'https://i.etsystatic.com/33491277/r/il/a03f17/3781312954/il_fullxfull.3781312954_3xeb.jpg',
      onSale: true,
      taxonomy_id: 6
    },
    {
      title: 'Personalized pink girl romper and bow, spring infant girl coming home outfit, custom, baby shower gift, pink sleeper with footies',
      description: 'This sweet sleeper is soft and comfortable to snuggle a sweet little girl. This features a ultra soft gray grow-with-me romper, an applique name with name in pretty shades of pink, with middle name in a cute and simple vintage stitch, with a hand knotted bright pink bow. This outfit makes a perfect coming home outfit, newborn pictures, or baby shower gift. \n' +
        '\n' +
        'This romper has cute little footies that cuff for a newborn, and will uncuff to add length as baby grows. It has fold over mittens for tiny hands. It has snaps around legs for easy changing access. \n' +
        '\n' +
        'Newborn fits approximately 6-9lbs  \n' +
        '0/3 fits approximately 9-13lbs\n' +
        '3/6 fits approximately 12-16lbs\n' +
        '\n' +
        'Please leave name(s) in the notes to seller box at checkout. If you have any concerns at all, please contact me. I can not refund for incorrect spelling. \n' +
        '\n' +
        'This is a vintage stitch design, and is made so that the pattern around the fabric is more visible with a sweet bean stitch to go around the letter. This is designed to have a slightly unfinished look, and will no way affect the quality. You may see a few loose threads after the first washing or two. They can be trimmed with a scissors. \n' +
        '\n' +
        'All embroidered items have a soft mesh backing to cover stitching on the underside of the garment, to protect thread from rubbing or causing discomfort. \n' +
        '\n' +
        'Made is a smoke free and pet free home.\n' +
        '\n' +
        'Turnaround time is 1-2 weeks.',
      quantity: 17,
      num_favorers: 469,
      tags: [
        'pink',
        'pink polka dot',
        'baby spring outfit',
        'spring baby girl',
        'custom girl outfit',
        'monogrammed girl',
        'personalized girl',
        'baby girl footie',
        'gift for baby girl',
        'bodysuit and hat set',
        'monogrammed romper',
        'baby shower gift',
        'coming home outfit'
      ],
      processing_min: 5,
      processing_max: 10,
      price: 34.95,
      img: 'https://i.etsystatic.com/6092481/r/il/6e1f1c/3023343008/il_fullxfull.3023343008_nj3q.jpg',
      onSale: true,
      taxonomy_id: 6
    },
    {
      title: 'Womens Dress MEDIUM - Tie Dye Dress - Tyedye Dress - Mandala - Gift Under 60 - Birthday Dress - Casual Party Dress - Hippie Rainbow Dress',
      description: '*You receive this exact item*\n' +
        'Womens Tie Dye Dress MEDIUM\n' +
        '96% Rayon 4% Spandex\n' +
        '\n' +
        '\n' +
        'Pet Friendly Home Shop\n' +
        '\n' +
        'INSTOCK: We have in stock, ready to ship items and these will be specified in the description of the listing. In stock options are ONLY that size and will be exactly what you see in the listing. Ready to ship items will be shipped within 5 days of purchase, but we try our best to get them out as quick as possible.\n' +
        '\n' +
        'Our dyes take about a week to process. We soak them in a solution for 24-48 hours, that helps adhere the professional quality procion dyes to the fabric. This is to insure we get vibrant, rich color and that it lasts the lifetime of the item. We then put the dye on, this can happen two ways, traditional or ice dye. We let the dye set for 36-48 hours. Item is then rinsed by hand, then put in the washer through a regular cycle, then an additional rinse cycle to insure all residual dyes are off garment. It is then dried in the electric dryer, then hung or packages (custom orders). \n' +
        '\n' +
        'We offer two ways of dyeing, ice dyed and traditional. Traditional is used with mixed dye ( powder and water) and ice dyed is used with ice (powder & ice). While we do offer customs, we can not guarantee we can replicate an item. We will try our best to get close to most designs, however, the beauty in our work is the different in each piece.',
      quantity: 1,
      num_favorers: 3,
      tags: [
        'Womens Dress',
        'Medium',
        'Tie Dye Dress',
        'Geodes',
        'Gifts Under 60',
        'Birthday Dress',
        'Casual Party Dress',
        'Cowgirl',
        'Hand Dyed',
        'Ice Dyed',
        'Boho',
        'Bohemian',
        'BriteLiteDyed'
      ],
      processing_min: 5,
      processing_max: 7,
      price: 45,
      img: 'https://i.etsystatic.com/9758133/r/il/cb52e5/3752146264/il_fullxfull.3752146264_6j40.jpg',
      onSale: true,
      taxonomy_id: 6
    },
    {
      title: 'LIMITED EDITION COLORS - 100% Cotton Harem / Ali Baba - Dungarees / Jump Suit',
      description: 'Harem / Ali Baba - Dungarees / Jump Suit  - Made in Nepal at our factory Kathmandu city.\n' +
        '\n' +
        '*PLEASE SEE SIZE CHART IN PICTURE GALLERY* \n' +
        '\n' +
        '- Soft Lightweight Breathable 100% Cotton - \n' +
        '- Back pockets -\n' +
        '- Hip and Heart pockets -\n' +
        '- Adjustable shoulder straps  (+/- 5 CM on length) - \n' +
        '- Elasticated ankles  - \n' +
        '\n' +
        '*US customers free shipping on 2nd item*\n' +
        '\n' +
        'PLEASE NOTE: Machine washable, but color may run first 2 or 3 washes depending on wash temperature.\n' +
        '\n' +
        'Please see also -  https://www.etsy.com/shop/culturalroots/?section_id=27451513 for further sizes and ranges of Cultural Roots jump suits \n' +
        '\n' +
        'It is our aim at Cultural Roots to connect independent traders, manufacturers, tradesmen and artists with western market places and the more conscious consumer. We explore the world in search of cultural and alternative quality arts, crafts, clothes, home decorations and many more exciting products consistent only with ethical production. Striving to work with indigenous villages and individual artists on the street as well as much needed local businesses, Cultural Roots builds real links in parts of the world where authentic representation of traditions and fair trade are often sadly overlooked.\n' +
        '\n' +
        'Much Love',
      quantity: 7,
      num_favorers: 587,
      tags: [
        'yoga',        'pants',
        'trousers',    'harem',
        'confortable', 'cotton',
        'dungarees',   'jump suit',
        'ali baba',    'over alls',
        'Jumpsuits',   'dungaree',
        'romper'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 22.99,
      img: 'https://i.etsystatic.com/14558154/r/il/863d3a/3443617685/il_fullxfull.3443617685_sks8.jpg',
      onSale: true,
      taxonomy_id: 6
    },
    {
      title: '100% COTTON Slim Fit Straight Leg Dungarees / Jump Suit - Elasticated Ankles',
      description: 'Dungarees / Jump Suit - Made in Nepal at our factory Kathmandu city.\n' +
        '\n' +
        '*PLEASE SEE SIZE CHART IN PICTURE GALLERY* \n' +
        '\n' +
        '- Soft Lightweight Breathable 100% Cotton - \n' +
        '- Back pockets -\n' +
        '- Hip and Heart pockets -\n' +
        '- Adjustable shoulder straps  (+/- 5 CM on length) - \n' +
        '- Elasticated ankles  - \n' +
        '\n' +
        '*US customers free shipping on 2nd item*\n' +
        '\n' +
        'PLEASE NOTE: Machine washable, but color may run first 2 or 3 washes depending on wash temperature.\n' +
        '\n' +
        'Please see also -  https://www.etsy.com/shop/culturalroots/?section_id=27451513 for further sizes and ranges of Cultural Roots jump suits \n' +
        '\n' +
        'It is our aim at Cultural Roots to connect independent traders, manufacturers, tradesmen and artists with western market places and the more conscious consumer. We explore the world in search of cultural and alternative quality arts, crafts, clothes, home decorations and many more exciting products consistent only with ethical production. Striving to work with indigenous villages and individual artists on the street as well as much needed local businesses, Cultural Roots builds real links in parts of the world where authentic representation of traditions and fair trade are often sadly overlooked.\n' +
        '\n' +
        'Much Love',
      quantity: 74,
      num_favorers: 1561,
      tags: [
        'yoga',      'pants',
        'trousers',  'cotton',
        'dungarees', 'jump suit',
        'over alls', 'Jumpsuits',
        'dungaree',  'romper',
        'comfort',   'comfortable',
        'summer'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 19.99,
      img: 'https://i.etsystatic.com/14558154/r/il/b4da23/3377877614/il_fullxfull.3377877614_d3k9.jpg',
      onSale: true,
      taxonomy_id: 6
    },
    {
      title: 'Wallen Name Inspired Shirt, You Proof Tshirt, Dangerous T-shirt, Country Music Tee, Custom Name',
      description: 'Shirt is made custom to order. Please fill out name you would like in the personalized section. :)\n' +
        '—————\n' +
        '• 100% combed and ring-spun cotton (Heather colors contain polyester)\n' +
        '• Ash color is 99% combed and ring-spun cotton, 1% polyester\n' +
        '• Heather colors are 52% combed and ring-spun cotton, 48% polyester\n' +
        '• Athletic and Black Heather are 90% combed and ring-spun cotton, 10% polyester\n' +
        '• Heather Prism colors are 99% combed and ring-spun cotton, 1% polyester\n' +
        '• Fabric weight: 4.2 oz (142 g/m2)\n' +
        '• Pre-shrunk fabric\n' +
        '• Side-seamed construction\n' +
        '• Shoulder-to-shoulder taping\n' +
        '\n' +
        'Processing time is 2-7 business days. Shipping is 5-9 days. \n' +
        '\n' +
        'DESIGN/PRINTING:\n' +
        'We use DTG (Direct to Garment) Printing which means the highest quality of details, color, and durability.\n' +
        '\n' +
        'CARE INSTRUCTIONS:\n' +
        'Wash item inside out in cold water, do not bleach, do not dry clean, do not iron directly on the design. Tumble dry low.\n' +
        '\n' +
        'RETURN POLICY:\n' +
        'We can not accept returns, exchanges, or cancellations.\n' +
        'But please contact us if you have any problems with your order.',
      quantity: 80897,
      num_favorers: 150,
      tags: [
        'Morgan wallen',    'country music',
        'you proof',        'dangerous',
        'country',          'wallen',
        'chasin you',       't-shirt',
        'marlboro',         'tiktok',
        'talkin Tennessee', 'womens',
        'mullet'
      ],
      processing_min: 2,
      processing_max: 5,
      price: 25,
      img: 'https://i.etsystatic.com/33540228/r/il/3bc628/3686437803/il_fullxfull.3686437803_rzui.jpg',
      onSale: true,
      taxonomy_id: 6
    },
    {
      title: 'Crochet Orange Crop Top, Mushroom Halter Top, Bikini Top,Beachwear ,Boho Crop top',
      description: '&#39;&#39;Crochet Mushroom Halter Top&#39;&#39;\n' +
        '\n' +
        'This unique crop top has a funny design and it is reflects the energy of summer with orange color.\n' +
        'it is perfect for the hot summer days.\n' +
        'You can combine this crochet top  with high waist jeans,shorts or skirts.\n' +
        'Also this crochet crop top looks great as a bikini top or festival top.\n' +
        '\n' +
        'I crocheted this crop top soft premium quality cotton.\n' +
        'it&#39;s soft on the skin, and floats on your body like a soft cloud.\n' +
        '\n' +
        '\n' +
        '\n' +
        '*** This crochet top is MADE TO ORDER please allow  3-5 days from order to dispatch. \n' +
        '\n' +
        '\n' +
        'SİZE AND FİT\n' +
        '\n' +
        '*** Model is wearing size is Small \n' +
        '\n' +
        'Size : XS\n' +
        'Bust    :82 cm /  32,2 ‘’\n' +
        'Waist : 64 cm / 25,1 ‘’\n' +
        'Hip.     :90 cm / 35,3 ‘’\n' +
        '\n' +
        '\n' +
        '\n' +
        'Size:S\n' +
        'Bust    :86 cm / 33,8’’ \n' +
        'Waist : 70 cm / 27,5 ‘’\n' +
        'Hip     : 94 cm / 37 ‘’\n' +
        '\n' +
        '\n' +
        'Size:M\n' +
        'Bust    :90 cm / 35,4’’\n' +
        'Waist : 74 cm / 29,1‘’\n' +
        'Hip     : 98 cm / 38,5’’\n' +
        '\n' +
        '\n' +
        'Size:L\n' +
        'Bust    :94 cm / 37’’ \n' +
        'Waist : 78 cm / 30,7 ‘’\n' +
        'Hip     : 102 cm / 40,1 ‘’\n' +
        '\n' +
        '\n' +
        '\n' +
        '*** If you have any further questions, please feel free to send me a message and I will be happy to answer it ASAP.\n' +
        '\n' +
        '\n' +
        '*** Please, always remember that colors of images may look a bit different because of the specifics of your monitor settings.\n' +
        '\n' +
        '***You can find all our collection items and accessories through the following link:\n' +
        '\n' +
        '\n' +
        'https://www.etsy.com/shop/AcrCrochetDesign?ref=simple-shop-header-name&listing_id=939817901\n' +
        '\n' +
        '\n' +
        '\n' +
        'SHİPPİNG SAFE AND FAST DELİVERY\n' +
        '\n' +
        'We ship orders to anywhere in the world with fast and reliable shipping companies such as DHL, TNT, FedEx.\n' +
        '\n' +
        'Orders are specially prepared and delivered to the customer as soon as possible.\n' +
        '\n' +
        'Orders will be delivered 3-5 business days, \n' +
        '\n' +
        'Please contact me if you do not get your order within 5-7 business days after shipping. \n' +
        '\n' +
        'I always will be kept in contact with our colleagues and solve the problem and I will inform you immediately. \n' +
        '\n' +
        '- RETURNS & REFUNDS\n' +
        '\n' +
        'If your product was delivered damaged, please send me the photos that showing the problem then you will get the replacement one. \n' +
        'We will do our best to solve the problem and in case of a damaged / defective item, we will make a safe refund or send you a new product. \n' +
        '\n' +
        '\n' +
        'If there is no problem with the product, but you just give up to have it, please contact with us again.\n' +
        '\n' +
        'In addition, you can contact with us if you feel any displeasure about the product after receiving it or anything, be sure that we are here to solve it.\n' +
        '\n' +
        'Thank you for choosing us!\n' +
        '\n' +
        'Sincerely...&quot;',
      quantity: 44,
      num_favorers: 685,
      tags: [
        'Mushroom crop top',
        'orange crop top',
        'crop top',
        'crochet crop top',
        'beach wear',
        'halter top',
        'crochet halter top',
        'orange top',
        'bikini top',
        'summer wear',
        'mushroom design top',
        'boho top',
        'festival top'
      ],
      processing_min: 5,
      processing_max: 7,
      price: 58,
      img: 'https://i.etsystatic.com/26704881/r/il/d556b4/3314295727/il_fullxfull.3314295727_e61a.jpg',
      onSale: true,
      taxonomy_id: 6
    },
    {
      title: 'Walt and Mickey Quote Shirt, Disney Shirt for Women, Disney Shirt for Family, Girls Disney Vacation Tee, Family Matching Disney Trip Shirt',
      description: 'PLEASE SPECIFY YOUR COLOR CHOICE IN THE NOTES SECTION AT CHECKOUT \n' +
        '\n' +
        'SIZING\n' +
        '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n' +
        'This style is a unisex fit tee shirt. If you would like a more relaxed fit, order the size that you would normally wear in Women’s. If you would like a more fitted look, order a size down. If you are unsure about the size you should order, please refer to the size chart in the pictures or contact us. We would love to help!\n' +
        '\n' +
        'MATERIALS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n' +
        '* High quality heat transfer material\n' +
        '* Sealed with commercial heat press \n' +
        '\n' +
        'CARE INSTRUCTIONS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n' +
        '* Machine wash inside out\n' +
        '* Wash with cold water and tumble dry low\n' +
        '* Do not iron directly on letters\n' +
        '\n' +
        'PERSONALIZATION\n' +
        '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n' +
        'We love to customize orders for our customers! The best feeling is being able to add a personal touch to our designs to make our customers happy. If you would like to tweak this design with a name on the back or add some additional text, just add this listing to your cart with the shirt as well &gt;&gt; \n' +
        '\n' +
        'SHIPPING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n' +
        'Add these faster processing times to your order: \n' +
        '\n' +
        '* 1-3 day processing time & ships 1st class: $6.99\n' +
        '* 1-3 day processing time & ships priority: $9.99\n' +
        '\n' +
        'If there is a specific date that you need your order by, please put that information in the notes to seller section during checkout. \n' +
        '\n' +
        'USPS does experience rerouting and delays from time to time. Everly James Boutique is not responsible for lost or delayed packages.\n' +
        '\n' +
        'RETURN POLICY ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n' +
        'If you want to exchange your item, you are required to ship the item back and pay for the shipping charge for us to send you the replacement. We will not accept returns or exchanges on any custom orders. If you had us change any wording or asked us to add an additionalitem, then the sale is final. \n' +
        '\n' +
        'CASTLE CLUB CLOTHING CO ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n' +
        'Thanks for choosing to shop with us! We hope you love our stuff as much as we do. Share the love on social media and tag us for a chance to win free giveaways!\n' +
        '\n' +
        'Etsy - www.etsy.com/shop/castleclubclothingco\n' +
        'Instagram - @castleclubclothingco\n' +
        'Facebook - @castleclubclothingco\n' +
        'TikTok - @castleclubclothingco',
      quantity: 100,
      num_favorers: 0,
      tags: [
        'Walt',         'Disneyland',
        'Disney World', 'Shirt',
        'Tee',          'Vacation',
        'Men',          'Women',
        'Trip',         'Family',
        'Matching',     'Gift',
        'Mickey'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 17.6,
      img: 'https://i.etsystatic.com/35165365/r/il/cb78e2/3813099608/il_fullxfull.3813099608_6xrz.jpg',
      onSale: true,
      taxonomy_id: 6
    },
    {
      title: 'Slim Fit Jogger Tractor Child Baby Sweat Jogger Boys Sweatpants Kids Green Sailtooth Handmade',
      description: '★★★ SAILTOOTH – cheeky & cheerful ★★★ FASHION FOR TRENDSETTERS ★★★\n' +
        '\n' +
        'Handmade children&#39;s fashion from sustainable production.\n' +
        '\n' +
        'We only produce what is needed & ordered, no overproduction and thus no waste of resources, good for the environment.... good for your child.\n' +
        '\n' +
        'We sew your favorite particles individually for your child after ordering, only in this way can we also implement your wishes if necessary.\n' +
        '\n' +
        'SEGELZAHN only uses materials in its products that meet at least the requirements of ÖkoTex STANDARD 100.\n' +
        'This means that the materials used are tested for harmful substances and the article is therefore harmless to health.\n' +
        '\n' +
        '\n' +
        'PRODUCT:\n' +
        '\n' +
        'REAL GUYS DRIVE TRACTOR OR ???\n' +
        '\n' +
        'Slim Fit Jogger, pants made of sweat in green with cool tractor bag, decorative straps and soft/wax cuffs in blue\n' +
        '\n' +
        'Our Slim Fit models are comfortable and sufficiently wide cut, they run narrower towards the leg & offer enough freedom of movement for your dwarf.\n' +
        '\n' +
        'The soft/co-wax frets adapt ideally to your child&#39;s body shape, do not constrict and are comfortable on the skin.\n' +
        'Due to the special belly cuffs, our models also fit narrow children without slipping.\n' +
        'The cuffs are suitable for handling, the pants can be worn over 1-2 dress sizes ( co-wax pants )\n' +
        '\n' +
        'MATERIAL:\n' +
        '\n' +
        '- Cuff fabric / trouser fabric ( 95% cotton 5% elastane ) jersey / sweat\n' +
        '\n' +
        'CARE:\n' +
        '\n' +
        '- The best way to protect the color of the fabrics is to turn them to the left before washing.\n' +
        '- Washable at 30°C\n' +
        '- Please do not put in the dryer\n' +
        '- All fabrics are new and not pre-washed\n' +
        '\n' +
        'NOTE ON OUR DELIVERY TIMES:\n' +
        '\n' +
        'We usually ship smaller/individual orders faster, the stated delivery times refer more to larger orders.\n' +
        '\n' +
        'ON OUR OWN BEHALF:\n' +
        '\n' +
        '- If you have any questions, please contact me at any time, I always try to answer all questions quickly or to discuss individual wishes with you.\n' +
        '\n' +
        'DON&#39;T MISS ANY MORE NEWS & DISCOUNT PROMOTIONS\n' +
        'AND FOLLOW US ON INSTAGRAM\n' +
        '\n' +
        'HINTS:\n' +
        '\n' +
        '- Minimal color deviations may occur due to the screen display.\n' +
        '- small deviations in the fabric pattern may result due to the cutting.\n' +
        '- Pockets can be attached reciprocally.\n' +
        '\n' +
        'Each piece is unique, no trousers can look the same - HANDMADE -',
      quantity: 1,
      num_favorers: 1,
      tags: [
        'Pump Pants Child Baby Handmade',
        'Pump pants children&#39;s online shop',
        'Pump Pants Boys Green',
        'Pump pants kids tractor',
        'Slim Fit Pants Child Baby',
        'Slim Fit Jogger Kids Tractor',
        'Sweat Jogger Kids Green',
        'Sweat Pants Boy Tractor',
        'Sweatpants Kids Tractor',
        'Slim Fit Pants Tractor Boys',
        'Pumpose Child Baby Tractor',
        'Pump Pants Kids Green',
        'Sweat Pants Kids Tractor'
      ],
      processing_min: 10,
      processing_max: 20,
      price: 29,
      img: 'https://i.etsystatic.com/18025824/r/il/b9eb25/3426263442/il_fullxfull.3426263442_osv5.jpg',
      onSale: true,
      taxonomy_id: 6
    },
    {
      title: 'Custom Photo shirt, Custom Shirt, Custom Picture Tshirt, Birthday  photo Shirt, Holiday Gift, Family Picture Tee',
      description: 'PHOTO SHIRT\n' +
        '\n' +
        '****IMPORTANT****\n' +
        '\n' +
        'SEND YOUR PICTURE FROM ETSY VIA MESSENGER WITH YOUR ORDER NUMBER!!\n' +
        'All Shirts Come With White Color Text\n' +
        'Only White Shirts Will Come Black Text\n' +
        '\n' +
        'Check the size chart before you purchase\n' +
        '\n' +
        '2. How to Order\n' +
        '* Pick your shirt type and size\n' +
        'Your design will be printed on the front. \n' +
        '*Pick your t-shirt color\n' +
        '\n' +
        '**design colors will be different for opposite colors like black or white**\n' +
        '\n' +
        '3.Production \n' +
        'Processing time is 1-3 business days.\n' +
        '\n' +
        'For rush orders please contact us first. \n' +
        '\n' +
        '4.Shipping\n' +
        'Domestic Shipping\n' +
        'First Class 2-5 Business days\n' +
        'Priority Mail 1-3 Business days\n' +
        'Express Mail 1-2 Business days\n' +
        '\n' +
        '5.Material Care\n' +
        'Turn inside out.\n' +
        'Cold Wash\n' +
        'Do not bleach, dry clean, or iron directly onto the design.',
      quantity: 149,
      num_favorers: 2120,
      tags: [
        'Custom Shirt',
        'Custom Photo Shirt',
        'Photo Shirt',
        'Family Photo Shirt',
        'Personalization Tee',
        'Customized Tshirt',
        'Baby Photo Shirt',
        'Birthday Photo Shirt',
        'Personalize Shirt',
        'Picture Shirt',
        'Family Picture Shirt',
        'Custom Picture Shirt',
        'Family Picture'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 22.54,
      img: 'https://i.etsystatic.com/20710776/r/il/340b19/3262069254/il_fullxfull.3262069254_7plh.jpg',
      onSale: true,
      taxonomy_id: 6
    },
    {
      title: 'Priority mail Upgrade- LilyandMaxCo',
      description: '&quot; Priority mail Upgrade takes 2-3 business days in USA ONLY!&quot;\n' +
        'This upgrade is only for your shipping time! Not for processing time~ \n' +
        '\n' +
        '\n' +
        'Thank you🦄😊',
      quantity: 518,
      num_favorers: 17,
      tags: [],
      processing_min: 8,
      processing_max: 8,
      price: 13.95,
      img: 'https://i.etsystatic.com/13201695/r/il/aadd9d/2131872753/il_fullxfull.2131872753_oi9q.jpg',
      onSale: true,
      taxonomy_id: 6
    },
    {
      title: 'Believe in Your Sparkle T-Shirt',
      description: 'Upgrade any t-shirt collection with some character. This unisex faded shirt is made 100% with preshrunk, combed, ring-spun cotton for total comfort on a daily basis. The regular fit keeps the wearer cozy in all occasions while the faded color scheme adds a retro touch to their style&nbsp;plus&nbsp;with our super cute Believe In Your Sparkle design this will become your new favourite top!\n' +
        'This is part of our brand new apparel line which is environmentally friendly as each piece is only printed once you order, saving on wastage so less items end up in landfill and allowing us to offer a wide variety of sizes an colours. Select your item and add to cart and it will be printed and shipped directly to you from the manufacturer. Please note all lash apparel items have a separate shipping fee and times will vary especially at the moment due to the latest covid out break.&nbsp;\n' +
        '.: 100% preshrunk, combed, ring-spun cotton\\n.: Medium fabric (5.3 oz/yd&sup2; (180 g/m&sup2;))\\n.: Regular fit\\n.: Sewn-in label\n' +
        '\n' +
        '\n' +
        '\n' +
        '&nbsp;\n' +
        'S\n' +
        'M\n' +
        'L\n' +
        'XL\n' +
        '2XL\n' +
        '3XL\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'Width, cm\n' +
        '47.00\n' +
        '52.00\n' +
        '56.50\n' +
        '61.00\n' +
        '64.00\n' +
        '68.00\n' +
        '\n' +
        '\n' +
        'Length, cm\n' +
        '71.00\n' +
        '75.00\n' +
        '78.50\n' +
        '82.00\n' +
        '83.50\n' +
        '85.00\n' +
        '\n' +
        '\n' +
        '\n' +
        '&nbsp;',
      quantity: 53946,
      num_favorers: 0,
      tags: [],
      processing_min: 1,
      processing_max: 7,
      price: 44,
      img: 'https://i.etsystatic.com/33658858/r/il/bcfd6a/3813100052/il_fullxfull.3813100052_2m9i.jpg',
      onSale: true,
      taxonomy_id: 6
    },
    {
      title: 'Mardi Gras Shirt Kiss Lips Glitter Vinyl, Soft Unisex V Neck Bella+Canvas Purple Green Gold, Womens Mardi Gras Shirt, Louisiana',
      description: 'This listing is for 1 GLITTER &quot;PURPLE GREEN & GOLD KISSING LIPS&quot; Bella + Canvas BLACK (( OR )) WHITE Shirt with vinyl iron on professionally pressed!  \n' +
        '\n' +
        '**NOW CARRYING INFANT, TODDLER, YOUTH, & ADULT SIZES** \n' +
        '\n' +
        'Infant, Toddler, & Youth listing here: https://www.etsy.com/listing/753992192/mardi-gras-shirt-kiss-lips-glitter-vinyl?ref=shop_home_active_1&frs=1\n' +
        '\n' +
        'Please see size chart in photos to make sure you order the correct size!\n' +
        '\n' +
        'CARE INSTRUCTIONS:\n' +
        'Machine wash inside out, in cool water.\n' +
        'Do not use fabric softener. \n' +
        'Dry on lowest settings or air dry.\n' +
        'Do not use bleach.\n' +
        'Do not iron over design after shirt has been pressed.\n' +
        '\n' +
        'Colors may vary slightly - depending on your screen.\n' +
        '\n' +
        '**FREE LOCAL PICKUP IS AVAILABLE** send message to seller for CODE\n' +
        '\n' +
        '\n' +
        'Returns and exchanges are not accepted on &quot;made to order&quot; items.  Please contact me if you have any issues with your order.  I want to make sure you are completely satisfied with your purchase!\n' +
        'Colors may vary slightly, depending on your computer screen.\n' +
        '\n' +
        'Please check the listing photos carefully for the color and sizing chart.  All sizing charts have exact measurements listed.  Because all items are made after you order, I DO NOT accept returns for sizing issues.  If you have any questions about sizing please don&#39;t hesitate to reach out.',
      quantity: 603,
      num_favorers: 496,
      tags: [
        'best selling',    'Louisiana shirt',
        'louisiana proud', 'cajun',
        'lsu',             'state shirt',
        'baton rouge',     'new orleans',
        'crawfish',        'festival',
        'MARDI GRAS NOLA', 'FAT TUESDAY',
        'BOURBON STREET'
      ],
      processing_min: 1,
      processing_max: 10,
      price: 26.49,
      img: 'https://i.etsystatic.com/16932422/r/il/4fdb36/2207936695/il_fullxfull.2207936695_m22t.jpg',
      onSale: true,
      taxonomy_id: 6
    },
    {
      title: 'Lashes Faded Shirt',
      description: 'Upgrade any t-shirt collection with some character. This unisex faded shirt is made 100% with preshrunk, combed, ring-spun cotton for total comfort on a daily basis. The regular fit keeps the wearer cozy in all occasions while the faded color scheme adds a retro touch to their style&nbsp;plus with our super cute Lashes design this will become your new favourite top!\n' +
        'This is part of our brand new apparel line which is environmentally friendly as each piece is only printed once you order, saving on wastage so less items end up in landfill and allowing us to offer a wide variety of sizes an colours. Select your item and add to cart and it will be printed and shipped directly to you from the manufacturer. Please note all lash apparel items have a separate shipping fee and times will vary especially at the moment due to the latest covid out break.&nbsp;\n' +
        '.: 100% preshrunk, combed, ring-spun cotton\\n.: Medium fabric (5.3 oz/yd&sup2; (180 g/m&sup2;))\\n.: Regular fit\\n.: Sewn-in label\n' +
        '\n' +
        '\n' +
        '\n' +
        '&nbsp;\n' +
        'S\n' +
        'M\n' +
        'L\n' +
        'XL\n' +
        '2XL\n' +
        '3XL\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'Width, cm\n' +
        '47.00\n' +
        '52.00\n' +
        '56.50\n' +
        '61.00\n' +
        '64.00\n' +
        '68.00\n' +
        '\n' +
        '\n' +
        'Length, cm\n' +
        '71.00\n' +
        '75.00\n' +
        '78.50\n' +
        '82.00\n' +
        '83.50\n' +
        '85.00\n' +
        '\n' +
        '\n' +
        '\n' +
        '&nbsp;',
      quantity: 41958,
      num_favorers: 0,
      tags: [],
      processing_min: 1,
      processing_max: 7,
      price: 44,
      img: 'https://i.etsystatic.com/33658858/r/il/7bfd2b/3860622721/il_fullxfull.3860622721_c7gl.jpg',
      onSale: true,
      taxonomy_id: 6
    },
    {
      title: 'Girl Boss Faded Shirt',
      description: 'Upgrade any t-shirt collection with some character. This unisex faded shirt is made 100% with preshrunk, combed, ring-spun cotton for total comfort on a daily basis. The regular fit keeps the wearer cozy in all occasions while the faded color scheme adds a retro touch to their style&nbsp;plus with our super cute Girl Boss design this will become your new favourite top!\n' +
        'This is part of our brand new apparel line which is environmentally friendly as each piece is only printed once you order, saving on wastage so less items end up in landfill and allowing us to offer a wide variety of sizes an colours. Select your item and add to cart and it will be printed and shipped directly to you from the manufacturer. Please note all lash apparel items have a separate shipping fee and times will vary especially at the moment due to the latest covid out break.&nbsp;\n' +
        '.: 100% preshrunk, combed, ring-spun cotton\\n.: Medium fabric (5.3 oz/yd&sup2; (180 g/m&sup2;))\\n.: Regular fit\\n.: Sewn-in label\n' +
        '\n' +
        '\n' +
        '\n' +
        '&nbsp;\n' +
        'S\n' +
        'M\n' +
        'L\n' +
        'XL\n' +
        '2XL\n' +
        '3XL\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'Width, cm\n' +
        '47.00\n' +
        '52.00\n' +
        '56.50\n' +
        '61.00\n' +
        '64.00\n' +
        '68.00\n' +
        '\n' +
        '\n' +
        'Length, cm\n' +
        '71.00\n' +
        '75.00\n' +
        '78.50\n' +
        '82.00\n' +
        '83.50\n' +
        '85.00\n' +
        '\n' +
        '\n' +
        '\n' +
        '&nbsp;',
      quantity: 41958,
      num_favorers: 0,
      tags: [],
      processing_min: 1,
      processing_max: 7,
      price: 44,
      img: 'https://i.etsystatic.com/33658858/r/il/214957/3860622543/il_fullxfull.3860622543_ns5k.jpg',
      onSale: true,
      taxonomy_id: 6
    },
    {
      title: 'Lilac lace three-quarter length sleeved bolero/shrug/jacket  with satin edging',
      description: 'This is a beautiful hand made lilac lace shrug ideal for weddings or special occasions.   It can also be worn with casual wear.  \n' +
        '\n' +
        'The shrug has a lilac satin edging and full length sleeves (3/4 sleeves are available on request).\n' +
        '\n' +
        'It can be made in any size from 8 to 24 (UK sizes).  It is made in the UK. \n' +
        '\n' +
        'It is normally sent out to you within 5 days, but I am very happy to make your order a priority if you need it urgently.  Just let me know the date needed by.\n' +
        '\n' +
        'Postage is free in the UK!  \n' +
        '\n' +
        'International postage is £9.\n' +
        '\n' +
        'I am happy to exchange items or refund your payment if you are less than happy with the product.\n' +
        '\n' +
        'I also make this item in silver, navy, black  red, white and ivory.   (Let me know if you are interested in any of these colours and cannot see a listing for them)\n' +
        '\n' +
        'Let me know if you need any extra arm room. You can do this by informing me of your upper arm circumference in inches or centimetres.\n' +
        '\n' +
        '*** Just to say that I also am a pet portrait artist (watercolours).  Please visit my Etsy shop.  Here is the link:\n' +
        'https://www.etsy.com/uk/shop/JennyCollingeArtist?ref=seller-platform-mcnav',
      quantity: 8,
      num_favorers: 73,
      tags: [
        'wedding',
        'bridal',
        'shrug',
        'jacket',
        'bolero',
        'organza',
        'sheer',
        'wrap',
        'stole',
        'chiffon',
        'lace',
        'lilac',
        '3 quarter sleeves'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 27.99,
      img: 'https://i.etsystatic.com/6270161/r/il/00fd9e/1426878174/il_fullxfull.1426878174_f3kn.jpg',
      onSale: true,
      taxonomy_id: 6
    },
    {
      title: 'Hades Lord Of The Dead Running Villain Costume | Sparkly Athletic Costume',
      description: 'Included in this purchase is:\n' +
        '\n' +
        '- Racerback running shirt with detailed applique\n' +
        '- Black sparkle inspired skirt\n' +
        '\n' +
        'These racerback shirts are very high quality and made with great craftsmanship for our fans.\n' +
        'This listing includes the racerback spandex running shirt and matching sparkle skirt. \n' +
        '\n' +
        'Shirt is made from high quality athletic material to create a form fitting and comfortable athletic shirt (nylon/spandex  blend).  You will feel the difference!\n' +
        'These shirts are on the longer side to accommodate our taller runners.  If you would like it to be made shorter, please request so in the order instructions at checkout. Please see size chart in photos.\n' +
        '\n' +
        'These skirts do not include under shorts. Be sure to wear your favorite spandex or booty shorts under.\n' +
        '\n' +
        'Fabric Care: Hand Wash. Line Dry.',
      quantity: 55,
      num_favorers: 21,
      tags: [
        'Running costume',
        'Running skirt',
        'Run Disney',
        'Adult costume',
        'Half marathon',
        'Disney costume',
        'disney villain',
        'maleficent costume',
        'evil witch costume',
        'maleficent shirt'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 95,
      img: 'https://i.etsystatic.com/7516020/r/il/fbb161/3299004765/il_fullxfull.3299004765_mkel.jpg',
      onSale: true,
      taxonomy_id: 6
    },
    {
      title: 'Girl Boss Hoodie',
      description: 'Nothing beats a warm, good quality hoodie. This mid-weight unisex supply hoodie is made of 80% cotton and 20% polyester anti-pill fleece and for sure is the piece of clothing you need. It also features a kangaroo pocket, sleeve cuff ribbing, and is preshrunk to minimize shrinkage&nbsp;plus with our super cute Girl Boss design this will become your new favourite jumper!\n' +
        'This is part of our brand new apparel line which is environmentally friendly as each piece is only printed once you order, saving on wastage so less items end up in landfill and allowing us to offer a wide variety of sizes an colours. Select your item and add to cart and it will be printed and shipped directly to you from the manufacturer. Please note all lash apparel items have a separate shipping fee and times will vary especially at the moment due to the latest covid out break.&nbsp;\n' +
        '.: 80% cotton, 20% polyester (fiber content may vary for different colors)\\n.: Medium-heavy fabric (8.5 oz /yd&sup2; (290 g/m&sup2;))\\n.: Sewn in label\\n.: Regular fit\n' +
        '\n' +
        '\n' +
        '\n' +
        '&nbsp;\n' +
        'XS\n' +
        'S\n' +
        'M\n' +
        'L\n' +
        'XL\n' +
        '2XL\n' +
        '3XL\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'Width, cm\n' +
        '49.00\n' +
        '52.00\n' +
        '55.00\n' +
        '58.00\n' +
        '61.00\n' +
        '64.00\n' +
        '67.00\n' +
        '\n' +
        '\n' +
        'Length, cm\n' +
        '69.20\n' +
        '72.00\n' +
        '74.50\n' +
        '77.00\n' +
        '79.50\n' +
        '82.00\n' +
        '84.50\n' +
        '\n' +
        '\n' +
        '\n' +
        '&nbsp;',
      quantity: 59940,
      num_favorers: 0,
      tags: [],
      processing_min: 1,
      processing_max: 7,
      price: 75,
      img: 'https://i.etsystatic.com/33658858/r/il/a0b523/3860622413/il_fullxfull.3860622413_lvnq.jpg',
      onSale: true,
      taxonomy_id: 6
    },
    {
      title: 'oes sistar silhouette SVG PNG cricut SUBLIMATION',
      description: 'You are purchasing a digital file made by me. You will receive an instant download after purchsse. No physical item will be sent. You will need silhouette designer edition to open this file or any program that supports SVG’s such as Cricut design space\n' +
        '\n' +
        '\n' +
        '*payment is for my time creating the image. All respective copyrights remain with the owner\n' +
        '*I donot give permission to resell image or give away free\n' +
        '*I donot give permission to use my image in any clipart,download or svg for sell\n' +
        '\n' +
        '**Feel free to use my image on any physical products you make such as tshirts,cups,hats,purses,etc......\n' +
        '\n' +
        '\n' +
        '\n' +
        'Thank you',
      quantity: 670,
      num_favorers: 254,
      tags: [
        'svg',         'cricut',
        'silhouette',  'diva',
        'tshirt',      'birthday',
        'oes',         'sistar',
        'SUBLIMATION'
      ],
      processing_min: null,
      processing_max: null,
      price: 1.25,
      img: 'https://i.etsystatic.com/14430285/r/il/e22cf8/2192984471/il_fullxfull.2192984471_6jej.jpg',
      onSale: true,
      taxonomy_id: 6
    },
    {
      title: 'Lash Drama Hoodie',
      description: 'Nothing beats a warm, good quality hoodie. This mid-weight unisex supply hoodie is made of 80% cotton and 20% polyester anti-pill fleece and for sure is the piece of clothing you need. It also features a kangaroo pocket, sleeve cuff ribbing, and is preshrunk to minimize shrinkage&nbsp;plus with our super cute Lash Drama design this will become your new favourite jumper!\n' +
        'This is part of our brand new apparel line which is environmentally friendly as each piece is only printed once you order, saving on wastage so less items end up in landfill and allowing us to offer a wide variety of sizes an colours. Select your item and add to cart and it will be printed and shipped directly to you from the manufacturer. Please note all lash apparel items have a separate shipping fee and times will vary especially at the moment due to the latest covid out break.&nbsp;\n' +
        '.: 80% cotton, 20% polyester (fiber content may vary for different colors)\\n.: Medium-heavy fabric (8.5 oz /yd&sup2; (290 g/m&sup2;))\\n.: Sewn in label\\n.: Regular fit\n' +
        '\n' +
        '\n' +
        '\n' +
        '&nbsp;\n' +
        'XS\n' +
        'S\n' +
        'M\n' +
        'L\n' +
        'XL\n' +
        '2XL\n' +
        '3XL\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'Width, cm\n' +
        '49.00\n' +
        '52.00\n' +
        '55.00\n' +
        '58.00\n' +
        '61.00\n' +
        '64.00\n' +
        '67.00\n' +
        '\n' +
        '\n' +
        'Length, cm\n' +
        '69.20\n' +
        '72.00\n' +
        '74.50\n' +
        '77.00\n' +
        '79.50\n' +
        '82.00\n' +
        '84.50\n' +
        '\n' +
        '\n' +
        '\n' +
        '&nbsp;',
      quantity: 27972,
      num_favorers: 0,
      tags: [],
      processing_min: 1,
      processing_max: 7,
      price: 75,
      img: 'https://i.etsystatic.com/33658858/r/il/cbd07e/3813099510/il_fullxfull.3813099510_g95n.jpg',
      onSale: true,
      taxonomy_id: 6
    },
    {
      title: '24pc Full Nail French Tips Natural Finger False Fake Art Cover Manicure Acrylic UV Gel Long Short press on Nails Stickers Tabs',
      description: '24pc Full Nail French Tips\n' +
        '\n' +
        'Each set comes with 12 sizes, 2 of each size is included\n' +
        '\n' +
        'Each Set includes 1 sheet of 20pc Nail Tabs\n' +
        '\n' +
        '\n' +
        'Mid Coffin/ Ombre Mid Coffin: Width range from 7mm - 1.4cm, Length Range from 1.6cm - 2.3cm\n' +
        '\n' +
        'Ombre Stiletto: Width range from 7mm - 1.4cm, Length Range from 2.5cm - 3.3cm\n' +
        '\n' +
        'French Almond: Width Range from 7mm - 1.4cm, Length range from 1.9cm - 2.5cm\n' +
        '\n' +
        'French Oval: Width range from 7mm - 1.5cm, length range from 1.6mm - 2.3cm\n' +
        ' \n' +
        'Please Note: Nail Sets does not include Glue and it Does not come in a box. Nails are poly bagged and sent in a padded envelope.\n' +
        '\n' +
        'The reason why packaging is simple is because the dimension of the original packaging is so big, it would cost extra $20 to ship it internationally. We don&#39;t think it&#39;s worth it for something that is going to end up in the bin anyway. So we took them out to pass the savings on to you.',
      quantity: 70,
      num_favorers: 1449,
      tags: [
        'french tips',
        'natural tips',
        'false nails',
        'nude nails',
        'meliney',
        'full cover',
        'nail tips',
        'manicure',
        'french manicure',
        'nails',
        'nail tabs'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 14.99,
      img: 'https://i.etsystatic.com/10066857/r/il/986e97/2164881948/il_fullxfull.2164881948_egix.jpg',
      onSale: true,
      taxonomy_id: 7
    },
    {
      title: 'Felt Swan Die Cuts -2 Swan Embellishments for Crafting -Felt Die Cut Swan Toppers 40% Wool Felt',
      description: 'Beautiful white felt swan embellishments for use in your crafting projects.\n' +
        '\n' +
        'These lovely swans are perfect for use on wedding cards, but are also great for birthday and other greeting cards. You could use them in journals or scrapbook pages, on tags or even sewn on glued on to fabric bags and other soft projects.\n' +
        '\n' +
        'The swans are made from quality 40% wool felt. \n' +
        '\n' +
        'Sold in multiples of 2 swans.  The default is one swan facing left, and one facing right. But if you want them both facing the same way, just let me know in the &quot;Note to Seller&quot; when ordering.\n' +
        '\n' +
        'Each white swan is 8 cm high and 8 cm wide (3.14&quot; x 3.14&quot;).  They are 7 cm (2.75&quot;) tall without a crown.\n' +
        '\n' +
        'You can choose whether you would like your swans to wear the little crowns, or not.  If you want just some swans in crowns, and some not (or different colours of crowns), just let me know when ordering, or message me.\n' +
        '\n' +
        'The swans are white, but if you would prefer a different colour, just message me.\n' +
        '\n' +
        '- Return to the Tin Teddy Die Cuts shop:\n' +
        'http://www.etsy.com/shop/tinteddydiecuts\n' +
        '\n' +
        'I cut to order, so if you would like different colours or quantities of swan toppers, please message me about a custom order just for you.',
      quantity: 3,
      num_favorers: 0,
      tags: [
        'craft embellishment',
        'crafting die cuts',
        'wedding card topper',
        'swan die cut',
        'white swan shape',
        'swan with crown',
        'felt princess swan',
        'white felt swan die',
        'felt mute swan cut',
        'felt bird die cut',
        'wool felt swan white',
        'black swan waterbird',
        'birthday card topper'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 2,
      img: 'https://i.etsystatic.com/18649796/r/il/3b010f/3860621259/il_fullxfull.3860621259_svuq.jpg',
      onSale: true,
      taxonomy_id: 7
    },
    {
      title: '2 Pcs Watermelon Tourmaline, 100% Natural Bio Tourmaline Slices, 7.40 Cts Pair Fancy Rose Cut Slice, Faceted Rose Cut Slice Tourmaline&gt;TS-40',
      description: 'WELCOME &gt;&gt; COLORGEMS11 &lt;&lt;\n' +
        '\n' +
        'Details-\n' +
        'Shape : Fancy Rose Cut Slices\n' +
        'Weight: 7.40 Carat\n' +
        'Size     : 15.50x9x3 mm Approx\n' +
        'Color  : Bio-Color Watermelon \n' +
        'Condition: Excellent\n' +
        '\n' +
        '\n' +
        'Shipping Policy\n' +
        '\n' +
        '\n' +
        'Returns & exchanges\n' +
        'I gladly accept returns, exchanges and cancellations\n' +
        'Contact me within: 21 days of delivery\n' +
        'Ship items back within: 30 days of delivery\n' +
        'Request a cancellation within: 12 hours of purchase\n' +
        'The following items can&#39;t be returned or exchanged\n' +
        'Because of the nature of these items, unless they arrive damaged or defective, I can&#39;t accept returns for:\n' +
        'Custom or personalized orders\n' +
        'Perishable products (like food or flowers)\n' +
        'Digital downloads\n' +
        'Intimate items (for health/hygiene reasons)\n' +
        'Conditions of return\n' +
        'Buyers are responsible for return shipping costs. If the item is not returned in its original condition, the buyer is responsible for any loss in value.\n' +
        'Questions about your order?\n' +
        'Please contact me if you have any problems with your order.\n' +
        '\n' +
        '\n' +
        'Please check out my other items in my shop.\n' +
        '\n' +
        'Just contact Us, We&#39;ll set it up!\n' +
        '\n' +
        'THANK YOU AND HAPPY SHOPPING',
      quantity: 1,
      num_favorers: 0,
      tags: [
        'Tourmaline Slices',
        'Rose Cut Slices',
        'Rose Cut Tourmaline',
        'Loose tourmaline',
        'Tourmaline Gem',
        'Bio Tourmaline',
        'Multi Tourmaline',
        'Gemstones',
        'Tourmaline Gemstones',
        'Loose Gemstones',
        'Mixed Shape Slices',
        'Pink Tourmaline',
        'Fancy Rose Cut'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 54.86,
      img: 'https://i.etsystatic.com/21982392/r/il/85b8c5/2528377289/il_fullxfull.2528377289_kg1n.jpg',
      onSale: true,
      taxonomy_id: 7
    },
    {
      title: 'Macrame Kit Leaf DIY. Choose your Colour!',
      description: 'Create a beautiful Macramé decoration for your home. The finished piece can either be a feather or leaf. This kit is suitable for beginners and includes full instructions. All the hard work had been taken out, so you can get straight to crafting! \n' +
        '\n' +
        'Completed length is approximately 45cm, length of leaf/feather 25cm.\n' +
        '\n' +
        'What’s in the box? \n' +
        '\n' +
        '🌈 Pre-measured and cut cotton cord\n' +
        '\n' +
        '🌈 Felt for backing\n' +
        '\n' +
        '🌈 Leaf template\n' +
        '\n' +
        '🌈 Wooden beads\n' +
        '\n' +
        '🌈 Full written instructions with colour pictures\n' +
        '\n' +
        'To complete the piece, all you will need are scissors and a comb or brush. \n' +
        '\n' +
        '100% cotton thread, spun in the UK.',
      quantity: 4,
      num_favorers: 255,
      tags: [
        'gift',
        'Mothers day',
        'boho',
        'macrame leaf',
        'macrame pattern',
        'macrame thread',
        'craft kit',
        'macrame set',
        'craft set',
        'macrame kit',
        'wall hanging',
        'macrame wall hanging',
        'leaf'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 8.49,
      img: 'https://i.etsystatic.com/23033288/r/il/7adb35/3460364576/il_fullxfull.3460364576_lv57.jpg',
      onSale: true,
      taxonomy_id: 7
    },
    {
      title: '2in1 Crochet Pattern - Chubby Milky Cow, crochet milk cow pattern, cute, farm animal',
      description: 'This is a PDF crochet pattern, not a finished toy in the picture!\n' +
        '\n' +
        'The pattern is written in ENGLISH! It includes both sitting & standing versions, ice cream & cookie bag!\n' +
        'Size approx: 25cm\n' +
        '\n' +
        'Don&#39;t forget to share with me your cutie on my Instagram @rin.meow21\n' +
        'Bottom from my heart, THANK YOU for purchased this crochet pattern.',
      quantity: 416,
      num_favorers: 19104,
      tags: [
        'chubby cow',
        'milk cow',
        'ice cream cow',
        'squishmallow',
        'plush',
        'cow plush',
        'milk cow plush',
        'crochet cow',
        'handmade',
        'cute cow',
        'cute milk cow',
        'lovely cow',
        'milk cow pattern'
      ],
      processing_min: null,
      processing_max: null,
      price: 70,
      img: 'https://i.etsystatic.com/24486068/r/il/f21903/3259795532/il_fullxfull.3259795532_dsok.jpg',
      onSale: true,
      taxonomy_id: 7
    },
    {
      title: '10+free 4yds Embroidery cotton ribbon eyelet lace trim 1.6&quot;(3.3cm) white YH1073 laceking2013 made in Korea',
      description: '◆ Length\n' +
        '   - 1 yard\n' +
        '     If you buy 2 quantity, you will get a 2 yards consecutive piece.\n' +
        '     If you buy 3 quantity, you will get a 3 yards consecutive piece.\n' +
        '\n' +
        '   - 14 yards (approx. 12.5m) is 1 Spool \n' +
        '      If you buy 2 quantity of this 14 yards option, you will get 2 spools of 14 yards trims\n' +
        '\n' +
        '◆ Width : about 1.6&quot;( 3.3cm)\n' +
        '\n' +
        'Base Fabric : Cotton\n' +
        '\n' +
        'Embroidery Thread : Cotton\n' +
        '\n' +
        'Color : White and Ivory\n' +
        '\n' +
        'Check out my other items!\n' +
        '\n' +
        'Please Bear in Mind That Photo May Slightly Different From Actual Item in Terms of Color Due to the Lighting During Photo Shooting or the Monitor&#39;s Display\n' +
        '\n' +
        'Payment \n' +
        '\n' +
        'We accept Paypal only.\n' +
        '\n' +
        '◆ Shipping\n' +
        '\n' +
        'We are not responsible for the result that the customer provide the incorrect address. Please double check the address before checkout. \n' +
        '\n' +
        'The small order is shipped from South Korea to US office in NV first and next shipped to US buyers by USPS first class. Delivery time takes average 4-8 business days.\n' +
        '\n' +
        'Large order will be shipped from  SOUTH KOREA directly by DHL. Delivery time takes only 2-4 business days. Please leave a phone number for safe delivery. \n' +
        '\n' +
        'The order of UK buyer is shipped by Standard International Shipping from South Korea. Delivery time takes 10-16 business days. Tracking number is provided. If total weight is over 1kg, the order is shipped by DHL from South Korea. In case of this, delivery time takes 2-4 business days. \n' +
        '\n' +
        'The order of other location except to US & UK is shipped by DHL from S. Korea. Delivery time takes 2-5 business days. Please leave a phone number for safe delivery. \n' +
        '\n' +
        'Our Products\n' +
        '\n' +
        'PnM textile is making our own products. Bulk orders are welcome\n' +
        '\n' +
        'You must be satisfied with all items.\n' +
        '\n' +
        'They are unique, high quality lace trims.\n' +
        '\n' +
        'Made in South Korea\n' +
        '\n' +
        '\n' +
        'If there is any problem with items, please let us know before leave neutral or negative feedback.',
      quantity: 899,
      num_favorers: 274,
      tags: [
        'Supplies', 'Commercial',
        'Trim',     'fabrictrim',
        'sewing',   'quilting',
        'floral',   'kawaii',
        'yardage',  'lace',
        'eyelet'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 1.7,
      img: 'https://i.etsystatic.com/8062307/r/il/553812/1405855125/il_fullxfull.1405855125_qvf3.jpg',
      onSale: true,
      taxonomy_id: 7
    },
    {
      title: 'Big Block Quilts Pattern Book, Annie&#39;s Quilting 1414481,',
      description: 'This is the time to discover quilts with big blocks. Cut your piecing time in half with these larger than life blocks. Ten unique projects to choose from in all skill levels. You&#39;ll find everything from table toppers to bed quilts. Its time to up size for and explore the newest trend in quilting. Quilt Basics and raw edge applique sidebar included in book. \n' +
        '\n' +
        'Due to copyright law, PATTERNS MAY NOT BE RETURNED.\n' +
        '\n' +
        'To see what else is in store, please visit Jambearies:\n' +
        'https://www.etsy.com/shop/Jambearies',
      quantity: 1,
      num_favorers: 4,
      tags: [
        'easy quilt pattern',
        'Jambearies',
        'block project book',
        'quilt block book',
        'Big Block Quilts',
        'Big quilt blocks',
        'Annies 1414481',
        'quilt pattern book',
        'table topper pattern',
        'table runner pattern',
        'quick quilts book',
        'fast quilt patterns',
        'quilts from yardage'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 9.95,
      img: 'https://i.etsystatic.com/5714502/r/il/73bb33/2396250623/il_fullxfull.2396250623_n7a4.jpg',
      onSale: true,
      taxonomy_id: 7
    },
    {
      title: 'Beach Please Summer Tote | Crochet Bag | Crochet Tote Bag | Criss Cross Crochet Bag | Crochet Beach Bag | Summer Crochet Bag',
      description: 'Beach Please Summer Tote - Crochet Pattern  ***INSTANT DOWNLOAD! **PDF PATTERN - NOT AN ACTUAL ITEM***\n' +
        '\n' +
        'This pattern is available for free on my blog - www.loopsandlovecrochet.com. Here you are paying to purchase an ad-free version of this crochet pattern.\n' +
        '\n' +
        'When finished, this bag measures approx. 16 inches wide and 12 inches tall (when laying flat - not including the handles). The generous size makes a perfectly sized bag for all of your adventures - day trips, shopping, beach bag, splash park, picnic, etc. \n' +
        '\n' +
        'This crochet pattern is easy to follow and  beginner-friendly, but still fun for more experienced crocheters. I hope you enjoy making this bag as much as I did! \n' +
        '\n' +
        'Materials:\n' +
        '•\tBulky weight yarn – I used Bernat Maker Home Dec yarn for this bag. See the gauge in the pattern for yarn substitutions.\n' +
        '•\t6 mm  crochet hook. \n' +
        '•\tYarn needle for sewing pieces together and weaving in ends. \n' +
        ' \n' +
        '**You may make and sell any items made from this pattern, but please link back to this pattern or Loops & Love Crochet.  Please do not share, reproduce or copy this pattern for any purpose, in whole or in part. Please do not re-publish photos as your own. Thank you for for supporting Loops & Love Crochet. \n' +
        '\n' +
        'Thank you and Happy Crocheting! \n' +
        'Loops & Love Crochet',
      quantity: 86,
      num_favorers: 195,
      tags: [
        'crochet pattern',
        'crochet bag',
        'crochet tote bag',
        'home dec yarn',
        'bernat home dec',
        'crochet beach bag',
        'summer bag',
        'beach bag',
        'easy crochet bag',
        'striped crochet bag',
        'crochet tote'
      ],
      processing_min: null,
      processing_max: null,
      price: 4.3,
      img: 'https://i.etsystatic.com/16977207/r/il/b8631d/1935083634/il_fullxfull.1935083634_a07c.jpg',
      onSale: true,
      taxonomy_id: 7
    },
    {
      title: 'Natural Citrine Faceted Round Beads Citrine Round Ball Shape Beads 6-7.MM Citrine Gemstone Beads Jewelry Making Round Beads Top Quality.',
      description: 'GEMSTONE ~~~~ CITRINE\n' +
        'SHAPE          ~~~~ ROUND (FACETED\n' +
        'SIZE              ~~~~ 6 To 7.MM \n' +
        'LENGTH       ~~~~ 18 INCH LONG STRAND\n' +
        'QUALITY     ~~~~  TOP\n' +
        '\n' +
        'BEAUTIFUL CITRINE BEADS 100% NATURAL.\n' +
        '\n' +
        'WHOLESALE SHOP\n' +
        '\n' +
        'If you have any questions about this item please contact me I will get back to you as soon as.\n' +
        'We accept bulk or wholesale orders for any gemstone which you&#39;ll get best wholesale prices! Hence you can contact me with your requirement of bulk or wholesale order. I’ll be happy to fulfill your order.',
      quantity: 10,
      num_favorers: 1,
      tags: [
        'Citrine beads',
        'Yellow color beads',
        'semi precious beads',
        '6mm citrine beads',
        'wholesale gemstone',
        'gift for her',
        'yellow sapphire bead',
        '6-7mm round beads',
        'round necklace',
        'citrine round beads',
        'faceted citrine bead',
        'round strand beads',
        'round shape beads'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 142.8,
      img: 'https://i.etsystatic.com/14849991/r/il/50daa5/3585435097/il_fullxfull.3585435097_oofc.jpg',
      onSale: true,
      taxonomy_id: 7
    },
    {
      title: 'Cry me a river Build a bridge and Get over it svg, Funny svg, diy sign svg design, diy mug design svg file, sarcasm svg, sarcastic svg file',
      description: '&quot;Cry me a river...&quot; SVG File.\n' +
        '\n' +
        '****you will NOT receive a physical copy of the design*** \n' +
        '\n' +
        'I have personally tested each and every design on my vinyl cutting machine and software. This guarantees that you will be getting a quality design that will work on your machine. Do not worry the design that you receive will not have a background/watermark. Once you download the file from etsy then it will be ready to use!\n' +
        '\n' +
        'Terms of use\n' +
        'This file is for PERSONAL and SMALL BUSINESS use only. It is NOT for mass production. \n' +
        'This file CANNOT be sold as a digital file! You MAY use this file for producing physical products such as\n' +
        'signs, shirts, cup, posters, ect...\n' +
        '\n' +
        'NO REFUNDS will be given on digital files. If you have any questions please feel free to contact me!***FAQ***',
      quantity: 997,
      num_favorers: 25,
      tags: [
        'diy shirt',
        'diy sign',
        'cricut download',
        'circut svg',
        'classy svg',
        'Cricut Explore',
        'svg',
        'cry me a river',
        'cry a river',
        'build a bridge',
        'get over it',
        'Cry me a river svg',
        'funny svg'
      ],
      processing_min: null,
      processing_max: null,
      price: 1.99,
      img: 'https://i.etsystatic.com/14709431/r/il/5d3834/2180250648/il_fullxfull.2180250648_lkpd.jpg',
      onSale: true,
      taxonomy_id: 7
    },
    {
      title: 'Papier Serviette Decoupage Serviettentechnik Paper Art Karten GERBERA BLUME rosa 2 Stück',
      description: 'Schöne Papierservietten für Decoupage/Serviettentechnik, Paper Art, Kartengestaltung, Kerzendeko, Stoff-Art, Scrapbooking, Schmuckarbeiten, Collagen uvm...\n' +
        '\n' +
        'Die Servietten können vielseitig auf Holz, Papier, Stein, Pappe, Leinwand, Metall, Beton, Wachs, Stoff usw. aufgebracht werden. Dazu wird je nach Material der passende Decoupage Kleber benötigt (nicht im Angebot enthalten!). \n' +
        '\n' +
        'Bitte beachten Sie: Bei Kontakt des Werkstücks mit Feuchtigkeit, muss auch eine Versiegelung (mit z. B. Lack) erfolgen.\n' +
        '\n' +
        'Da man für Serviettentechnik ja oft nur Teilstücke bzw. Sprüche oder einzelne Motive benötigt, bieten wir deshalb eine 2er Verpackungseinheit (2 Stück/Motiv) an. Das spart Kosten und Platz!\n' +
        '\n' +
        'Die Servietten werden in festem Karton verschickt, damit möglichst keine Beschädigung durch den Versand erfolgt.\n' +
        '\n' +
        '\n' +
        'Motiv: GERBERA BLUMEN\n' +
        '\n' +
        'Material: Papier\n' +
        '\n' +
        'Grösse: ca. 33 x 33 cm (3-lagig)\n' +
        ' \n' +
        'Farbe: rosa grau\n' +
        '\n' +
        'Inhalt: 2 Stück (gleiches Motiv)\n' +
        '\n' +
        '\n' +
        'Bitte beachten: Aufgrund der Lichtverhältnisse bei der Produktfotografie und unterschiedlichen Bildschirmeinstellungen kann es dazu kommen, dass die Farbe des Produktes nicht authentisch wiedergegeben wird.',
      quantity: 4,
      num_favorers: 0,
      tags: [
        'Decoration',       'napkin',
        'napkin technique', 'DIY',
        'Decoupage',        'Scrapbook',
        'paper napkin',     'paperart',
        'flowers',          'pink',
        'gerbera',          'grey',
        'flower'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 1,
      img: 'https://i.etsystatic.com/9559903/r/il/fc0d9d/3813099140/il_fullxfull.3813099140_ar61.jpg',
      onSale: true,
      taxonomy_id: 7
    },
    {
      title: 'Lion patch embroidery design.',
      description: 'We suggest to acquire the ready embroidery design &quot;Lion Patch&quot;. It can be used for making patches. Also it can be embroidered at once on clothes.\n' +
        'Upon purchase you get an archive with:\n' +
        '1. 8 different embroidery formats: DST, PES, EXP, HUS, JEF, VIP, VP3, XXX.\n' +
        '2. Three sizes of the embroidery design:\n' +
        '      - 76х53mm / 3х2.1 inches/ 18500 stitches;\n' +
        '      - 99хmm / 4х2.7 inches/ 25000 stitches;\n' +
        '      - 126х89 mm / 5х3.5 inches / 35000 stitches.\n' +
        '3. PDF files with color layers.',
      quantity: 8,
      num_favorers: 32,
      tags: [
        'embroidery designs',
        'patches',
        'embroidery paterns',
        'custom digitizing',
        'custom patches',
        'embroidery machines',
        'lion patch',
        'biker patches',
        'animals',
        'Lion embroidery',
        'jungle designs',
        'lion design',
        'lion skull e'
      ],
      processing_min: null,
      processing_max: null,
      price: 6,
      img: 'https://i.etsystatic.com/12072777/r/il/987403/921954512/il_fullxfull.921954512_3srl.jpg',
      onSale: true,
      taxonomy_id: 7
    },
    {
      title: 'Gymnastics silhouette, Gymnast silhouette, Gymnastic Clipart, Gymnast Dance Clipart Vector PNG, SVG, DXF, ai, eps Instant Download',
      description: 'Gymnastics silhouette, Gymnast silhouette, Gymnastic Clipart, Gymnast Clipart Clip art Vector PNG, SVG, DXF, Ai, EPS Instant Download - Part 1\n' +
        '\n' +
        ' Total 24 high quality clip arts:\n' +
        '•48 PNG images (24 in black & 24 in white) High Resolution (over 300dpi) LARGE size PNG with transparency of each clip art in approx. 10 inches at the longest side without watermark, background or text.\n' +
        '\n' +
        '• 24 SVG format of individual silhouettes\n' +
        '\n' +
        '• 1 DXF Format for cutting machines\n' +
        '\n' +
        '• Other 2 Vector Format files, each in .EPS and .AI (Illustrator) that you can edit in most image processing software (Adobe Photoshop, Adobe Illustrator, Corel Draw, etc) and Vector format file means you can edit or enlarge the image to ANY SIZE without losing its quality!\n' +
        '\n' +
        'More Gymnastics silhouettes here:\n' +
        'part 1 : https://www.etsy.com/listing/572386648\n' +
        'part 2 : https://www.etsy.com/listing/5723870187\n' +
        '\n' +
        'Related Items:\n' +
        'Ballerina SVG : https://www.etsy.com/listing/553936184\n' +
        '\n' +
        'Or more cut files here:\n' +
        'https://www.etsy.com/shop/seaquintdesign?section_id=18982438\n' +
        '\n' +
        'This is Instant Etsy Download, once the payment settled, Etsy will send you the download link to your email. And you can get the images instantly.\n' +
        '\n' +
        'terms of use:\n' +
        'This LICENSE entitles you to use the images for both personal and commercial use. You may not in any way share, resell images individually or to sell it as a digital download file\n' +
        '\n' +
        'Thanks for stopping by! Check out our shop for more items: https://www.etsy.com/shop/seaquintdesign\n' +
        'Feel free to contact us if you have any question!',
      quantity: 992,
      num_favorers: 11,
      tags: [
        'Silhouette',
        'PNG',
        'Gymnastics',
        'Gymnastic Silhouette',
        'gymnast',
        'vector',
        'Clipart',
        'Gymnastic clipart',
        'Gymnast clipart',
        'sports',
        'dance svg',
        'gymnastics svg',
        'gymnast silhouette'
      ],
      processing_min: null,
      processing_max: null,
      price: 5,
      img: 'https://i.etsystatic.com/11303311/r/il/db5a76/1348214777/il_fullxfull.1348214777_qivx.jpg',
      onSale: true,
      taxonomy_id: 7
    },
    {
      title: 'Loose Gemstone Certified Aquamarine 10.00 To 11.00 Cts Pair Emerald Shape GEAQ001',
      description: 'Loose Gemstone Certified Aquamarine 10.00 To 11.00 Cts Pair Emerald Shape GEAQ001\n' +
        '\n' +
        'Aquamarine: Aquamarine, with its icy blue color, displays a magical aura. With hardness similar to that of the topaz, this sea-blue gemstone is a very good choice for daily wear.\n' +
        'Aquamarine is a stone of courage. Its calming energies reduce stress and quiet the mind. Aquamarine has an affinity with sensitive people. It can invoke tolerance of others and overcomes judgmentalism, giving support to those overwhelmed by responsibility. Aquamarine is also associated with tranquility, serenity, clarity, and harmony. As the first of the spring birthstones, the sea blue crystal represents transformation and rebirth.\n' +
        '\n' +
        '\n' +
        '\n' +
        'Item Description \n' +
        '\n' +
        'Weight: 10.00 To 11.00 Ct (Approx)\n' +
        '\n' +
        'Length: 14.00 To 15.00 MM (Approx)\n' +
        'Width: 11.00 To 12.00 MM (Approx)\n' +
        'Depth: 7.00 To 9.00 MM (Approx)\n' +
        '\n' +
        'Shape: Emerald\n' +
        'Color-  Light Blue\n' +
        'TREATMENT - Lab Created\n' +
        'Origin - Brazil\n' +
        'Manufacture - India\n' +
        'Certificate (Free) - Included With This Item (GIL)',
      quantity: 10,
      num_favorers: 1,
      tags: [
        'Loose Gems',
        'Certified Gems',
        'Jewellery Stones',
        'Blue Stone',
        'Loose Gemstone',
        'Aquamarine',
        'Pendant Size',
        'Light Blue',
        'Brazilian Aquamarine',
        'Brazil',
        'Stone',
        'Pair'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 69.99,
      img: 'https://i.etsystatic.com/27608493/r/il/e5ea17/3059182803/il_fullxfull.3059182803_igyy.jpg',
      onSale: true,
      taxonomy_id: 7
    },
    {
      title: 'Tilda Lazy Days - Phoebe Thistle - Tilda Fabric Collection - Tone Finanger (100169) - Half Yard',
      description: 'Tilda - Lazy Days Collection - Tone Finanger - Phoebe Thistle - (100169) - HALF YARD\n' +
        '\n' +
        'Offered in 1/2 yard increments:\n' +
        '\n' +
        '1 = 1/2 yard\n' +
        '2 = 1 yard\n' +
        '3 = 1 1/2 yards\n' +
        '4 = 2 yards\n' +
        '\n' +
        'Yardage will be cut as one continuous piece.\n' +
        '\n' +
        'Purple deco floral damask on a lavender/lilac background.\n' +
        '\n' +
        '100% Premium Cotton\n' +
        '44&quot; Wide\n' +
        '\n' +
        'If you need a larger quantity, send a convo and inquire before ordering as there may be more available.',
      quantity: 3,
      num_favorers: 13,
      tags: [
        'tilda',
        'tone finanger',
        'lazy days',
        'sew crazy austin',
        'vintage style',
        'orange and white',
        'vintage inspired',
        'deco damask',
        'modern damask',
        'floral',
        'phoebe thistle',
        'purple blender',
        'lavender and purple'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 6.5,
      img: 'https://i.etsystatic.com/6516965/r/il/aea459/1892508693/il_fullxfull.1892508693_bb3f.jpg',
      onSale: true,
      taxonomy_id: 7
    },
    {
      title: 'schöne Kunststoff-Knöpfe - Gold matt &quot;Earth&quot; - 18mm / 25mm - Buttons',
      description: 'schöne Kunststoff-Knöpfe - Gold matt &quot;Earth&quot; - 18mm / 25mm - Buttons\n' +
        '\n' +
        'Material: Kunststoff\n' +
        '\n' +
        'Benötigt Ihr andere Mengen - bitte einfach Nachricht senden.',
      quantity: 8,
      num_favorers: 0,
      tags: [ 'knobs', 'Gold' ],
      processing_min: 1,
      processing_max: 2,
      price: 4.9,
      img: 'https://i.etsystatic.com/18155613/r/il/046f19/3813092460/il_fullxfull.3813092460_pjtx.jpg',
      onSale: true,
      taxonomy_id: 7
    },
    {
      title: 'Lot 20 acrylic beads metal copper-red diamond 10 mm',
      description: 'Stunning batch of 20 diamond metal beads in copper-red colors. Pearls 10 mm in diameter with a 2 mm drilling hole for the passage of the wire. Pearls of very good quality.\n' +
        'This lot will be shipped to you within 24 hours, in an envelope with a tracking number. We will take the greatest care in the preparation of your order, and we will have the pleasure of offering you a surprise gift attached to your order. Shipping costs are offered from 29 euros for Metropolitan France.',
      quantity: 12,
      num_favorers: 3,
      tags: [ 'copper metal pearl', 'round light pearl 10mm' ],
      processing_min: 1,
      processing_max: 1,
      price: 1.51,
      img: 'https://i.etsystatic.com/18823112/r/il/c592ee/2729734138/il_fullxfull.2729734138_s1ez.jpg',
      onSale: true,
      taxonomy_id: 7
    },
    {
      title: 'FREE DELIVERY! * Latex mould / mold for Hear, See and Speak-No-Evil Buddhas.',
      description: '15% OFF WHEN YOU BUY £65 WORTH IN ONE TRANSACTION!!!\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'THIS IS A BRAND NEW LATEX MOULD SET TO MAKE HEAR, SEE AND SPEAK-NO-EVIL BUDDHAS (APPROXIMATELY 4&quot; / 10cm TALL)\n' +
        '\n' +
        '\n' +
        '\n' +
        'YOU CAN USE SAND AND CEMENT MIXTURE, PLASTER OF PARIS OR MOULDING POWDER\n' +
        '\n' +
        '\n' +
        'ALL MOULDS COME WITH EASY TO FOLLOW INSTRUCTIONS AND ARE REUSABLE\n' +
        '\n' +
        '\n' +
        'WE WILL REPLACE ANY ITEM WHICH IS FAULTY BUT WE DO NOT ACCEPT RETURNS OTHERWISE, UNLESS THE MOULD IS NEW AND UNUSED. BUYER IS RESPONSIBLE FOR RETURN POSTAGE IN EVENT THE ITEM IS UNWANTED\n' +
        '\n' +
        '\n' +
        'YOU ARE BUYING THE LATEX MOULDS ONLY AND NOT THE ORNAMENTS- WHICH ARE FOR ILLUSTRATION ONLY\n' +
        '\n' +
        '\n' +
        '\n' +
        'THANK YOU FOR VIEWING!',
      quantity: 1,
      num_favorers: 39,
      tags: [],
      processing_min: 3,
      processing_max: 5,
      price: 39.99,
      img: 'https://i.etsystatic.com/12763307/r/il/ab94af/1008516065/il_fullxfull.1008516065_r4el.jpg',
      onSale: true,
      taxonomy_id: 7
    },
    {
      title: 'Banded Shark #1, Banded Shark Svg, Banded svg, Banded Shark Silhouette, Fish svg, Decal, Vinyl Vector Cut file for Cricut Sticker Monogram',
      description: 'Perhaps you want to make an original gift to your loved ones. Check out my suggestion for making a photo collage. This is a digital collage, I do it according to your size, you print at the local print shop. https://www.etsy.com/shop/OriginalPhotoGifts?ref=seller-platform-mcnav&section_id=31242668\n' +
        '\n' +
        'BUY 2 GET 1 FREE! BY 4 GET 2 FREE etc.\n' +
        'If you buy 2 items, then you can choose a third for free. To get it, please send me the link to the third selected item and your email that I can send you a file within 24 hours. Of course, I will try to do it as fast as possible.\n' +
        '\n' +
        'Banded Shark #1, Banded Shark Svg, Banded svg, Banded Shark Silhouette, Fish svg, Decal, Vinyl Vector Cut file for Cricut Sticker Monogram \n' +
        '\n' +
        'You will receive 4 digital files in 1 zip folder:\n' +
        '\n' +
        '1x SVG - For Cricut Explore, Silhouette Designer Edition, Adobe Suite, Inkspace, Corel Draw and more.\n' +
        '1x PNG - Transparent Background - High resolution 300 dpi \n' +
        '1x EPS - For Adobe Illustrator, Inkspace, Corel Draw and more.\n' +
        '1x PDF files\n' +
        '\n' +
        '- If you need a different file format or a specific image size, please let me know and I&#39;ll do my best to help you\n' +
        '\n' +
        'IMAGE GRAPHIC USES:\n' +
        'Vinyl Decals\n' +
        'T-Shirt\n' +
        'Posters\n' +
        'Mouse Pad\n' +
        'Scrapbooking\n' +
        'Coffee Cup/Mug\n' +
        'Stickers\n' +
        'Magnets\n' +
        'Buttons\n' +
        'Signs\n' +
        '\n' +
        'TEXT-DESIGN-COLOR CHANGES:\n' +
        'This listing does not include any design, color or text changes. If you would like the design, color, or text changes please contact OriginalPhotoGifts prior to ordering to discuss pricing.\n' +
        '\n' +
        'REFUNDS:\n' +
        'Because this item is Digital no refunds will be issued once product(s) have been delivered. If you have any issues with the product please contact us and we will work to make sure you have a graphic that you are happy with. Your satisfaction is our number one goal.\n' +
        '\n' +
        'The files are available immediately for download after purchase. You will receive an Email with a download link. For more information on how to download your files please see https://www.etsy.com/help/article/3949\n' +
        'Please make sure your machine/software can work with one of the above file formats before you purchase.\n' +
        '\n' +
        'HOW TO ORDER:\n' +
        '1. Add item(s) to cart and purchase.\n' +
        '2. You will receive an email within minutes of purchase from ETSY with the download link.\n' +
        '(You can also access your download by clicking on &quot;You&quot; at the top of ETSY, by clicking &quot;Purchases & Reviews&quot; and by clicking the Blue &quot;Download Files&quot; button next to your purchase.\n' +
        '3. Download the files onto your computer.\n' +
        '\n' +
        'You may use these files to make items for personal use or to sell, but you may not resell or distribute the designs.\n' +
        '\n' +
        'We will be happy to answer any questions you may have before / after ordering.\n' +
        '\n' +
        'Thank you for visiting my shop!\n' +
        'God bless!',
      quantity: 981,
      num_favorers: 0,
      tags: [
        'svg files for cricut',
        'silhouette files',
        'vinyl svg designs',
        'cutting machine svg',
        'silhouette cameo',
        'svg design',
        'home stencil',
        'Silhouette Vector',
        'Digital Download',
        'Digital Clipart',
        'Vinyl',
        'Silhouette Svg',
        'Clip Art Svg'
      ],
      processing_min: null,
      processing_max: null,
      price: 2,
      img: 'https://i.etsystatic.com/22705151/r/il/4314b1/3264890420/il_fullxfull.3264890420_fc9l.jpg',
      onSale: true,
      taxonomy_id: 7
    },
    {
      title: 'CORAL SUPERB LEATHER, Leather Sheet, Leather Scrap, Supple Buttery top quality Italian lambskin, leather scraps .06 oz thickness, M7001coral',
      description: 'LEATHER/ Top LEATHER SUPPLIER/ www.LeatherSkinsShop.comGENUINE LEATHER SHEETSCORAL SUPERB LEATHER\n' +
        'TOP QUALITY Italian leather \n' +
        'Lambskin leather\n' +
        'Very soft supple leather\n' +
        'Available in many sizes as well as full hide\n' +
        'Full hide averages from 6-10 sq.ft\n' +
        '.06 oz thickness \n' +
        '\n' +
        'Backside is suede, same color as the front\n' +
        '\n' +
        'WE CARRY MANY COLORS:\n' +
        '\n' +
        'Contact us with any questions:\n' +
        '\n' +
        'Call: Mon-Fri. 10:00am-5:00pm\n' +
        'Email:leather.suede.skins@att.net\n' +
        'Visit our website: www.leathersuedeskins.com\n' +
        'Instagram:#LeatherSuedeSkins\n' +
        '\n' +
        '\n' +
        'YOUR SOURCE FOR:\n' +
        '\n' +
        '*** leather hide\n' +
        '*** leather sheet\n' +
        '*** leather scrap\n' +
        '*** leather scraps\n' +
        '*** genuine leather sheet\n' +
        '*** genuine leather sheets\n' +
        '*** leather\n' +
        '\n' +
        'https://www.etsy.com/shop/LeatherSkinsShop',
      quantity: 9,
      num_favorers: 22,
      tags: [
        'Coral',
        'Coral leather',
        'Coral hide',
        'Light orange leather',
        'Light orange hide',
        'Coral leather hide',
        'Leather sheets',
        'Leather hide',
        'Leather suede skins',
        'Italian leather',
        'Italian leather hide',
        'Soft leather',
        'Thin leather'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 6.99,
      img: 'https://i.etsystatic.com/16038125/r/il/1b2e58/1786919083/il_fullxfull.1786919083_jlx8.jpg',
      onSale: true,
      taxonomy_id: 7
    },
    {
      title: 'Japanese Swivel Knife Blades, Multiple Sizes',
      description: '\n' +
        'Japanese Swivel Knife Blades, Multiple Sizes \n' +
        'There are 5 different blades to choose from based on your leather carving needs. These blades are compatible with our Japanese Swivel Knife handles: Click here. The blades are all hand sharpened with tool steel and then coated to prevent rust.    BG Swivel Blade Measurements   Type Blade Thickness Blade Width   BG Double Line: Thin 2.0mm 10mm   BG Double Line: Thick 2.5mm 10mm   BG Regular (No. 2) (comes w/ handle) 2.3mm 8.9mm   BG Sheridan: Thin (No. 1) 1.4mm 6.9mm   BG Sheridan: Ultra Thin (No. 0) 0.8mm 4.4mm   \n' +
        '\n' +
        'https://www.buckleguy.com/japanese-swivel-knife-blades-multiple-sizes/\n' +
        '\n' +
        'Please let us know if you have any questions about our hardware! We would love to help!\n' +
        '\n' +
        'info@buckleguy.com\n' +
        '(978) 213-9989\n' +
        'www.buckleguy.com\n' +
        '\n' +
        'SKU:TL-SK-B\n' +
        '\n' +
        ' About Buckleguy \n' +
        ' Buckleguy is a 1-stop shop for leather crafting supplies and accessories for customers who care about quality, including belt buckles, belt leather, bag leather, purse and handbag parts, dog leash clips, and dog collar clasps and loops. Based in the USA in New England, we are a family business that has been catering to the leather accessory trade for over 75 years.',
      quantity: 5,
      num_favorers: 1,
      tags: [
        'leather end tool',
        'leather edge tool',
        'leather corner tool',
        'leather knives',
        'cutting leather',
        'belt cutter',
        'tooling leather',
        'leathercraft',
        'leatherworking',
        'professional',
        'pro tool',
        'leather hole punch',
        'DIY leather'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 8.75,
      img: 'https://i.etsystatic.com/8883658/r/il/ba095b/3800568674/il_fullxfull.3800568674_g635.jpg',
      onSale: true,
      taxonomy_id: 7
    },
    {
      title: 'Phlox Dummundi flower seeds',
      description: 'Long-blooming and incredibly easy to grow, Phlox is known for delivering gorgeous mid-summer color without any hassle. These quintessential garden staples have been relied on for generations to provide bushy clumps of fragrant blossoms that are excellent for easy bouquets. Whether you fancy the tried-and-true varieties that have been reliably grown for years or are more intrigued by some of the new, disease-resistant cultivars, these charmers are more than worthy of a spot in your perennial garden and are hardy to zone 4. Pure and simple, Phlox plants are a joy to grow and have available for cut arrangements.',
      quantity: 100,
      num_favorers: 0,
      tags: [
        'seeds',
        'mixed colours',
        'spring sale',
        'flower seeds',
        'container friendly',
        'easy to grow',
        'Garden',
        'tall',
        'classic'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 4,
      img: 'https://i.etsystatic.com/34480906/r/il/c4b369/3813089442/il_fullxfull.3813089442_k214.jpg',
      onSale: true,
      taxonomy_id: 7
    },
    {
      title: 'Halloween Chalk clipart, Chalkboard Halloween Clipart, Halloween chalkboard clipart,  Jack o latern chalk, Halloween Wordart',
      description: 'Halloween Chalk clipart set includes 19 high quality (300dpi) .png files, digital elements with chalk effects.\n' +
        'These Halloween chalkboard doodles clipart are great for labels, invitations, place settings, organizing and projects of all kinds. Also these graphic designs are excellent for handmade craft items, printed paper items, invitations, cards, stationary, party banners, tags, embroidery patterns, scrapbooking, web design, and graphic design!\n' +
        '\n' +
        'For personal and small business use (up to 100 pc). \n' +
        'Please make sure you check my Terms of Use before purchasing any of my products.\n' +
        'By purchasing this item you agree to not distribute or resell the file(s) contained in this download.\n' +
        '\n' +
        'This content is a digital file, no physical item will be sent. Content will be immediately available after purchase. After purchasing a digital file, you’ll see a link to the Downloads page. Here, you can download all the files associated with your order.\n' +
        '\n' +
        'Thank you so much for watching, have a nice day!',
      quantity: 6,
      num_favorers: 29,
      tags: [
        'PNG Images',
        'Instant Download',
        'chalk wordart',
        'Chalkboard Clipart',
        'chalk doodle clipart',
        'chalk doodles',
        'halloween quotes',
        'halloween chalkboard',
        'halloween wordart',
        'chalk net clipart',
        'chalk whitch',
        'chalk pumpkin',
        'jack o lantern chalk'
      ],
      processing_min: null,
      processing_max: null,
      price: 5,
      img: 'https://i.etsystatic.com/7307328/r/il/71d7db/855889600/il_fullxfull.855889600_4kyj.jpg',
      onSale: true,
      taxonomy_id: 7
    },
    {
      title: 'pack of 6 Antique Silver Connector Dreamcatcher',
      description: 'Antique Silver Connector Dreamcatcher,\n' +
        '\n' +
        'size 40 x 35 mm, metal alloy, lead and nickel free,\n' +
        '\n' +
        'pack of 6',
      quantity: 1,
      num_favorers: 14,
      tags: [
        'charm',
        'pendant',
        'connector',
        'link',
        'chandelier',
        'earring component'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 4.39,
      img: 'https://i.etsystatic.com/5557289/r/il/891579/2414593083/il_fullxfull.2414593083_ttut.jpg',
      onSale: true,
      taxonomy_id: 7
    },
    {
      title: 'Reindeer nail polish wraps, 100% nail polish stickers, nail polish strips, nail decals, nail art, holiday nails, Christmas nails',
      description: 'Nail wrap or decals.  Nail wraps are changing the manicure process.  A cheaper process that allows you to apply at home.\n' +
        '- Simply peel the nail polish strips and apply to a clean nail bed.\n' +
        '- File away the excess for an instant manicure.\n' +
        '- Intended to fit adult nails, however they can be stretched and trimmed.\n' +
        '- Non-toxic, made of 100% nail polish.  They do have an adhesive backing to help adhere to the nail bed.\n' +
        'This listing includes 1 nail wrap, as pictured, each order will include a cuticle stick, alcohol swab, instruction card, and nail file.  If additional instruction card is needed, please message me to include with order.\n' +
        '\n' +
        'Tips for best application:\n' +
        '- Lightly buff the nail bed with the nail file to reduce ridges in the nail bed.  This helps with adherence of the nail wrap as well.\n' +
        '- Use a ph bond or Orly bonder prior to adhering to the nail bed, this will dry out the nail bed removing any oils that may be on the nail bed.\n' +
        '- Use the alcohol swab included to clean nail beds and fingertips to ensure clean nail bed area.\n' +
        '- After applying refrain from soaking hands in water for 8 hours.\n' +
        '- It is best to apply prior to bed to allow time for nail wraps to set.\n' +
        '- If you have shorter nails, one wrap will can give you 2 manicures.  If you use one side for one manicure by cutting the excess off each nail and then applying that excess to the other hand.',
      quantity: 1,
      num_favorers: 1,
      tags: [
        'winter nails',
        'holiday nails',
        'Christmas nails',
        'nails',
        'fingernails',
        'nail stickers',
        'manicure',
        'nail wraps',
        'stocking stuffer',
        'nail decals',
        'nail polish strip',
        'nail polish wraps',
        'nail polish stickers'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 3,
      img: 'https://i.etsystatic.com/6700417/r/il/095673/3531733085/il_fullxfull.3531733085_i3qp.jpg',
      onSale: true,
      taxonomy_id: 7
    },
    {
      title: 'I Can&#39;t I&#39;m in Nursing School Vinyl Decal Sticker | Nursing School Decal for Nursing Major  | Future Nurse Car Sticker',
      description: '&quot;I Can&#39;t I&#39;m In Nursing School&quot; Vinyl Decal Sticker\n' +
        '\n' +
        'The perfect decal or sticker for future nurses!\n' +
        '\n' +
        'Vinyl Decals can be applied as car decals/car stickers, water bottle stickers, tumbler decals, mug or travel mug decals.\n' +
        '\n' +
        'HOW TO APPLY: Clean and dry where you plan to apply the decal (rubbing alcohol to clean is best). Remove white backing. Apply your decal to your surface. Take a credit card to apply pressure. Slowly and carefully remove the transfer/clear paper.',
      quantity: 8,
      num_favorers: 6,
      tags: [
        'nursing car decal',
        'nurse car decal',
        'nursing car sticker',
        'nurse car sticker',
        'future nurse decal',
        'future nurse sticker',
        'nursing school decal',
        'nurse sticker car',
        'future nurse car',
        'nurse sticker decal',
        'nurse sticker',
        'nursing sticker',
        'cant im in nursing'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 6,
      img: 'https://i.etsystatic.com/8954597/r/il/3773b1/3122095428/il_fullxfull.3122095428_cm5j.jpg',
      onSale: true,
      taxonomy_id: 8
    },
    {
      title: '2 Hour DIY Treasure Island | All DIYs + Recipe’s | All Materials + Seasonal Furnishings | All 2.0 Items | Max bells | Auto-Restock |',
      description: '🌸 DIY Treasure Island 🌸\n' +
        '\n' +
        '2-3 HOUR VISITS ARE ON MY STORE PAGE\n' +
        '\n' +
        '| All DIY’s | All Recipe’s | All Materials | All Seasonal Furnishings | Sanrio Set | Mario Set | All Tickets | Max Bells | Unlimited Trips | Auto-Restocks |\n' +
        '\n' +
        '🌸 IMPORTANT 🌸\n' +
        '\n' +
        'There are UNFLYABLE DIYs, meaning if you try to fly with them in your inventory, THEY WILL DISAPPEAR! Please learn any DIYs while on my island. \n' +
        '\n' +
        'The download that comes with this purchase has Information about 24/7 access to 5 Islands, be sure to give it a read!\n' +
        '\n' +
        '\n' +
        '🌸 About Island Access 🌸 \n' +
        '\n' +
        'Message me after purchase and I will arrange with you to access the island. I&#39;m available from 10am to 7pm AEST, and for a few hours after 7pm (dependent on me being awake). If  I dot reply I am likely sleeping and will get back to you ASAP.\n' +
        '\n' +
        '🌸 DESCRIPTION 🌸 \n' +
        '\n' +
        'Come and go as many times as you like within your chosen time limit. Island restocks every time you travel! Low to no traffic at all (max 3 people at one time). Other time limits and Islands are offered on my store page! \n' +
        '\n' +
        '🌸 Every DIY\n' +
        '🌸 Every Recipe\n' +
        '🌸 All Materials in the Game\n' +
        '🌸 All Wrapping paper\n' +
        '🌸 Food and drink\n' +
        '🌸 All 2.0 Items\n' +
        '🌸 Wall Furniture\n' +
        '🌸 All K.K. Songs\n' +
        '🌸 Full Sanrio Set\n' +
        '🌸 Full Mario set\n' +
        '🌸 Every Seasonal Furnishing (Frozen, Cherry-Blossom, Mush etc.)\n' +
        '🌸 Full Festival series\n' +
        '🌸 Redd’s Raffle Items\n' +
        '🌸 All House Plants\n' +
        '🌸 Golden Tools \n' +
        '🌸 All Ladder set-up kits\n' +
        '🌸 Customization kits\n' +
        '🌸 NMTs, Dream, Tailors and Sahara Tickets\n' +
        '🌸 Royal Crowns\n' +
        '🌸 Max Bells 999 million\n' +
        '🌸 Villagers in Boxes\n' +
        '\n' +
        '\n' +
        '🌸 DISCLAIMER: 🌸\n' +
        '\n' +
        'This listing is only charging a fee for the time and energy spent finding the items and playing the game with you. This listing only is charging for my time and energy spent on this service and nothing more. This listing is not an infringement on VeRO software licensing policy. All names, logos, images, brands, and products are the property of © 2020 Animal Crossing | © 2020 Nintendo. Animal Crossing characters and Nintendo Switch are trademarks of Nintendo of America Inc. I am not affiliated with or endorsed by Nintendo. All names, logos, images, brands, and products found in this listing are for identification purposes only.',
      quantity: 109,
      num_favorers: 25,
      tags: [
        'unlimited', 'treasure',
        'island',    'bells',
        'million',   'game',
        'acnh',      'animal crossing',
        'Private',   'new horizons',
        'nmt',       'nook mile'
      ],
      processing_min: null,
      processing_max: null,
      price: 16.5,
      img: 'https://i.etsystatic.com/26195011/r/il/2082eb/3709058254/il_fullxfull.3709058254_fohy.jpg',
      onSale: true,
      taxonomy_id: 8
    },
    {
      title: 'Cine Movie Camera Krasnogorsk 16mm VEGA-7 Lens Semiautomatic made in USSR, rare camera, Soviet camera, Film Camera',
      description: 'Cine Movie Camera Krasnogorsk 16mm VEGA-7 Lens Semiautomatic made in USSR, rare camera, Soviet camera, Film Camera.\n' +
        '\n' +
        'The Krasnogorsk is 16mm spring-wound film camera with a mirror shutter, produced from 1966 to 1977. \n' +
        'Produced at the Krasnogorsk Mechanical Plant.\n' +
        'The camera has a semi-automatic film loading into a tape path, a Vega-7 f / 2 lens with a fixed focal length of 20 mm. The camcorder is designed for shooting amateur, reporter and educational films on film.\n' +
        '\n' +
        '\n' +
        'Сondition\n' +
        '\n' +
        'Like New. Full set in the photo. Photos are part of the description.',
      quantity: 1,
      num_favorers: 7,
      tags: [
        'Soviet optics',
        'optics',
        'vintage camera',
        'rare camera',
        'russian camera',
        'soviet camera',
        'film camera',
        'Camera Zenit-ES',
        'Krasnogorsk',
        'Cine Movie Camera',
        'VEGA-7 Lens',
        'Krasnogorsk camera',
        'Semiautomatic'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 355,
      img: 'https://i.etsystatic.com/10418642/r/il/7b77c4/3585433937/il_fullxfull.3585433937_2sm8.jpg',
      onSale: true,
      taxonomy_id: 8
    },
    {
      title: 'Vivitar MC Auto Wide Angle 28mm 28 mm 1:2.8 for Minolta',
      description: 'Vivitar MC Auto Wide Angle 28mm 28 mm 1:2.8\n' +
        'Look closely at the photos for scratches or imperfections',
      quantity: 1,
      num_favorers: 3,
      tags: [
        '35mm',
        'analog',
        'filmcamera',
        'filmroll',
        'point and shoot',
        'kodak',
        'analogphotography',
        'photography',
        'filmphotography',
        'lens',
        'vivitar',
        '28mm28',
        'minolta'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 50,
      img: 'https://i.etsystatic.com/25453554/r/il/a21e55/3585431731/il_fullxfull.3585431731_ic0e.jpg',
      onSale: true,
      taxonomy_id: 8
    },
    {
      title: 'Kappa Alpha Psi Three Greek Letter License Plate Frame- Style 2',
      description: 'Kappa Alpha Psi Three Greek Letter License Plate Frame- Style 2\n' +
        'Three Greek letters at top\n' +
        'English spelling at the bottom\n' +
        'Crimson background with silver letters \n' +
        'Heavy duty acrylic mounted in a chrome metal frame\n' +
        'Perfect for any car, truck, or van',
      quantity: 3,
      num_favorers: 25,
      tags: [
        'Kappa Alpha Psi',
        'Kappa merchandise',
        'Kappa Gift',
        'Kappa gifts',
        'Kappa crossing gift',
        'Divine 9',
        'Divine nine'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 18.88,
      img: 'https://i.etsystatic.com/24953616/r/il/da7566/3568610884/il_fullxfull.3568610884_1ezd.jpg',
      onSale: true,
      taxonomy_id: 8
    },
    {
      title: 'Seat Covers Fits a 2011 to 2018 Jeep Wrangler Airbag Friendly American Eagle Design',
      description: '-Front seat covers will be made with separate headrest covers.  Front seat covers are made in one piece and will slip over the original seats for a glove like fit.  The American flag with the eagle would be heat pressed onto the seat covers.  \n' +
        '\n' +
        '-High quality eleven ounce cotton fabric is used to construct the seat covers.  A quarter inch of foam is used for extra comfort and is added in the inner layer of the seat covers.  Elastic straps are used to keep the seat covers in place.  \n' +
        '\n' +
        '-Jeep Wrangler&#39;s adventurous body design attracts daring drivers and passengers.  Protecting your original seats\n' +
        'with our seat covers will not only protect your interior but give it a stylish look as well.  Our seat covers are water repellent and help protect\n' +
        'your original seats from food stains, coffee stains and more.  Protecting your interior with our seat covers is an investment well made. \n' +
        '\n' +
        '-Our seat covers are made to fit over the original seats.  Instructions are sent electronically to help install your seat\n' +
        'covers.  Hooks and hexagons that help keep the seat covers in place are sent with your item.  Due to the exact fit of your Jeep Wrangler the seat covers will take a bit of patience to install.  We are always on stand by to assist you.\n' +
        '\n' +
        '-Please note that the personalization is regards to a contact number needed to ensure delivery.  \n' +
        'We can apply our designs in several different manners.  If you have a specific design in mind please do not hesitate to reach out.',
      quantity: 9,
      num_favorers: 2,
      tags: [
        'wrangler seat cover',
        'jeep seat cover',
        '2010 jeep seat cover',
        '2007 wrangler cover',
        'seat covers',
        'jeep wrangler cover',
        'seat covers jeep',
        'seat covers wrangler',
        'car seat covers',
        'palm trees'
      ],
      processing_min: 2,
      processing_max: 6,
      price: 89.99,
      img: 'https://i.etsystatic.com/21474991/r/il/45ee6b/3051846147/il_fullxfull.3051846147_tk4r.jpg',
      onSale: true,
      taxonomy_id: 8
    },
    {
      title: 'Pair of Vintage car headlamps, motorcycle truck light, Soviet Military headlight, Upcycle Industrial Decor, Steampunk, High Beam',
      description: 'Two Vintage car headlamps, motorcycle headlight\n' +
        'Headlamp glass diameter  is 13 cm\n' +
        '\n' +
        'Good vintage condition. Has scratches\n' +
        '\n' +
        'Made in USSR. 1977\n' +
        '----------------------------------------------------------------------------------------\n' +
        'Delivery usually takes about 7-35 days.\n' +
        '\n' +
        'PLEASE ASK ALL THAT YOU WANT TO REFINE BEFORE PURCHASE.\n' +
        'I will be happy to answer any questions!\n' +
        '\n' +
        'Best wishes,\n' +
        'Kate',
      quantity: 1,
      num_favorers: 10,
      tags: [
        'home decor',
        'soviet',
        'ussr',
        'rare',
        'Hanging Lamp',
        'Soviet Hanging Lamp',
        'Vintage lamp',
        'lamp outside',
        'light outside',
        'headlamp',
        'car',
        'motorcycle',
        'Military'
      ],
      processing_min: 1,
      processing_max: 7,
      price: 114,
      img: 'https://i.etsystatic.com/14581911/r/il/4d562e/2776471303/il_fullxfull.2776471303_epvl.jpg',
      onSale: true,
      taxonomy_id: 8
    },
    {
      title: 'Groomsmen Gifts, Personalized Gift, Gift for Husband, Dad Birthday Gift, Anniversary Gift for Husband, New Dad Gift, Wood Docking Station',
      description: 'The Personalized Docking Station is a versatile desk organizer for both men and women. A station where you can put items you use in daily life and organize them. This is suitable for all phones (iPhone, Samsung, and all smartphones), wallets, coins, keys, watch, AirPods, glass, and your all accessory. It is a charging station so you can conveniently charge your phone, watch, and Airpods with your charging cable.\n' +
        '\n' +
        '♥The Wood Docking Station is a wonderful present ( Anniversary Gifts for Husband, Birthday Gifts, Anniversary Gift, Gift for Men, Father&#39;s Day Gift, Gift for Him, Boyfriend Birthday Gift, Mothers Day Gift, Groomsmen Gift, Unique Gift, Christmas Gift, Valentine&#39;s Day Gift, Wedding Gift, New Job Gift )\n' +
        '\n' +
        '\n' +
        'All of our products are handmade so every piece of wood is UNIQUE!\n' +
        '\n' +
        'This is a high-quality Wooden Docking Station made of natural birch plywood.\n' +
        'This is a laser engraved, not printing or painting.\n' +
        'Wood is oiled and colored with organic natural oils. The texture of the product does not deteriorate. When you touch it, you feel the texture of wood.\n' +
        '\n' +
        '\n' +
        'Select your design and fill in the personalization section.\n' +
        'If you would like a custom design please contact us through Etsy Messages after your purchase. (Logo, Handwriting, Quote)\n' +
        'No extra charge for Personalization design.\n' +
        '\n' +
        'Groomsmen Gifts, Personalized Gift, Gift for Husband, Dad Birthday Gift, Anniversary Gift for Husband, New Dad Gift, Wood Docking Station\n' +
        '\n' +
        'Dimensions: \n' +
        '✦ 10.2&quot;  Width  X  9.6&quot; Height  X  9.2&quot; Depth ✦\n' +
        '\n' +
        'Top part is 9.5 mm thick.\n' +
        'Bottom part is 13.5 mm thick.\n' +
        'The carved slots in the lower part are 9.5 mm.\n' +
        '\n' +
        '\n' +
        'Usually, we ship within 1-2 business days after your order.\n' +
        'Delivery times are app 2-4 days.',
      quantity: 299,
      num_favorers: 1,
      tags: [
        'Groomsmen Gifts',
        'Personalized Gift',
        'Gift for Husband',
        'Dad Birthday Gift',
        'New Dad Gift',
        'Wood Docking Station',
        'Anniversary Gift',
        'Husband Gift',
        'Boyfriend Gift',
        'Docking Station Gift',
        'Custom Gifts',
        'Gift for Him',
        'Men Gifts'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 109.9,
      img: 'https://i.etsystatic.com/27005739/r/il/b086d8/3068834925/il_fullxfull.3068834925_kmdo.jpg',
      onSale: true,
      taxonomy_id: 8
    },
    {
      title: 'Apple iPhone 7+ 7 plus leather cover case holder wallet cover cell phone smartphone credit business cards pocket slots bible book cover rope',
      description: 'Apple iPhone 7+ 7 plus leather cover case holder wallet cover cell phone smartphone credit business cards pocket slots bible book cover rope retro\n' +
        '\n' +
        '\n' +
        '********************************************************\n' +
        '        Cell phone model: iPhone 7 plus (5.5 inch screen)\n' +
        '        Material: 100% Genuine Leather\n' +
        '        Highest quality fine grain leather combined with the best stitch work to provide you with a premium quality leather case.\n' +
        '        Handmade by leather designers\n' +
        '        This case also serves as a wallet\n' +
        '        Can add multiple credit cards, business cards\n' +
        '        In stock ready for shipping \n' +
        '\n' +
        '        FREE shipping worldwide for more information please check our shipping policy\n' +
        '        We accept returns for more info please check our return policy\n' +
        '\n' +
        '*******************************************************\n' +
        'PAYMENT\n' +
        'We accept only paypal payments. If you can not pay by paypal for any reasons please feel free to contact us. I will be able to offer you some other ways of payment\n' +
        '\n' +
        'SHIPPING AND DELIVERING\n' +
        'We ship worldwide. Delivering takes 10-15 days as usual. For some countries (such as Australia and Canada) it can take near 25-30 days.',
      quantity: 113,
      num_favorers: 1,
      tags: [
        'cell phone case',
        'smartphone case',
        'smartphone cover',
        'apple iPhone 7 plus case',
        'apple iPhone 7 plus cover',
        'apple iPhone 7 plus holder',
        'leather iPhone 7 plus case',
        'leather iPhone 7 plus cover',
        'leather iPhone 7 cover',
        'iPhone 7 plus wallet cover',
        'iPhone 7 plus wallet case',
        'iPhone 7 plus card slots',
        'leather iPhone 7 plus wallet'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 39.99,
      img: 'https://i.etsystatic.com/28107098/r/il/0fbc38/2963979397/il_fullxfull.2963979397_9mlj.jpg',
      onSale: true,
      taxonomy_id: 8
    },
    {
      title: 'Rainbow Phone Sock, Hand Knit Eiffel Tower Phone Case,Apple iPhone 6 Plus,7 Plus,8 Plus,XR,XS Max or Samsung Galaxy S8 Plus,S9 Plus,S10 Plus',
      description: 'This multicoloured phone cover was knitted out of 100% acrylic knitting yarn and  features the wooden Eiffel Tower button. \n' +
        '\n' +
        'Measuring approximately 160mm x 80mm x 10mm (6,3&quot; x 3.1&quot; x 0.4&quot;)\n' +
        '\n' +
        'This charming hand knitted case will snugly fit an Apple iPhone 6 Plus, Apple iPhone 7 Plus, Apple iPhone 8 Plus, Apple iPhone XR, Apple iPhone XS Max or Samsung Galaxy S8 Plus, Samsung Galaxy S9 Plus, Samsung Galaxy S10 Plus. \n' +
        'It can also fit any other smart phone with similar dimensions.\n' +
        '\n' +
        'Gentle hand wash in lukewarm mild soapy water, dry flat in shade.\n' +
        '\n' +
        'If for the multiple purchases the shipping cost paid is greater than the actual shipping charges, I will happily refund the difference.',
      quantity: 1,
      num_favorers: 12,
      tags: [
        'mobile phone cover',
        'iphone pouch',
        'cell phone case',
        'smart phone pouch',
        'handmade gifts',
        'hand knit phone cosy',
        'hand knit phone case',
        'gear for iphone',
        'handmade phone case',
        'Eiffel Tower Case',
        'rainbow phone sock',
        'Apple phone case',
        'Samsung phone case'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 20,
      img: 'https://i.etsystatic.com/11226482/r/il/5715cf/1759815715/il_fullxfull.1759815715_6azt.jpg',
      onSale: true,
      taxonomy_id: 8
    },
    {
      title: 'Jurassic Park Car Air Freshener 3 Pack',
      description: 'Jurassic Park Car Air Freshener 3 Pack\n' +
        '\n' +
        'Scent : High Berry (Mix fruits)\n' +
        '\n' +
        'High quality Double side print\n' +
        '\n' +
        'Price for 3 piece of air fresheners',
      quantity: 141,
      num_favorers: 1,
      tags: [
        'Car air freshener',
        'AIR FRESHENER',
        'hanging air freshene',
        'cute air freshener',
        'funny air freshener',
        'jurassic park',
        'dinosaur',
        'jurassic world',
        'Lab Technician',
        'Visitor Pass',
        'Park Ranger'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 11.68,
      img: 'https://i.etsystatic.com/29106513/r/il/b771c8/3854446811/il_fullxfull.3854446811_9l3u.jpg',
      onSale: true,
      taxonomy_id: 8
    },
    {
      title: 'Popcorn bucket ( multi color ) phone case',
      description: 'Popcorn bucket multi color phone case \n' +
        '✨Design as shown \n' +
        '✨Placement may vary \n' +
        'PHONE GRIPS SOLD SEPARATELY \n' +
        '✨White & black bumper base available please choose correct color you’d like at check out. \n' +
        '✨ Non slip designed anti- drop shock proof tpu rubber case \n' +
        '✨Please make sure you choose the correct phone case size at check out no changes can be made after purchase. \n' +
        '✨this phone case design is a sublimated phone base design can have a light glitter or matte finish it varies in phone sizes. \n' +
        '✨Turn around time 2 1/2 weeks \n' +
        '✨Free first class Usps shipping \n' +
        '✨all sales are final no refunds returns or exchanges\n' +
        '\n' +
        '✨Hybrid cases now available for select iPhones. A hybrid case is 2 in 1 design\n' +
        'Hard Plastic outside shell / rubber inside\n' +
        'Small raised lip around glass. This is a more heavy duty case if your prefer something more heavy duty. Comes in black only \n' +
        '\n' +
        '✨If you don’t see your phone case size listed feel free to message me and I can see if I can get it in stock for you. I’ll try me best to make it happen! \n' +
        '\n' +
        '✨please remember white cases will discolor over time due to the oil in your hands or color transfer from clothes. If that will be a issue for you I highly suggest grabbing a black case.',
      quantity: 264,
      num_favorers: 0,
      tags: [
        'Disney keychain',
        'Disney straw topper',
        'Disneyland',
        'Disney princess',
        'Disney world',
        'disney pop socket',
        'disney balloon',
        'disney accesories',
        'haunted mansion',
        'disney popsocket',
        'Mickey balloon',
        'phone case',
        'Disney phone case'
      ],
      processing_min: 10,
      processing_max: 10,
      price: 25,
      img: 'https://i.etsystatic.com/19519383/r/il/3cb0ea/3813099554/il_fullxfull.3813099554_4ayd.jpg',
      onSale: true,
      taxonomy_id: 8
    },
    {
      title: 'Heart Shape Pastel Colours Shockproof Cases For iPhone 11 12 13 Mini Pro XR X XS SE 2020 Max 7/8 Plus Genuine Silicone Soft Liquid Cover',
      description: 'Here&#39;s the perfect liquid silicone case for your iPhone, available in many pastel and solid colours to suit any taste. Made out of flexible silicone, protecting your iPhone has never been more simple. Unless you are a fan of bulky and fancy type cases, these cases are the perfect choice for any iPhone user.\n' +
        'It boasts all the features you would like from a case:\n' +
        '\n' +
        'Front Lip for Screen protection\n' +
        '\n' +
        'Raised Edges for camera Lens Protection\n' +
        '\n' +
        'Gloss finish \n' +
        '\n' +
        'Perfect cut-outs for all features\n' +
        '\n' +
        'Colours may differ slightly from original photo',
      quantity: 713,
      num_favorers: 765,
      tags: [
        'Green',
        'Pink',
        'Shockproof',
        'Red',
        'Pastel',
        'Protective rim',
        'blue',
        'heart',
        'slim',
        'cute',
        'glossy',
        'camera protection',
        'silicone soft case'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 12.99,
      img: 'https://i.etsystatic.com/22887593/r/il/352b78/3362376462/il_fullxfull.3362376462_191y.jpg',
      onSale: true,
      taxonomy_id: 8
    },
    {
      title: 'PSPgo microsd memory card adapter m2microsd Memory Card Adapter',
      description: 'DEAR BUYER, PLEASE NOTE: FOR DISPATCHING I’m using ETSY shipping address, so please make sure that it is correct \n' +
        '\n' +
        'Adapter allows you to use micro sd card instead of expensive and rare to find m2 cards in your psp go. Everything is soldered together so you will not lose contact. It is fully functional. It can fit under battery cover. I checking every adapter prior dispatching. \n' +
        'No memory card included, only adapter (adapter support 128 gb maximum) \n' +
        'For now only version with updated design is available\n' +
        'Also only ribbon cable is available to purchase ( you need to have some soldering skills )\n' +
        '\n' +
        'If you need ready to serve unit you should choose:\n' +
        'Single slot  or\n' +
        'Dual slot (support micro sd more than 128 gb)\n' +
        'If you have soldering skills and your favourite memory stick pro duo adapter you should choose:\n' +
        'Ribbon cable \n' +
        '\n' +
        'Contact me please if you have any questions\n' +
        ' \n' +
        'PLEASE CHECK MY OTHER ITEMS',
      quantity: 17,
      num_favorers: 391,
      tags: [ 'Psp go adapter', 'm2microsd adapter' ],
      processing_min: 3,
      processing_max: 5,
      price: 13,
      img: 'https://i.etsystatic.com/21696344/r/il/ead05c/3435015781/il_fullxfull.3435015781_htn2.jpg',
      onSale: true,
      taxonomy_id: 8
    },
    {
      title: 'LGBTQ+ DNA double helix glossy vinyl sticker',
      description: 'Some DNA with the colours of some LGBTQ+ flags🏳️‍🌈\n' +
        'I love these as I’m a bit of a nerd but I also support everyones gender and sexuality whether they have one or not🌈 it’s not a choice but a part of who you are so be proud of it🤍\n' +
        '\n' +
        'Also find these to be colourful DNA so perfect for anyone in STEM🧫\n' +
        '\n' +
        'The limit of photos on here is 10 so I had to join some together:\n' +
        '\n' +
        '9th photo - Asexual (left). Agender (right)\n' +
        '10th photo - Non-binary (left). Gender-fluid (right)\n' +
        '\n' +
        'I understand there are many more flags so please message me to make one that fits you✨\n' +
        '\n' +
        'Approx size: 2.5cm x 7.5cm\n' +
        '\n' +
        'Hand drawn on Procreate🎨\n' +
        '\n' +
        'I have wanted to sell my art for so long and I’m so excited to start so thank you for any support, it means so much!\n' +
        '\n' +
        'All stickers are currently hand cut by me as I’m a broke bitch and can’t afford a cutting machine at the moment but they are definitely cut with care✨ (And lots of finger cramps)\n' +
        '\n' +
        '💦Stickers are water resistant💦',
      quantity: 64,
      num_favorers: 2,
      tags: [
        'LGBTQ',        'pride',
        'dna',          'science',
        'stem',         'women in stem',
        'trans',        'translivesmatter',
        'Double helix', 'rainbow',
        'Colourful',    'cute',
        'biology'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 2.1,
      img: 'https://i.etsystatic.com/34941533/r/il/5a1368/3759208178/il_fullxfull.3759208178_3zte.jpg',
      onSale: true,
      taxonomy_id: 8
    },
    {
      title: 'Sailor Moon Love Heart Finger Grip iPhone Case For iPhone 7 8 Plus X XR XS 11 12 13 mini Pro Max',
      description: '-Brand new\n' +
        '-High Quality Smooth Silicone\n' +
        '-Easy to install\n' +
        '\n' +
        'PLEASE READ EACH OPTION CAREFULLY & SELECT THE CORRECT PHONE MODEL!!!\n' +
        '\n' +
        'Phone Model and Sizes:\n' +
        '\n' +
        'iPhone 7/8 4.7&quot; (Smaller iPhone 7/8 version)\n' +
        'iPhone 7 Plus/8 Plus 5.5&quot; (Bigger iPhone 7/8 version)\n' +
        'iPhone X/Xs 5.8&quot; (Smaller iPhone X version)\n' +
        'iPhone Xs Max 6.5&quot; (Bigger iPhone X version)\n' +
        'iPhone Xr 6.1&quot;\n' +
        'iPhone 11 6.1&quot; (THIS OPTION IS NOT FOR PRO MODELS)\n' +
        'iPhone 11 Pro 5.8&quot; (Smaller iPhone 11 Pro version)\n' +
        'iPhone 11 Pro Max 6.5&quot; (Bigger iPhone 11 Pro version)\n' +
        'iPhone 12 Mini 5.4&quot;\n' +
        'iPhone 12/12 Pro 6.1&quot;\n' +
        'iPhone 12 Pro Max 6.7&quot;\n' +
        'iPhone 13 Mini 5.4&quot;\n' +
        'iPhone 13/13 Pro 6.1&quot;\n' +
        'iPhone 13 Pro Max 6.7&quot;\n' +
        '\n' +
        '\n' +
        'POSTAGE (SHIPPING)\n' +
        'Items will be posted to your Etsy address so please ensure your address details are correct when your checkout. Please contact me if you would like your item sent to a different address.\n' +
        '\n' +
        'POSTAGE - INTERNATIONAL\n' +
        '- Items are posting within 2 working days but can take up to 3-4 weeks to arrive at destination\n' +
        '\n' +
        'YOU PREFER TRACKING\n' +
        '- PLEASE allow plenty of time for delivery as many items do get stuck in domestic postal systems in many countries, and we are not able to obtain any information if you do not request tracking service.',
      quantity: 5,
      num_favorers: 136,
      tags: [
        'Sailor Moon',
        'iphone case',
        'totoro',
        'Spirited Away',
        'pokemon',
        'my neighbour totoro',
        'popsocket',
        'finger ring'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 15.99,
      img: 'https://i.etsystatic.com/27176061/r/il/b517c7/3797429417/il_fullxfull.3797429417_mz4k.jpg',
      onSale: true,
      taxonomy_id: 8
    },
    {
      title: 'Super Father coque iPhone',
      description: 'Cette coque élégante pour iPhone protège votre portable contre les rayures, la poussière, l&#39;huile et la saleté. La surface arrière est rigide, les côtés sont flexibles. Elle est facile à enlever et à remettre. Ouvertures de ports parfaitement alignées. \n' +
        '\n' +
        '• Matériau polyuréthane thermoplastique hybride (TPU) et polycarbonate (PC) sans BPA\n' +
        '• Surface arrière en polycarbonate rigide\n' +
        '• Côtés souples en polyuréthane transparent\n' +
        '• Rebord surélevé de 5 mm\n' +
        '• Compatible avec la recharge sans fil\n' +
        '• Des orifices de port alignés avec précision\n' +
        '• Facile à mettre et à enlever\n' +
        '• Compatible avec la recharge sans fil\n' +
        '• La coque SE correspond au modèle SE de l&#39;iPhone 2020\n' +
        '• Produit vierge provenant de Chine',
      quantity: 16983,
      num_favorers: 0,
      tags: [],
      processing_min: 2,
      processing_max: 5,
      price: 152.19,
      img: 'https://i.etsystatic.com/35243458/r/il/df7aa9/3813096216/il_fullxfull.3813096216_6cgp.jpg',
      onSale: true,
      taxonomy_id: 8
    },
    {
      title: '1988-1991 Toyota Corolla AM FM Cassette Radio Stereo',
      description: 'Condition Is used. IN Good Working Condition.',
      quantity: 1,
      num_favorers: 0,
      tags: [],
      processing_min: 1,
      processing_max: 2,
      price: 95,
      img: 'https://i.etsystatic.com/21086180/r/il/611789/3860617501/il_fullxfull.3860617501_e1pc.jpg',
      onSale: true,
      taxonomy_id: 8
    },
    {
      title: 'Personalised Leather iPad Mini Slip Case with Strap',
      description: 'Beautiful iPad Mini slip case … nice and padded for added protection.  \n' +
        '\n' +
        'Handmade in the very finest luxury Italian Nappa, textured leather.  \n' +
        '\n' +
        'Features a retaining strap to help keep the iPad securely in the case.\n' +
        '\n' +
        'External dimensions -- 21.5 x 15.5 cm.\n' +
        '\n' +
        '*PERSONALISATION DISCLOSURE* - The position and finish of our embossing may vary slightly from item to item. Our products are embossed by hand and due to the textured surface of the leather, on rare occasions, some very small areas of the embossing may not be visible.  Personalisation is not a requirement and all our products are available without personalisation if preferred.',
      quantity: 20,
      num_favorers: 74,
      tags: [
        'iPad Case',
        'Byron and Brown',
        'iPad Mini Case',
        'iPad Mini',
        'iPad Mini Cover',
        'iPad cover'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 12.95,
      img: 'https://i.etsystatic.com/12111167/r/il/1143fc/1194176249/il_fullxfull.1194176249_9183.jpg',
      onSale: true,
      taxonomy_id: 8
    },
    {
      title: 'Personalised Leather iPad Mini Slip Case with Strap',
      description: 'Beautiful iPad Mini slip case … nice and padded for added protection.  \n' +
        '\n' +
        'Handmade in the very finest luxury Italian Nappa, textured leather.  \n' +
        '\n' +
        'Features a retaining strap to help keep the iPad securely in the case.\n' +
        '\n' +
        'External dimensions -- 21.5 x 15.5 cm.\n' +
        '\n' +
        '*PERSONALISATION DISCLOSURE* - The position and finish of our embossing may vary slightly from item to item. Our products are embossed by hand and due to the textured surface of the leather, on rare occasions, some very small areas of the embossing may not be visible.  Personalisation is not a requirement and all our products are available without personalisation if preferred.',
      quantity: 20,
      num_favorers: 74,
      tags: [
        'iPad Case',
        'Byron and Brown',
        'iPad Mini Case',
        'iPad Mini',
        'iPad Mini Cover',
        'iPad cover'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 12.95,
      img: 'https://i.etsystatic.com/12111167/r/il/1143fc/1194176249/il_fullxfull.1194176249_9183.jpg',
      onSale: true,
      taxonomy_id: 8
    },
    {
      title: 'Cow car freshie, Black & white Cow with spotted bow, auto air freshener, cow decor, cow car accessory, car candle, car decor,',
      description: 'Cow car freshie, Black & White Cow with spotted bow, auto air freshener, cow decor, cow car accessory, car candle, car decor\n' +
        '\n' +
        'Scent last 2 to 4 Weeks. Works Best in warm room or car. Heat activated. Car freshies are not Oder eliminators, may not mask other smells. \n' +
        '\n' +
        'Car freshies are made of aroma beads, fragrance oils and mica powder. Decorated with ribbon or artificial flowers . If you purchase a circle shaped freshie the picture on front is printed on card stock paper and hot glued to front of the aroma bead scented circle. \n' +
        '\n' +
        'I am not responsible for misuse of my products, use the string provided to hang from the mirror only ! Do not lay on dash because in high temperatures or with sun beating on it it may melt or stick to the dash. Do not allow children or pets to play with freshies! Mica power and fragrance oils may come off and irritate skin or eyes. Elastic string is also a choking hazard.\n' +
        'I am not responsible for allergies or allergic reactions. Wash hands after handing.',
      quantity: 7,
      num_favorers: 0,
      tags: [
        'cow car candle',
        'mom gift',
        'boutique products',
        'cheap gift idea',
        'car freshener',
        'cow car decor',
        'cow car freshie',
        'automotive accessory',
        'car freshies',
        'car decor',
        'room freshener',
        'car candles',
        'auto air freshener'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 10,
      img: 'https://i.etsystatic.com/30893869/r/il/2e6fa6/3813113550/il_fullxfull.3813113550_qr31.jpg',
      onSale: true,
      taxonomy_id: 8
    },
    {
      title: 'Alabama License Plate 1990, Heart of Dixie Alabama License Plate, Transit Alabama, License Plate,  Rustic License Plate, Man Cave Decor',
      description: 'Alabama License Plate 1990, Heart of Dixie Alabama License Plate, Transit Alabama, License Plate, Rustic License Plate, Man Cave Decor\n' +
        '\n' +
        'Creamy background with black lettering.  The top of the license plate  has the popular Heart of Dixie logo  and the expiration month, Nov.  The tag number is in the middle section and the bottom has 90 on the right corner. \n' +
        'The license plate has some edge blackening on the right side. \n' +
        '\n' +
        'This plate is from a vehicle in Alabama that was owned by the driver of a transit vehicle,\n' +
        'This license plate has the Heart of Dixie slogan and heart next to  Alabama.\n' +
        '\n' +
        'The license plate itself is in pretty good condition.  Minor edge scuff and no rusting. \n' +
        '\n' +
        'This tag is DT 6403. Transit 90.\n' +
        '\n' +
        'Thank you for shopping at Travel The Roads. Also visit my other shop, UniquelyMollie.etsy.com.',
      quantity: 1,
      num_favorers: 23,
      tags: [
        'epsteam',
        'vtpassion',
        'alabama license',
        'heart of dixie',
        'vintage license',
        'license plate AL',
        'collector license',
        'man cave decor',
        're-purpose supply',
        'vintage metal tag',
        'license plate',
        'transit vehicle tag',
        'Alabama license 1990'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 12,
      img: 'https://i.etsystatic.com/12543844/r/il/18a02b/2777367573/il_fullxfull.2777367573_dzqz.jpg',
      onSale: true,
      taxonomy_id: 8
    },
    {
      title: 'Cover Case Jordan 1 Off White Chicago 3D Nike for iPhone 13 Pro Max Protective case, Soft Case, Anti-Crush.',
      description: 'Product Features:\n' +
        '▪️ Designed specifically for iPhone\n' +
        '▪️ Compatible with wireless charging\n' +
        '▪️ Easy access to all ports and buttons\n' +
        '▪️ Compact and pleasant to the touch\n' +
        '▪️ Highest quality silicone and TPU\n' +
        '▪️ Easy to apply and remove\n' +
        '\n' +
        '﻿Shipping Information:\n' +
        '▪️ Standard: Free shipping worldwide, delivery time 4-20 business days.',
      quantity: 19,
      num_favorers: 46,
      tags: [
        'COVER CASE',
        'iPhone',
        'IOS',
        'Apple',
        'Smartphone',
        'housing',
        'iPhone Accessories',
        'cell phone accessories',
        'phone accessories',
        'Anti impact',
        'Anti water',
        'SNEAKERS'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 19.99,
      img: 'https://i.etsystatic.com/34478300/r/il/c5bb4e/3712168634/il_fullxfull.3712168634_9dje.jpg',
      onSale: true,
      taxonomy_id: 8
    },
    {
      title: 'Kawaii Pink Keycaps',
      description: '*Sold as a set*\n' +
        'These artisan keycaps are handmade with resin and will fit most mechanical keyboards.\n' +
        '\n' +
        'Due to its handmade nature, each keycap may have a few imperfections but nothing that affects the overall look of the keycap on the keyboard.\n' +
        '\n' +
        'I can also make the same design with a different letter, message me if you are interested :)\n' +
        '\n' +
        'Feel free to pm me questions or any concerns!',
      quantity: 1,
      num_favorers: 30,
      tags: [],
      processing_min: 3,
      processing_max: 5,
      price: 1450,
      img: 'https://i.etsystatic.com/11160794/r/il/0b2789/3705423683/il_fullxfull.3705423683_mqdb.jpg',
      onSale: true,
      taxonomy_id: 8
    },
    {
      title: 'Floral resin phone grips',
      description: 'Choose from lots of floral colors and flakes as well as shapes\n' +
        'These are made from resin and include your color choice of flowers and flakes\n' +
        'I use pressed flowers and different shades of your chosen color scheme \n' +
        '\n' +
        '**please be as specific as possible **\n' +
        '\n' +
        'Is made with a non branded phone grip with a 3M sticky side. Please make sure your surface is clean before sticking your grip ( once placed on phone do not remove, or sticky part won’t work)\n' +
        '\n' +
        'If grip was already used and attached to your phone, it cannot be returned for a refund',
      quantity: 10,
      num_favorers: 923,
      tags: [
        'pop socket',
        'gift ideas',
        'custom phone grips',
        'resin art',
        'phone accessory',
        'cellphone',
        'phone grip',
        'keychain',
        'rainbow',
        'glitter',
        'butterflies',
        'personalized'
      ],
      processing_min: 5,
      processing_max: 7,
      price: 13,
      img: 'https://i.etsystatic.com/23927083/r/il/6ae5e9/3341985716/il_fullxfull.3341985716_lz6b.jpg',
      onSale: true,
      taxonomy_id: 8
    },
    {
      title: 'Forex Trading Bullish Traders Stock Market Exchange Day Trader Gifts Crypto Currency Personalised Mouse Pad Computer Personalized Mouse Mat',
      description: 'ARE YOU A TRADER, OR KNOW SOMEONE WHO LOVES THE MARKETS?\n' +
        '\n' +
        'A Trading Mousepad that is perfect for any trader out there, who is looking to personalise their office space. We all know how hard trading is at times this mouse mat will keep you motivated and striving for the best results.\n' +
        '\n' +
        'These make a perfect gift or treat yourself.\n' +
        '\n' +
        'MOUSE NOT INCLUDED.\n' +
        '\n' +
        'Specification:\n' +
        '- 235 x 195 mm\n' +
        '- Thick & durable rubber pads\n' +
        '- Smooth fabric surface\n' +
        '- Vivid, full-colour printing',
      quantity: 5,
      num_favorers: 20,
      tags: [
        'forex trading gifts',
        'forex trader gifts',
        'mouse pad',
        'mouse mat',
        'personalised gifts',
        'Bullish Traders',
        'Stock Market gift',
        'Day Trader Gifts',
        'Crypto Currency',
        'cryptocurrency gifts',
        'forex gifts',
        'forex',
        'investment gifts'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 14.99,
      img: 'https://i.etsystatic.com/22927823/r/il/482a3b/3340191316/il_fullxfull.3340191316_929u.jpg',
      onSale: true,
      taxonomy_id: 8
    },
    {
      title: 'Custom Dental Assistant Tumbler, Gift for Dental Hygienist, Leopard Print, New Dental Assistant Graduate Gift, Personalized tumbler, Cheetah',
      description: '***Order Cutoff Date for Mother&#39;s Day Orders is Sunday, May 1st!! Orders place after May 1st will not be guaranteed for delivery by May 8th!****\n' +
        '\n' +
        'Please check the current processing time and estimated Ship Date below the description.\n' +
        '\n' +
        'This is a 20oz skinny tumbler, stainless steel, insulated and will keep your drinks cold or hot for several hours. Comes with a lid and a straw.\n' +
        '\n' +
        'This tumbler is not made with epoxy or glitter and is handmade to order by myself with a sublimation printing method.\n' +
        '\n' +
        '*Due to the fact that these are handmade, not from a mass production company, I do my best to make sure they are as close to 100% perfect as possible though some imperfections may occur. These are full wrap designed tumblers and WILL HAVE A SEAM. Depending on the design will depend on how noticeable the seam is.\n' +
        '\n' +
        '*Slight colors may differ due to computer screen / monitor settings.\n' +
        '\n' +
        '20oz sublimation tumbler- no epoxy\n' +
        '\n' +
        'DO NOT PUT IN DISHWASHER as the colors in the tumbler will fade over time if you use the dishwasher!\n' +
        '\n' +
        'These are made to order and not refundable. Please make sure you understand that these are printed tumblers, no epoxy or real glitter is used.\n' +
        '\n' +
        'Please be sure to reach out if you need a mockup of your name/names prior to ordering and we will be happy to provide!\n' +
        '\n' +
        'Personalized items are not refundable.\n' +
        '\n' +
        'All tumbler 20oz skinny tumbler designs are sized at approximately 9&quot;3 x 8&quot;2 inches.',
      quantity: 645,
      num_favorers: 224,
      tags: [
        '20oz Tumbler',
        'printed tumbler',
        'tumbler gift',
        'tumbler gift for her',
        'skinny tumbler',
        'custom tumbler',
        'personalized tumbler',
        'leopard print',
        'cheetah print',
        'dental assistant',
        'new graduate',
        'hygienist gift',
        'dental tumbler'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 29,
      img: 'https://i.etsystatic.com/25633325/r/il/ad2408/3712621380/il_fullxfull.3712621380_4caa.jpg',
      onSale: true,
      taxonomy_id: 9
    },
    {
      title: 'Set of 3 Blue Wall Art Prints, Modern Mid Century, Geometric Wall Art, Navy Blue Wall Prints, Blue Wall Decor, Boho Prints, Navy, Blue',
      description: 'Set of 3 blue modern mid century wall art prints in watercolour shades of blue on a light beige background.\n' +
        'These are full colour borderless prints. Printed onto fine art card for a beautiful and long-lasting finish.\n' +
        '\n' +
        '- FREE UK Delivery on all orders\n' +
        '- FREE US Delivery on orders over $35 (USD)\n' +
        '- FAST Dispatch\n' +
        '\n' +
        'When you purchase - Quantity 1 = the full set of prints!\n' +
        '\n' +
        '*PLEASE NOTE: PRINTS DO NOT INCLUDE FRAMES\n' +
        '\n' +
        'Have a look at our full range of Wall Art Prints HERE:\n' +
        'www.etsy.com/uk/shop/StyliizeBoutique\n' +
        '\n' +
        'PRODUCT INFORMATION\n' +
        'Professionally printed and produced using a professional large format printer using high longevity pigment inks & 230gsm matt fine art archival card to ensure vivid and rich coloured quality prints that will last a lifetime behind glass. \n' +
        '\n' +
        'SIZE GUIDE\n' +
        '\n' +
        '• 5 x 7:      127 x 177.8 mm   |   5 x 7 in   |   12.7 x 17.8 cm\n' +
        '\n' +
        '• A5:         148 x 210 mm  |   5.8 x 8.3 in   |  21 x 14.8 cm\n' +
        '\n' +
        '• 8 x 10:   203.2 x 254 mm   |   8 x 10 in   |   20.32 x 25.4 cm\n' +
        '\n' +
        '• A4:         210 x 297mm   |   8.3 x 11.7 in   |   21.0 x 29.7 cm\n' +
        '\n' +
        '• 10 x 12:   254 x 305 mm   |   10 x 12 in   |   25.4 x 30.5 cm\n' +
        '\n' +
        '• A3:         297 x 420 mm   |   11.7 x 16.5 in   |   29.7 x 42.0 cm\n' +
        '\n' +
        '• A2:         420 x 594 mm   |   16.5 x 23.4 in   |   42 x 59.4 cm\n' +
        '\n' +
        'PACKAGING AND SHIPPING \n' +
        'Prints up to A3 size will be posted flat with grey board in an eco friendly recyclable bag which will then be placed into a full hard board envelope with a do not bend sticker to ensure safe delivery. A2 prints will be supplied rolled in a cardboard tube to reduce the risk of damage during transit.\n' +
        'All of my packing materials are eco friendly where possible including plastic free sellotape.\n' +
        '\n' +
        'Made to order and dispatched within 1-2 working days using Royal Mail, unless otherwise stated at time of order.\n' +
        '\n' +
        'The price is for prints only and you will not receive a frame, frames are not included and are for illustration purposes only.\n' +
        '\n' +
        'Please note that colours may slightly differ from what you see on screen due to monitor calibration settings, printout settings and material type. A2 prints that are rolled will flatten out easily when placed behind behind glass in a frame. \n' +
        '\n' +
        'If you require an alternative size please ask, if I can help I will.\n' +
        '\n' +
        'Thank you for visiting Styliize Boutique.',
      quantity: 4,
      num_favorers: 95,
      tags: [
        'Boho wall prints',
        'living room prints',
        'wall print set',
        'wall prints',
        'set of 3 wall prints',
        'mid century prints',
        'geometric wall art',
        'blue wall prints',
        'navy blue',
        'blue wall decor',
        'abstract art',
        'wall decor',
        'wall art'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 9.9,
      img: 'https://i.etsystatic.com/27695560/r/il/58b453/3751026540/il_fullxfull.3751026540_4lcu.jpg',
      onSale: true,
      taxonomy_id: 9
    },
    {
      title: 'The Gnat Trap! Fruit Fly and Gnat Trap device',
      description: 'Tired of all those annoying fruit flies and gnats in your home or workspace? Doesn&#39;t it seem like they just appear out of nowhere and they NEVER LEAVE?! \n' +
        '\n' +
        'Well look no further! This trap is designed to make your life easier. The jar with a specially designed lid allows those little critters in and not back out. Simply fill with 1/4 cup apple cider vinegar and 1 tablespoon of dish soap and watch those buggers PILE UP! \n' +
        '\n' +
        'This lid is designed to fit in place of the metal insert that normally comes with your regular mouth mason jar. Remove this center insert, replace with your Gnat Trap lid, and then screw the outer ring down as you normally would attach the standard lid of the jar as you see in the photos above. Have you tried homemade traps that spill everywhere if you accidentally tip them over? Give yourself peace of mind and a few extra seconds to recover knowing that the liquid in this trap wont instantly cover your countertop!\n' +
        '\n' +
        'Made in the USA! Fits standard size, regular mouth mason jars. Please note this fits regular mouth mason jars and is not fitted to wide mouth lids. Sold as a complete set with a regular mouth mason jar, or lid alone (in the quantity you select). Your choice!\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'Please allow 1 - 2 business days of processing time prior to shipment. All orders are shipped with USPS First Class Package service to provide you with a tracking number and ensure safe delivery of your order.',
      quantity: 17,
      num_favorers: 96,
      tags: [
        'fly trap',  'bug trap',
        'gnats',     'gnat',
        'fruit fly', 'fruit flies',
        'bugs',      'fly',
        'flies'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 1.99,
      img: 'https://i.etsystatic.com/27292512/r/il/ea3871/3482862908/il_fullxfull.3482862908_tti8.jpg',
      onSale: true,
      taxonomy_id: 9
    },
    {
      title: 'Print We Never Painted By The Numbers Baby But We Were Making It Count Mountain Cliffs Stream Railroad Picture Art',
      description: '~ Print We Never Painted By The Numbers Baby But We Were Making It Count Mountain Cliffs Stream Railroad Picture Art\n' +
        '\n' +
        '~ This listing is for one print\n' +
        '\n' +
        '~ Approximately 4 x 6 inches\n' +
        '\n' +
        '~ Reproduction of a vintage print showing a stream and railroad track running between some cliffy mountains with the words “We never painted by the numbers baby but we were making it count”\n' +
        '\n' +
        '~ The print + quote shown is the &quot;standard&quot; option. I&#39;m also happy to do custom lyrics / quotes / whatever you want instead of the words shown, which is the &quot;custom&quot; option\n' +
        '\n' +
        '~ If you want to go the &quot;custom&quot; route, select it from the dropdown, and then click on where it says &quot;add your personalization&quot; right underneath that and let me know what you want the print to say in the little box. While I don&#39;t have a specific word amount parameter, just know that the amount of words you include will obviously impact the way the print looks. The wording size and spacing will also vary. I can&#39;t promise your quote will look exactly like the example one, although the font and general vibe should remain the same.\n' +
        '\n' +
        '~ IMPORTANT: Please don&#39;t confuse me by selecting the &quot;standard&quot; option and also typing a quote in the box! The box goes with the &quot;custom&quot; option only!\n' +
        '\n' +
        '~ Printed on a semi-gloss paper. It’s got some shine, which makes the colors really pop, but not so shiny that you’re going to see your reflection in the picture. It’s thicker than regular copy paper, but not quite as thick as sturdy card stock. Maybe more like an index card. Definitely has a photograph-ish element. \n' +
        '\n' +
        '~ The HP logo is patterned on the back. Gotta get that marketing in, right? Ha. So maybe keep that in mind if you’re wanting to use this as a card for someone. I’d advocate for just writing on top of it, but understand why that may not be the most appealing. \n' +
        '\n' +
        '~ Please note that because I’m cutting each of these out individually, the white boarder around the picture may vary on thickness a little, and the sizing may not be 6x4 on the dot. Nothing crazy, but just know that there are slight nuances. \n' +
        '\n' +
        '~ I have a vinyl sticker in this design available here:\n' +
        'https://www.etsy.com/listing/1162180321\n' +
        '\n' +
        '~ Thanks for dropping by! If you have any questions, please feel free to ask!',
      quantity: 2,
      num_favorers: 7,
      tags: [
        'lithograph railroad',
        'making count one 1',
        'numbers but were it',
        'painted by the baby',
        'mountain we never',
        'woods Forest stream',
        'song lyrics retro',
        'Taylor Old Version',
        'picture TS art quote',
        'willow postcard card',
        'evermore poster gift',
        'wall decor folklore',
        'print vintage swift'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 3.64,
      img: 'https://i.etsystatic.com/10456565/r/il/2df920/3229767891/il_fullxfull.3229767891_2ley.jpg',
      onSale: true,
      taxonomy_id: 9
    },
    {
      title: 'Crystal Healing Chakra, Flower Of Life Pyramid,Shri Yantra Pyramid, Vastu Symbol Crystal Chakra Cube Grid Orgone Pyramid Healing Meditation',
      description: 'ITEM DESCRIPTION\n' +
        '\n' +
        'Perfect for Chakra work, Reiki healing, crystal grids, home office decor, gifts, and more.\n' +
        '\n' +
        'Sale For: Pack Of 1.\n' +
        'Size: Length:-6cm x Width:-7cm(Approx).\n' +
        'Item Weight: 165 gm(Approx).\n' +
        'Material: Gemstone.\n' +
        'Additional: 1 Gift Pouch.\n' +
        'Useful For: Positive Energy, Healing, Meditation, Peace Of Mind, Chakra Balancing & Concentration.\n' +
        '\n' +
        '*Stone Name\n' +
        '\n' +
        'D1- Peridot,Yellow Aventurine & Aquamarine\n' +
        '\n' +
        'D2- Amethyst,Red Jasper & Clear Quartz\n' +
        '\n' +
        'D3- Peridot & Giliter\n' +
        '\n' +
        'D4- Selenite,Black Tourmaline & Rudraksh\n' +
        '\n' +
        'D5- Lapis Lazuli,Aquamarine & Clear Quartz\n' +
        '\n' +
        'D6- Black Tourmaline & Gomti\n' +
        '\n' +
        'D7- Lapis Lazuli & Gomti\n' +
        '\n' +
        'D8- Rose Quartz,Green Aventurine & Moonstone\n' +
        '\n' +
        'About This Item\n' +
        '\n' +
        'D1- Peridot,Yellow Aventurine & Aquamarine - Pyramid Helps In Absorbing All Negative Energies Around You, Transforming Them Into Positive Energy And Then Released Into Your Surroundings.\n' +
        '\n' +
        'D2- Amethyst,Red Jasper & Clear Quartz - This Orgonite Pyramid Works As A Natural Healing Source. Place The Energy Crystals Near You Or Near Smartphones, Computers, And Most Electronic Devices. You Will Feel The Large.\n' +
        '\n' +
        'D3- Peridot & Giliter - Creates A Peaceful Environment By Enhancing The Positive Energies In A Room.\n' +
        'It Energize Foods, Water And Boost Plant Growth. Ideal For Dowsing, Meditation, Energy Healing, Chakra Balancing, Reiki And Feng Shui\n' +
        '\n' +
        'D4- Selenite,Black Tourmaline & Rudraksh - Gemstone Selenite & Black Tourmaline Orgone Pyramid Rudraksh Reiki Chakra Symbol Healing Crystal Generator Orgonite Pyramid Yoga Meditation.\n' +
        '\n' +
        'D5- Lapis Lazuli,Aquamarine & Clear Quartz - Lapis Lazuli & Aquamarine Orgone Clear Quartz Reiki Chakra Symbol Healing Crystal Generator Orgonite Pyramid Yoga Meditation. It Is Use For Healing, Meditation, Remove Negative Energy, Yoga Meditation Reiki Chakra.\n' +
        '\n' +
        'D6- Black Tourmaline & Gomti - Black Tourmaline With Copper Coil For Goodluck Gomti Chakra Crystal Pyramid For Healing Vastu Correction, Meditation. This Orgone Pyramid Reduces Negative Energy And Converts It Into Positive Energy\n' +
        '\n' +
        'D7- Lapis Lazuli & Gomti - Lapis Lazuli With Metatron&#39;s Cube Gomti Chakra Crystal Pyramid For Healing Vastu Correction, Meditation. This Orgone Pyramid Reduces Negative Energy And Converts It Into Positive Energy. A Gemstone Pyramid Is Also Used To Enhance And Focus The Properties Of The Stone It Is Made Of. Pyramids Attract Energy, Transform It And Release It Into Their Environment.\n' +
        '\n' +
        'D8- Rose Quartz,Green Aventurine & Moonstone - Orgone Pyramid Rose Quartz & Green Aventurine Prosperity Crystals Moonstone Reiki Healing Home Office Decoration.\n' +
        'Crystal Gift: Gift This Wonderful Reiki Healing Crystal Orgone Pyramid To Your Loved Ones, Family, Friends, And Relatives.\n' +
        '\n' +
        'A Gemstone Pyramid Is Also Used To Enhance And Focus The Properties Of The Stone It Is Made Of. Pyramids Attract Energy, Transform It And Release It Into Their Environment.\n' +
        'This Orgonite Pyramid Works As A Natural Healing Source. Place The Energy Crystals Near You Or Near Smartphones, Computers, And Most Electronic Devices. You Will Feel The Large\n' +
        'Stress Relief, Crystal Therapy, Good Luck, Fortune, Self Esteem.Crystal For Specific Use Or With Specific Energies, Sit Quietly Away From Distractions Or Strong Electrical Devices And External Energies, Then Hold The Crystal In Front Of You, Clear Your Mind And Focus On The Stone.\n' +
        '\n' +
        'Note:- I Have Mentioned Approx Size Of The Item, Size May Vary In Length And Width.These Are Natural Stones, So The Product You Might Receive Can Be Slightly Vary From The Image.',
      quantity: 40,
      num_favorers: 0,
      tags: [
        'Positive Energy',
        'Vastu Chakra',
        'Good Luck Gift',
        'Flower of Life',
        'Shri yanta Pyramid',
        'Meditation Crystal',
        'Energy Generator',
        'Reiki Healing',
        'Gemstone Pyramid',
        'Healing Crystal',
        'Mental Health Gift',
        'Anxiety Relife Gift',
        'Yoga Meditation'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 12.85,
      img: 'https://i.etsystatic.com/28010086/r/il/229f03/3556340910/il_fullxfull.3556340910_rerf.jpg',
      onSale: true,
      taxonomy_id: 9
    },
    {
      title: 'Cozy Afternoon Coconut Soy Candle',
      description: 'This candle is a blended Lemon on top of Italian Bergamot, Yuzu, Mandarin, Lychee Flower, Orange Blossom, Ginger Flower, Oak Moss, Caramel & White Santal..a unique but wonderful blend..\n' +
        '\n' +
        ' Our candles are clean burning and have a long lasting fragrance in your home with a burning time up to 40hrs\n' +
        '\n' +
        'Try them and fall in love.\n' +
        '\n' +
        'You will receive one really cute glass jar with a cute vintage metal gold lid, filled with a coffee lovers dream inside of its own really pretty organza bag.',
      quantity: 3,
      num_favorers: 0,
      tags: [
        'vegan fragrances',
        'wedding gifts',
        'party gifts',
        'gift ideas',
        'body care',
        'perfume oil',
        'amber',
        'white Patchouli',
        'wax melts',
        'Japanese Cherry Blos',
        'tarts',
        'pumpkin Spice',
        'coffee'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 6,
      img: 'https://i.etsystatic.com/33757494/r/il/600709/3813096692/il_fullxfull.3813096692_3cn9.jpg',
      onSale: true,
      taxonomy_id: 9
    },
    {
      title: 'Cup with saying: &quot;If Dad can&#39;t fix it, no one can!&quot; #Papa #lustig #Spruch #Tasse #Becher #funny #coffee #Handwerker',
      description: 'Cup with saying: &quot;If Dad can&#39;t fix it, no one can!&quot;\n' +
        '\n' +
        'High quality cup in glossy or matte.\n' +
        'The saying is printed on both sides on the cup.\n' +
        'The text is completely freely selectable. Can be .B even a name...\n' +
        '\n' +
        'I then adjust the text from the size so that it looks good ;-)\n' +
        '\n' +
        'If you don&#39;t specify your own text, the cup will come as delivered in the pictures.\n' +
        '\n' +
        '100% dishwasher suitable according to BS EN 12875-4 tested on 2000 dishwasher seductes!\n' +
        'Microwave resistant according to BS EN 15284:2007.\n' +
        'Industrial dishwasher resistant.\n' +
        'Height 96 mm,\n' +
        'Diameter 80 mm,\n' +
        'Capacity approx. 330ml\n' +
        '\n' +
        '\n' +
        'Since we do everything ourselves, individual wishes are also possible. Just contact us.',
      quantity: 5,
      num_favorers: 27,
      tags: [
        'Cup',       'Saying',
        'Funny',     'Coffee',
        'Tea',       'Cups',
        'Gift',      'Grandfather',
        'Craftsmen', 'Repair',
        'Best'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 16.9,
      img: 'https://i.etsystatic.com/24946580/r/il/12026a/2878872759/il_fullxfull.2878872759_oqgp.jpg',
      onSale: true,
      taxonomy_id: 9
    },
    {
      title: 'XXL Christmas ball 12 CM (4.7 inch), Christmas, Christmas decorations, Christmas gift, hand-painted glass balls, Christmas decorations',
      description: '★ ☆ Beautiful Christmas ball made of glass - a real eye-catcher! ★☆ \n' +
        '\n' +
        'Made by hand.\n' +
        '\n' +
        '★ ☆ Dimensions★☆ \n' +
        'Diameter: 12 cm (4.7 in.)\n' +
        '\n' +
        '★ ☆ Very strong colors (please select the set when ordering, i.e. photo 1 = set 1)!!! ★☆\n' +
        '\n' +
        '💕 Suitable e.B. as a beautiful Christmas gift for everyone or as a decoration on the table.\n' +
        '\n' +
        '\n' +
        'Since the production is made to order, this item is excluded from exchange.\n' +
        '\n' +
        '♥️ We also try to use recycled cartons for shipping, ♥️ the environment for the love of\n' +
        '\n' +
        'ATTENTION!\n' +
        'The product display images are used to illustrate the products and all products are sold without decoration. Due to the different screen settings, the optics may differ from the pictures)\n' +
        '\n' +
        'For deliveries to non-EU countries, customs duties and import taxes may apply in addition to the purchase price.\n' +
        '\n' +
        'The price always (!) refers to 1 piece, unless you select an option in the shopping cart with more. If it is a set of items, a set will be sold as a whole! Therefore, please check carefully whether you have selected the right quantity.',
      quantity: 7,
      num_favorers: 7,
      tags: [
        'Gift',
        'Home décor',
        'Bauble',
        'christmas',
        'Christmas decoration',
        'Christmas presents',
        'soft night balls',
        'Christmas ball personalized',
        'Christmas Ball Set',
        'Crystal ball',
        'Vintage',
        'hand-painted Christmas baubles',
        'Glass balls hand-painted'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 35,
      img: 'https://i.etsystatic.com/22918002/r/il/97953e/3532524904/il_fullxfull.3532524904_cq1i.jpg',
      onSale: true,
      taxonomy_id: 9
    },
    {
      title: 'Kitchen  step stool for toddler/table and stool all in one',
      description: 'Montessori kitchen step stool which can be easily transformed to table and chair is designed and created for learning, cooking, climbing, sitting next to the large family table and eating or just playing. And what is the most excitatory that this kitchen step stool looks like a toy and it can become as a friend for your child.\n' +
        'How it will help learning? Transform into table and chair form and sit next or in front of your child and read, paint or glue together.\n' +
        'How it will help cooking? Transform back to step stool and allow your child to help you preparing dinner, for example, stir eggs, blanch lettuce etc.\n' +
        'Kitchen step stool will become not just a friend for your child, but will be as a family member who is always ready to help the little ones reach unreachable places and achieve new goals.\n' +
        '\n' +
        'DIMENSIONS:\n' +
        '\n' +
        'Height: 90 cm (35.4 inches)\n' +
        'Width: 38 cm (14.9 inches)\n' +
        'Depth: 40 cm (15,7 inches)\n' +
        'First step: 24 cm (9.4 inches)\n' +
        'Second Step (counting from floor): 45 cm (17.7 inches)\n' +
        '\n' +
        'CONSTRUCTION:\n' +
        'Kitchen step stool construction is made to be harmless for children.\n' +
        '\n' +
        '\n' +
        'Assembling instruction you can see at: \n' +
        'https://www.youtube.com/watch?v=AehfhhlFFGU\n' +
        'https://www.youtube.com/watch?v=k8N8xbqN06Y\n' +
        '\n' +
        '\n' +
        'SHIPPING:\n' +
        '\n' +
        'We offer worldwide shipping. If you cannot find your country in our shipping list, please contact us and we will ensure all the shipping information providing to you.\n' +
        '\n' +
        '\n' +
        '\n' +
        'IMPORTANT: WHEN ORDERING PLEASE LEAVE YOUR PHONE NUMBER IN NOTES SECTION. &quot;Enter phone number in the field &quot;Note from buyer&quot;\n' +
        '\n' +
        'https://family-scl.com/\n' +
        '\n' +
        'Outside EU countries may effect of additional tax charges.',
      quantity: 42,
      num_favorers: 375,
      tags: [
        'Kitchen helper',
        'children table',
        'kids table',
        'kids chair',
        'children chair',
        'learning tower',
        'montesory',
        'childrens furniture',
        'kitchen tower',
        'children eating',
        'step stool for kids',
        'kitchen step stool'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 215,
      img: 'https://i.etsystatic.com/14807303/r/il/2983f4/3740619755/il_fullxfull.3740619755_rtgl.jpg',
      onSale: true,
      taxonomy_id: 9
    },
    {
      title: 'Spiderman Marcapáginas & Print A5 | Marvel | Spiderman No Way Home | Multiverse | Peter Parker, Tom Holland, Tobey Maguire, Andrew Garfield',
      description: '• Impreso en papel de alta calidad 350gr acabado en Mate\n' +
        '\n' +
        '• Las medidas son: Print A5 (15x21cm), Print A6 (10x15cm), BOOKMARK (5x15cm).\n' +
        '\n' +
        '• Cada print está firmada\n' +
        '\n' +
        '• El producto es sin marco y se enviará con protección para que no se doble o sufra daños\n' +
        '\n' +
        '• Por favor, ten en cuenta que el color puede ser un poco diferente de la foto debido a los diferentes tipos de monitor y dispositivos\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        '© Carola Marin\n' +
        '\n' +
        'instagram: carolamarin.art\n' +
        'email: carolacmarin [!at] gmail.com\n' +
        '\n' +
        '_____\n' +
        '\n' +
        'INTERNATIONAL SHIPPING INFO:\n' +
        '\n' +
        'If you want tracking number in your package please select the registered option in the shipping section! The normal shipping DOESN&#39;T HAVE tracking number so i can&#39;t do anything if it get lost.\n' +
        '\n' +
        'INFORMACIÓN DE ENVÍOS A ESPAÑA:\n' +
        '\n' +
        'Si quieres el envío con número de seguimiento debes escoger el envío certificado en las opciones de envío. Los envíos normales son SIN NÚMERO de seguimiento por lo tanto no puedo hacer nada si se pierde.\n' +
        '\n' +
        '⚠ Los envíos se hacen mediante CORREOS España ⚠',
      quantity: 8,
      num_favorers: 276,
      tags: [
        'sale',          'art',
        'print',         'spiderverse',
        'spiderman',     'no way home',
        'marvel',        'doctor strange',
        'peter parker',  'tom holland',
        'tobey maguire', 'andrew garfield',
        'bookmark'
      ],
      processing_min: 5,
      processing_max: 7,
      price: 2.5,
      img: 'https://i.etsystatic.com/10682070/r/il/f7ee1a/3583978315/il_fullxfull.3583978315_4zqi.jpg',
      onSale: true,
      taxonomy_id: 9
    },
    {
      title: 'Sticker, lettering, personalized for welcome sign, sticker wedding, celebrations, birthday, henna evening, engagement, wedding ceremony',
      description: 'The stickers for welcome signs or other projects are always an eye-catcher.\n' +
        'Individually and lovingly manufactured!\n' +
        '\n' +
        'Your vinyl fonts with a personal name will be made according to your wishes. The font colors are available in matt and glossy as well as in different colors. For this purpose, please communicate the color as on the picture under personalization information and how to choose whether matt or glossy to us.\n' +
        '(Rose gold only in glossy blue, pastel blue and pastel pink only in matt)\n' +
        '\n' +
        'Size of the lettering is selectable. Please specify landscape or portrait orientation. On request, the stickers can be cut to size as desired and thus adapted in arrangement/height. The shipment takes place in several parts so that it can be delivered as a letter shipment. If you would like to have the sticker in one piece, please select the shipping method as a package in the shopping cart. If a different size than mentioned is desired, just contact me in advance :)\n' +
        '\n' +
        'Please enter the desired text/font/color when ordering.\n' +
        '\n' +
        'If you would like to buy the finished welcome sign, then take a look at our following article:\n' +
        'https://www.etsy.com/de/listing/836886023/willkommensschild-aus-acryl-plexiglas?ref=shop_home_recs_33&sca=1\n' +
        '\n' +
        'Important: The colors displayed may differ from the actual colors depending on the monitor or screen resolution.\n' +
        '\n' +
        'Items are manufactured by us in the order in which they are received by us. Unfortunately, we also have no influence on the processing time of Swiss Post. Swiss Post may currently need several days to deliver. If you need an article faster, you have the possibility to change the shipping from normal letter to Prio letter for an extra charge.\n' +
        'On request, your order will also be prioritized, have a look at the following link:\n' +
        'https://www.etsy.com/de/listing/870100910/express-lieferung-und-bearbeitung-fur?ref=shop_home_active_1&frs=1',
      quantity: 850,
      num_favorers: 405,
      tags: [
        'Wedding',      'Lettering',
        'Personalized', 'acrylic',
        'Birthday',     'Shield',
        'Sticker',      'Vinyl',
        'Welcome',      'table',
        'glass',        'Writing'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 12,
      img: 'https://i.etsystatic.com/23735410/r/il/8daa2b/2410875294/il_fullxfull.2410875294_lihk.jpg',
      onSale: true,
      taxonomy_id: 9
    },
    {
      title: 'Marcapáginas & Print Bridgerton Lámina A5 | Simon and Daphne Art Print, Marcapáginas, Los Bridgerton',
      description: '• Impreso en papel de buena calidad 300gr\n' +
        '\n' +
        '• Las medidas del print son: A5 (21x15cm)\n' +
        '\n' +
        '• Las medidas del marcapáginas son: 5x15cm\n' +
        '\n' +
        '• Cada print está firmada\n' +
        '\n' +
        '• El producto es sin marco y se enviará con protección para que no se doble o sufra daños\n' +
        '\n' +
        '• Por favor, ten en cuenta que el color puede ser un poco diferente de la foto debido a los diferentes tipos de monitor y dispositivos\n' +
        '\n' +
        '\n' +
        '© Carola Marin\n' +
        '\n' +
        'instagram: carolamarin.art\n' +
        'email: carolacmarin@gmail.com\n' +
        '\n' +
        'INTERNATIONAL SHIPPING INFO:\n' +
        '\n' +
        'If you want tracking number in your package please select the registered option in the shipping section! The normal shipping DOESN&#39;T HAVE tracking number so i can&#39;t do anything if it get lost.\n' +
        '\n' +
        'INFORMACIÓN DE ENVÍOS A ESPAÑA:\n' +
        '\n' +
        'Si quieres el envío con número de seguimiento debes escoger el envío certificado en las opciones de envío. Los envíos normales son SIN NÚMERO de seguimiento por lo tanto no puedo hacer nada si se pierden.\n' +
        '\n' +
        '⚠ Los envíos se hacen mediante CORREOS España ⚠',
      quantity: 5,
      num_favorers: 57,
      tags: [
        'bridgerton',  'los bridgerton',
        'netflix',     'print',
        'daphne',      'simon',
        'julia quinn', 'precio',
        'rebaja',      'sale',
        'comprar',     'cupones',
        'best'
      ],
      processing_min: 5,
      processing_max: 7,
      price: 2.5,
      img: 'https://i.etsystatic.com/10682070/r/il/a30453/3398574664/il_fullxfull.3398574664_rowg.jpg',
      onSale: true,
      taxonomy_id: 9
    },
    {
      title: 'Monroe Wall Sconce, Steel Light, Farmhouse, Wall Mounted, Decor Gooseneck Light, Industrial, Vintage, Rugged, American Made, Farmhouse Shade',
      description: 'Our one of kind beautiful Industrial Gooseneck Sconce Light is the perfect light fixture for your bathroom, dining room, kitchen or anywhere you can imagine.  The light fixture will instantly add warmth to any space you put it in.  Each light fixture is handmade by us in the USA so these are truly one of a kind. We love custom orders so if you need some custom, please message us and we will quote it.\n' +
        '\n' +
        '\n' +
        'ITEM SPECIFICS:\n' +
        '-1x Gooseneck Wall Light\n' +
        '-Dimensions:  Based ~ 5&quot; Around , Goose Neck Pipe ~10&quot; Long, Black Powder Coated Shade ~8.25&quot;\n' +
        '    *From Wall to end of shade is ~12&quot;\n' +
        '-Bulbs: Any style bulb including Standard, LED, Edison etc. (will not work with candelabras)\n' +
        '-Socket Rating: 60 Watts\n' +
        '-Socket Size: (120V/240V) Standard size \n' +
        '-Included: All Mounting Hardware\n' +
        '-Choose Cage Option OR Shade At Checkout\n' +
        '-Wired for usage in all countries\n' +
        '-All Bulbs sold separately \n' +
        '-Installed Weight: ~3pounds \n' +
        '**Caution: All Lights should be installed by a qualified electrician**',
      quantity: 4,
      num_favorers: 23,
      tags: [
        'Light Fixture',
        'Barn Light',
        'Gooseneck Sconce',
        'Steel Light',
        'Farmhouse',
        'wall Mounted',
        'Industrial',
        'Vintage',
        'Rugged',
        'American Made',
        'Industrial Farmhouse',
        'Wall Light',
        'Lamp Shade'
      ],
      processing_min: 4,
      processing_max: 7,
      price: 79,
      img: 'https://i.etsystatic.com/32119249/r/il/497409/3656179273/il_fullxfull.3656179273_n6r6.jpg',
      onSale: true,
      taxonomy_id: 9
    },
    {
      title: 'Tarot Cards Cheat Sheets Major & Minor Arcana Upright / Reversed Astrology Numerology Correspondences',
      description: 'Tarot Cards Cheat Sheets Major & Minor Arcana Upright / Reversed Astrology Numerology Correspondences\n' +
        'This PDF include the following:\n' +
        '- Major Arcana: 2 pages\n' +
        '- Minor Arcana 3 pages\n' +
        '- Astrology / Numerology correspondences 1 page\n' +
        '\n' +
        'Print as many as you want. Not for commercial use.\n' +
        'No returns refunds or cancellations\n' +
        'It is available for instant download once payment is received.\n' +
        '\n' +
        'Blessed be!',
      quantity: 986,
      num_favorers: 21,
      tags: [
        'Occult black magick',
        'Wicca digital ebook',
        'Witch craft ebook',
        'Fortune tellimg',
        'Tarot cards',
        'Tarot cheat sheet',
        'Astrology',
        'Numerology',
        'Tarot magic',
        'Divination',
        'Tarot cheatsheet'
      ],
      processing_min: null,
      processing_max: null,
      price: 1.23,
      img: 'https://i.etsystatic.com/19086690/r/il/d8ef69/3553761478/il_fullxfull.3553761478_mj8z.jpg',
      onSale: true,
      taxonomy_id: 9
    },
    {
      title: 'Chromosome Y cookie cutter | male genetics biscuit cutters Deoxyribonucleic acid genealogy genetic Microbiology laboratory science DNA',
      description: 'SIZE: \n' +
        'Chromosome Y: 4.6 cm by 7.5 cm (1.8&quot; by 2.9&quot;)\n' +
        'DNA: 5.1 cm by 10.7 cm (2&quot; by 4.2&quot;)\n' +
        'Chromosome: 4.7 cm by 9.4 cm (1.8&quot; by 3.7&quot;)\n' +
        '\n' +
        '5mm thickness of dough will be perfect (~1/4 inch) \n' +
        '\n' +
        'ESSENTIAL TIPS:\n' +
        '♥ For easy release of dough, remember to coat the cutter with icing sugar/ flour before cutting\n' +
        '\n' +
        '♥ Use non-raising dough recipe to get the best looking cookie!\n' +
        '\n' +
        'Cutters suitable for cookie dough, fondant, craft clay, biscuit dough,etc. \n' +
        '\n' +
        '♥\n' +
        '\n' +
        'Washing recommendations:\n' +
        'Compatible with dishwasher.\n' +
        'Hand-wash with lukewarm soapy water and a mini brush to remove remnants.',
      quantity: 72,
      num_favorers: 398,
      tags: [
        '3d print printed phd',
        'graduation scientist',
        'biomedical cake clay',
        'Microbiologist ATCG',
        'RNA chromosomes',
        'biological biology',
        'double helix cookies',
        'Rosalind Franklin',
        'class experiment lab',
        'fondant strand sex',
        'medical reproduction',
        'biologist research',
        'scientific party'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 6.35,
      img: 'https://i.etsystatic.com/9724190/r/il/a33c92/1963405776/il_fullxfull.1963405776_h98j.jpg',
      onSale: true,
      taxonomy_id: 9
    },
    {
      title: 'Feather Print | Feather Wall Art | Feather Print | Print Wall Art | Feather | Prints for Home | Wall Art | Art Print | Grey Wall Print',
      description: '🔔 🔔🔔GET 40% OFF when you buy 3 items or more from our shop!! Add 3 items or more to basket to qualify.🔔🔔🔔\n' +
        '\n' +
        'This stunning set of 3 prints can be the perfect addition to your home decor. They would look gorgeous in a living room, dining room or in a bedroom above the bed. We&#39;ve got more colours available which can be viewed in our feathers category.  \n' +
        '\n' +
        'The Prints are Supplied UNFRAMED\n' +
        '\n' +
        '》  Giclée printed\n' +
        '\n' +
        '》  High quality matt paper\n' +
        '\n' +
        '》  Vibrant colours\n' +
        '\n' +
        '》  Designed and printed in the UK\n' +
        '______________________________________________________\n' +
        '\n' +
        'Made from\n' +
        '\n' +
        'All of our prints are made to order using specialist printers, archival matt paper 190gsm and fade resistant pigment inks that will produce quality long lasting images. \n' +
        '\n' +
        'Each print is carefully packed by hand in a protective acid free glassine bag or tissue paper and sent in a hard backed envelope. Larger prints (A3, A2) will be sent rolled in postal tubes.\n' +
        ' \n' +
        'All our packaging is biodegradable or recyclable.\n' +
        '______________________________________________________\n' +
        '\n' +
        'The following sizes are available for this print:\n' +
        '\n' +
        '  A5 - 14.8cm x 21cm / 5.8 x 8.3 inch\n' +
        '  A4 - 21cm x 30cm / 8.27 x 11.7 inch\n' +
        '  A3 - 30cm x 42cm / 11.7 x 16.5 inch\n' +
        '  A2 - 42cm x 59.4cm / 16.5 x 23.4 inch\n' +
        ' 40 x 50cm / 15 ³/₄ x 19 ¹¹/₁₆ inch\n' +
        ' 30 x 40cm / 11 ¹³/₁₆ x 15 ³/₄ inch\n' +
        '  5&quot; x 7&quot; inch / 17.8cm x 12.7cm\n' +
        '  8&quot; x 10&quot; inch / 20.3cm x 25.4cm\n' +
        '\n' +
        'Please note that the frames shown in the photos are for illustrative purposes only.\n' +
        '\n' +
        'For any enquiry please don&#39;t hesitate to send us a message and will get back to you asap.\n' +
        '\n' +
        'For more designs please visit our shop here:\n' +
        'www.etsy.com/uk/shop/McrPrintStudio\n' +
        '___________________________________________________________\n' +
        '\n' +
        'Processing & Shipping\n' +
        '\n' +
        'Our processing time is 1-3 days and once completed orders will be sent FREE of charge to any UK address. \n' +
        '\n' +
        'Delivery options:\n' +
        '\n' +
        'Free UK -by Royal Mail 2nd class with an estimate arrival of 2 to 3 working days\n' +
        '\n' +
        '1 day delivery available at checkout. - Please refer to FAQ for more details about this option.\n' +
        '\n' +
        'Please note that these are estimate times and in extraordinary circumstances delivery could take longer.\n' +
        '\n' +
        '© Copyrights of Manchester Print Studio\n' +
        'All Rights Reserved',
      quantity: 31,
      num_favorers: 53,
      tags: [
        'Grey Feather Print',
        'Feather Print',
        'Feather Wall Art',
        'Print Wall Art',
        'Feather',
        'Wall Art',
        'Art Print',
        'Grey Wall Print',
        'Prints for Home',
        'Pink Feather',
        'Feather Poster',
        'Wall art prints',
        'Prints for Bedroom'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 6.25,
      img: 'https://i.etsystatic.com/18198604/r/il/6f79bb/2570109672/il_fullxfull.2570109672_bn1p.jpg',
      onSale: true,
      taxonomy_id: 9
    },
    {
      title: '1lb - St. Lucia WildCrafted Sea Moss - Gold',
      description: '**** Authentic St. Lucian Wild Crafted Sea Moss Gold **** Grade A Quality\n' +
        '\n' +
        '\n' +
        'Whether you’re following the alkaline diet or just want to improve your immunity to health threats ,  sea moss offers a variety of benefits, and is consumable in a variety of forms and colors.',
      quantity: 81,
      num_favorers: 923,
      tags: [
        'Sea moss',
        'Irish Sea moss',
        'purple sea moss',
        'Chondus crispus',
        'raw sea moss',
        'red seamoss',
        'Seamoss Gold',
        'St Lucia Sea Moss',
        'Wildcrafted Seamoss',
        'Dr sebi',
        'top sea moss company',
        'immune system',
        'Best Sea moss'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 55,
      img: 'https://i.etsystatic.com/22336418/r/il/c8890a/2290908957/il_fullxfull.2290908957_ttko.jpg',
      onSale: true,
      taxonomy_id: 9
    },
    {
      title: 'Seagrass Single Storage Pocket - Caravan Storage - Perfect Magazines, Books, Laptop, iPad or phone Organiser - Pantry and Office Storage',
      description: 'Designed and Made By @flo_the_caravan\n' +
        'Follow Flo on Instagram look for the pink flamingo logo 🦩\n' +
        '\n' +
        'Locally Designed & Made In Geelong Victoria\n' +
        '\n' +
        'Measures Approx Width 36cm Height 34cm. These measurements are a guide only as each pocket many slightly vary.  \n' +
        '\n' +
        'It’s so good for magazines, laptops, books, iPads, phones a perfect storage solution \n' +
        '\n' +
        'Quality Made and eye for detail, each pocket is made with love and care. Each pocket made is unique.\n' +
        '\n' +
        'Perfect on trend storage for your caravan, combi, study, kitchen\n' +
        '\n' +
        'Quick postage after ordering. I offer regular post with tracking or express post.',
      quantity: 1,
      num_favorers: 37,
      tags: [
        'home decor',     'home style',
        'magazine rack',  'geelong',
        'handmade',       'compact',
        'combi',          'caravan',
        'wall decor',     'wall storage',
        'seagrass decor', 'seagrass basket',
        'seagrass'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 21.95,
      img: 'https://i.etsystatic.com/24932509/r/il/47f4f8/3300292611/il_fullxfull.3300292611_ss6q.jpg',
      onSale: true,
      taxonomy_id: 9
    },
    {
      title: 'Pot en céramique personnalisable maman ours',
      description: 'Vous pouvez utiliser nos pots en céramique comme pot à crayons, pour pinceaux, mais aussi avec une bougie ou en cuisine pour mettre vos épices, vos sachets de thé, etc...\n' +
        '\n' +
        'Imprimé dans notre atelier à Angers.\n' +
        '\n' +
        'Impression:\n' +
        'L&#39;impression se fait en sublimation au tour du pot en céramique.\n' +
        '\n' +
        'Dimension:\n' +
        'Hauteur : 92 mm\n' +
        'Diamètre : 80 mm\n' +
        'Contenance : 325 ml\n' +
        '\n' +
        'Matière:\n' +
        'céramique\n' +
        '\n' +
        'Couleur:\n' +
        'Blanc et intérieur noir\n' +
        '\n' +
        'Instructions de lavage:\n' +
        'Pot en céramique pouvant aller dans un lave vaisselle.',
      quantity: 10,
      num_favorers: 0,
      tags: [
        'pot pencils',
        'gift mom',
        'gift idea',
        'ceramic pot',
        'personalized gift',
        'Mother&#39;s Day',
        'best mom',
        'printed in France',
        'custom pot',
        'pot makeup',
        'cheap mom gifts',
        'gift message mom',
        'mom original gifts'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 13.5,
      img: 'https://i.etsystatic.com/34484610/r/il/6a3c1a/3813101190/il_fullxfull.3813101190_5rl3.jpg',
      onSale: true,
      taxonomy_id: 9
    },
    {
      title: 'Personalised Pet Print, Mothers Day, Pet Loss, Pet Owner Gift, Dog Picture, Owner and Pet Print, Pet Portrait, Dog Family Print, Cousin Gift',
      description: 'Personalised Pet Family Print\n' +
        '\n' +
        'Create your own personalised print featuring your own family and furry friends. The ideal print as a gift or to create that unique feature to your wall.\n' +
        '\n' +
        'You can browse our full range of designs here: https://www.etsy.com/uk/your/shops/PumpkinStudioUK\n' +
        '\n' +
        'Please provide your option in the following format, example:\n' +
        '\n' +
        'Names: Lilly\n' +
        'Sex: Female\n' +
        'Skin tone: Pale\n' +
        'Hair colour: Ginger \n' +
        'Hair style: S3 \n' +
        'Jumper: Cream\n' +
        'Jeans: Black \n' +
        'Background: Forest\n' +
        '\n' +
        'Pet: Bulldog NO.3 - Jasper\n' +
        'Pet: Labrador NO.1 - Poppy\n' +
        '\n' +
        'Any more than 4 people and pets combined get in touch prior to purchase. \n' +
        '\n' +
        'Please ensure you specify height differences if you would like our designers to portray this. \n' +
        '\n' +
        '\n' +
        '********* DIGITAL COPY ********* \n' +
        'Please use the coupon code &#39;INTSHIPPING&#39;&#39; at the checkout to remove the shipping cost.\n' +
        '\n' +
        '\n' +
        '********* PREVIEW ********* \n' +
        'If you would like to see a preview of your order before it is sent out, please choose the proof option when ordering.\n' +
        '\n' +
        '\n' +
        ' ********* I HAVE RECEIVED MY DIGITAL FILE BUT I WOULD LIKE TO MAKE SOME CHANGES ********* \n' +
        'If you purchased the proof option you will have been provided with a preview of your order and the opportunity to request any changes.\n' +
        '\n' +
        'If you choose not to purchase the proof option, changes to your design are not possible after the order has been sent to you. You will be required to purchase the proof service for any further changes you would like to make.\n' +
        '\n' +
        '\n' +
        ' ********* CAN I MAKE CHANGES TO MY DESIGN? ********* \n' +
        'If you would like to be provided with a preview of your order, you will need to purchase the proof option with the order. Our designers will send you a proof over to check. If you would like to make any changes after the proof has been issued, our designers will make the changes and send you a second proof.\n' +
        '\n' +
        'The proof service includes two proofs.\n' +
        '\n' +
        'If you choose not to purchase the proof option, changes to your design are not possible after the order has been printed or sent to you.\n' +
        '\n' +
        '\n' +
        ' ********* MY PERSONALISED ORDER HAS ARRIVED BUT THERE IS A MISTAKE ON IT. ********* \n' +
        'If there is a mistake on your order please get in touch within 7 days of receiving the print. If the mistake was provided by yourself in your notes then there will be a 50% charge to reprint and resend the order out to you.\n' +
        '\n' +
        'If the proof option is not selected we will not provide a preview of the order prior to printing, we will design and print the order based on your notes so please make sure they are all correct. if you would like to change anything after your order has been printed and sent out there will be a reprint charge.\n' +
        '\n' +
        '\n' +
        '********* SHIPPING *********\n' +
        'All UK prints are sent using Royal Mail 2nd class tracked delivery (First Class upgrade available at the checkout, International orders are sent via standard International delivery, tracking is NOT included.\n' +
        'Shipping time estimates are a guide and are NOT guaranteed.\n' +
        '\n' +
        'Our prints are professionally printed on thick white fine art paper. We print in-house at our home studio, ensuring we can personally check all prints ourselves.\n' +
        '\n' +
        '\n' +
        ' ********* FRAMING  *********\n' +
        'All of our prints are unframed.',
      quantity: 94,
      num_favorers: 3,
      tags: [
        'gift for her',
        'christmas gift',
        'personalised print',
        'family portrait',
        'pet portrait',
        'dog print',
        'dog portrait',
        'couple gift',
        'personalised family',
        'family print',
        'cousin gift',
        'mothers day',
        'pet loss'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 12.44,
      img: 'https://i.etsystatic.com/32270304/r/il/01072e/3684752685/il_fullxfull.3684752685_inob.jpg',
      onSale: true,
      taxonomy_id: 9
    },
    {
      title: 'Gaming Print &#39;SONIC THE HEDGEHOG&#39; Sonic Watercolour Splash Wall Art, Gaming Sonic Character, Home Decor, Poster, A5, A4, A3 & A2 sizes',
      description: '&#39;SONIC THE HEDGEHOG&#39; Sonic Gaming Creative Poster Print.\n' +
        '\n' +
        'With a great choice of designs in our Watercolour Prints range, these vibrant wall art illustrations would make a stunning addition to any space and a unique gift that would be ideal for any gaming fan!\n' +
        '\n' +
        'Brighten up your walls with one of these fantastic splash/splatter style prints.  \n' +
        '\n' +
        'Each print is produced to order, using high quality 260gsm fine art matte card and premium archival non-fading inks, ensuring that all our prints are of the highest quality.\n' +
        '\n' +
        'Each stunning design is available in 4 sizes.\n' +
        '\n' +
        '• A5     14.8 x 21cm, 5.8&quot; x 8.3&quot;\n' +
        '• A4     21cm x 29.7cm, 8.3&quot; x 11.7&quot;\n' +
        '• A3     29.7cm x 42cm, 11.7&quot; x 16.5&quot;\n' +
        '• A2     42cm x 59.4cm, 16.5&quot; x 23.4&quot; \n' +
        '\n' +
        'All prints are packed in a clear protective sleeve and dispatched in rigid card backed envelopes, \n' +
        'so no curling or creasing, making them ready to go straight on display when they arrive. \n' +
        'Please note you are receiving the print ONLY, the frame is just for display purposes and any watermarks will not appear on the print.\n' +
        '\n' +
        'FREE UK delivery on all orders, with upgrades available at the checkout.\n' +
        '\n' +
        'Why not pair this print with one of of our other related designs from our shop.\n' +
        '\n' +
        'https://www.etsy.com/uk/shop/ThePrintPirate\n' +
        '\n' +
        'Check our shop for more great designs and quality prints.',
      quantity: 3,
      num_favorers: 13,
      tags: [
        'watercolour print',
        'character print',
        'gaming character',
        'gaming',
        'sonic',
        'sonic the hedgehog',
        'game character',
        'gamer print',
        'retro gaming',
        'sonic print',
        'sonic poster',
        'sonic watercolour',
        'sonic hedgehog'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 5.95,
      img: 'https://i.etsystatic.com/19784691/r/il/325633/3669009722/il_fullxfull.3669009722_5ag9.jpg',
      onSale: true,
      taxonomy_id: 9
    },
    {
      title: 'FREE SHIPPING - Sunshine® Polishing Cloth *** BONUS Intercept® Anti-Tarnish Bag for 5+ Dollar Sunshine® Purchases',
      description: '♥  Free Shipping ♥\n' +
        '\n' +
        'The original Sunshine® Cloth -- the best polishing cloth for jewelry! \n' +
        '\n' +
        'The cloth safely cleans and polishes jewelry, gold, silver, brass, copper, glass, mirrors and most other metals. It removes tarnish, grimes and polishes your jewelry brilliantly to a bright shine, leaving a deep, long-lasting luster. Simply rub surface to be polished with medium pressure. The special micro-abrasives and a cleansing agent impregnated in the cloth will work until the cloth is completely darkened. \n' +
        '\n' +
        '\n' +
        'Three sizes are available for your choices, \n' +
        '-- Large      7.5&quot;x5&quot;\n' +
        '-- Medium 3.75&quot;x5\n' +
        '-- Small      3.75&quot;x2.5&quot;\n' +
        '\n' +
        '♥ BONUS: One 2&quot;x3&quot; Intercept® Anti-Tarnish Bag for $5+ Sunshine® Cloth Purchases in an order (max one bonus bag per order) ♥\n' +
        'Polish your jewelries with Sunshine® Cloth and store them into Intercept® Anti-Tarnish Bags to keep your jewelries shiny for years. \n' +
        'Intercept® Anti-Tarnish Bags with various sizes are available for purchase at: https://www.etsy.com/listing/1021696238/intercept-anti-tarnish-bags-pack-of-5',
      quantity: 128,
      num_favorers: 44,
      tags: [
        'anti-tarnish bag',
        'jewelry bag',
        'jewelry protection',
        'anti-tarnish jewelry',
        'Jewelry care',
        'Jewelry plastic bag',
        'tarnish prevention',
        'Anti Tarnish Squares',
        'Jewelry Polishing',
        'Sunshine',
        'Yellow Polish Cloth',
        'Brass Polish Cloth',
        'Polishing cloth'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 1.75,
      img: 'https://i.etsystatic.com/18888897/r/il/2125c1/3172285396/il_fullxfull.3172285396_66rq.jpg',
      onSale: true,
      taxonomy_id: 9
    },
    {
      title: 'Geogenanthus ciliatus plant',
      description: 'Each picture is representative of a plant that you will receive. Each will be similar depending on how many leaves you choose. Some may have off shoots and some may not.\n' +
        '\n' +
        'Ships without pot.\n' +
        '\n' +
        'By completing this purchase, you are acknowledging and agreeing to the following terms:\n' +
        '\n' +
        '\n' +
        'Plants are shipped out healthy and packaged with care. We are not responsible for leaves that will sometimes get damaged during transit. We can offer to send photos of the plant you are receiving, prior to shipping, upon request. Should the plant seem dead or damaged upon arrival, contact us immediately with pictures. Also pictures of the box and packing materials. If any boxes are damaged and we need to make an insurance claim, then do not discard those materials. We need you to provide those for the claim in many situations. For minor damages like leaf damage or yellowing we need to deal with those on a case by case situation. Typically this can happen and the plant is healthy and will acclimate once you care for it. \n' +
        '\n' +
        '     For plants shipped in pots, please let your plant settle for a few days before transplanting or fertilizing it.\n' +
        '\n' +
        '     For nodes we can not assume any responsibility once it is received, take pictures and contact us immediately if something does not look right with your purchase. There are risks involved with growing nodes but feel free to reach out as needed for growing advice, tips or troubleshooting. Please be somewhat knowledgeable about handling nodes or cuttings though before purchasing.\n' +
        '\n' +
        '     We are not responsible for lost, stolen or damaged packages. We cannot control what happens once we ship the packages. We purchase insurance with every package we send to cover the costs. We use USPS unless you specify another provider and assume the extra costs. As stated earlier, keep all the packaging materials and box when a package comes damaged. Make the claim immediately with the shipping company. Also alert me of the issues so that I may be of assistance if needed. We purchase postage through etsy so tracking information is available for you through your order.\n' +
        '\n' +
        '      Please follow your local weather conditions. I will not assume responsibility if there is a cold/hot front in your area. If a package sits outside for an extended period of time in such weather, unnecessary damage can occur. We offer express shipping options and heat packs if desired.',
      quantity: 0,
      num_favorers: 59,
      tags: [ 'Black plant', 'purple plant', 'black leaves' ],
      processing_min: 3,
      processing_max: 5,
      price: 14,
      img: 'https://i.etsystatic.com/22846867/r/il/ccc8a3/3723568867/il_fullxfull.3723568867_exm6.jpg',
      onSale: true,
      taxonomy_id: 9
    },
    {
      title: 'Drink2Shrink 2 Week Supply (Not Pre-Made) D2S Drink 2 Shrink',
      description: 'Drink2Shrink (D2S) is an all natural, gentle detox drink!    (NOT PREMADE...Mixing Instructions included)\n' +
        '\n' +
        'Detox Tea \n' +
        'Made from Organic Herbs, Ginger, Holy Thistle, Persimmon, Myrrh, Chamomile, Papaya, Marsh Mallow Leaves, Malva Leaf, Added Fruit\n' +
        '\n' +
        'What you receive is: \n' +
        '-2 week supply of the Drink2Shrink Formula (Detox Tea) (Not Premade),\n' +
        '- Flavor Enhancers    (adding flavor is optional)\n' +
        '  (The Flavor Enhancer Packet Brands are: True, Country Time, Crush, Wylers, Sunkist, Kool-Aid, Starburst, and Hawaiin Punch)\n' +
        '-Complete use and Prep instructions.\n' +
        '\n' +
        '\n' +
        'The items you receive creates the Drink2Shrink drink.\n' +
        '\n' +
        '1 Packet of the Detox tea will make one gallon of Drink2shrink.  1 Gallon last 1 week.\n' +
        '\n' +
        '*Drink Two-8 oz cups a day.\n' +
        '\n' +
        'Drink to Shrink (D2S) is an all natural gental Detox drink.  \n' +
        'We do not make any medical claims.\n' +
        '\n' +
        'Caution:  Always consult with your healthcare practitioner before taking this or any health supplement, especially if you are taking prescription medications, under a doctor&#39;s medical care, at risk for or have any illness or health condition, or pregnant or nursing.',
      quantity: 5,
      num_favorers: 15,
      tags: [
        'Detox Tea',
        'Drink2Shrink',
        'Dr Miller',
        'Organic Herbal Tea',
        'Caffine Free',
        'Lurra life',
        'Tea',
        'D2S',
        'Drink 2 Shrink',
        'tlc',
        'total life changes',
        'Detox Juixe'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 25,
      img: 'https://i.etsystatic.com/17426918/r/il/63bb69/3239696123/il_fullxfull.3239696123_ltnd.jpg',
      onSale: true,
      taxonomy_id: 9
    },
    {
      title: 'Tableau Coca Cola, Art Mural Vintage, Décoration Murale Vintage, Publicité Vintage, Décoration Intérieure, Décor Mural, Idée Cadeau',
      description: 'Découvrez ce tableau vintage représentant une affiche publicitaire de Coca Cola.\n' +
        '\n' +
        'Cette décoration murale vintage est une excellente idée de cadeau pour tous les amoureux de rétro vintage. \n' +
        'À placer dans un salon, une chambre ou un bureau.\n' +
        '\n' +
        'Avant votre achat, nous vous recommandons de prendre les mesures de votre intérieur afin de choisir une taille de tableau adaptée.\n' +
        '\n' +
        'Le système de fixation est offert sur chaque tableau.\n' +
        ' \n' +
        '_________________________________\n' +
        ' \n' +
        '\n' +
        'Les options : \n' +
        ' \n' +
        'Plusieurs options sont disponibles afin que vous puissiez personnaliser votre tableau :\n' +
        '- Différentes tailles\n' +
        ' \n' +
        'Vous avez également la possibilité de rajouter une caisse américaine qui apportera un style authentique à votre tableau en mettant en valeur votre œuvre.\n' +
        'Attention, les caisses américaines ne sont pas disponibles pour toutes les tailles.\n' +
        '\n' +
        ' \n' +
        '________________________________\n' +
        ' \n' +
        ' \n' +
        'Les toiles : \n' +
        ' \n' +
        'Lorsque vous recevez nos peintures sur toile, celles-ci sont directement prêtes à être utilisées et accrochées. \n' +
        'Vous pouvez donc profiter de votre art sur toile, dès la réception de votre tableau décoratif et embellir votre intérieur.\n' +
        ' \n' +
        'Pour la réalisation de nos tableaux, nous utilisons une toile 100% polyester de 285 g/m² ainsi qu’un cadre en bois d’Épicéa fabriqué à la main d’une épaisseur de 2 cm (1 pouce) afin d’assurer la qualité de nos produits. L’encre utilisée lors de l’impression sur toile est une encre spéciale résistante aux UV, sans solvant, ce qui rend nos produits sans risque pour les enfants et les personnes ayant des allergies. \n' +
        'Ce sont grâce à ses choix que nous pouvons vous proposer des tableaux avec une impression de haute qualité et des couleurs qui restent éclatantes avec le temps.\n' +
        ' \n' +
        'Chaque tableau est imprimé individuellement dans les ateliers dédiés, puis vérifiés avant d&#39;être soigneusement emballé.\n' +
        '\n' +
        ' \n' +
        '_________________________________\n' +
        '\n' +
        '\n' +
        'Emballage et expédition : \n' +
        ' \n' +
        'Chaque impression d&#39;art mural est inspectée et emballée proprement pour assurer un voyage en toute sécurité et garantir la réception de votre décor sur toile en parfait état.\n' +
        'Nous prenons en charge et expédions votre commande dans les 24 h.\n' +
        'Vous recevrez votre tableau en moins d&#39;une semaine si vous habitez en France. \n' +
        'Comptez quelques jours en plus si vous habitez ailleurs en Europe.\n' +
        'Si vous constatez des dommages sur le colis lorsque vous le recevez, merci de prendre une photo et de nous l&#39;envoyez pour que nous puissions faire le nécessaire.\n' +
        'Si vous avez des questions, n&#39;hésitez pas à nous contacter via la messagerie Etsy.\n' +
        ' \n' +
        '________________________________\n' +
        ' \n' +
        ' \n' +
        'Installation du tableau : \n' +
        ' \n' +
        'Nos tableaux sont très simples à installer.\n' +
        'Vous n&#39;avez pas besoin de connaissances en bricolage.\n' +
        'Voici les étapes : \n' +
        ' \n' +
        '1) Définissez l’emplacement de votre tableau.\n' +
        '2) Placez un clou ou une cheville avec une vis adaptée dans votre mur.\n' +
        '3) Accrochez votre cadre.\n' +
        '4) Profitez du rendu !\n' +
        ' \n' +
        'Voilà, c&#39;est aussi simple que ça.\n' +
        ' \n' +
        '________________________________\n' +
        ' \n' +
        ' \n' +
        'Où placer le tableau : \n' +
        ' \n' +
        'Vous pouvez placer votre toile dans de nombreux endroits, comme décoration murale d’intérieur dans votre salon, mais aussi comme décoration de chambre à coucher, décoration de cuisine, décoration de salle de bain, décoration d’hôtel, décoration de gîte, décoration de bureau ou encore de décoration de salle de sport ou d’attente.\n' +
        'Nos tableaux sont utilisables partout en intérieur, là où vous avez fait le choix d’embellir votre lieu de vie.\n' +
        ' \n' +
        '________________________________\n' +
        ' \n' +
        ' \n' +
        'Sélectionner votre tableau sur toile dès aujourd&#39;hui et nous l&#39;expédierons directement à votre bureau ou à votre domicile !\n' +
        ' \n' +
        'Comment faire ? \n' +
        '\n' +
        '&gt;&gt;&gt; Faites défiler vers le haut, sélectionnez la dimension de votre choix et cliquez sur Ajouter au panier.\n' +
        ' \n' +
        'Découvrez tous les tableaux de notre boutique ici : https://www.etsy.com/fr/shop/Tablova',
      quantity: 30,
      num_favorers: 0,
      tags: [
        'Vintage Wall Art',
        'Vintage Wall Decoration',
        'Vintage Advertising',
        'Interior decoration',
        'Wall Decoration',
        'Gift Idea',
        'Decorative painting',
        'Abstract painting',
        'Vintage painting',
        'Office decoration',
        'Art of cooking',
        'Vintage poster',
        'Coca cola'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 79,
      img: 'https://i.etsystatic.com/34721110/r/il/082349/3860624473/il_fullxfull.3860624473_d9vi.jpg',
      onSale: true,
      taxonomy_id: 9
    },
    {
      title: '925 Sterling silver Ring, Spinner Ring, Meditation Ring, Handmade Ring, Jewellery Ring, Fidget Ring, Birthday Present Gifts,Gift For Ring',
      description: '* Hammered 925 Sterling Silver Designer Spinner Ring For Women, Handmade Meditation Ring For Her, Silver Anxiety Bridesmaid Ring\n' +
        '\n' +
        '* Handmade item\n' +
        '\n' +
        '* Dispatches from a small business in \n' +
        '   India\n' +
        '\n' +
        '* PRODUCT DESCRIPTION-\n' +
        '\n' +
        '* Product - Silver Ring \n' +
        '\n' +
        '* Type - Handmade\n' +
        '\n' +
        '* Metal Purity - 925 Sterling Silver\n' +
        '\n' +
        '* Ring Size - All Sizes Are Available\n' +
        '\n' +
        '* The ring is made with genuine solid 925 sterling silver.\n' +
        '\n' +
        'You will receive beautiful ring as described in the advertise , a perfect and unique ring gift for your loved ones.\n' +
        'Occasion: Birthday Events, Lovely Valentine&#39;s Day Gift, Anniversary Gift, Weeding Gift, Engagement Ring, Lover Gift Ring, Hen Party and Other Occasion\n' +
        'If you have any question please feel free to contact us via Etsy  convo.\n' +
        'Thank you for choosing us.',
      quantity: 1,
      num_favorers: 0,
      tags: [
        '925 Solid Silver',
        'Gift For Her',
        'Handmade Jewelry',
        'Gemstone Jewelry',
        'Woman Jewelry',
        'Woman Earring',
        'Silver Jewelry',
        'For Woman',
        'Silver Ring',
        'Sterling Ring',
        'Stud Ring',
        'sterling silver ring',
        'Spinner Ring'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 38,
      img: 'https://i.etsystatic.com/34850030/r/il/8d989b/3813102140/il_fullxfull.3813102140_aodl.jpg',
      onSale: true,
      taxonomy_id: 10
    },
    {
      title: '925 Sterling silver Ring, Spinner Ring, Meditation Ring, Handmade Ring, Jewellery Ring, Fidget Ring, Birthday Present Gifts,Gift For Ring',
      description: '* Hammered 925 Sterling Silver Designer Spinner Ring For Women, Handmade Meditation Ring For Her, Silver Anxiety Bridesmaid Ring\n' +
        '\n' +
        '* Handmade item\n' +
        '\n' +
        '* Dispatches from a small business in \n' +
        '   India\n' +
        '\n' +
        '* PRODUCT DESCRIPTION-\n' +
        '\n' +
        '* Product - Silver Ring \n' +
        '\n' +
        '* Type - Handmade\n' +
        '\n' +
        '* Metal Purity - 925 Sterling Silver\n' +
        '\n' +
        '* Ring Size - All Sizes Are Available\n' +
        '\n' +
        '* The ring is made with genuine solid 925 sterling silver.\n' +
        '\n' +
        'You will receive beautiful ring as described in the advertise , a perfect and unique ring gift for your loved ones.\n' +
        'Occasion: Birthday Events, Lovely Valentine&#39;s Day Gift, Anniversary Gift, Weeding Gift, Engagement Ring, Lover Gift Ring, Hen Party and Other Occasion\n' +
        'If you have any question please feel free to contact us via Etsy  convo.\n' +
        'Thank you for choosing us.',
      quantity: 1,
      num_favorers: 0,
      tags: [
        '925 Solid Silver',
        'Gift For Her',
        'Handmade Jewelry',
        'Gemstone Jewelry',
        'Woman Jewelry',
        'Woman Earring',
        'Silver Jewelry',
        'For Woman',
        'Silver Ring',
        'Sterling Ring',
        'Stud Ring',
        'sterling silver ring',
        'Spinner Ring'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 38,
      img: 'https://i.etsystatic.com/34850030/r/il/8d989b/3813102140/il_fullxfull.3813102140_aodl.jpg',
      onSale: true,
      taxonomy_id: 10
    },
    {
      title: 'Tree of Life with Pink Quartz Gemstones, Tree of Life Pendant, Pink Beaded Necklace, Tree of Life Necklace, Tree of Life Charm Necklace',
      description: 'Tree of Life with Pink Quartz Gemstones, Tree of Life Pendant, Pink Beaded Necklace, Tree of Life Necklace, Tree of Life Charm Necklace\n' +
        '\n' +
        'Faceted pink quartz gemstones are hand-wrapped with 18k vermeil wire (gold over sterling silver).  The tree charm is 24k gold plated over natural solid bronze.\n' +
        '\n' +
        'Necklace measures 16-1/2&quot; to 18-1/2&quot; with a 14k GF chain extender and a 14k GF spring clasp. My signature freshwater pearl dangles from the extender.  See image of back of necklace.\n' +
        '\n' +
        'Pink quartz  stones measures 3mm x 4mm. Tree of life charm measures 15mm\n' +
        '\n' +
        'Also available on a 14k GF chain: https://www.etsy.com/listing/251487292/tree-of-life-necklace-on-14k-gf-chain?ref=shop_home_feat_2\n' +
        '\n' +
        'Return to shop homepage: https://www.etsy.com/shop/BarbaraLWilkinson',
      quantity: 2,
      num_favorers: 15,
      tags: [
        'gemstone necklace',
        'beaded necklace',
        'pendant necklace',
        'boho stone necklace',
        'nyhandmadecollective',
        'bohemian necklace',
        'boho chic necklace',
        'barbara wilkinson'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 68,
      img: 'https://i.etsystatic.com/5172696/r/il/5c4b6e/1422658973/il_fullxfull.1422658973_d5fd.jpg',
      onSale: true,
      taxonomy_id: 10
    },
    {
      title: 'butterfly jewelry, blue butterfly earring, blue morpho butterfly, stained glass earrings, butterfly taxidermy jewelry, butterfly lover gifts',
      description: 'These aare real butterfly wing earrings made with the species morpho Rhetenor.  This butterfly is a beautiful iridescent blue on one side and a mix of light and dark brown on the other side.\n' +
        '\n' +
        'I use a clear UV glass that is hand soldered using lead free silver solder creating a beautiful framed butterfly wings that has two sides. Each piece is truly one of a kind. \n' +
        '\n' +
        'I use surgical steel for all my earring hooks and studs.  All of my jewelry is nickel free.\n' +
        '\n' +
        'All of my butterflies are ethically sourced.  Every butterfly has lived a full life so no wing is perfect.\n' +
        '\n' +
        'Size: 44 mm x 21 mm\n' +
        '\n' +
        'All my jewellery is handmade in Calgary, Alberta in my home studio.\n' +
        '\n' +
        'Please note that pictures may have darker or lighter colours on different monitors and are usually darker than portrayed in these pictures.\n' +
        '\n' +
        'SHIPPING: Your package will be shipped via Canada Post letter mail if you&#39;d like to upgrade to include tracking please make this selection at checkout.',
      quantity: 1,
      num_favorers: 7,
      tags: [
        'Blue morpho',
        'Insect jewelry',
        'Real butterfly wing',
        'Butterfly earrings',
        'statement earrings',
        'Recycled jewelry',
        'butterfly lover gift',
        'Blue earrings',
        'butterfly jewelry',
        'recycled butterfly',
        'butterfly taxidermy',
        'morpho butterfly',
        'stained glass'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 90,
      img: 'https://i.etsystatic.com/5906404/r/il/2e65f4/2440379654/il_fullxfull.2440379654_2kxn.jpg',
      onSale: true,
      taxonomy_id: 10
    },
    {
      title: 'Sexual Desire Spell Bottle Necklace~ Carnelian~ Hibiscus~Rose Petals',
      description: 'This necklace is designed to give its user an aura of desire and attract a compatible sexual partner(s). Desire and be desired! Made with love and care by a witch with 18 years of experience.\n' +
        '\n' +
        'Made with carefully selected stones, herbs, flowers, and sealed with red blessed beeswax. It comes on an 18 inch silver chain with lobster claw clasp.\n' +
        '\n' +
        '**Please note, I will not cast a spell to make a specific person want you. Manipulating people to have sex is icky and not something I want to do. What this spell does is amplify your sexual energy and draws people who are good sexual matches to you**\n' +
        '\n' +
        '\n' +
        '*Keep out of reach of children and pets\n' +
        '*Bottle is not intended to be opened\n' +
        '*Wax may chip over time\n' +
        '*Each necklace is made by hand and may vary slightly in appearance\n' +
        '*Not a substitution for medical care and advice\n' +
        '*As per Etsy rules I cannot guarantee results',
      quantity: 1,
      num_favorers: 204,
      tags: [
        'Witchcraft',   'Witch',
        'Spell bottle', 'Witch bottle',
        'Pagan',        'Wicca',
        'Sex spell',    'Sexual',
        'Desire',       'Lust',
        'Love',         'spell jar',
        'Magic'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 12.75,
      img: 'https://i.etsystatic.com/23480273/r/il/8f2946/2826279159/il_fullxfull.2826279159_g4r7.jpg',
      onSale: true,
      taxonomy_id: 10
    },
    {
      title: 'Psychic Development Spell Bottle/Jar Necklace~Amethyst~ Hibiscus~ Mugwort~',
      description: 'Aid your developing psychic abilities with a beautiful pendant that is made with love and care by a witch with 18 years of experience. \n' +
        '\n' +
        'Made with carefully selected stones, herbs, flowers, and sealed with very light purple blessed beeswax. It comes on an 18 inch silver chain with lobster claw clasp.\n' +
        '\n' +
        'Great to wear while doing divination or everyday use to help your intuition guide you. Can be placed on your nightstand at night to encourage prophetic dreams. \n' +
        '\n' +
        '\n' +
        '\n' +
        '*Keep out of reach of children and pets\n' +
        '*Bottle is not intended to be opened\n' +
        '*Wax may chip over time\n' +
        '*Each necklace is made by hand and may vary slightly in appearance\n' +
        '*Not a substitution for medical care and advice\n' +
        '*As per Etsy rules I cannot guarantee results',
      quantity: 1,
      num_favorers: 1441,
      tags: [
        'Witchcraft',
        'Witch',
        'Spell',
        'Bottle',
        'Psychic development',
        'Psychic abilities',
        'Wicca',
        'Pagan',
        'Magick',
        'Necklace',
        'Amethyst',
        'Third eye',
        'spell jar'
      ],
      processing_min: 5,
      processing_max: 7,
      price: 12.75,
      img: 'https://i.etsystatic.com/23480273/r/il/46a2f9/2778561062/il_fullxfull.2778561062_aj4r.jpg',
      onSale: true,
      taxonomy_id: 10
    },
    {
      title: 'Beautiful Silver Coloured Hand Chain and Bracelet - Finger  Link Jewellery - Free UK Delivery',
      description: 'Beautiful Silver Coloured Hand Chain and Bracelet - Finger  Link Jewellery - Free UK Delivery\n' +
        '\n' +
        'Please be careful when placing jewellery onto hand as this is very delicate\n' +
        '\n' +
        'Silver Plated \n' +
        '\n' +
        'CARE\n' +
        '• If Allergy Starts Stop Wearing\n' +
        '• Take off Jewellery When Bathing / Swimming\n' +
        '• Keep out of the way of small children\n' +
        '• Not for permanent wear\n' +
        '\n' +
        'Free Uk Delivery',
      quantity: 1,
      num_favorers: 28,
      tags: [
        'silver plated hand',
        'hand jewellery',
        'hand collection',
        'hand jeweĺlery',
        'silver bracelet',
        'finger bracelet',
        'hand chain',
        'silver hand chain',
        'boho jewellery',
        'boho bracelet',
        'hand chain bracelet',
        'kadyraes',
        'plated hand chain'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 6.99,
      img: 'https://i.etsystatic.com/22830892/r/il/11e9bd/3460011944/il_fullxfull.3460011944_9w5m.jpg',
      onSale: true,
      taxonomy_id: 10
    },
    {
      title: 'Godmother Gift • Godmother Bracelet | Morse Code Bracelet | Tan Silver String God Mother in Morse Code Gift Bracelet Silver',
      description: '.&gt;\n' +
        '\n' +
        'These words come on a preprinted card and thus ship faster but if you would like this same design spelling YOUR WORD of choice please visit our CUSTOM SECTION or search shop for RKh23 :)\n' +
        '\n' +
        'Silver beads for word and rose gold for spacers. \n' +
        '\n' +
        'Designed to leave on through daily wear.\n' +
        '\n' +
        'On printed card in box with bow ready to make a gorgeous gift!\n' +
        '\n' +
        'Locked at each end, the word stays centered.\n' +
        '\n' +
        'First pictures show our golden tan cord, sister bracelet shows our pale rose and the sunshine yellow one is shown on the model\n' +
        '\n' +
        'Shown is our standard dainty cord thickness for an all-delicate (yet still strong and durable) look but just add a note if you’d rather a bit thicker\n' +
        '\n' +
        '••• SIZE:\n' +
        '\n' +
        'Standard is \n' +
        'over-the-hand adjustable a) which opens to 9&quot; \n' +
        'or leave note at checkout with your preferred size option as follows:\n' +
        '\n' +
        'OVER-THE-HAND ADJUSTABLE SIZE OPTIONS\n' +
        'These open to the maximum of the following inches \n' +
        'to fit through the wides point in a closed hand.\n' +
        '\n' +
        'A) “Standard” - Default option if no other is specified - Opens to 9”\n' +
        'B) “L” Opens to 10.25”\n' +
        'C) Opens to 8.25”\n' +
        'D) XS - Opens to 7.75”\n' +
        '\n' +
        'CLASPED OPTIONS - MUST LEAVE NOTE WITH Size\n' +
        '\n' +
        'E) Clasps to exact size - please measure carefully and consider any extra space desired\n' +
        'F) Clasps + .75” extender on one end\n' +
        '\n' +
        '********Please let us know about any questions regarding sizing - our resizing fee is $6.50 plus shipping costs\n' +
        '\n' +
        '••• WORD:\n' +
        '\n' +
        'Choose aunt or “Custom&quot; to add a note at the very end of checkout with your word or phrase. Numbers count double - so each digit = 2 letters.\n' +
        '\n' +
        '••• MIX:\n' +
        '\n' +
        'Leave a note to mix and match components differently than shown - we offer all pieces in each of 14k Rose Gold Filled, (yellow) 14k Gold Filled or Sterling Silver.\n' +
        '\n' +
        '••• TO ADD A NOTE FOR US:\n' +
        '\n' +
        'Use the white box marked \n' +
        '“add an optional note” \n' +
        '\n' +
        'at the very end of the checkout process \n' +
        'after entering payment information; by the order total right above the “submit” or “place your order” button.\n' +
        '\n' +
        '\n' +
        'Aunt Silver Necklace: https://rustikheart.com/listing/567935913/aunt-gift-necklace-aunt-silver-choker\n' +
        '\n' +
        'Auntie Rose Gold Choker: https://rustikheart.com/listing/557903921/surprise-announcement-necklace-aunt-gift\n' +
        '\n' +
        'Bestie Silver Chain Bracelet: https://rustikheart.com/listing/547705644/best-friend-gift-bestie-silver-morse\n' +
        '\n' +
        'BFF Bracelet Set:\n' +
        'https://rustikheart.com/listing/547702030/best-friend-bracelet-set-best-friend\n' +
        '\n' +
        '\n' +
        '--------------------------------------\n' +
        '\n' +
        ' -------------------------------------------------------\n' +
        '\n' +
        'GIFTS:\n' +
        '\n' +
        'All of our orders include gift-ready packaging \n' +
        '\n' +
        '................................................................\n' +
        '\n' +
        '14K GOLD FILLED:\n' +
        '\n' +
        'Gold filled pieces are suitable for sensitive skin and they typically maintain their golden shine for many years!\n' +
        '\n' +
        'No comparison to plated!\n' +
        '\n' +
        'The gold layer used for &#39;Gold Filled’ materials is hundreds of times thicker than that of most gold plated pieces!\n' +
        '\n' +
        '-------------------------------------------------------\n' +
        '\n' +
        'LARGE ORDERS:\n' +
        '\n' +
        'Please message us regarding any larger quantities than shown available. We love working with you on special orders!',
      quantity: 172,
      num_favorers: 3469,
      tags: [
        'communion gift',
        'gift for godmothers',
        'Morse code silver',
        'godmother Morse code',
        'catholic gift',
        'baptism gift',
        'gift for Godmother',
        'god mother bracelet',
        'mothers day',
        'godmother bracelet',
        'godmother gift',
        'silk cord bracelet',
        'Morse Code Bracelet'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 24.5,
      img: 'https://i.etsystatic.com/12630635/r/il/701e5a/2216714799/il_fullxfull.2216714799_3uyo.jpg',
      onSale: true,
      taxonomy_id: 10
    },
    {
      title: '168 Pair Wall Mount Earring Holder - Jewelry Display, Caribbean Rosewood, Necklace Display. 10 pegs.  Hanging. Jewelry Organizer',
      description: 'This wood jewelry display - earring holder features a row of 10 pegs on the bottom that allow for necklaces, bracelets and rings to be stored. The slats are spaced 2&quot; to 3.5&quot; apart to allow large loop-type and hanging earrings plenty of space while minimizing overlap.\n' +
        '\n' +
        'Made from Caribbean rosewood, this earring holder has beautiful, intricate, deep reddish-brown wood grain patterns. Caribbean rosewood is frequently used in high-end furniture and flooring and will add a beautiful and exotic look to your dresser and jewelry. \n' +
        '\n' +
        'This earring holder has holes to cleanly hold 84 pairs of earrings and slots to cleanly hold another 84 pairs (168 pairs total). Capacity will vary depending on how big your earrings are and what types of earrings you have.\n' +
        '\n' +
        'Please visit my shop: http://www.etsy.com/shop/TomsEarringHolders\n' +
        '\n' +
        'Wood: Caribbean Rosewood\n' +
        'Finish: Coated with liquid beeswax to protect and provide a slight sheen.\n' +
        'Type: Wall Mounted Jewelry Holder with Necklace Holder Bar\n' +
        'Earring capacity: 84 to 168 pairs.\n' +
        'Necklace, ring, bracelet capacity: 10 to 50\n' +
        'Holds: Studs, Wires, Clip-ons, Loops, Hoops, Necklaces, Bracelets, Rings\n' +
        '\n' +
        'Height: 26&quot;\n' +
        'Width: 15&quot;\n' +
        '\n' +
        'Note: Jewelry shown in pictures is for demonstration purposes only.\n' +
        '\n' +
        '*********************** How Earrings Fit **********************\n' +
        '\n' +
        'The slots are just the right size for earrings to slip into so that they fit snug and secure with no wiggle or chance of them falling out. Just slide them over the slot and they&#39;ll fall right in.\n' +
        '\n' +
        'Studs can be put in the slots or the holes. If you put them in the slots, you don&#39;t need to remove the backings to put them on. The slats are thin enough to put stud earrings on without removing the backings and most earrings will fit in both the slots and the holes. If it fits on your ear it will fit here.\n' +
        '\n' +
        '***************** Similar Jewelry Organizer Links *************\n' +
        '\n' +
        'Wall Mount Earring Holders: http://www.etsy.com/shop/TomsEarringHolders?section_id=10173279\n' +
        '\n' +
        'Wall Mount Necklace Holder Bars: http://www.etsy.com/shop/TomsEarringHolders?section_id=10348142\n' +
        '\n' +
        'Caribbean Rosewood Jewelry Holders: http://www.etsy.com/shop/TomsEarringHolders/search?search_query=Caribbean\n' +
        '\n' +
        '****************** Shipping, Special Orders ********************\n' +
        '\n' +
        'Due to the size of this earring holder, it will ship Parcel Post to the west coast and select other states. Priority shipping on a box this size and weight to certain states costs about $32.\n' +
        '\n' +
        'If you would like an item you don&#39;t see here or if you&#39;d like something shipped outside of the continental US please click here to see what I offer:\n' +
        '\n' +
        'http://www.etsy.com/shop/TomsEarringHolders/policy\n' +
        '\n' +
        'Or here to make a request:\n' +
        '\n' +
        'http://www.etsy.com/conversations/new?with_id=11275633&subject=Custom+Item+Request',
      quantity: 1,
      num_favorers: 457,
      tags: [
        'necklace holder',
        'earring holder',
        'earring display',
        'jewelry display',
        'jewelry storage',
        'jewelry organizer',
        'hanging jewelry',
        'earring tree',
        'stud earring holder',
        'earring rack',
        'wall mounted',
        'jewelry holder',
        'earrings holder'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 91.99,
      img: 'https://i.etsystatic.com/6046855/r/il/f9c920/519028508/il_fullxfull.519028508_4l4t.jpg',
      onSale: true,
      taxonomy_id: 10
    },
    {
      title: 'Gothic Punk Ring Spiked Rivet Rock Hand Silver Color Plated Retro Finger Rings Jewelry Gift for Unisex Ring Party Rings',
      description: 'Spiked Rivet Ring Gothic Punk Rock Hand Silver Color Plated Retro Finger Rings Jewelry Gift for Unisex Ring Party Rings.\n' +
        '\n' +
        'Condition: 100% Brand New\n' +
        '\n' +
        'Metarial: Faux Leather Tree spiked or Rivet spikes\n' +
        '\n' +
        'Quantity: 1 PC\n' +
        '\n' +
        'Color: Silver and Black \n' +
        '\n' +
        'Size: As Picture Size',
      quantity: 21,
      num_favorers: 8,
      tags: [
        'gothic punk ring y2k',
        'cyberpunk spike rock',
        'plague doctor emo',
        'jewelry finger claw',
        'stud rivet chain men',
        'women bdsm spiked',
        'goth armor harness',
        'hip hop fashion lgbt',
        'tree retro boho svg',
        'leather black silver',
        'biker guitar band',
        'gift for her him boy',
        'studded vintage 80s'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 12.99,
      img: 'https://i.etsystatic.com/22933717/r/il/2932a2/3723456493/il_fullxfull.3723456493_fxj5.jpg',
      onSale: true,
      taxonomy_id: 10
    },
    {
      title: 'Elegant Shoe Clips Pair - 1940s - Sparkly Leaves with Rhinestones',
      description: 'Elegant Shoe Clips Pair - 1940s - Sparkly Leaves with Rhinestones\n' +
        '\n' +
        'These gorgeous shoe clips can also be used as dress clips. These are not marked, but you can tell they&#39;re a quality pair because the back of the clip is decorated as well as the front. They measure approx. 1 1/2&quot; long x 7/8&quot; wide. All stones are present and in beautiful condition. \n' +
        '\n' +
        'International shipping to some countries is available. Please contact for more info. \n' +
        '\n' +
        '# M343',
      quantity: 1,
      num_favorers: 0,
      tags: [
        'rhinestone',
        'shoe clips',
        'leaves',
        'leaf',
        'fur clip',
        'dress clip',
        'sparkly',
        'vintage'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 37.99,
      img: 'https://i.etsystatic.com/9033833/r/il/fb3857/3860591927/il_fullxfull.3860591927_1iu3.jpg',
      onSale: true,
      taxonomy_id: 10
    },
    {
      title: 'Chrome Diopside 925 Sterling Silver Earrings, Dangle Earrings Pair, Diopside Fancy Earring, Handmade Jewelry Gift Ideas, Lever Back Hooks',
      description: 'MATERIAL: 925 Sterling Silver, Chrome Diopside, White Topaz\n' +
        'Gemstone Size : 3x5mm / 6x4mm Oval\n' +
        'Earring Length : 20mm Long + Hook\n' +
        'Earring Weight : 4.99 Grams (Approx) ( Total Weight Of Stone & Silver )\n' +
        '\n' +
        'DESCRIPTION:\n' +
        'The stones used for the bezels are of true gem quality, the metal work is done beautifully.\n' +
        'You&#39;ll get 1 Pair of Earring like the ones in the picture per purchase. ( Although, you can update more quantity according to the need. )\n' +
        '\n' +
        'We accept custom and personalized order. It can be change in the gemstone, pendant design and size. Please send us message if you are interested in a custom creation.\n' +
        '\n' +
        'Please note:\n' +
        '1) All photos are taken close up to show detail. Please read all descriptions and measurements prior to purchase to ensure correct size.\n' +
        '2) Because these beautiful pieces are handmade, each piece is unique and therefore no two items are exactly the same. Also, because the stones are all unique, stone colors / patterns may vary slightly.\n' +
        '3) Some stones may have natural inclusions, these are not flaws, but give the stone its own individual characteristics.\n' +
        '\n' +
        'SHIPPING:\n' +
        'All of our International orders will be shipped via LEXSHIP . Once the item has been shipped we will Mail you with tracking number. If anyone want’s express shipping, please contact us via Esty messenger.\n' +
        'Express Shipping:\n' +
        'We also provide express shipping via DHL EXPRESS, it is add on express service.',
      quantity: 1,
      num_favorers: 0,
      tags: [
        'sterling silver',
        'silver jewelry',
        'dangle earrings',
        'gemstone jewelry',
        'earrings pair',
        'silver earrings',
        'lever back hooks',
        'bridesmaid gift',
        'gemstone earrings',
        'chrome diopside',
        'diopside earrings',
        'handmade jewelry',
        'gold earrings'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 142,
      img: 'https://i.etsystatic.com/23416609/r/il/51d7f3/3858655877/il_fullxfull.3858655877_prhw.jpg',
      onSale: true,
      taxonomy_id: 10
    },
    {
      title: 'Pair natural prairie dog foot earrings/squirrel foot earrings/gold filled French hooks/taxidermy earrings/taxidermy jewelry/claw earring',
      description: 'Real prairie dog, or ground squirrel, feet are captured in gold plated caps and hang from gold filled French hooks. These feet are their natural color and are sold per pair.\n' +
        '\n' +
        '\n' +
        'These feet range from a tawny brown to a grayish tan color. The little claws are naturally sharp and pointy, so take care not to wear with knit fabrics that they could get caught on. As with all of the taxidermy and preserved animal parts used in our jewelry, they have been professionally cleaned, sanitized and preserved.\n' +
        '\n' +
        '\n' +
        'This piece of jewelry is sent in a bubble pack envelope via US postal service, first class mail with insurance, free in the US and packed in an animal print gift box.\n' +
        'International rate is $15.\n' +
        'Buyers are responsible for any customs and import taxes that may apply. These fees are taken by your country, not Etsy. Necromance is not responsible for delays due to customs.',
      quantity: 3,
      num_favorers: 363,
      tags: [
        'taxidermy',
        'squirrel foot',
        'macabre',
        'weird jewelry',
        'necromance',
        'necromancehollywood',
        'halloween jewelry',
        'halloween earrings',
        'taxidermy earrings',
        'taxidermy jewelry',
        'gothic jewelry',
        'gothic earrings',
        'natural history'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 35,
      img: 'https://i.etsystatic.com/11111356/r/il/df35ea/1630099245/il_fullxfull.1630099245_nntb.jpg',
      onSale: true,
      taxonomy_id: 10
    },
    {
      title: 'Unisex Wing Ear Climber | Wing Earrings | Wing Ear Cuff | Ear Climber Cuff | Ear Crawler | Wing Ear Wrap',
      description: 'Wing ear climber is comfortable , no hurt your ears\n' +
        '\n' +
        'Wing shape looks very cool and fashion\n' +
        '\n' +
        'Color will not fade, rustproof, waterproof\n' +
        '\n' +
        'Very good gift for women \n' +
        '\n' +
        'Please note package only include 1 piece. If you need 2, please order 2',
      quantity: 192,
      num_favorers: 101,
      tags: [
        'ear climber',
        'Ear Crawler',
        'Ear Climber Cuff',
        'Earrings For Her',
        'Ear Wrap',
        'Wing Ear Climber',
        'Wing Ear Wrap',
        'Wing Ear Cuff',
        'Wing Ear Crawler',
        'Wing Earrings',
        'Gothic Wing Earrings',
        'Unisex Ear Climber',
        'Men Wing Earrings'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 10.2,
      img: 'https://i.etsystatic.com/34326650/r/il/7a5148/3726993932/il_fullxfull.3726993932_nlex.jpg',
      onSale: true,
      taxonomy_id: 10
    },
    {
      title: 'butterfly jewelry, teal butterfly earrings, glass earrings, insect earrings, Butterfly taxidermy, stained glass earrings, recycled earrings',
      description: 'These are real butterfly wing earrings made with the species Prepona Laertes butterfly.  This butterfly is a beautiful iridescent teal and brown on side and white, light brown and grey on the other side.\n' +
        '\n' +
        'I use a clear UV glass that is hand soldered using lead free silver solder creating a beautiful framed butterfly wings that has two sides. Each piece is truly one of a kind. \n' +
        '\n' +
        'I use surgical steel for all my earring hooks and studs.\n' +
        '\n' +
        'All of my butterflies are ethically sourced.  Every butterfly has lived a full life so no wing is perfect.\n' +
        '\n' +
        'Size: 44 mm x 21 mm\n' +
        '\n' +
        'All my jewelry is handmade in Calgary, Alberta in my home studio.\n' +
        '\n' +
        'Please note that pictures may have darker or lighter colours on different monitors and are usually darker than portrayed in these pictures.\n' +
        '\n' +
        'SHIPPING: Your package will be shipped via Canada Post letter mail if you&#39;d like to upgrade to include tracking please make this selection at checkout.',
      quantity: 1,
      num_favorers: 4,
      tags: [
        'Butterfly jewelry',
        'Real butterfly wing',
        'Butterfly taxidermy',
        'Butterfly art',
        'Insect earrings',
        'Bridal jewelry',
        'handcrafted earrings',
        'bohemian earrings',
        'teal earrings',
        'statement earrings',
        'glass earrings',
        'recycled earrings',
        'stained glass'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 90,
      img: 'https://i.etsystatic.com/5906404/r/il/696112/3234940554/il_fullxfull.3234940554_qqak.jpg',
      onSale: true,
      taxonomy_id: 10
    },
    {
      title: 'Black Tourmaline Bracelet crystal healing natural stone protection Grounding',
      description: 'Beautiful handmade bracelet made with lots of love and positivity, all stones are set on strong stretch elastic.  ✨\n' +
        '\n' +
        'Perhaps the most famed benefit of the Black Tourmaline stone has to be its mighty protective properties. This is a stone so well versed at keeping you in the clear from toxic energies, that you can step out without a worry. Whether dealing with a dose of negativity from another person, or blocking EMF’s and worrying environmental factors, wearing Black Tourmaline is akin to always carrying a shield which cannot help but add a swagger of positive energy every time you step out \n' +
        '\n' +
        'The perfect gift for loved ones, friends or a treat to yourself. \n' +
        '\n' +
        'Will come in a gift bag with rose petals/lavender, a free stone that will be chosen intuitively and an oracle card. \n' +
        '\n' +
        'Instructions for how to cleanse and charge will also be included.\n' +
        '\n' +
        'All beaded bracelets  can be custom made with any stones added to make it more personel to you, just send me a message ❤ \n' +
        '\n' +
        '\n' +
        '\n' +
        'Please note that due to the fact these are natural stones, the colours may vary but they are all equally as beautiful. \n' +
        '\n' +
        'Feel free to contact us if you have any questions at all. We are happy to offer more information. \n' +
        '\n' +
        'To get the best out of your crystal healing bracelet, please roll it up and over your hand, do not pull it onto your wrist as in time this will weaken the elastic. Please remove before bathing and using water as this also weakens the elastic. Keep within your aura to allow the stones to bond with your energy. If you look after your crystals then they will always look after you.\n' +
        '\n' +
        'Sometimes energy being energy, there is no control over what the crystals do and without warning the beads can burst off your wrist, almost with an exploding effect. Traditionally if this happens it means the stones have done all they can for you. You are then meant to bury them in soil back into mother earth and maybe consider moving onto different stones for deeper healing.Please be aware that we do not recommend purchasing beaded bracelets for small children. We consider this a safety hazard and we advise against it so therefore you are completely responsible and we are not liable. ',
      quantity: 689,
      num_favorers: 869,
      tags: [
        'tourmaline crystal',
        'natural stone',
        'root chakra',
        'elastic bracelet',
        'polished stone',
        'tourmaline jewellery',
        'gemstone bracelet',
        'witchy gift',
        'tourmaline bracelet',
        'black tourmaline',
        'Whitewitchofthemoon',
        'protection bracelet',
        'crystal bracelet'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 10.5,
      img: 'https://i.etsystatic.com/16229573/r/il/dc469c/3600352600/il_fullxfull.3600352600_knk6.jpg',
      onSale: true,
      taxonomy_id: 10
    },
    {
      title: 'Billy Hargrove inspired earring (screen accurate)',
      description: 'This listing is for a handmade screen accurate earring, inspired by Billy Hargrove from Stranger Things. The clasp is nickel free, but not sterling silver. The beads are glass, and the spike is 3/4 of an inch long.\n' +
        '\n' +
        ' This earring was made as screen accurate as possible, perfect for cosplays or everyday wear. \n' +
        '\n' +
        'This is a listing for a single earring, so be sure to order 2 if you&#39;d like a pair. You can also order a clip on earring by clicking the earring options.\n' +
        'THESE EARRINGS ARE NOT STERLING SILVER! If you are sensitive to costume jewelry/fake metal, please do not purchase this item.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'ONCE YOUR ITEM HAS SHIPPED I HAVE NO CONTROL OVER DELIVERY TIME.',
      quantity: 7,
      num_favorers: 403,
      tags: [ 'stranger things', 'billy hargrove', 'cosplay', 'st2' ],
      processing_min: 1,
      processing_max: 2,
      price: 10,
      img: 'https://i.etsystatic.com/15930911/r/il/3e4136/2015947065/il_fullxfull.2015947065_bosr.jpg',
      onSale: true,
      taxonomy_id: 10
    },
    {
      title: 'Multi-layer Natural Pearl Bead Sash - Baroque Style Pearl Waist Chain - Ivory Pearl Waist Belt - Trendy Pearl Wedding Belly Chain',
      description: 'Description:\n' +
        '\n' +
        'Multi-layer Natural Pearl Bead Sash - Baroque Style Pearl Waist Chain - Ivory Pearl Waist Belt - Trendy Pearl Wedding Belly Chain\n' +
        '\n' +
        '\n' +
        'Specification:\n' +
        '\n' +
        'Metals Type: Zinc Alloy, Pearl\n' +
        '\n' +
        'Color: Silver\n' +
        '\n' +
        'Chain Length: 31.40&quot; + 8.20&quot; ext\n' +
        '\n' +
        'Weight: 2.05 oz\n' +
        '\n' +
        '\n' +
        'This 14k silver tone beaded pearl sash is truly a gift for her to wear with a warm heart and joyful days. \n' +
        '\n' +
        'It is so sweet and graceful by itself which can be worn with other accessories\n' +
        '\n' +
        'Suitable for all kinds of occasions :-)\n' +
        '\n' +
        '\n' +
        'Any type of art can be kept alive only when it can breathe on its own!\n' +
        '\n' +
        'Happy Shopping :-)',
      quantity: 29,
      num_favorers: 743,
      tags: [
        'wedding chain',
        'body chain',
        'waist belt',
        'pearl chain',
        'beaded belt',
        'ladies belt',
        'white pearl belt',
        'statement belt',
        'bridal sash',
        'wedding sash',
        'gift for her',
        'dainty belt chain',
        'bridesmaid chain'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 20,
      img: 'https://i.etsystatic.com/15964649/r/il/b60b6b/2020315178/il_fullxfull.2020315178_1kea.jpg',
      onSale: true,
      taxonomy_id: 10
    },
    {
      title: 'Crystal rainbow ear climber cuff earrings',
      description: 'Beautiful ear climber cuff  earrings has colorful glass geometric crystals that climb along ear\n' +
        '\n' +
        'Pin goes into lobe and clips onto ear.\n' +
        '\n' +
        '\n' +
        'Pair\n' +
        '\n' +
        '1 1/2 inches\n' +
        '\n' +
        'Dress up or down',
      quantity: 4,
      num_favorers: 80,
      tags: [
        'ear climbers',
        'crystal ear climbers',
        'rainbow crystal clim',
        'rainbow crystal ear',
        'glass rainbow climbe',
        'rainbow glass climbe',
        'rainbow crystal craw',
        'ear climber rainbow',
        'geometric ear climbe',
        'crystal rainbow clim',
        'crystal rainbow ear',
        'crystal rainbow earr',
        'earrings rainbow cry'
      ],
      processing_min: 3,
      processing_max: 4,
      price: 24.75,
      img: 'https://i.etsystatic.com/18343896/r/il/97df1b/2573974769/il_fullxfull.2573974769_ul23.jpg',
      onSale: true,
      taxonomy_id: 10
    },
    {
      title: 'Curiosity Often Leads To Trouble Temporary Tattoo (Set of 3)',
      description: 'Handwritten style &quot;Curiosity often leads to trouble&quot; temporary tattoo. Set of three.\n' +
        '\n' +
        'Size: 4.2 in / 10.5 cm (width)\n' +
        '\n' +
        'This temporary tattoo is:\n' +
        '\n' +
        '·Safe & non-toxic \n' +
        '·FDA-compliant and fun for all ages\n' +
        '\n' +
        'Small Tattoos last on average 2-5 days. We suggest placing on oil-free areas where skin does not stretch and keep them clean!\n' +
        '___________\n' +
        '\n' +
        'Check us out!\n' +
        '\n' +
        'www.littletattoos.com\n' +
        'instagram @little.tattoos\n' +
        'pinterest.com/littletattoos\n' +
        'facebook.com/officiallittletattoos\n' +
        'officiallittletattoos.tumblr.com\n' +
        'twitter @little_tattoos\n' +
        '\n' +
        'Wholesale inquiries, custom designs, collaborations or ideas? Email us: ilove [at] littletattoos [dot] com',
      quantity: 131,
      num_favorers: 113,
      tags: [
        'temporary tattoo',
        'tattoos',
        'tattoo',
        'tatuajes',
        'tatuajes temporales',
        'temporary tattoos',
        'minimalist tattoos',
        'Alice in Wonderland',
        'little tattoos',
        'mad hatter tattoo',
        'quotes',
        'lettering',
        'Disney'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 5.99,
      img: 'https://i.etsystatic.com/17871018/r/il/e2b6e8/2136703595/il_fullxfull.2136703595_bou7.jpg',
      onSale: true,
      taxonomy_id: 10
    },
    {
      title: 'Handmade silver boho shield earrings, long leather and silver beaded earrings, statement earrings, tribal earrings bohemian jewelry',
      description: 'Handmade boho silver shield dangle earrings. These leather statement earrings are made silver zamak beads and charms strung on black leather cord. These are medium weight earrings that are comfortable and easy to wear.\n' +
        '\n' +
        'Earring size: length 8cm width 2.2cm \n' +
        '\n' +
        'Materials\n' +
        'Silver plated zamak shield charms\n' +
        'Silver plated brass earring wires \n' +
        'Silver plated zamak beads \n' +
        'Black greek leather cord\n' +
        '\n' +
        'Zamak is an alloy of zinc, aluminium, magnesium and copper. It is hypoallergenic and plated with sterling silver. Both the zamak findings and leather are high quality made in Europe.\n' +
        '\n' +
        'All materials are lead and nickel free.\n' +
        '\n' +
        'Packaging:\n' +
        'All jewellery comes in a gift box ready for giving.',
      quantity: 2,
      num_favorers: 27,
      tags: [
        'bohemian jewelry',
        'gift for mom',
        'statement earrings',
        'tribal earrings',
        'bohemian earrings',
        'boho jewelry',
        'beaded earrings',
        'handmade earrings',
        'leather earrings',
        'long dangle earrings',
        'boho shield earrings',
        'silver boho earrings',
        'silver bead earrings'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 14.95,
      img: 'https://i.etsystatic.com/17668919/r/il/a4a1aa/2906417586/il_fullxfull.2906417586_iy2j.jpg',
      onSale: true,
      taxonomy_id: 10
    },
    {
      title: 'ETSY Boho 925 Sterling Silver Spinner Ring, Designer Hand Carver Spin Ring, Thumb Ring, Meditation Ring, Silver Jewelery  Bestselling 2022',
      description: '#Birthstone Item #ring for woman #anxiety ring #Faster Selling Item #Bestseller #silverartisanwork #Silverboho #Ringlover #etsyseller #Starseller #Turquiseringlover #Spinner #Mother&#39;s Day gift itemsBeautiful 925 Sterling Silver Spinner Ring, Designer Hand Carver Spin Ring, Thumb Ring, Meditation Ring, Worry Ring, Women Silver Jewelry, \n' +
        '\n' +
        'Avilabel Big Size 10,11,12,13,14 in reqest make it or any uk size or other size 925 sterling silver RING (SPINNER RING)- silver spinner ring-925 sterling silver thumb ring-silver band ring Use 925 Sterling Silver Handmade Crafting Work  Vintage Solid Silver large Boho Designs  \n' +
        'Antique Silver 925\n' +
        '\n' +
        'ETSYCYBER2022\n' +
        '\n' +
        'OFFER   ETSY CYBER 2022Antique Silver 925 Big Size Ring 925 Sterling Silver Ring (SPINNER RING) Meditation Ring- Silver Spinner Ring-925 Sterling Silver Thumb Ring Spinner Ring, Anxiety Ring, Meditation Ring, Spinning Ring, Thumb Ring, Three Tone Ring, 925 Sterling Silver Ring,Handmade Jewelry Christmas. ... AAA Stunning Designer Ring, Spinner Ring, Anxiety Ring, Meditation Ring, Spinning Ring, Thumb Ring, Three Tone Ring, Handmade Jewelry Gift.\n' +
        '\n' +
        'A sterling silver band is adorned with cultured freshwater pearls and braid motifs in this meditation ring . Two spinning bands of copper and brass add color and detail to the unique meditation ring.\n' +
        'all ring is spin and good ofer all size is avilabel please remark your special size if not avilabel or meassge than make it .ETSY ONLINE SELL 2021 TOP SELLING ITEM GIFT FOR YOU\n' +
        '\n' +
        '\n' +
        '&#39;&#39;Spring Trends&#39;&#39;\n' +
        'THIS ALL DESIGN IS CRATED BY SHREE JAIPUR SILVER ITS ORIGNAL DESIGN NO OTHER SITE IS SELLING THIS\n' +
        '\n' +
        '\n' +
        '\n' +
        '2021 Spring Summer Trends Design\n' +
        '\n' +
        'ETSY MOTHER&#39; DAY GIFTLabor Day # BestSellerbridesmaid gift\t!!! personalized jewelry !!!\n' +
        '       !!!  deco -handmade  !!!\n' +
        '      !!! christmas gifts !!!\n' +
        '  !!! birthstones !!!\n' +
        '!!! best friend gifts !!! christmas decorationsetsy cyber week sale 2021 gift for herValentine’s Day  Early 2021 Trends Bestseller Shopgift for her  personalized leather best friend gifts  valentines day gift for hi personalized gifts bridesmaid gifts crystals self gift necklaces candle\t wall arT  neon sign tarot deck plants\tHoT candle engagement rings gifts for him valentines valentines day#halloween costumes#Bestseller 2022 Cyber ETSY Selling Item#Birthstone\n' +
        '#February\n' +
        '#March\n' +
        '#April\n' +
        '#May\n' +
        '#jun\n' +
        '#JulySilver 925',
      quantity: 3,
      num_favorers: 7083,
      tags: [
        'Boho Design 2022',
        'Shree Jaipur Silver',
        'Moon Magic Ring',
        'BestSelling Star',
        '925 Sterling Silver',
        'Sterling Silver Ring',
        'Thumb Ring',
        'Silver Band Ring',
        'Handmade Ring',
        'Hand Carver Ring',
        'Worry Ring',
        'Gift For Her',
        'Gift  item ring'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 59.99,
      img: 'https://i.etsystatic.com/11130209/r/il/7e590a/3850941103/il_fullxfull.3850941103_14zd.jpg',
      onSale: true,
      taxonomy_id: 10
    },
    {
      title: '925 Sterling Silver & Brass Designer Textured Spinner Ring, Handmade Two Tone Boho Meditation Ring, Valentine&#39;s Day Jewelry, Etsy Cyber 2021',
      description: '#Birthstone Item#ring for woman #anxiety ring #Faster Selling Item#Bestseller #silverartisanwork #Silverboho #Ringlover #etsyseller #Starseller #Turquiseringlover #Spinner#Mother&#39;s Day gift items925 Sterling Silver & Brass Designer Textured Spinner Ring.\n' +
        '\n' +
        'Available in different size.\n' +
        '\n' +
        'Metal: 925 Sterling Silver & Brass\n' +
        'Ring Size: Optional\n' +
        'Quantity: 1 Piece\n' +
        '\n' +
        'Spinner Ring:-\n' +
        '\n' +
        'Ring lovers all over the world wearing (and spinning) their spinner rings have reduced their tension levels. Several researches revealed that &quot;playing&quot; with a Spinning-Ring band in repetitive motion helps to calm the mind.\n' +
        '\n' +
        'click more spinner rings:-\n' +
        'https://www.etsy.com/in-en/shop/Shreejaipursilver925?ref=seller-platform-mcnav&search_query=spinner+rings\n' +
        '\n' +
        '&#39;&#39;Spring Trends&#39;&#39;\n' +
        'THIS ALL DESIGN IS CRATED BY SHREE JAIPUR SILVER ITS ORIGNAL DESIGN NO OTHER SITE IS SELLING THI\n' +
        '\n' +
        'As a metal, silver has significant health benefits that have been used across cultures for centuries. Silver has a proven track record as a powerful antimicrobial agent fighting infections and aiding in cold and flu prevention, wound healing, and more. Silver also helps with internal heat regulation and circulation.Valentine’s Day  Early 2021 Trends Bestseller Shopgift for her  personalized leather best friend gifts  valentines day gift for hi personalized gifts bridesmaid gifts crystals self gift necklaces candle\t wall arT  neon sign tarot deck plants\tHoT candle engagement rings gifts for him valentines valentines day#halloween costumes#Bestseller 2022 Cyber ETSY Selling Item #Birthstone\n' +
        '#February\n' +
        '#March\n' +
        '#April\n' +
        '#May\n' +
        '#jun\n' +
        '#July\n' +
        '\n' +
        'Silver 925',
      quantity: 3,
      num_favorers: 35,
      tags: [
        'thumb ring',
        'silver spinner ring',
        'spinner ring',
        'Anxiety Ring',
        'Boho Ring',
        'bohemian ring',
        'Boho Spinner Rings',
        'women rings',
        "Valentine's Day Gift",
        'two tone rings',
        'girls ring',
        'textured spin rings',
        'antiqued silver ring'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 59.89,
      img: 'https://i.etsystatic.com/11130209/r/il/ce5a4f/3762320256/il_fullxfull.3762320256_lz7n.jpg',
      onSale: true,
      taxonomy_id: 10
    },
    {
      title: 'Vintage Pocket Watch Lagonda',
      description: 'Working beautiful vintage pocket watch',
      quantity: 1,
      num_favorers: 0,
      tags: [
        'vintage Pocket watch',
        'Pocket watch',
        'Lagonda',
        'Lagonda Pocket Watch',
        'boat watch',
        'sailor pocket watch',
        'sailor watch'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 69,
      img: 'https://i.etsystatic.com/19403235/r/il/b64fe5/3520833344/il_fullxfull.3520833344_ifpk.jpg',
      onSale: true,
      taxonomy_id: 10
    },
    {
      title: 'Turkish evil eye silver bracelets, 18K gold plated! Great for gifts anytime!',
      description: 'Turkish evil eye bracelets! Great for presents at any time to ward of negativity! Handmade in 925 silver and 18K gold plated!  Extra links to adjust size according to wrist!  Suitable for adults or children!',
      quantity: 1,
      num_favorers: 1,
      tags: [
        'turkish evil eye',
        'bracelets',
        'children',
        'christmas presents',
        'eternityjewelshk',
        '18K gold plated',
        '925 silver'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 360,
      img: 'https://i.etsystatic.com/10400674/r/il/e7db92/698656458/il_fullxfull.698656458_2fqt.jpg',
      onSale: true,
      taxonomy_id: 10
    },
    {
      title: 'Hinkeets',
      description: 'Hinkeets Headdress',
      quantity: 2,
      num_favorers: 17,
      tags: [
        'Native America art',
        'Native',
        'Pnw',
        'Hinkeets',
        'nuuchannulth art',
        'nuuchannulth',
        'Native America',
        'Native art',
        'Vancouver',
        'Native design',
        'Indigenous',
        'Coast Salish',
        'First Nations'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 150,
      img: 'https://i.etsystatic.com/22113734/r/il/eeedad/3392820474/il_fullxfull.3392820474_mka2.jpg',
      onSale: true,
      taxonomy_id: 10
    },
    {
      title: 'Printable Official Letter From The Desk Of The Easter Bunny, Editable Easter Bunny Letter, Editable with Corjl, Instant Download',
      description: 'Create special memories and treasured keepsakes for your kids with this 8.5x11&quot; editable letter from the Easter Bunny!  You will receive a link to edit your digital design via CORJL at the email address associated with your Etsy account.  If you prefer not to use CORJL, I&#39;ve also included a pdf of the Easter Bunny letterhead with no editable text in the middle. The blank PDF file can be found in your Etsy account under the &quot;Purchases and Reviews&quot; section after you&#39;ve completed your purchase.\n' +
        '\n' +
        '*****PLEASE NOTE: If you pay with Apple Pay and have the &quot;hide my email&quot; option selected, Corjl will be UNABLE to deliver your files. Please include an email address OR send me a message with your email address so the files can be delivered to your account!*****\n' +
        '\n' +
        '\n' +
        'FREE DEMO:\n' +
        'Copy and paste this link into your browser to access our FREE demo.\n' +
        'https://www.corjl.com/d/JNGPN\n' +
        '\n' +
        'WHAT IS EDITABLE? \n' +
        'You can personalize the name at the bottom of the card.\n' +
        'Graphics CANNOT be changed. \n' +
        '\n' +
        '--------------------------------------------------------\n' +
        'WHAT DO I RECEIVE? \n' +
        '--------------------------------------------------------\n' +
        '\n' +
        '• PDF with instructions.\n' +
        '• The design is created for printing in size 3.5x2&quot;.\n' +
        '• Corjl will send an access link to the email associated with your Etsy account within 10 minutes of the point of sale! The link allows you to edit, save and download your design as JPG, PDF or PNG.\n' +
        '• PDF with blank area at the bottom if you prefer NOT to use Corjl.\n' +
        '\n' +
        '--------------------------------------------------------\n' +
        'HOW IT WORKS?\n' +
        '--------------------------------------------------------\n' +
        '\n' +
        '1. PURCHASE AND RECEIVE THE LINK TO ACCESS YOUR DESIGN.\n' +
        'Once payment is confirmed, you will get an email sent to your registered Etsy account, containing the link for you to access your editable design. Make sure the e-mail address registered in your Etsy account is current.\n' +
        '\n' +
        '2. EDIT YOUR DESIGN.\n' +
        'Edit your design in your browser, no software required.\n' +
        'You can edit fonts, font colors, move and resize the text boxes.\n' +
        'You CANNOT change the graphics includes in the design.\n' +
        '\n' +
        '3. SAVE YOUR FILES\n' +
        'Save your edited design as a JPG, PNG or PDF file.\n' +
        'You can use the design for printing purposes but also for sending them electronically. \n' +
        'You can save the PDF as two on a page to save on printing! You also have the option to add crop marks and bleeds.\n' +
        'The files you can print at home or any local or online print shop (e.g. Costco, Office Max, Staples, etc…) \n' +
        '\n' +
        'HOW LONG DOES IT TAKE?\n' +
        '\n' +
        '• After payment is made, Corjl when send an email with a link to your design within 10 minutes.\n' +
        '\n' +
        '\n' +
        '©Mulberry Street Paper Goods. By purchasing this item you agree to not distribute or resell the art contained in this download. This item is for personal use only.',
      quantity: 281,
      num_favorers: 113,
      tags: [
        'printable', 'easter',
        'bunny',     'letter',
        'official',  'desk',
        'editable',  'kids',
        'basket',    'corjl',
        'instant',   'download'
      ],
      processing_min: null,
      processing_max: null,
      price: 3,
      img: 'https://i.etsystatic.com/33237074/r/il/f44e2d/3785716173/il_fullxfull.3785716173_l7c3.jpg',
      onSale: true,
      taxonomy_id: 11
    },
    {
      title: 'Rainbow Party Box | PASTEL DOTTY RAINBOW | Personalised kids luxe picnic meal boxes',
      description: '** Personalised Party favour Box **\n' +
        '\n' +
        '- Personalised box with a a dotty rainbow design, with a matching satin bow,.\n' +
        '- Perfect for kids luxe picnics, birthday and party favours.\n' +
        '\n' +
        '\n' +
        'The boxes are white made from high quality board, which is both biodegradable and recyclable. \n' +
        '\n' +
        '===================================================\n' +
        '\n' +
        'Box Measurements  - 22.8 x 12.2 x 9.7 CM\n' +
        '\n' +
        '==================================================\n' +
        '\n' +
        'Wording can be changed to suit any occasion!',
      quantity: 316,
      num_favorers: 15,
      tags: [
        'treat box',
        'luxe picnic box',
        'gift boxes',
        'gift bag favour',
        'goodie bags',
        'personalised gift',
        'boho rainbow',
        'rainbow birthday',
        'rainbow box',
        'birthday party',
        'party favour',
        'wedding favour'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 2.5,
      img: 'https://i.etsystatic.com/8608711/r/il/f08a8e/3638081711/il_fullxfull.3638081711_ryhk.jpg',
      onSale: true,
      taxonomy_id: 11
    },
    {
      title: 'RETURN ADDRESS STAMP, Custom Return Address Stamp, Self Ink Return Address Stamp, Custom Stamp Address, Self Inking Stamp, Custom stamp',
      description: 'Turn your Address Stamp into a beautiful detailed custom return address stamp. These beautifully made self ink address stamp will last for years. We have supplied these to some of the biggest names in the craft market and we are sure they will help your brand stand out too. \n' +
        '\n' +
        '♥ WELCOME TO STAMP BY ME ♥\n' +
        '\n' +
        'We create custom, hand-made rubber stamps from our shop to your home.\n' +
        '\n' +
        '\n' +
        '➤ The perfect gift for housewarming. My designs are 100% customizable as you desire!\n' +
        '\n' +
        '\n' +
        'You will receive:\n' +
        '○ Address Stamp customized with your name + address\n' +
        '○ Beautiful Gift Wrap\n' +
        '○ Great personalized box for your stamp (for self ink option)\n' +
        '\n' +
        '♥ STAMP INFORMATION ♥\n' +
        '\n' +
        '1. SIZE: wood hand stamps are a 2&quot; x 6/8&quot; (50x20mm) impression area // the self-inking are slightly larger at 2-3/8&quot; x 7/8&quot; (57x21mm)\n' +
        '2. The self-inking stamps are Colop models - which will last, literally, for thousands and thousands of impressions.\n' +
        '3. Wood stamps do not come with an ink pad unless that stamp type is chosen in the drop down.\n' +
        '\n' +
        '○ Wood stamps are made from maple wood and laser-etched renewable resource grey rubber.\n' +
        '\n' +
        '○ Self-inking stamp is available with different color ink. Self-inking stamps are made from post-consumer recycled plastic, and laser-etched renewable resource rubber. Custom ink colors are available upon request. \n' +
        '\n' +
        'DO YOU NEED A BOOK STAMP? https://www.etsy.com/listing/667076640/library-stamp-library-of-stamp-custom?ref=shop_home_active_6&pro=1&frs=1\n' +
        '\n' +
        'DO YOU NEED A WEDDING STAMP? https://www.etsy.com/listing/680914911/wedding-stamp-custom-wedding-stamp?ref=shop_home_feat_2&pro=1&frs=1\n' +
        '\n' +
        '♥ HERE’S HOW TO ORDER ♥\n' +
        '\n' +
        '1. Choose your stamp type.\n' +
        '2. Choose your design.\n' +
        '3. After you order, you will receive a proof via Etsy messages with the design of your stamp... Get excited that your stamp is officially in production!\n' +
        '\n' +
        '\n' +
        '➤ S H I P P I N G: Please let us know if your item takes longer. We also offer an upgraded tracked service please see shipping details. We HIGHLY RECOMMEND the upgraded service so you can track your parcel. \n' +
        '\n' +
        'Please let us know if your item takes longer. We also offer an upgraded tracked service please see shipping details. We HIGHLY RECOMMEND the upgraded service so you can track your parcel. \n' +
        '\n' +
        'REGULAR:\n' +
        '\n' +
        'Europe: 5-7 Working days - Tracked service also available. \n' +
        '\n' +
        'Australia: 30-60 working days - Tracked service also available.\n' +
        '\n' +
        'Rest of the world: 7-14 working days - Tracked service also available.\n' +
        '\n' +
        '\n' +
        'FAST (We will rush your order too):\n' +
        '\n' +
        'Europe: 3-5 working days \n' +
        '\n' +
        'Rest of the world 5-8 working days \n' +
        '\n' +
        '\n' +
        'EXPRESS (WITH TRACKING NUMBER): \n' +
        '\n' +
        'Europe: 1-3 working days \n' +
        '\n' +
        'Australia: 3-7 working days\n' +
        '\n' +
        'Rest of the world 2-4 working days \n' +
        '\n' +
        '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n' +
        '\n' +
        '| ORIGINAL DESIGN BY STAMPBYME| \n' +
        '© All Rights Reserved',
      quantity: 645,
      num_favorers: 18920,
      tags: [
        'RETURN ADDRESS STAMP',
        'Custom Stamp Address',
        'Self Inking Stamp',
        'Custom Self Ink',
        'address stamp',
        'custom address stamp',
        'custom address',
        'address stamps',
        'return address label',
        'return address',
        'rubber address stamp',
        'custom stamp',
        'personalized stamp'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 12.49,
      img: 'https://i.etsystatic.com/19505509/r/il/feefc2/1872254111/il_fullxfull.1872254111_61dt.jpg',
      onSale: true,
      taxonomy_id: 11
    },
    {
      title: 'Charles the First Logo Sticker',
      description: 'Vinyl sticker that can be placed on most surfaces, including windows, laptops, and water bottles. There is a clear layer of transfer tape over the sticker to ensure an easier placement on your desired surface.\n' +
        '\n' +
        '*Disclaimer: Due to the many small cuts in some designs, it is possible that your sticker may have some slight imperfections. I will do my best to make your sticker as close to the design as I can; however, I cannot guarantee that it will be identical.*',
      quantity: 26,
      num_favorers: 73,
      tags: [
        'Charles the first',
        'ctf',
        'charlesthefirst',
        'charles',
        'edm',
        'dj'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 1.5,
      img: 'https://i.etsystatic.com/23269814/r/il/07cbc9/3507229688/il_fullxfull.3507229688_swtj.jpg',
      onSale: true,
      taxonomy_id: 11
    },
    {
      title: 'Hangover Kit stickers,Personalized hangover kit stickers,Wedding favor stickers,Custom favor labels,Emergency hangover kit labels,',
      description: '//ABOUT THIS LISTING//\n' +
        '►20 favor stickers (2&quot; in diameter) \n' +
        '►Printed on white, kraft or clear sticker paper.\n' +
        '►Made in our smoke-free & pet-free home\n' +
        '►Ideal for plastic, paper, glass and metal FLAT surfaces. \n' +
        '►Not suitable for fabric based surfaces. \n' +
        '►Make sure you measure the length of area you are going to put the stickers first.\n' +
        '►will NOT stay/stick well on any surface that are NOT flat & smooth \n' +
        '(ex. ridged, curved or grooved surfaces)\n' +
        '\n' +
        '//TO PLACE YOUR ORDER//\n' +
        '1.Choose the quantity of stickers.\n' +
        '*A minimum order is 1 sheet ( 20 stickers).\n' +
        '*We sell by 20 stickers.\n' +
        'ex)QTY I = 20 stickers, QTY 2=40 stickers...\n' +
        '2.Choose a STYLE & FINISH from drop down menu.\n' +
        '*PRE-MADE: Designed beforehand stickers. NO personalization available.\n' +
        '3.In the personalized box, \n' +
        'please leave your personalized details if you&#39;re ordering &quot;add names/date&quot;\n' +
        '►We copy and paste what you write in the personalized box.\n' +
        '►Please double-check your information and make sure everything is correct.\n' +
        'We are NOT responsible for incorrect information you mistakenly put.\n' +
        '\n' +
        '//PRODUCTION TIME//\n' +
        '►Production begins when all information is complete.\n' +
        '►Ready to ship in 1-2 business days, unless you have specified a rush order. \n' +
        '►We will send a proof through via Etsy conversation ONLY when you requested during check out. \n' +
        '►Requesting a proof can delay the production time.\n' +
        '►We may ask for an approval of a proof , if necessary.\n' +
        '►You can upgrade your shipping during check out.\n' +
        '\n' +
        '//SHIPPING//\n' +
        ' ►Please read our Shipping Polices and FAQ before placing an order.\n' +
        'https://www.etsy.com/uk/shop/irisliewSTUDIO?ref=hdr_shop_menu#policies\n' +
        '►Please do NOT forget to update the shipping address. We are not responsible for the incorrect address.\n' +
        '►You will received a shipping notification with tracking number. You can check delivery status with the tracking number.\n' +
        '\n' +
        '//PLEASE NOTE//\n' +
        '►I don&#39;t accept returns or exchanges. Please contact me within 2 days of delivery and send me photos of the product and the package if you have any problems with your order.\n' +
        '►I gladly accept cancellations. Request a cancellation within: 2 hours of purchase.\n' +
        '► The color on your screen may vary slightly from your product you receive.\n' +
        '\n' +
        '[ Follow us on Instagram @irisliewSTUDIO for special sales + discount coupons ]\n' +
        '© 2019 irisliewSTUDIO',
      quantity: 956,
      num_favorers: 181,
      tags: [
        'custom wedding label',
        'hangover kit label',
        'hangover kit sticker',
        'emergency hangover',
        'hangover favor kit',
        'hangover kit labels',
        'wedding hangover kit',
        'favor stickers',
        'custom favor labels',
        'custom favor label',
        'personalized labels',
        'personalized sticker',
        'clear favor labels'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 2.99,
      img: 'https://i.etsystatic.com/12776222/r/il/be2470/1812781837/il_fullxfull.1812781837_4t5m.jpg',
      onSale: true,
      taxonomy_id: 11
    },
    {
      title: 'The Empire Doesn&#39;t Care About Your Stick Figure Family - Star Wars - AT AT - Vinyl Decal Car Truck Laptop Sticker',
      description: 'Die cut vinyl decal sticker \n' +
        'Suitable for the exterior of cars, trucks, vans, RV&#39;s, (body or window), PC&#39;s, laptop lids , tablets, fridge doors, virtually any flat smooth clean non porous surface.\n' +
        'All of the vinyl colors have a gloss finish unless noted matt.\n' +
        'It is an indoor/outdoor vinyl with a permanent adhesion and a 5 year outdoor durability.\n' +
        'This is a die cut vinyl decal, in a single colour of your choosing with NO background, your surface becomes the background. \n' +
        'Decals will come supplied with clear application sheet and instructions.  \n' +
        'Reverse cut/mirrored decal available for interior window application so that it looks correct from the outside when applied to the inside of the window. (please add a message for this)\n' +
        'Colours available are:   \n' +
        'Gloss Black\n' +
        'Matt Black\n' +
        'Gloss White\n' +
        'Matt White\n' +
        'Red\n' +
        'Mid Green\n' +
        'Joker Green\n' +
        'Military Green\n' +
        'Blue\n' +
        'Silver\n' +
        'Gold\n' +
        'Purple\n' +
        'Pink\n' +
        'Gloss Yellow\n' +
        'Matt Yellow\n' +
        'Gloss Orange\n' +
        'Matt Orange\n' +
        'Matt Military Green\n' +
        '\n' +
        'Please visit my shop page for more great decals and more information on the decals and please check out the FAQ&#39;s.\n' +
        'https://www.etsy.com/uk/shop/SciFiVinyls',
      quantity: 42,
      num_favorers: 117,
      tags: [
        'darth vader',
        'millennium falcon',
        'r2d2',
        'c3p0',
        'first order',
        'tie fighter',
        'x wing',
        'leia',
        'yoda',
        'stormtrooper',
        'death star',
        'boba fett',
        'jedi'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 2.99,
      img: 'https://i.etsystatic.com/19433277/r/il/ec6545/2984137998/il_fullxfull.2984137998_mw5k.jpg',
      onSale: true,
      taxonomy_id: 11
    },
    {
      title: 'Zeta Phi Beta Sorority Inspired | Blue and White notecards | Women Empowering Women | Sisterhood cards',
      description: 'Zeta Phi Beta Sorority Inspired | Encourage, empower, uplift, and celebrate some of your favorite women with this beautiful card set. This card set is blank on the inside for you to personalize your message.\n' +
        '\n' +
        'Card set includes 5 cards and 5 envelopes.\n' +
        'Each card is 4.5” x 6.25”, Blank inside. \n' +
        '- Note: Blue and white color could be slightly different due to monitor settings.\n' +
        'Printed professionally on 110 lb. recycled paper that writes smoothly. \n' +
        'Manufactured in the USA.',
      quantity: 43,
      num_favorers: 19,
      tags: [
        'greeting card',
        'notecards',
        'sisterhood',
        'women empowerment',
        'black lives mater',
        'zeta phi beta',
        'blue and white',
        'girlfriend cards',
        'zeta girls',
        'zeta stationary',
        'zeta notecards',
        'zeta sorority',
        'zeta paraphernalia'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 12.99,
      img: 'https://i.etsystatic.com/17704851/r/il/987db2/2998730242/il_fullxfull.2998730242_9nbi.jpg',
      onSale: true,
      taxonomy_id: 11
    },
    {
      title: 'Custom Heat Transfer Vinyl | Iron On Decal | Apparel Decal | Name Decal | Personalized Apparel Sticker | Matching T-shirts',
      description: 'PLEASE READ DESCRIPTION BEFORE PURCHASING ****\n' +
        '\n' +
        'Custom Iron on Vinyl Designs, perfect for t-shirts, blankets, hats, backpacks, shorts, Contact me with any ideas or questions you might have.\n' +
        '\n' +
        'Open to any customization, design, logo etc. I offer any color you wish for. \n' +
        '&quot;Pick your font&quot; picture on my listing is for general ideas but I can do any font/monogram you wish for. \n' +
        '\n' +
        'VERY IMPORTANT***\n' +
        '\n' +
        'Please choose the correct sizing before purchasing. \n' +
        '\n' +
        '* A 2x2 inches decal means the ENTIRE DECAL measures 2 inches wide and 2 inches tall (not each letter 2inches)\n' +
        '\n' +
        '1x1 = A quarter coin measures 1in diameter\n' +
        'If you order a 3x3in =  your decal will be as wide as a credit card\n' +
        'If you order a 6x6= your decal will be as wide as a dollar bill\n' +
        '\n' +
        'My sizes go &quot;Up to&quot; 2x2, 3x3,4x4, and so on. Depending on the Design you would like, it might take up the entire &quot;up to&quot; sizing or it might just be the longest side. For example, a square logo will take up the entire up to 5x5 sizing, But a name will not be legible if it is 5x5 and might be legible 5x2 inches. \n' +
        'I can fit as many designs as you would like in one &quot;up to sizing&quot; \n' +
        '\n' +
        '*Decals size 3x3in  please only a maximum of 3 words per decal*\n' +
        '*Decals size 2x2in  please only a maximum of 2 words per decal*\n' +
        '\n' +
        'Please include the font you would like your designs to be. If you do not choose a font, I will pick the font I find to look best. \n' +
        '\n' +
        '\n' +
        'I offer flock vinyl and regular permanent vinyl as well. \n' +
        '\n' +
        'Listing Includes one decal as well as instruction on how to apply. \n' +
        'With proper iron heat and proper washing, your design should permanently stay on surface.',
      quantity: 8715,
      num_favorers: 5925,
      tags: [
        'quote decal',
        'matching tshirts',
        'iron on',
        'family T-shirts',
        'monogram',
        'perzonalized',
        'heat transfer vinyl',
        'name decal',
        'personalized',
        'HTV vinyl',
        'custom made',
        't-shirt vinyl',
        'Christmas gift'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 0.5,
      img: 'https://i.etsystatic.com/19068040/r/il/8b3f51/2368925973/il_fullxfull.2368925973_t6o5.jpg',
      onSale: true,
      taxonomy_id: 11
    },
    {
      title: 'Birthday card heart balloons',
      description: 'Cute heart balloons, A6 textured card with white envelope. Designed and illustrated in my little studio in Kilkenny, Ireland. If you would like a personal message on the inside of the card, I will handwrite your card for you and post to the address given. Otherwise it will be delivered straight to you.',
      quantity: 1,
      num_favorers: 0,
      tags: [],
      processing_min: 1,
      processing_max: 2,
      price: 3.5,
      img: 'https://i.etsystatic.com/35037173/r/il/dd2451/3860622189/il_fullxfull.3860622189_h8hm.jpg',
      onSale: true,
      taxonomy_id: 11
    },
    {
      title: 'funny card for mimi, mothers day card for mimi, best mimi ever, mimi birthday card, mimi card, mimi thank you card',
      description: 'Makes a perfect card for your mimi !\n' +
        '\n' +
        '- This is a physical product that will be shipped to you\n' +
        '\n' +
        '- Product includes 1 greeting card on 110 lb stock and 1 white envelope.\n' +
        '\n' +
        '- The interior is left blank for you to add your message later\n' +
        '\n' +
        '- Size is standard 5&quot; x 7&quot;\n' +
        '\n' +
        'Due to the nature of this card, we are unable to add personalization to the front. The interior is left blank for you to add your message\n' +
        '\n' +
        'funny card for mimi, mothers day card for mimi, best mimi ever, mimi birthday card, mimi card, mimi thank you card',
      quantity: 995,
      num_favorers: 5,
      tags: [
        'greeting card',
        'funny cute joke gag',
        'thank you card',
        'funny card',
        'sarcasm',
        'humourous',
        'appreciation',
        'mothers day card',
        'funny card for mimi',
        'best mimi ever',
        'mimi birthday card',
        'mimi card',
        'mimi thank you card'
      ],
      processing_min: 2,
      processing_max: 5,
      price: 6.24,
      img: 'https://i.etsystatic.com/15599295/r/il/b2141b/2999242572/il_fullxfull.2999242572_hvdy.jpg',
      onSale: true,
      taxonomy_id: 11
    },
    {
      title: 'Little brother birthday card - superstar brother',
      description: 'A cute little card for a superstar little brother.\n' +
        '\n' +
        'This delicate hand drawn design features the message &#39;Superstar little brother&#39; against a fresh white background.\n' +
        '\n' +
        'Metallic dots and stars in blue, gold, silver and yellow catch the eye and shine whilst clever embossing adds texture to the card.\n' +
        '\n' +
        'The card is supplied blank for you to add your own message.\n' +
        '\n' +
        'Supplied with a luxurious aqua marine envelope.\n' +
        '\n' +
        'Size:  130mm x 130mm',
      quantity: 47,
      num_favorers: 5,
      tags: [
        'brother birthday',
        'card for brother',
        'little bro card',
        'little brother card',
        'molly mae',
        'made in the uk',
        'blue',
        'silver',
        'white',
        'small card',
        'from big brother',
        'dotty design',
        'from big sister'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 3.1,
      img: 'https://i.etsystatic.com/11979142/r/il/010484/3161753430/il_fullxfull.3161753430_dyy2.jpg',
      onSale: true,
      taxonomy_id: 11
    },
    {
      title: 'Little sister Birthday card - Super Duper sister',
      description: 'Send birthday wishes to a super duper little sister with this lovely little card!\n' +
        '\n' +
        'A pure white background highlights metallic dots in silver, rose gold and pale blue with 3 little love hearts and a birthday message in calligraphy style font. \n' +
        '\n' +
        'Embossing adds texture to the card.\n' +
        '\n' +
        'The card is supplied blank for you to add your own message.\n' +
        '\n' +
        'Supplied with a luxurious aqua marine envelope.\n' +
        ' \n' +
        'Size:  130mm x 130mm',
      quantity: 21,
      num_favorers: 78,
      tags: [
        'sister birthday card',
        'little sister card',
        'super duper sister',
        'birthday card',
        'dotty design',
        'made in the UK',
        'molly mae',
        'small card',
        'white',
        'pink',
        'silver',
        'hearts',
        'from big sister'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 3.2,
      img: 'https://i.etsystatic.com/11979142/r/il/a2d13f/3209466921/il_fullxfull.3209466921_llcs.jpg',
      onSale: true,
      taxonomy_id: 11
    },
    {
      title: 'Custom Easter Card - Handmade Easter Greeting Card | First Easter Card | Cute Rabbit Easter Gift Ideas | Pet Cards',
      description: 'Send love and celebrate with this super cute handmade Easter card!\n' +
        '\n' +
        'This design is perfect for all your loved ones - and can be customised to include their name for an extra personal touch. \n' +
        '\n' +
        '✷ High-Quality Handmade Card ✷\n' +
        '\n' +
        'All my cards are handmade with love, using layered colored paper and cardstock backed onto ice white pearlescent and smooth white card-stock. \n' +
        '\n' +
        '✷ Size ✷\n' +
        '\n' +
        'The size is a perfect 5x5 inch and also comes with a bespoke stamped envelope!\n' +
        '\n' +
        '✷ In a rush? ✷\n' +
        '\n' +
        'Please drop me a message and I&#39;ll see what I can do! There is also  an option to upgrade delivery at checkout.\n' +
        '\n' +
        '✷ Can you send the card directly to my loved one? ✷\n' +
        '\n' +
        'Yes! If you’re short on time or won’t be around to get to the post office, I can handwrite and send your card directly to your loved one. \n' +
        '\n' +
        'You can choose this option in the drop down box, and please add your message in the personalisation box below. \n' +
        '\n' +
        'If you choose this option, please double check you have included the right delivery address! \n' +
        '\n' +
        'Please let me know if you have any queries or special requests. \n' +
        '\n' +
        'Love, me x x x',
      quantity: 1,
      num_favorers: 0,
      tags: [
        'Custom Easter card',
        'Baby Easter card',
        'Happy Easter card',
        'First Easter card',
        'Easter card',
        'Pet cards',
        'Love card',
        'Handmade cards',
        'Homemade cards',
        'Animal greeting card',
        'Custom Greeting Card',
        'Personalised card',
        'Custom card'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 4.15,
      img: 'https://i.etsystatic.com/32196455/r/il/4d6f70/3788807306/il_fullxfull.3788807306_o6lz.jpg',
      onSale: true,
      taxonomy_id: 11
    },
    {
      title: 'Easter Scavenger Hunt, Easter Scavenger Hunt for Kids, Scavenger Hunt with Riddles, Indoor Scavenger Hunt - Printable PDF',
      description: 'This Easter scavenger hunt game is a great way to add some fun to the holidary! This Easter Download Printable are pdfs that you can print as many as you like\n' +
        '\n' +
        '2 printable templates with 12 pre-filled clues and recommended solutions. Super simple – just print and cut them out.\n' +
        '\n' +
        'Create a scavenger hunt that the whole family can participate in\n' +
        '\n' +
        '\n' +
        'INSTANT DOWNLOAD: This is a digital product. No physical product will be sent.\n' +
        '\n' +
        'PLEASE NOTE: The done for you clues are not digitally editable.\n' +
        '\n' +
        'Once payment is complete the digital files will be available for download in your account and an email will be sent to your Etsy registered email.\n' +
        '\n' +
        'The pictures of the printed product gives you an indication of how it looks printed and used.\n' +
        '\n' +
        'Letter Size Paper (8.5” x 11”)\n' +
        '\n' +
        '1 PDF (2 Pages total)\n' +
        '\n' +
        '1 PDF (12 individual card images)\n' +
        '\n' +
        'I suggest using a bright white paper with a heavier weight such as 40lb for more durability.\n' +
        '\n' +
        'If you have any questions about this item, just hit the &quot;message seller&quot; button and I will get right back to you!\n' +
        '\n' +
        'Visit my shop for other great products: https://www.etsy.com/shop/ACraftyLatinaStudio \n' +
        '\n' +
        'Files are for personal use only.  Feel free to print as many as needed.  However, you may in no way redistribute, recreate or resell these designs. This includes copying them and rebranding them as your own.\n' +
        '\n' +
        'Thank You!\n' +
        'X0X0\n' +
        'ACraftyLatina\n' +
        'Copyright @2022 ACraftyLatina Digital Studio',
      quantity: 926,
      num_favorers: 25,
      tags: [
        'hunt with riddles',
        'scavenger hunt cards',
        'printable scavenger',
        'hunt for kids',
        'indoor scavenger',
        'riddle scavenger',
        'home scavenger hunt',
        'kids scavenger hunt',
        'indoor birthday',
        'scavenger hunt',
        'easter scavenger',
        'easter treasure hunt',
        'Easter hunt'
      ],
      processing_min: null,
      processing_max: null,
      price: 2.5,
      img: 'https://i.etsystatic.com/15870526/r/il/1fd51f/3782226513/il_fullxfull.3782226513_jf8u.jpg',
      onSale: true,
      taxonomy_id: 11
    },
    {
      title: 'Holographic Snowboarder Sticker | Winter Sports Vinyl Decal | Snowboarding Laptop Decal | Waterproof Sticker | Snowboard Gift | Outdoors',
      description: 'Holographic Snowboarder Vinyl Sticker\n' +
        '\n' +
        'Measures approximately 2&quot; x 3&quot;\n' +
        '\n' +
        'These stickers are perfect for decorating water bottles, iPads, phone cases, laptops, notebooks, etc.!\n' +
        '\n' +
        'Please refer to the video clip for the most accurate color of the sticker.\n' +
        '\n' +
        '\n' +
        'STICKER QUALITY:\n' +
        '- Waterproof\n' +
        '- Shine finish\n' +
        '- Made with a durable vinyl material\n' +
        '- Stickers are high quality and will hold up over time with proper care. \n' +
        '\n' +
        '\n' +
        'STICKER APPLICATION:\n' +
        '- Designed for a single-use application\n' +
        '- Peel the white backing paper to use your sticker\n' +
        '\n' +
        '\n' +
        'PROCESSING + SHIPPING:\n' +
        '- Kindly allow 2-3 business days for your order to ship.\n' +
        '- Your order is mailed via USPS\n' +
        '\n' +
        '\n' +
        'DISCLAIMERS:\n' +
        '- DO NOT place water bottles with stickers in the dishwasher.\n' +
        '- Colors may vary due to monitor calibrations.',
      quantity: 2,
      num_favorers: 67,
      tags: [
        'laptop decals',
        'jegnadesigns',
        'water bottle decal',
        'holographic stickers',
        'rainbow stickers',
        'waterproof',
        'holographic decal',
        'winter stickers',
        'snow stickers',
        'goggles stickers',
        'stickers for him',
        'gifts for him',
        'outdoor stickers'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 3.5,
      img: 'https://i.etsystatic.com/12215990/r/il/0e3ba6/3626609883/il_fullxfull.3626609883_stzs.jpg',
      onSale: true,
      taxonomy_id: 11
    },
    {
      title: 'Peace Is Where The Powder Is',
      description: 'Take the mountains with you anywhere you go with this bright view of Broken Top reflected in a mask. You’ll find peace and excitement all at the same time on the mountain, so show people your passion for snow by putting this sticker on your water bottle, snow board, helmet, laptop or car. It’s water proof, scratch proof, and most importantly weather proof.',
      quantity: 14,
      num_favorers: 2,
      tags: [
        'broken top mountain',
        'snowboarding',
        'Snowboarder',
        'skiing',
        'skier',
        'mountains',
        'powder',
        'snow',
        'mountain gift',
        'mountain sticker',
        'snow board sticker',
        'ski sticker',
        'snow sports'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 4,
      img: 'https://i.etsystatic.com/28321260/r/il/353522/3801850331/il_fullxfull.3801850331_go43.jpg',
      onSale: true,
      taxonomy_id: 11
    },
    {
      title: 'Ski Utah Sticker',
      description: '3 inch waterproof, vinyl sticker\n' +
        '\n' +
        'Find this and many other destination sticker designs, visit www.iammoja.com',
      quantity: 90,
      num_favorers: 4,
      tags: [
        'stickers',
        'sticker designs',
        'Utah sticker',
        'skiing sticker',
        'ski Utah sticker',
        'sticker',
        'water bottle sticker',
        'ski sticker',
        'skiing',
        'utah',
        'snow',
        'mountain sticker'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 3.5,
      img: 'https://i.etsystatic.com/26420615/r/il/1e2e16/3247846178/il_fullxfull.3247846178_3dsq.jpg',
      onSale: true,
      taxonomy_id: 11
    },
    {
      title: 'Easter SCAVENGER Hunt for kids, Printable Indoor Easter TREASURE HUNT, Easter scavenger hunt cards clues for Kids, Easter egg treasure Hunt',
      description: 'DOWNLOAD + PRINT PDF INSTANTLY - HAPPY EASTER!!!!! This bright, colorful and adorable INDOOR EASTER TREASURE/SCAVENGER HUNT is perfect for Easter morning fun [recommended ages: younger children - ages 4-10yrs]. There are 18 UNIQUE and rhyming Clue Cards + 6 BLANK TEXT Cards if you want to write your own custom clues!!  BONUS!!--- Included are some Easter Bunny FEET tracks for added effect - and some directional CARROT signs to point the way! Leave an Easter egg treat for each child at all INDOOR stops or just at the END as an Easter Surprise! \n' +
        '______________________________________________\n' +
        '\n' +
        'INCLUDED IN THIS LISTING - ZIP FILE\n' +
        '_____________________________________________\n' +
        '\n' +
        '• 7 (SEVEN) 8.5&quot;x11&quot; PDF PRINTABLE PAGES that include: \n' +
        '• Info Card\n' +
        '• 18 Unique and adorable Easter CLUE CARDS \n' +
        '• 6 Blank Text cards - for you to customize \n' +
        '• BONUS 1 --- Pink & blue Easter Bunny FEET cut-outs \n' +
        '• BONUS 2 --- Directional CARROT arrow sign cut-outs \n' +
        '• BONUS 3 --- Final Clue!! Printable Card\n' +
        '\n' +
        '• This listing is NOT EDITABLE\n' +
        '• File Format: ZIP FILE with 7 PDF&#39;s \n' +
        '• No physical cards will be mailed to you \n' +
        '\n' +
        '_____________________________________________\n' +
        '\n' +
        'PRINTING + CUTTING\n' +
        '______________________________________________\n' +
        '\n' +
        '• We recommend these cards to be printed on heavyweight white 8.5x11&quot; cardstock on your home printer or a local professional printer.\n' +
        '• You can use a paper trimmer/cutter for professional looking results. \n' +
        '• Laminate cards to make them last longer each year.\n' +
        '• Print colors may vary slightly due to different home printers, varying ink levels & individual brightness/contrast settings on computer monitors. \n' +
        '______________________________________________\n' +
        '\n' +
        'HOW TO DOWNLOAD YOUR FILES\n' +
        '______________________________________________\n' +
        '\n' +
        '&gt;&gt;&gt; Firstly, you must use a WEB BROWSER to download your designs (NOT the ETSY APP) on your phone/tablet or computer &lt;&lt;&lt;\n' +
        '\n' +
        'DOWNLOAD - OPTION#1: [EMAIL LINK]\n' +
        '-------------------------------------------------------\n' +
        '• After the checkout process, you will receive an Email from ETSY that your payment has processed. \n' +
        '• You will receive a download link to your PDF designs - click on that link and Download on your computer + print!\n' +
        '\n' +
        '--OR--\n' +
        '\n' +
        'DOWNLOAD - OPTION#2: [YOUR ETSY ACCOUNT]\n' +
        '---------------------------------------------------------------------\n' +
        '1. Login to &#39;YOUR ACCOUNT&#39; on ETSY using a Web Browser (it&#39;s in the top-right corner of Etsy)\n' +
        '2. Click on &#39;Purchases and Reviews&#39;\n' +
        '3. You should see your Order. Click on &#39;DOWNLOAD FILES&#39; to the right of your order.\n' +
        '4. Download on your computer desktop.\n' +
        '5. Print and Enjoy!\n' +
        '\n' +
        '______________________________________________\n' +
        '\n' +
        'NEED TO KNOW\n' +
        '______________________________________________\n' +
        '\n' +
        '• You may NOT alter, edit or manipulate these designs.\n' +
        '• DO NOT SELL, RESELL, TRANSFER, SHARE or REDISTRIBUTE these designs to a third party in any way. \n' +
        '\n' +
        'Instagram: @TheSugarBakery.co \n' +
        '----\n' +
        'Thank you so much for your support of our small business ♥',
      quantity: 66,
      num_favorers: 39,
      tags: [
        'treasure hunt game',
        'scavenger hunt kids',
        'treasure hunt kids',
        'printable scavenger',
        'treasure hunt clues',
        'kids scavenger hunt',
        'scavenger clues',
        'kids treasure hunt',
        'Easter indoor hunt',
        'easter treasure hunt',
        'easter egg hunt',
        'Easter scavenger',
        'scavenger template'
      ],
      processing_min: null,
      processing_max: null,
      price: 6.24,
      img: 'https://i.etsystatic.com/16871265/r/il/61dd4b/3739010800/il_fullxfull.3739010800_o08k.jpg',
      onSale: true,
      taxonomy_id: 11
    },
    {
      title: 'Set of 10 Birthday Party Favor Bags (Item 1540A)',
      description: 'Birthday Party Favor Bags / Custom Cotton \n' +
        '\n' +
        'BAGS:\n' +
        '~ Bags are available in a variety of sizes.\n' +
        '~ Bags are sold in multiples of 10. If you need 10 bags purchase 1 set, for 20 bags purchase 2 sets, 30 bags is 3 sets, etc.\n' +
        '~ Fabric is 100% Unbleached Cotton. \n' +
        '~ Bags are a natural color and have a drawstring cord on both sides.\n' +
        '~ Bags are sewn flat. When deciding required size, realize that bags are not gussetted so allow space for fill thickness and allow space for the drawstring gathering at the top (approximately 1.5&quot; - 2&quot;).\n' +
        '~ Bag sizes are approximate. Listed sizes normally differ slightly by fractions of an inch (approximately 1/8 - 1/2&quot;).\n' +
        '~ If you are unsure that your favors will fit inside the bags I recommend that you purchase a sample before placing an order.\n' +
        '\n' +
        'SAMPLE:\n' +
        'Please follow this link if you would like to purchase a sample:\n' +
        'https://www.etsy.com/listing/592664669/favor-bag-sample?ref=shop_home_active_1\n' +
        '\n' +
        'PERSONALIZATION:\n' +
        'We would love to personalize the bags for you! If you would like to add a line or 2 of personalization below the design please provide the information on your order. If your order includes personalization we will send a proof for you to view before printing your order.',
      quantity: 98,
      num_favorers: 6,
      tags: [
        'party favor bag',
        'favor bags',
        'treat bags',
        'adult birthday',
        'adult favors',
        'adult party favors',
        'happy birthday bag',
        'general birthday',
        'custom favor bag',
        'party bags',
        'loot bags',
        'cotton favor bag',
        'fabric favor bag'
      ],
      processing_min: 5,
      processing_max: 7,
      price: 18,
      img: 'https://i.etsystatic.com/15330640/r/il/84d901/1538854367/il_fullxfull.1538854367_d9xh.jpg',
      onSale: true,
      taxonomy_id: 11
    },
    {
      title: 'Editable Easter Brunch Menu Template, Printable Easter Menu, Easter Bunny Menu Card, Neighborhood Egg Hunt Brunch Menu, Church Easter Menu',
      description: 'Editable Easter Menu Template, Printable Easter Menu, Easter Bunny Menu Card, Neighborhood Egg Hunt Brunch Menu, Church Easter Menu\n' +
        '\n' +
        'No physical prints will be mailed.\n' +
        '\n' +
        '3.5x9 inches\n' +
        'Background Color can be changed.\n' +
        'All text is editable. Artwork is not editable. \n' +
        '\n' +
        '___________________________________________\n' +
        '\n' +
        '***TRY DEMO BEFORE PURCHASING TO SEE WHAT IS EDITABLE*** THERE ARE NO REFUNDS ON DIGITAL PRODUCTS***\n' +
        '___________________________________________\n' +
        'FREE DEMO - Try it before you buy it! \n' +
        '\n' +
        'Copy and paste the URL below to demo:\n' +
        '\n' +
        'https://www.corjl.com/d/43POI\n' +
        '____________________________________________\n' +
        '\n' +
        'Edit your items at Corjl.com right after purchasing.\n' +
        '- No waiting! You’ll have access to your item right after purchasing.\n' +
        '- No need to download any software. Personalize this item right in your browser.\n' +
        '- Personalize using your computer, or make basic edits using your cell phone or tablet.\n' +
        '- Easy to use platform. Personalize, then download and print.\n' +
        '\n' +
        '__________________________________________\n' +
        '\n' +
        'Personalize in just 3 steps:\n' +
        '\n' +
        '1. After purchasing, you will receive an email from Corjl (to the email linked to your Etsy account) with a link to access and edit your item. You can also go directly to Corjl.com and enter the order info to access your purchased items.\n' +
        '2. Personalize your items. You can edit the text fields by clicking on them. You can also change the font, the size of the font or delete fields you don&#39;t need. PLEASE SAVE.\n' +
        '3. Download your design in PDF or JPEG. Print at home or have professionally printed for best results. \n' +
        '\n' +
        '• When printing at home, set your printer settings to highest quality for best results. I recommend a heavy white card stock for highest quality (110 lb+).\n' +
        '• Note that printed colors may not match exactly due to varieties in paper quality, computer monitor setting, and printer quality.\n' +
        '\n' +
        'You will have access to your template for 90days.\n' +
        '\n' +
        '___________________________________________\n' +
        '\n' +
        '***!!!  IMPORTANT - PLEASE READ !!!***\n' +
        '\n' +
        '• TEMPLATE EXPIRES after 90 days - You will need to re-purchase the template if you wish to access the template after 90 days have passed.\n' +
        '• All text fields are editable. Artwork, template size and orientation CANNOT be changed.\n' +
        '• Templates are sold as seen. You are responsible for editing the template yourself.\n' +
        '• This listing is for the editable digital file only.\n' +
        '• NO PHYSICAL ITEMS WILL BE SHIPPED.\n' +
        '• File can only be edited using Corjl.com.\n' +
        '• Due to the nature of digital files, all sales are final and non-refundable.\n' +
        '\n' +
        '___________________________________________\n' +
        '\n' +
        'To see other Easter items in my shop, click here: https://www.etsy.com/shop/AmandasPrintBoutique?ref=search_shop_redirect&search_query=easter\n' +
        '___________________________________________\n' +
        ' TERMS OF USE\n' +
        '\n' +
        'Once this listing is purchased, you are licensed to use the template for a single project or event. You can edit, save and download the template as many times as you wish for editing and proofing purposes only. \n' +
        'Your template will expire after 90 days from the date of purchase. \n' +
        'This listing is for PERSONAL USE ONLY. Files are not to be resold or shared.\n' +
        '••• PLEASE NOTE - This item is a DIGITAL FILE, no physical item will be shipped.\n' +
        '\n' +
        'Please contact me with any questions!',
      quantity: 97,
      num_favorers: 2,
      tags: [
        'Easter Brunch Party',
        'Easter Egg Hunt',
        'easter bunny menu',
        'easter menu template',
        'easter menu card',
        'easter lunch menu',
        'easter dinner menu',
        'Easter Brunch Menu',
        'bunny ears menu',
        'spring menu template',
        'editable menu'
      ],
      processing_min: null,
      processing_max: null,
      price: 6,
      img: 'https://i.etsystatic.com/23399565/r/il/36b0bc/3813938935/il_fullxfull.3813938935_ltsu.jpg',
      onSale: true,
      taxonomy_id: 11
    },
    {
      title: 'Gingerbread Printable, Printable Vintage Christmas, Digital Ephemera, Fussy Cut Gingerbread Cookies, Gingerbread House, Digital Download',
      description: '***INSTANT DOWNLOAD – There will be NO physical item shipped.***\n' +
        '\n' +
        '\n' +
        '\n' +
        '♦ Product Title: COLLAGE – Vintage Gingerbread\n' +
        '\n' +
        '\n' +
        'This listing features 1 printable collage sheet of vintage Christmas gingerbread illustrations, including both gingerbread cookies and gingerbread houses. Each of these images originated from personal collection of vintage Christmas cards and decor. These images have been extracted, edited and enhanced, then added to a blank white sheet, so that they can be easily used for a variety of craft projects. Perfect for mixed media artwork, junk journaling, art journals, scrapbooking, decoupage crafting, \n' +
        ' greeting card making/stationary crafts, and many other projects! Just print and cut them out, and use however needed for your project.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        '♦ Included with your purchase you will receive:\n' +
        '\n' +
        '1 page\n' +
        'File Format: JPG, PNG\n' +
        'Paper Size: 11 x 8.5&quot;\n' +
        'Image Quality: High Resolution 300 dpi\n' +
        'Delivery: INSTANT DOWNLOAD – NO physical products will be shipped to you.\n' +
        'These are DIGITAL files only.\n' +
        'Watermarks will not appear on your file after purchase.\n' +
        'You can print these images as many times as you need.\n' +
        '\n' +
        'If you have any questions or issues with your files, please message me!\n' +
        '\n' +
        '\n' +
        '\n' +
        '♦HOW THIS WORKS:\n' +
        '\n' +
        '1. Purchase your Item(s).\n' +
        'Add the item to the cart and checkout.\n' +
        '\n' +
        '2. Download the file(s)\n' +
        'Once payment is complete, you can access the file(s) on your Etsy &quot;Purchases & Reviews&quot; page, and download instantly!\n' +
        '*Download the file(s) on a computer. It will not work on mobile devices.\n' +
        '\n' +
        '3. Print and use the images for your projects.\n' +
        'Due to differences in calibrations of screens and printers, colors may vary from the screen to actual printed items. Color and print quality depend on the type of printer and paper used.\n' +
        '\n' +
        '\n' +
        '\n' +
        'RETURNS:\n' +
        'Due to the nature of the product, I do not accept returns, exchanges, or cancellations.\n' +
        'If you have any issues with your files, please message me!\n' +
        '\n' +
        '\n' +
        '\n' +
        '♦ TERMS OF USE\n' +
        '\n' +
        'Personal Use: You MAY use these graphics for any personal projects.\n' +
        '\n' +
        'Commercial Use: You MAY use this image to sell your own finished products - however you MAY NOT resell these images in their current form as is. They MUST be incorporated and altered into a new design/product if being sold commercially.',
      quantity: 971,
      num_favorers: 57,
      tags: [
        'christmas collage',
        'vintage christmas',
        'digital christmas',
        'christmas ephemera',
        'digital ephemera',
        'christmas journal',
        'printable christmas',
        'christmas images',
        'printable vintage',
        'fussy cut',
        'gingerbread',
        'gingerbread house',
        'digital download'
      ],
      processing_min: null,
      processing_max: null,
      price: 2,
      img: 'https://i.etsystatic.com/13824529/r/il/9d6dd1/3510720378/il_fullxfull.3510720378_qjfq.jpg',
      onSale: true,
      taxonomy_id: 11
    },
    {
      title: 'A4 A5 DL NCR Pad Receipt Book Order Form Duplicate Invoice Carbonless Glued Pads 50 Sets / Full Colour Top Copy / B&W Bottom Copy',
      description: 'NCR INVOICE PADS / RECEIPT BOOK / ORDER FORM / DUPLICATE\n' +
        '50 sets per pad\n' +
        'Glued at top with cardboard backing\n' +
        'White top sheet with colour print\n' +
        'Pink or Yellow bottom sheet with black and white print\n' +
        '\n' +
        '\n' +
        '****** Artwork Setup ******\n' +
        'Size: A4, A5 or DL\n' +
        'Resolution: 300 dpi minimum\n' +
        'Format: PDF or JPEG\n' +
        'Colour: CMYK (RGB/Pantones will be converted)\n' +
        'Fonts: Outlined or Embedded\n' +
        '\n' +
        '***IMPORTANT***\n' +
        '\n' +
        'Etsy estimated delivery dates does not take into account the artwork creation and proofing process. \n' +
        '\n' +
        'Artwork requests can take up to 48 hours to be processed.\n' +
        'Please read Terms & Conditions below.',
      quantity: 144,
      num_favorers: 41,
      tags: [
        'invoice pad',
        'receipt book',
        'order form',
        'A5 pad',
        'A5 order book',
        'small business',
        'ncr',
        'carbonless',
        'duplicate pad',
        'personalised invoice',
        'custom receipt',
        'ncr book',
        'VAT receipt'
      ],
      processing_min: 5,
      processing_max: 7,
      price: 11.99,
      img: 'https://i.etsystatic.com/16950830/r/il/af4a99/3513510576/il_fullxfull.3513510576_4yfl.jpg',
      onSale: true,
      taxonomy_id: 11
    },
    {
      title: 'SALE Sunny Days in Pixieland card',
      description: 'This &quot;Sunny Days in Pixieland&quot; card is designed to match the popular Sunny days wrapping paper.  It is blank inside for your own message. The background colour is a soft yellow (with just a touch of green to make it less sugary). The print quality and colours are beautiful.\r\n' +
        '\r\n' +
        '**Please note: this listing is for the Sunny Days card and envelope only See separate listing for the wrapping paper.**\r\n' +
        '\r\n' +
        'folded size: approx 148 x 104mm (A6)\r\n' +
        '\r\n' +
        'All cards are printed on high quality ivory 100% recycled card and are supplied individually bagged in polyprop bag with coloured envelope. Colour of envelope may vary but will always compliment your card beautifully and is 100% recycled paper.\r\n' +
        '\r\n' +
        'Note on shipping charges:\r\n' +
        '\r\n' +
        'If your combined postage ends up costing less than you have paid, I will send a refund through Paypal so look out for it. This only applies to overpayments of £1 and above.\r\n' +
        '\r\n' +
        'Unfortunately this does not include items that are sent in a tube as they have to be shipped alone.',
      quantity: 20,
      num_favorers: 146,
      tags: [
        'children',       'fairy',
        'nursery',        'pixie',
        'elf',            'illustration',
        'vintage',        'announcement',
        'greetings card', 'yellow',
        'sun',            'flowers',
        'toadstool'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 1.2,
      img: 'https://i.etsystatic.com/5164403/r/il/69230f/521519002/il_fullxfull.521519002_eb1d.jpg',
      onSale: true,
      taxonomy_id: 11
    },
    {
      title: 'Summer Lemon Micro Planner Sticker Kit for standard sized vertical planners, bujo, tn',
      description: 'This small summer themed kit featuring contains 2 sheets for your planning needs. \n' +
        '\n' +
        'The kit is designed to fit the measurements of a standart sized vertical planner, but can be used in other planners as well with a little tweaking on your part.\n' +
        'All stickers are kiss-cut and ready for use.\n' +
        '\n' +
        'The sheets include: \n' +
        '\n' +
        'page 1 \n' +
        '- 2 full boxes 38 x 48mm each \n' +
        '- 4 To do headers and 3 empty headers\n' +
        '- 4 small checklists\n' +
        '- 6 decorative hexagon stickers\n' +
        '\n' +
        'page 2\n' +
        '- 1 full box 38 x 48mm\n' +
        '- 2 empty labels\n' +
        '- 4 boxes in 2 sizes\n' +
        '- 3 doodle icons\n' +
        '- 3 script stickers\n' +
        '\n' +
        'Peel & Stick:\n' +
        'The sheet is kiss cut and ready to use, no need for scissors or exacto knives to cut them yourself.\n' +
        '\n' +
        'Stickers are printed on matte, removable paper\n' +
        '\n' +
        '\n' +
        '*****\n' +
        '\n' +
        'Please keep in mind that colors might differ slightly due to screen settings depending on the device from which you are viewing.\n' +
        '\n' +
        '\n' +
        '****\n' +
        '\n' +
        'I ship all orders safely packed into protective sleeves in heavy cardstock mailers.\n' +
        '\n' +
        'I ship from germany\n' +
        '- national orders usually arrive within 1-3 business days\n' +
        '- international orders can take from 2-4 weeks\n' +
        '\n' +
        'Please keep this in mind when ordering themed/holiday items\n' +
        '\n' +
        '********\n' +
        '\n' +
        'Sign up for my newsletter and join the VIP club for exclusive 20% off discount for your order. ♥\n' +
        'http://eepurl.com/gKnH3D\n' +
        '\n' +
        'Please feel free to follow me for updates and new releases on\n' +
        'Instagram: lavenderandteal_de',
      quantity: 5,
      num_favorers: 10,
      tags: [
        'planner stickers',
        'stickers',
        'vertical planner',
        'sticker kit',
        'planning stickers',
        'floral',
        'nature',
        'decorative',
        'micro kit',
        'summer',
        'pastel',
        'lemon',
        'citrus'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 5.2,
      img: 'https://i.etsystatic.com/17212878/r/il/4a85ea/2891320826/il_fullxfull.2891320826_py0s.jpg',
      onSale: true,
      taxonomy_id: 11
    },
    {
      title: 'Northern Summer Micro Planner Sticker Kit for standard sized vertical planners, bujo, tn',
      description: 'This small northern summer themed kit featuring contains 2 sheets for your planning needs. \n' +
        '\n' +
        'The kit is designed to fit the measurements of a standart sized vertical planner, but can be used in other planners as well with a little tweaking on your part.\n' +
        'All stickers are kiss-cut and ready for use.\n' +
        '\n' +
        'The sheets include: \n' +
        '\n' +
        'page 1 \n' +
        '- 2 full boxes 38 x 48mm each \n' +
        '- 4 To do headers and 3 empty headers\n' +
        '- 4 small checklists\n' +
        '- 6 decorative hexagon stickers\n' +
        '\n' +
        'page 2\n' +
        '- 1 full box 38 x 48mm\n' +
        '- 2 empty labels\n' +
        '- 4 boxes in 2 sizes\n' +
        '- 3 doodle icons\n' +
        '- 3 script stickers\n' +
        '\n' +
        'Peel & Stick:\n' +
        'The sheet is kiss cut and ready to use, no need for scissors or exacto knives to cut them yourself.\n' +
        '\n' +
        'Stickers are printed on matte, removable paper\n' +
        '\n' +
        '\n' +
        '*****\n' +
        '\n' +
        'Please keep in mind that colors might differ slightly due to screen settings depending on the device from which you are viewing.\n' +
        '\n' +
        '\n' +
        '****\n' +
        '\n' +
        'I ship all orders safely packed into protective sleeves in heavy cardstock mailers.\n' +
        '\n' +
        'I ship from germany\n' +
        '- national orders usually arrive within 1-3 business days\n' +
        '- international orders can take from 2-4 weeks\n' +
        '\n' +
        'Please keep this in mind when ordering themed/holiday items\n' +
        '\n' +
        '********\n' +
        '\n' +
        'Sign up for my newsletter and join the VIP club for exclusive 20% off discount for your order. ♥\n' +
        'http://eepurl.com/gKnH3D\n' +
        '\n' +
        'Please feel free to follow me for updates and new releases on\n' +
        'Instagram: lavenderandteal_de\n' +
        'or Facebook: https://www.facebook.com/lavenderandtealde/',
      quantity: 2,
      num_favorers: 6,
      tags: [
        'planner stickers',
        'stickers',
        'vertical planner',
        'sticker kit',
        'planning stickers',
        'nature',
        'decorative',
        'micro kit',
        'summer',
        'beach',
        'vacation',
        'northern',
        'ocean'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 5.2,
      img: 'https://i.etsystatic.com/17212878/r/il/3f467e/3046849602/il_fullxfull.3046849602_qxg3.jpg',
      onSale: true,
      taxonomy_id: 11
    },
    {
      title: 'Personalized Dog Bandana - Triangle Dog Bandana - Custom Dog Bandana - Dog Mom Gift- Dog Dad Gift - Personalized Gift for Dog - Dog Scarf',
      description: 'Listing is for one Customized triangle dog bandana in colors and font of your choice ♥\n' +
        '\n' +
        'PLEASE ensure you enter what font choice you would like in the personalization box. If no font choice is specified on your order, we will choose what font we think looks best.\n' +
        '\n' +
        '***If you would like to personalize it a bit more or would like any changes/modifications, please send us a message & we&#39;d be happy to help!***\n' +
        '\n' +
        'CARE INSTRUCTIONS\n' +
        'Wash in cold water with mild detergent. Do not dry clean. Hang dry or lay flat to dry for best results. Do not bleach, dry clean, or iron directly onto the design. \n' +
        '\n' +
        'As each bandana is made to order and the custom nature of many of the designs, we do not offer returns or exchanges. Please review the size chart to ensure no issues with selecting the correct size.\n' +
        '\n' +
        'FOLLOW US on social media for sales and giveaways!\n' +
        '---Facebook---\n' +
        'https://www.facebook.com/JayeApparel\n' +
        '---Instagram---\n' +
        'https://www.instagram.com/JayeApparel\n' +
        '---Pinterest---\n' +
        'https://www.pinterest.com/JayeApparel\n' +
        '\n' +
        'Thank you for shopping Jaye Apparel! :)',
      quantity: 798,
      num_favorers: 361,
      tags: [
        'dog bandana',
        'custom dog bandana',
        'dog clothes',
        'dog shirt',
        'dog gift',
        'dog mom gift',
        'dog mom',
        'dog dad gift',
        'dog dad',
        'personalized bandana',
        'customized bandana',
        'personalized gift',
        'gift for her'
      ],
      processing_min: 2,
      processing_max: 3,
      price: 13.95,
      img: 'https://i.etsystatic.com/19572298/r/il/7ae064/3723453935/il_fullxfull.3723453935_6law.jpg',
      onSale: true,
      taxonomy_id: 12
    },
    {
      title: 'Dog Tag, Name Tag, Pet ID, Dog Name Disc, Engraved Stainless Steel',
      description: 'Dog tag on engraved stainless steel disc. \n' +
        '\n' +
        'Front will read: I’m Microchipped (if you would like it without this wording please let us know in the personalisation box). Please leave contact details for the back either in the personalisation box provided or via the notes to seller box at checkout.\n' +
        '\n' +
        'Please note that The Control of Dogs Order 1992 mandates that the tag should include your name and address (including postcode). Phone number is not mandatory but is suggested.\n' +
        '\n' +
        'Depending on the sizing you order, will depend on how much wording we can fit on to the tag. For optimum results and to ensure the wording is in a decent readable size, we would suggest the following:\n' +
        '\n' +
        'Contact Name \n' +
        'Contact Number\n' +
        '123 Address Rd\n' +
        'Postcode\n' +
        '\n' +
        'Or \n' +
        '\n' +
        'Contact Name\n' +
        'Contact Number\n' +
        '123 Address Rd\n' +
        'Postcode\n' +
        'Chipped\n' +
        '\n' +
        'Ideally 3-5 lines (10-15 characters on each line, bear in mind the middle of the disc being the widest point).\n' +
        '\n' +
        'We always do our best to fit all the information you would like on the back but may tweak and shorten the wording if necessary. If you would rather check certain wording would fit first, please do pop us a message.\n' +
        '\n' +
        'Colour choices: Silver, Gold, Rose. Disc measures 25 or 30mm depending on your choice.\n' +
        '\n' +
        'Comes with a couple of split ring sizes for you to choose from and you can also upgrade (via a shipping upgrade at checkout) to include a swivel lobster clasp. We would advise this when attaching to thick dog collars such as those with the D ring as the split rings alone can become bent out of shape when trying to curve around the metal ring of the collar.\n' +
        '\n' +
        'There is a wide selection of dog breeds but if you don’t see yours there please do pop us a message and we can check and see if we have it for you.',
      quantity: 694,
      num_favorers: 687,
      tags: [
        'Dog Name',
        'Dog Name Disc',
        'Engraved Dog Tag',
        'Engraved Pet Tag',
        'Stainless Dog Tag',
        'Personalized Dog Tag',
        'Personalised Dog Tag',
        'Pet Tags',
        'Pet ID Tags',
        'Custom Dog Tag',
        'Dog ID Tag',
        'Pet ID Tag',
        'Dog Tag'
      ],
      processing_min: 2,
      processing_max: 3,
      price: 8.95,
      img: 'https://i.etsystatic.com/13142364/r/il/63e948/3004695414/il_fullxfull.3004695414_gtu5.jpg',
      onSale: true,
      taxonomy_id: 12
    },
    {
      title: 'Custom Engraved Pet ID Tags for Dogs and Cats by Providence Engraving',
      description: 'Premium Anodized Aluminum Pet ID Tags by Providence Engraving.\n' +
        '\n' +
        'Precision Laser Engraving - We offer up to 8 lines of laser engraving with each order (Max. 22 Characters Per Line)\n' +
        '\n' +
        'Manufactured in the United States - our tags are made from domestically sourced, aircraft-grade aluminum to ensure that they exceed our standard for Quality, Durability, and Pet Safety\n' +
        '\n' +
        'Expertly Anodized - the hard and bright anodized coating on Providence Engraving&#39;s pet tags exceed industry standards for thickness and durability\n' +
        '\n' +
        'Sizing Options: \n' +
        '(Size small is recommended for toy dog breeds and all cat breeds)\n' +
        '\n' +
        'Small: Approximately 1&quot;\n' +
        'Large: Approximately 1.5&quot;\n' +
        '\n' +
        'Why drive to the pet store when you can have custom engraved, premium quality, pet ID tags delivered to your door for less than half the price? Providence Engraving&#39;s Anodized Aluminum Pet ID Tags are a perfect ID solution to ensure that your furry friend is returned home safely. They are available in 9 vibrant colors, 7 Shapes, and 2 sizes for an ideal fit that will coordinate with a variety of collar colors and styles.',
      quantity: 964,
      num_favorers: 5848,
      tags: [
        'Pet Tags',
        'Pet Tag for Dogs',
        'Cat Tag',
        'dog tags',
        'dog tags for dogs',
        'custom dog tags',
        'dog name tags',
        'dog id tags',
        'personalized dog tag',
        'engraved dog tags',
        'custom cat tag',
        'cat collar tag',
        'stethoscope id tag'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 4.49,
      img: 'https://i.etsystatic.com/10101651/r/il/dc4d00/974626898/il_fullxfull.974626898_cflm.jpg',
      onSale: true,
      taxonomy_id: 12
    },
    {
      title: 'Bunny snug bed',
      description: 'Super cute and comfy bunny bed is a must for our bunnies!\n' +
        'These bunny beds are made to order with your choice of fabric, making it easy to match your style and aesthetic,\n' +
        'Made with unique patterns and colors or neutrals!\n' +
        '\n' +
        'Please specify what size your bunny is when purchasing this product, \n' +
        'Ships from NC,\n' +
        'Our bunnies love their snug beds, they are usually flopped or loafed on their beds; ❤️\n' +
        'Quilted/padded inside to ensure safe and easy wash without bunching up the insides.\n' +
        'Wash-machine and dryer safe \n' +
        '\n' +
        'Large: 14x20\n' +
        'Medium: 14x16\n' +
        'Small: 14x12\n' +
        'Extra Large: 16x25\n' +
        '\n' +
        'Large: larger size breed (Rex, New Zealand, Holland lop, etc.)\n' +
        'Medium: medium size breed (Dutch, mini lop, lion head etc.)\n' +
        'Small: smaller size breed (netherland dwarf, hotot, dwarf sizes, etc.)\n' +
        'Extra small: guinea pigs, baby bunnies\n' +
        '\n' +
        '+ just consider the size of your bun when purchasing + \n' +
        '\n' +
        '\n' +
        'Any questions? Just send me a message on Etsy!\n' +
        '\n' +
        'If ordered as a gift... we will NOT include notes with profanity.\n' +
        '\n' +
        'Every purchase is packed with love and detail, so if shipped as a gift it is beautifully packaged',
      quantity: 14,
      num_favorers: 2526,
      tags: [
        'pet supplies',
        'pet',
        'bunny toy',
        'rabbit toy',
        'bunny toys',
        'bunny accessories',
        'snug bed for bunnies',
        'rabbit bed',
        'bunny mat',
        'bunny bed',
        'animal',
        'bunny supplies',
        'bunny'
      ],
      processing_min: 5,
      processing_max: 10,
      price: 19,
      img: 'https://i.etsystatic.com/23971512/r/il/55eba2/3724827336/il_fullxfull.3724827336_ln02.jpg',
      onSale: true,
      taxonomy_id: 12
    },
    {
      title: 'Sugar Glider Puzzle Bracelets Reset Rings Sugar Bear toy, Pocket Pet toy, Bird toy, small animal toy, exotic animal toy',
      description: 'With this order you will get 5 of these fun reset bracelets! You can clip them anywhere in the cage and let your gliders figure out how to detach them. They will have a blast tail carrying these rings everywhere! In the morning you can put them in a new place for another night of fun!',
      quantity: 236,
      num_favorers: 249,
      tags: [
        'childs bracelet',
        'bangle bracelet',
        'kids bracelet',
        'bracelet',
        'reset rings',
        'rings',
        'tail carrying',
        'enrichment',
        'sugar glider toy',
        'animal toy',
        'reset toy',
        'thelinenroses',
        'lucky you gliders'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 4.95,
      img: 'https://i.etsystatic.com/9900412/r/il/c2be96/3194467809/il_fullxfull.3194467809_b4yn.jpg',
      onSale: true,
      taxonomy_id: 12
    },
    {
      title: 'Super soft sugar glider blankets / bonding blankets / nesting material for guinea pigs, rats, hedgehogs, rodents, birds, small animals',
      description: 'These incredibly soft blankets are perfect for your glider to snuggle up and nest in. Great for putting inside hammocks or bonding pouches to make your pet feel safe, warm, and comfortable. Perfect size for other small animals like rats, hedgehog, guinea pigs, and more!\n' +
        'These blankets are also ideal to be used as a bonding blanket for your pet to get used to your scent and feel more comfortable. \n' +
        '\n' +
        'Measures Approx 11&quot; x 11&quot;.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'Please note that since this is a handmade item, there may be small imperfections.\n' +
        '\n' +
        '\n' +
        '\n' +
        '• Please keep in mind that since everyone&#39;s monitor settings are different, some colors you see can vary slightly.\n' +
        '\n' +
        '• All items come from a smoke free home.\n' +
        '\n' +
        '• Wash with cold water on delicate cycle and air dry.\n' +
        '\n' +
        '• Items shipped within 1-2 business days with USPS.\n' +
        '\n' +
        'Thank you for stopping by!',
      quantity: 100,
      num_favorers: 680,
      tags: [
        'guinea pig',
        'sugar glider bonding',
        'sugar glider cuddle',
        'sugar glider hammock',
        'sugar glider bed',
        'small animal bed',
        'snuggle sack',
        'small animal',
        'sugar gliders',
        'bond pouch',
        'bonding pouch',
        'sugar glider',
        'rat bonding bed'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 3,
      img: 'https://i.etsystatic.com/13182650/r/il/d2dcee/2122403737/il_fullxfull.2122403737_ja09.jpg',
      onSale: true,
      taxonomy_id: 12
    },
    {
      title: 'Balsa Chew Fling Toys!',
      description: 'Organic Juice-infused balsa wood with sisal rope and seagrass tendrils make for a tasty toy that will last through many chew sessions!\n' +
        '\n' +
        'Please consult with your pet&#39;s veterinarian before introducing new items to your pet.',
      quantity: 11,
      num_favorers: 5,
      tags: [
        'Rabbit chew toy',
        'Balsa toy',
        'Balsa chew toy',
        'Rabbit treat',
        'Rabbit fling toy',
        'Guinea pig chew toy',
        'Guinea pig treat'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 7,
      img: 'https://i.etsystatic.com/14663049/r/il/6dc0e0/3787687213/il_fullxfull.3787687213_835v.jpg',
      onSale: true,
      taxonomy_id: 12
    },
    {
      title: 'fall sunflower dog bandana tie on over the collar small medium large extra large',
      description: 'This is a gorgeous sunflower bandana! Whether you love sunflowers in the fall season or in the summer you will lOVE this bandana! \n' +
        '\n' +
        'Pamper your dog with a unique, well made and easy to wear bandana. The bandana easily ties onto your pups neck. This bandana is made with quality fabric and sewn with care. Pick your size, roll the bandana, and tie the corners!\n' +
        '\n' +
        'Comes as two options:\n' +
        'TIE ON or OVER THE COLLAR\n' +
        '\n' +
        '\n' +
        '\n' +
        'Sizing: \n' +
        'XS- neck size up to 10” \n' +
        '\n' +
        'Small- neck size up to 12”\n' +
        '\n' +
        'Medium- neck size up to 16”\n' +
        '\n' +
        'Large- neck size up to 19”\n' +
        '\n' +
        'XL- neck size 24”\n' +
        '\n' +
        '**If unsure on sizing, it is best to order up a size. \n' +
        '\n' +
        'Materials: 100% cotton fabric\n' +
        '\n' +
        'Machine wash on cold and tumble dry on low. \n' +
        '\n' +
        'Made in Michigan!',
      quantity: 10,
      num_favorers: 31,
      tags: [
        'sunflower dog bandan',
        'sunflower bandana',
        'fall sunflower',
        'summer sunflower',
        'summer',
        'fall',
        'small',
        'medium',
        'large',
        'extra large',
        'dog bandana',
        'tie on bandana',
        'over the collar'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 10,
      img: 'https://i.etsystatic.com/14317383/r/il/53364b/1645913742/il_fullxfull.1645913742_m5cs.jpg',
      onSale: true,
      taxonomy_id: 12
    },
    {
      title: 'Personalised dog bandana, dog neck wear, hand made dog bandanas, funny dog bandanas,  personalised bandana.',
      description: 'Hand made dog bandanas. Can be personalised how you like. Many colours available. All made to order so sizes can be custom. Press stud fastening. Text colours can be changed and can be anything from just your pets name, training, give me space, No dog&#39;s or funny quotes as in the pictures or your business logo.',
      quantity: 19,
      num_favorers: 93,
      tags: [
        'dogs',
        'pets theme',
        'pawprint',
        'dog lover',
        'dog bandana',
        'dog accessories',
        'personalised bandana',
        'training bandana',
        'warning bandana',
        'bandan uk',
        'funny bandanas',
        'personalised pet',
        'dog bandanas'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 4.5,
      img: 'https://i.etsystatic.com/28374017/r/il/4983f9/3134808500/il_fullxfull.3134808500_l3x4.jpg',
      onSale: true,
      taxonomy_id: 12
    },
    {
      title: 'Wall Art Printable, Digital Download Art, Wall Art Decor, Home Decor Wall Art, INSTANT DOWNLOAD',
      description: 'Fantastic whale flying in the moonlight Wall Art, Wall Art Printable, Digital Download Art, Wall Art Decor, Home Decor Wall Art, INSTANT DOWNLOAD \n' +
        '\n' +
        'You will receive high quality digital file that will be instantly available for download in JPG and PDF format, once payment is received.\n' +
        'Should you need an other sizes please contact me.\n' +
        '\n' +
        'There is no mat or frame.\n' +
        '\n' +
        'You will not receive a physical print in the mail when purchasing this listing- but when you receive the file to save on your computer, you can print it out as many times as you’d like! Make sure to purchase a frame that fits the size of your print.\n' +
        '\n' +
        '*For personal use only\n' +
        '*Not permitted to resell\n' +
        '\n' +
        'Please feel free to contact me with any questions about your order!',
      quantity: 10,
      num_favorers: 7,
      tags: [
        'Wallart',
        'Digital Ptints',
        'Moon printable',
        'Space Wall Art',
        'Art',
        'Moonlight Print',
        'Wall Decor',
        'Whale Printable',
        'White Whale Print',
        'Принты',
        'Gift',
        'Funny Home Art',
        'Funny Gift'
      ],
      processing_min: null,
      processing_max: null,
      price: 6,
      img: 'https://i.etsystatic.com/24595940/r/il/cb1df1/2461588456/il_fullxfull.2461588456_mz7y.jpg',
      onSale: true,
      taxonomy_id: 12
    },
    {
      title: 'Golden Retriever on Board - Car Window Sticker - Guide Dog Sign Decal -V05',
      description: 'GOLDEN RETRIEVER\n' +
        'High Detail Car Window Sticker\n' +
        '\n' +
        'Size : 185 x 100mm\n' +
        '\n' +
        'Show your love for your cherished dog, by letting everyone else know!\n' +
        '  - Or, a fantastic, great value gift for a friend! many other breeds available\n' +
        '\n' +
        'Available as either:\n' +
        ' - REVERSE printed, allowing for application to the inside of the window, protecting it from dirt.\n' +
        ' - EXTERNAL printed, for application to the outside of the window, in case of heavy tint windows (or bodywork application).\n' +
        '\n' +
        '&gt;  White Graphic embedded with a panel of clear vinyl\n' +
        '\n' +
        '&gt;  All orders shipped within 48-hrs of payment clearance\n' +
        '\n' +
        '&gt;  All orders sent safely packaged within a rigid-board mailer\n' +
        '\n' +
        '&gt;  Application instructions supplied\n' +
        '\n' +
        '&gt;  Ideal size ensures rearward vision is not impaired\n' +
        '\n' +
        '\n' +
        'Have a question? Please feel free to contact me.\n' +
        'ask@stickerinternational.com\n' +
        '\n' +
        'CUSTOM DESIGNS possible.\n' +
        '\n' +
        'Thank you for your interest in my items!',
      quantity: 966,
      num_favorers: 37,
      tags: [
        'Car Window Sticker',
        'Car Decal',
        'Window Decal',
        'Dog on Board',
        'Dog Sign',
        'Decal',
        'Vinyl Decal',
        'Car Sticker',
        'Bumper Sticker',
        'Golden Retriever',
        'Golden Retrievers',
        'Guide dog sign',
        'guide dog decal'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 2.99,
      img: 'https://i.etsystatic.com/14242029/r/il/623933/1125380306/il_fullxfull.1125380306_by3t.jpg',
      onSale: true,
      taxonomy_id: 12
    },
    {
      title: 'Custom Pet Portrait, custom dog portrait , Puppy portrait, watercolor portrait, portrait from Photo, pet gift, dog&#39;s mom ,Puppy gift',
      description: 'PLEASE !! DON&quot;T Leave a bad review as soon as you got an E-mail from Etsy to get your Download with different portrait (My Listing Portrait)\n' +
        ' It&#39;s Etsy&#39;s Rules for all digital products  ..  i have to upload a digital file for instant download but don&#39;t worry i sell custom portraits so you&#39;ll get your custom order not the samples which automatically downloaded to your PC ..So don&#39;t worry i&#39;ll finish the portraits shortly Hope you like them 🌹🌹\n' +
        '\n' +
        'Welcome to Pittura Portraits 🌹 My name is Nora I&#39;m the owner and Artist of Pittura portraits , I&#39;m so glad to turn your wonderful moments and the pictures of  your best Fur friends into amazing, artistic  portraits \n' +
        '\n' +
        'How does it work ? \n' +
        'It&#39;s so easy Just send me a message attached with all pictures you want to pick from,  Then i&#39;ll take all your notes or requirements about the portraits ..In just 1-3  days i&#39;ll send you the drafts in case you have any notes or edits ,After you approve the design i&#39;ll send the full quality portraits to your email ..you can print them at any local print shop or by Online Printing website such as : Snapfish , CanvasHQ, Shutterfly,Canvas Discount,CanvasPop, ElephantStock, CanvasDiscount, iCanvas\n' +
        'They  could  do this service PERFECTLY in quality and shipping service as well and i&#39;ll be with you for any help with this part 🌹\n' +
        '\n' +
        '🔴🔴 Please Note ::::\n' +
        'Most people send a mobile photo or Instagram /Facebook pictures, so you don&#39;t have to send a professional pictures or white background&#39;s ones \n' +
        '\n' +
        'You Will Receive 6 or more additional portraits with different colorways\n' +
        '\n' +
        'You Will Receive High Resolution JPEG files format \n' +
        'For Physical Art prints Please Contact via Etsy to manage a physical portrait\n' +
        '\n' +
        '\n' +
        '🔴🔴🔴 This is Digital item no product will be shipped \n' +
        'No Frame Included\n' +
        'No Print will shipped \n' +
        ' \n' +
        '🔴🔴🔴 Important Note:::The Portraits of Celebrities on Snapshots are not for sale or Commercial Use , i just painted them to apply The Portrait styles as Examples\n' +
        'Custom Pet Portrait, custom cat portrait , Custom kitten portrait, watercolor portrait, portrait from Photo, pet gift, cat&#39;s mom ,Kitten gift',
      quantity: 291,
      num_favorers: 9,
      tags: [
        'Custom Pet Portrait',
        'watercolor portrait',
        'portrait from Photo',
        'pet gift',
        'Low price gifts',
        'pet loss',
        'pet gifts',
        'pets',
        'custom dog portrait',
        'Puppy portrait',
        "Dog's mom",
        'Puppy gift',
        'Dog gift'
      ],
      processing_min: null,
      processing_max: null,
      price: 15,
      img: 'https://i.etsystatic.com/13176242/r/il/1ea273/3322523874/il_fullxfull.3322523874_r4fk.jpg',
      onSale: true,
      taxonomy_id: 12
    },
    {
      title: 'LunaChild Dogs Cuddle Cave Dog Bed Sleeping Bag Cuddly Bag Goldendoodle 2 Motifs to Choose Name Embroidered S M L XL Desired Name',
      description: 'Gift for your dog? Or a dear dog owner? Soft Patchwork - Snuggle Bag dog cave embroidered with your desired name and dog breed. The cuddly bag is lovingly handmade. In summer to lie on it, in winter to cuddle in... Size S = approx. 45 cm x 63 cm, consisting of embroidery picture, desired name and 58 boxes. Size M = approx. 63 cm x 81 cm consisting of embroidery picture, desired name and 114 boxes. Size L = approx. 81 cm x 99 cm consisting of embroidery picture, desired name and 186 boxes and size XL = approx. 99 cm x 117 cm consisting of embroidery picture desired name and 274 boxes. It can be selected the size, the color combination of the cuddly cave, color of the lining cotton teddy plush, the desired name and the yarn color for the desired name, whether you want to embroider a heart or rather a paw and whether this should be in the desired yarn color for the name or in red. The material is a soft Alcantara suede imitation fabric microfiber. Lined, the cuddly bag is completely double, with imitation fur and cotton - teddy plush. Washable at 30 degrees in a gentle cycle. not suitable dryer not ironing The delivery time is 1 - 2 weeks depending on the order situation. Personalized goods are excluded from exchange! I can embroider about 250 dog pictures ( breeds ). If you are interested, simply ask if your dog breed is not yet represented. The pictures with the Border Collie come from a product tester https://prince-buddy.jimdo.com/lunachild-produkttest/\n' +
        '\n' +
        'Color suede Imitation basic color cream, beige, light gray, gray, light brown on this color the dog motif is embroidered.\n' +
        '\n' +
        'Combi color suede imitation cream, beige, light gray, light brown, pink, jeans blue, blue, orange, red, green, black, plaume, purple, turquoise, dark brown on this color the name is embroidered.\n' +
        '\n' +
        'Colours Cotton Teddy plush white, cream, camel, light brown, taupe, salmon, old pink, pink, mint, blue, light grey, dark grey, dark brown\n' +
        '\n' +
        'I need the following information for the order:\n' +
        '\n' +
        'Name of the dog, embroidery color for the name, heart or paw,\n' +
        'Strap color on this color the dog motif is embroidered, Combi color on this color the name is embroidered\n' +
        '\n' +
        'Example of order main image:\n' +
        '\n' +
        'beige - pink name Gina - in old gold, heart - old gold, plush camel',
      quantity: 5,
      num_favorers: 0,
      tags: [
        'dog',          'canine',
        'Personalized', 'Name',
        'Desired name', 'Gift',
        'Unique',       'Puppies',
        'Dog bed',      'Cuddly cave',
        'Cuddly sack',  'Dog baskets',
        'Dog basket'
      ],
      processing_min: 10,
      processing_max: 10,
      price: 69.95,
      img: 'https://i.etsystatic.com/30318319/r/il/65b9c6/3312577075/il_fullxfull.3312577075_hzg1.jpg',
      onSale: true,
      taxonomy_id: 12
    },
    {
      title: 'Personalised Digital Pet Drawing, Personalised Pet Illustration, Custom Drawn Prints, Custom Drawing Print, Bespoke Artwork, A4, A3',
      description: 'Custom Drawn Bespoke Illustrations - Made to Order. \n' +
        '\n' +
        '1. Order through Etsy. \n' +
        '2. Choose what size print you would prefer. \n' +
        '3. Upload your photo through Etsy. \n' +
        '4. Let us know if you have any specific requirements (text can be added). \n' +
        '5. Sit back and relax! \n' +
        '\n' +
        'When uploading your photo, a clear full length photo is best. \n' +
        '\n' +
        'Please allow 1 x week for your order to be processed - drop us a message if you require delivery for a specific date. \n' +
        '\n' +
        'Please ensure to select whether you would like a digital print or physical print before checkout. \n' +
        '\n' +
        'Physical prints are unframed. \n' +
        '\n' +
        'A3:\n' +
        '297 x 420 mm\n' +
        '11.7 x 16.5 inches\n' +
        '\n' +
        'A4:\n' +
        '210 x 297 mm\n' +
        '8.3 x 11.7 inches\n' +
        '\n' +
        'A5:\n' +
        '148.5 x 210 mm\n' +
        '5.8 x 8.3 inches',
      quantity: 999,
      num_favorers: 0,
      tags: [],
      processing_min: 5,
      processing_max: 10,
      price: 45,
      img: 'https://i.etsystatic.com/17874952/r/il/e3c22b/3059187523/il_fullxfull.3059187523_liau.jpg',
      onSale: true,
      taxonomy_id: 12
    },
    {
      title: 'Custom Horse  portrait from photo, horse painting, art commission, pet loss , dog portrait custom from photo, personalized cat portrait.',
      description: 'This custom pet Color pencil  portrait makes the perfect personalized gift for any pet lovers. All pieces are painted by hand on paper.\n' +
        '\n' +
        'HOW TO ORDER A CUSTOM PORTRAIT\n' +
        '1. Choose pets quantity\n' +
        '2. Click &quot;Add to Cart&quot;\n' +
        '3. Pay via PayPal\n' +
        '4. Send me the photo to use via Etsy conversations by simply sending me a message and clicking on &quot;Attach an image&quot; in the chatbox. For optional requests, for example, flowers, collars, etc. Please let me know and I will make this for you\n' +
        '5. I will then start your custom portrait and within a few days have a digital proof sent to you for approval. If you’re satisfied with it, the painting will be shipped the next business day\n' +
        '\n' +
        'DELIVERY\n' +
        '-Portrait completion time 1-2 weeks days\n' +
        '- Free shipping\n' +
        '- Shipping time to the USA is 10-14 days\n' +
        '\n' +
        'The painting is packed in a plastic package and envelope. A thick cardboard sheet inside an envelope protects the picture from damage.\n' +
        'Gift wrapping is available.\n' +
        '\n' +
        '\n' +
        'MATERIALS\n' +
        'Paintings are made in Color Pencil  technique with high-quality Polychromes and Luminance  Color Pencils  So the painting retains color through generations.\n' +
        'Your painting is finished within 1 to 2 weeks, depending on my schedule. When you purchase, you&#39;re automatically next in line in my queue.\n' +
        '\n' +
        '*** DRAW MULTIPLE PETS ***         \n' +
        '\n' +
        'Please add quantity if you want to draw multiple pets. For instance, if you want to draw 2 pets of the upper body, send me a message about it .\n' +
        '\n' +
        'Custom drawing from photo,custom painting from photo,custom pet drawing,pet art commission, colored pencil portrait.pping.\n' +
        '\n' +
        'Horse Gift, Pet Portrait, Custom Horse Portrait, Horse Art, Photo to Art, Horse Portrait.\n' +
        'Christmas gifts for him,her,equine portrait',
      quantity: 5,
      num_favorers: 0,
      tags: [
        'painted pet portrait',
        'custom pet canvas',
        'pet memorial frame',
        'custom dog drawing',
        'custom dog painting',
        'custom cat drawing',
        'cartoon pet portrait',
        'royal pet portrait',
        'commission portrait',
        'custom pet drawing',
        'original art',
        'Christmas sketch',
        'equine portrait'
      ],
      processing_min: 5,
      processing_max: 10,
      price: 110,
      img: 'https://i.etsystatic.com/8578571/r/il/21a43e/3376514076/il_fullxfull.3376514076_9lks.jpg',
      onSale: true,
      taxonomy_id: 12
    },
    {
      title: 'Snuggle Tunnel For Small Critters (Donut Critters)',
      description: 'Give your little one a cozy place to rest in one of our tunnels. For the active critter, it also provides loads of fun as they zoom on through over and over again. We use featherlite boning on each end of the tunnel to insure it stays open and doesn&#39;t just end up being a mat for your pets to lounge on top of. The inside of our products are always lined with fleece, however the outside may be cotton, flannel, or fleece. Whatever the material, we always line our tunnels with TWO layers (one layer for mini tunnel) of batting in between the inner and outer fabrics. This helps to prevent the middle from collapsing while also providing extra layers of comfort and warmth. \n' +
        '\n' +
        '♥ Great for guinea pigs, sugar gliders, hedgehogs, rats, or any other furry creature who has stolen your heart.\n' +
        '\n' +
        '♥ Fleece color may vary slightly due to fabric availability. \n' +
        '\n' +
        '----------------------------------------------------------------\n' +
        '\n' +
        'Choose between our standard sized snuggle tunnel (ideal for guinea pigs and like-sized critters) and our mini snuggle tunnel (ideal for smaller animals, such as hedgehogs and other like-sized critters):\n' +
        '\n' +
        '♥ Average size of STANDARD SNUGGLE TUNNEL:  approximately 7&quot; (wide) x 11&quot; (long). Actual opening is approximately 5.5&quot; wide.\n' +
        '\n' +
        '♥ Average size of MINI SNUGGLE TUNNEL:  approximately 5&quot; (wide) x 9.5&quot; (long). Actual opening is approximately 4&quot; wide.\n' +
        '\n' +
        '----------------------------------------------------------------\n' +
        '\n' +
        '** While supplies last, depending on fabric availability **\n' +
        '\n' +
        '♥ Our products are handmade with care in our smoke-free home. As with most homemade/handmade items, each product may vary slightly in size, color, and shape. Imperfections are what makes all crafters unique! \n' +
        '\n' +
        '♥ Handmade with love in the USA. \n' +
        '\n' +
        '!!!! Due to the drastic increase in prices, unfortunately, we are no longer able to offer free shipping. So sorry!',
      quantity: 1,
      num_favorers: 8,
      tags: [
        'hedgehogs',
        'sugar glider',
        'rats',
        'critters',
        'guinea pigs',
        'tunnel',
        'small animal'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 20,
      img: 'https://i.etsystatic.com/5917696/r/il/3047b5/3190275548/il_fullxfull.3190275548_um9x.jpg',
      onSale: true,
      taxonomy_id: 12
    },
    {
      title: 'Christmas  Cat 3D Layer SVG/ Cat 3D mandala/ Cat paper cut/ Plywood cut 3D mandala/ Cat multilayer / Christmas Cat/ Cat laser cut',
      description: 'Christmas  Cat digital file\n' +
        '\n' +
        '     This wonderful Christmas  Cat design will fit perfectly into your interior and will always be a great gift for family and friends.\n' +
        '\n' +
        '     This design 3D layers of the Christmas  Cat you can cut from materials such as paper, plywood, plexiglass and more.\n' +
        'After the purchase, you will receive an email with a download link.\n' +
        '\n' +
        'After downloading the 3D layers of the Christmas  Cat you will receive the following files:\n' +
        ' - Ai\n' +
        ' - SVG\n' +
        ' - DXF\n' +
        '\n' +
        'The file has the following dimensions:\n' +
        'height 10.2 inches\n' +
        'Width 8 inches\n' +
        '\n' +
        'For commercial purposes, you can only use a physical structure that you create yourself. After that you have to leave a link to my store.\n' +
        'Because the product is digital, the money is not refundable.\n' +
        '\n' +
        '\n' +
        'If you need my help feel free to contact me.\n' +
        'Sincerely, Oksana.',
      quantity: 14,
      num_favorers: 10,
      tags: [
        'SVG',
        'DXF',
        'Ai',
        'layer',
        '3d layer',
        'laser cut file',
        'glowforge',
        'multilayer',
        'Cat 3D mandala',
        'Cat cricut',
        'Christmas Cat svg',
        'Cat multilayer',
        'Christmas 3d layered'
      ],
      processing_min: null,
      processing_max: null,
      price: 8.6,
      img: 'https://i.etsystatic.com/28245145/r/il/e16881/3488981810/il_fullxfull.3488981810_dvyi.jpg',
      onSale: true,
      taxonomy_id: 12
    },
    {
      title: 'Purple Polka Dot Dog Collar - Purple Dog Collar - Preppy Dog Collar for Girl Dog Collar - Dog Collar for Easter - Dog Collar for Spring',
      description: 'A classic purple polka dot dog collar in a cotton fabric backed with gray webbing.\n' +
        '\n' +
        'All the parts come together to make one heck of a strong (yet comfortable) collar. This collar features:\n' +
        '+ High-quality black plastic or silver metal buckle options\n' +
        '+ Soft to the touch, heavyweight nylon webbing\n' +
        '+ Welded D-ring ensures your dog is secure while on leash\n' +
        '+ Two rows of triple-stitching at all stress points for maximum strength\n' +
        '\n' +
        '🔸CUSTOM SIZING🔸\n' +
        'Don’t see your dog’s size? Reach out to us, and we’ll make a custom collar for you! \n' +
        '\n' +
        'Standard collar sizes:\n' +
        'Extra Small: Neck 8 - 12 inches\n' +
        'Small: Neck 10 - 14 inches\n' +
        'Medium: Neck 12 - 20 inches\n' +
        'Large: Neck 18 - 26 inches\n' +
        'Extra Large: Neck 22 - 30 inches\n' +
        '\n' +
        'A matching bow tie can be purchased here:\n' +
        'www.etsy.com/listing/175688236\n' +
        '\n' +
        'Matching leash:\n' +
        'www.etsy.com/listing/263359526\n' +
        '\n' +
        'View all Waggles & Company items here:\n' +
        'www.etsy.com/shop/WagglesAndCompany\n' +
        '\n' +
        'Even the toughest collar is no match for a pup mistaking it for a chew toy, so please keep it out of your pup’s reach when not in use. Also, be sure to check regularly for wear and tear.\n' +
        '\n' +
        'Your collar can be hand- or machine-washed on a gentle cycle with cold water and should be air-dried.',
      quantity: 5,
      num_favorers: 47,
      tags: [
        'Waggles and Company',
        'classic',
        'dog collars',
        'preppy dog collar',
        'purple dog collar',
        'purple',
        'preppy',
        'puppy collar',
        'girl dog collar',
        'Easter Dog Collar',
        'Spring Dog Collar',
        'lavender dog collar',
        'purple polka dot'
      ],
      processing_min: 7,
      processing_max: 10,
      price: 32.95,
      img: 'https://i.etsystatic.com/8848132/r/il/bc6ecf/2061097868/il_fullxfull.2061097868_9p3o.jpg',
      onSale: true,
      taxonomy_id: 12
    },
    {
      title: 'Black and White Dolphin poster with blue ocean wash, digital download, 2 posters',
      description: 'Simplistic black and white dolphin poster, perfect for animal lovers. This digital poster can be displayed anywhere in your house, office or workspace. The purchase comes with 2 digital posters.  \n' +
        '\n' +
        'INSTANT DOWNLOAD - DIGITAL PRODUCT - NO PHYSICAL ITEM SHIPPED\n' +
        '\n' +
        'The posters can be printed in various sizes for your picture frames, or other uses. The file can be easily printed at home, at an online printing service or at your local printing store. \n' +
        '\n' +
        'Take your downloaded image to your favourite print on demand store. Would look amazing on clothing, drink bottles, mugs and much more. Fantastic gift\n' +
        '\n' +
        'Please message for any requests before purchase, the colour of the image can be altered and designs can be made to your specifications.',
      quantity: 3,
      num_favorers: 0,
      tags: [
        'dolphin',
        'black and white',
        'monochromatic',
        'sea life',
        'animals',
        'pets',
        'poster',
        'digital poster',
        'family'
      ],
      processing_min: null,
      processing_max: null,
      price: 7,
      img: 'https://i.etsystatic.com/31335620/r/il/f03ab4/3266180064/il_fullxfull.3266180064_keo2.jpg',
      onSale: true,
      taxonomy_id: 12
    },
    {
      title: 'Watercolor bear poster, baby shower animal print png',
      description: 'Perfect watercolor bear poster, baby shower animal for the nursery / wall art as a png print\n' +
        '\n' +
        'Please note - this is a DIGITAL DOWNLOAD FILE\n' +
        'Physical items will not be shipped.\n' +
        '\n' +
        'Illustration can be agination is limitless!used in many ways.\n' +
        '\n' +
        'Here 1 ZIP archiv:\n' +
        'PNG FILE - 4500 x 6100px  Transparent Background\n' +
        '\n' +
        'Here you can see more from this collection:\n' +
        'https://www.etsy.com/de/shop/LeRaCreativeTemplate?ref=seller-platform-mcnav&section_id=36487951\n' +
        '\n' +
        'After purchase and full payment, Etsy will send you an email stating that your zip folder is ready for download. Please always check your spam folders as there can always be times when they get there.\n' +
        'With this promotion, you will receive a downloadable PNG file with a clear / transparent background.\n' +
        '\n' +
        'The PNG files won&#39;t work with regular vinyl. Unfortunately, I cannot help anyone who uses Cricut software as I am unfamiliar with it. So make sure you have the knowledge to print them out and use them before buying.\n' +
        'Refunds are not accepted for the digital downloads.\n' +
        '\n' +
        '\n' +
        'IMPORTANT!!!\n' +
        'You need to know that picture colors may vary from any screen or advice you use.\n' +
        'For example, it can vary in Camparison with cell phones, computers or Ipads.\n' +
        '\n' +
        'I am grateful to every customer and\n' +
        'I would be very interested in which creative projects my digital files have been used in. Please show me your artwork. I would be very happy.\n' +
        '\n' +
        'YOU CAN NOT:\n' +
        '- Use all or part of the designs to create a new digital design for sale.\n' +
        '- share, copy, give away, resell or modify my designs.\n' +
        '- Use the designs on Print On Demand websites like Printful, StickerMule, Zazzle, Redbubble or others. Printing by third parties is not permitted.\n' +
        '- Sell printed transfers without purchasing my extended licenses.\n' +
        '\n' +
        '© 2021 LeraCreative. All rights reserved.\n' +
        '\n' +
        '7',
      quantity: 99,
      num_favorers: 0,
      tags: [
        'digital download',
        'baby animal print',
        'baby shower',
        'watercolor painting',
        'animals clip art',
        'watercolor clipart',
        'girl nursery decor',
        'teddy bear png',
        'nursery animal print',
        'earth tone wall art',
        'bear poster',
        'girls room wall art',
        'bear painting'
      ],
      processing_min: null,
      processing_max: null,
      price: 4.2,
      img: 'https://i.etsystatic.com/25828833/r/il/642f97/3537771492/il_fullxfull.3537771492_7v6y.jpg',
      onSale: true,
      taxonomy_id: 12
    },
    {
      title: 'Purple Polka Dot Dog Leash - Purple Dog Leash - Dog Lead - Easter Dog Leash - Dog Leash for Spring - 4ft , 5ft and 6ft Lengths',
      description: 'A classic polka dot dog leash in a purple and white cotton fabric and backed with gray nylon webbing.\n' +
        '\n' +
        'All the parts come together to make one heck of a strong leash:\n' +
        '- Soft to the touch, heavyweight nylon webbing.\n' +
        '- Heavy-duty nickel swivel snap hook. \n' +
        '- Two rows of triple-stitching at all stress points for maximum strength and durability. \n' +
        '\n' +
        'Matching collar:\n' +
        'www.etsy.com/listing/263358882\n' +
        '\n' +
        'Matching bow tie and collar combo:\n' +
        'www.etsy.com/listing/178902336\n' +
        '\n' +
        'View all Waggles & Company items here:\n' +
        'www.etsy.com/shop/WagglesAndCompany\n' +
        '\n' +
        'Even the toughest leash is no match for a pup mistaking it for a chew toy, so please keep it out of your pup’s reach when not in use. Also, be sure to check regularly for wear and tear.\n' +
        '\n' +
        'Your leash can be hand- or machine-washed on a gentle cycle with cold water. Air dry only, please.',
      quantity: 4,
      num_favorers: 34,
      tags: [
        'dog leash',
        'lead',
        'leash',
        'dog lead',
        'preppy',
        'girl',
        'purple',
        'classic',
        'polka dot dog leash',
        'spring',
        'Easter',
        'girl dog leash',
        '4 ft 5 ft 6 ft'
      ],
      processing_min: 7,
      processing_max: 10,
      price: 31.95,
      img: 'https://i.etsystatic.com/8848132/r/il/afb94f/2061103710/il_fullxfull.2061103710_axgm.jpg',
      onSale: true,
      taxonomy_id: 12
    },
    {
      title: 'Custom Pet Portrait | PRINTABLE Personalized Pet Art | New Pet Gift | Dog Cat Wall Art | Memorial | Pet Portrait From Photo | Digital JPEG',
      description: 'CUSTOM PET PORTRAIT    ★     DIGITAL DOWNLOAD    ★    YOUR PET TURNED INTO A WORK OF ART\n' +
        '\n' +
        'What better way to show your love for your fur-babies than with a custom piece of digital art!  Perfect to print, frame and hang on your walls. Surprise someone with a thoughtful personalized gift of their pet. This listing is for a digital design that will be sent to you by email. The possibilities of how you can use the digital design are endless! Order a canvas print, poster or card. Turn it onto a photo mug or personalized puzzle or phone case. Use the digital image as a phone or computer background.\n' +
        '\n' +
        '------------------------------\n' +
        '★ HOW TO ORDER ★\n' +
        '------------------------------\n' +
        '\n' +
        '1. PURCHASE LISTING\n' +
        '• Before placing your order please ensure the e-mail address registered to your Etsy account is correct.\n' +
        '\n' +
        '2. SEND YOUR PHOTO\n' +
        ' • Send your photo by either Etsy message or email ➙ mariesdigitaldesigns@gmail.com \n' +
        '\n' +
        '4: DOWNLOAD + PRINT\n' +
        '• Your custom pet portrait will be sent to the email address connected to your Etsy account. \n' +
        '• If you plan to use a professional printer, I definitely  recommend Prints of Love. My shop has partnered with them to offer fast, high quality yet affordable printing. Simply follow this link ➙ printsoflove.com/maries-digital-designs/\n' +
        '• The digital file can also be printed at home or any local print shop, photo lab online printing service  (such as Staples, Office Depot, Walgreens etc)\n' +
        '• The digital file is also great to great unique personalized items such as mugs, puzzles, phone cases etc\n' +
        '\n' +
        '--------------------------------------------------\n' +
        '★ PHOTO TIPS FOR BEST RESULTS ★\n' +
        '--------------------------------------------------\n' +
        '\n' +
        '• Photo should be taken close to eye level\n' +
        '• Visible chest and neck area\n' +
        '• Photo should be clear and not blurry\n' +
        '• Even lighting works best (not too shadowy)\n' +
        '• Pet should be forward facing\n' +
        '• No filters \n' +
        '\n' +
        'NOT SURE IF YOUR PHOTO WILL WORK? Feel free to send it to me by Etsy message before placing an order so I can review it and let you know!\n' +
        ' \n' +
        '----------------------------\n' +
        '★ FONT CHOICES ★\n' +
        '----------------------------\n' +
        '\n' +
        '• Please see listing photos for available font choices\n' +
        '• Indicate which font you&#39;d like used in the &quot;personalization box&quot; along with your pets name\n' +
        '• If no font is specified default font POPPY will be used.\n' +
        '\n' +
        '----------------------------\n' +
        '★ TURNAROUND TIME ★\n' +
        '----------------------------\n' +
        '\n' +
        '• 1-2 business days from when the photo is provided. For a quick and speedy turnaround time, please send your photo as soon as you purchase the listing.\n' +
        'NEED IT SOONER? Please send me an Etsy message BEFORE placing the order to check if a faster turnaround time is currently available.\n' +
        '\n' +
        '\n' +
        '------------------------------------------------------\n' +
        '★ OTHER IMPORTANT INFORMATION ★\n' +
        '------------------------------------------------------\n' +
        '\n' +
        '• The custom pet portrait will be sent to you by email from mariesdigitaldesigns@gmail.com within 2 business days. If you don&#39;t see the email in your inbox also check your junk / spam folder. Nothing will be physically shipped through the mail.\n' +
        '• Please ensure you DOWNLOAD the file from the email. Don&#39;t select &quot;save image as&quot; or &quot;make copy&quot; as those will only save a lower resolution copy of your image. \n' +
        '• Due to the nature of personalized digital designs and products, all sales are final. No refunds or exchanges. \n' +
        '\n' +
        '------------------------------------------------------\n' +
        ' \n' +
        'By purchasing, you are agreeing to all of our shop policies. \n' +
        '\n' +
        'Printed colours may vary slightly depending on your computer monitor calibration, phone or tablet screen settings and the settings of the printer used. The file you receive is for personal use only. You may not sell the file. It also may not be used for commercial purposes.',
      quantity: 297,
      num_favorers: 2,
      tags: [
        'Custom Pet Portrait',
        'Printable Pet Art',
        'Personalized Gift',
        'New Dog Gift',
        'New Cat Gift',
        'Digital Wall Art',
        'Pet Memorial',
        'Portrait From Photo',
        'Dog Lover Gift',
        'Christmas Present',
        'Birthday Gift',
        'Pet Loss Gift',
        'Modern Pet Art'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 35,
      img: 'https://i.etsystatic.com/10176001/r/il/2a4357/2754677391/il_fullxfull.2754677391_moyj.jpg',
      onSale: true,
      taxonomy_id: 12
    },
    {
      title: 'Hip Hip Hooray It&#39;s My Birthday Dog Leash',
      description: 'Heavy duty nylon webbing with a US designer ribbon accent\n' +
        '\n' +
        'Heavy duty swivel snap hook in a gunmetal finish\n' +
        '\n' +
        'Available in a 1&quot; width only\n' +
        '\n' +
        'Matching collar available under separate listing\n' +
        '\n' +
        'Designed and handmade USA\n' +
        '\n' +
        'Sizes:\n' +
        '\n' +
        '1&quot;  x  48&quot;\n' +
        '\n' +
        '1&quot;  x  60&quot;\n' +
        '\n' +
        'Custom lengths are available',
      quantity: 9,
      num_favorers: 6,
      tags: [
        'dog leash',
        'leash',
        'birthday dog leash',
        'hippo dog leash',
        'pet gifts',
        'birthday leash',
        'birthday hippo',
        'leash with hippos',
        'large dog leash',
        'small dog leash',
        'girl dog leash',
        'boy dog leash',
        'gifts for dogs'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 19,
      img: 'https://i.etsystatic.com/8386492/r/il/46bac9/1730991488/il_fullxfull.1730991488_jh4z.jpg',
      onSale: true,
      taxonomy_id: 12
    },
    {
      title: 'Family portrait by photo, digital drawing for printing, personalized line drawing, minimalist, digital line art, custom',
      description: '🤍 I turn your favorite photo into a unique minimalist digital drawing, perfect as a gift or for decorating 🤍\n' +
        '\n' +
        'HOW TO ORDER:\n' +
        '\n' +
        'Send me your photo after the purchase via the function &quot;Message to the seller&quot;, your wishes regarding color accents, background color or text you can write in the personalization or tell me by message. I will then make your drawing and make it available to you as a download within a few days or send it to you by e-mail upon request. The processing time depends on the number of people and your wishes.\n' +
        '\n' +
        '❗️The drawing is not printed by me, the shipping notification is only valid for the digital file ❗️\n' +
        '\n' +
        'The quality of my drawing is sufficient for a professional print, but your photo should also have a good quality so that I can make a drawing out of it :)\n' +
        'If you are unsure whether your photo is suitable for a drawing, you can also write me a message and ask me before buying. ☺️\n' +
        '\n' +
        'If you still have change requests, I can edit the drawing again, but please note that I can not respond to all wishes, as some things are simply not possible 💖',
      quantity: 944,
      num_favorers: 102,
      tags: [
        'Digital Drawing',
        'Digital Line Art',
        'Family photo',
        'Family',
        'Gift',
        'Digital Print Art',
        'Minimalist decoration',
        'Wall decoration',
        'Portrait',
        'personalized drawing',
        'Custom Art',
        'Baby photo'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 8,
      img: 'https://i.etsystatic.com/32760009/r/il/6bf62c/3731944532/il_fullxfull.3731944532_beet.jpg',
      onSale: true,
      taxonomy_id: 12
    },
    {
      title: '1/2&quot; Wide Biothane Leash Single Color, Waterproof Leash, Vegan Leather Leash, Puppy Leash, Small Dog Leash',
      description: 'Mucky Mutts 1/2&quot; Wide  Biothane Leash Single Color. We know how mucky dogs can be when they are having fun. This leash is made to endure it all! Biothane is stinkproof, waterproof, easy to clean and even vegan for those looking for an ethical choice for your dog - what more could you ask for! This leash is perfect for small dogs and puppies. Very lightweight. \n' +
        '\n' +
        'This leash is available in the colors listed in the dropdown menu. Hardware choices available in Nickel, Matte Black and Rose Gold. Please indicate the hardware color choice in the personalization option. Make sure to look at current hardware options listed in the pictures. All hardware colors on the leash will match unless otherwise specified.\n' +
        '\n' +
        'If you would like to upgrade to Stainless Steel please purchase this listing along with our Stainless Steel upgrade that can be found here - https://etsy.me/3uGrfCp\n' +
        '\n' +
        '\n' +
        'Product Creation:\n' +
        'Mucky Mutts Collars & Leashes are lovingly handmade products that will stand the test of time. We handmake all of our products in our workshop located in Guysborough County, Nova Scotia. We use Standard Biothane that has a  1000lb break strength per 1&quot; width. We have 3 of our own dogs and used to live in the North of Canada where we both rescued dogs and spent a lot of time in the woods with our own dogs. We currently live in Nova Scotia and love hiking and doing both leash and off leash trails. Biothane is the only material that we have found to be durable, long lasting and easy to to get the muck off! We seal all of the ends of our biothane with a product called Bioseal which gives it a nice finished, polished look.\n' +
        '\n' +
        'Sizing:\n' +
        'Our leashes are available in 4, 5, 6 and 8 feet lengths. We are more than happy to customize a leash length. Just send us a message and we figure something out. \n' +
        '\n' +
        '*Our leash measurement is based on the biothane length. Hardware is in addition to the biothane measurement. For example, a 4 foot leash could end up being 4&#39;1&quot; to 4&#39;3&quot; depending on the hardware selected.*\n' +
        '\n' +
        'Our Products:\n' +
        'When you receive your Mucky Mutts product, please inspect all of the hardware. We guarantee our hardware. If anything breaks, please message us and we will replace for you.\n' +
        '\n' +
        'Note: Please check collars and leashes on a regular basis and repair or replace any damaged parts for safety reasons. Leashes and collars are your responsibility once you receive them, always keep your dog’s safety in mind and use responsibly.\n' +
        '\n' +
        'We donate $1 from every sale to Canadian Rescues.',
      quantity: 5,
      num_favorers: 37,
      tags: [
        'biothane leash',
        'waterproof leash',
        'vegan leash',
        'vegan leather',
        'easy to clean leash',
        'biothane lead',
        'vegan leather leash',
        'vegan dog leash',
        'biothane dog',
        'biothane dog leash',
        'training leash',
        'puppy leash',
        'small dog leash'
      ],
      processing_min: 1,
      processing_max: 5,
      price: 34,
      img: 'https://i.etsystatic.com/27303037/r/il/ec9ea4/3184775187/il_fullxfull.3184775187_kpc2.jpg',
      onSale: true,
      taxonomy_id: 12
    },
    {
      title: 'Crossover handmade woman slippers. Crochet from thsirt yarn. Cappuchino color. Size 8-8,5',
      description: 'Crossover handmade woman slippers. Crochet from thsirt yarn. Cappuchino color. Size 8-8,5\n' +
        '\n' +
        'Slip-on style\n' +
        'Crossover strap\n' +
        'Open toy\n' +
        'Flat sole\n' +
        '\n' +
        'Sole: rubber, Upper: 100% cotton\n' +
        '\n' +
        'Care instruction: wash in the washing machine (hand wash) at 30-40 C. Do not tumble dry, do not bleach.',
      quantity: 1,
      num_favorers: 3,
      tags: [
        'crossover top',
        'crochet slippers',
        'handmade slippers',
        'gift for her',
        'tshirt yarn',
        'home footwear',
        'for home',
        'nude color',
        'open toy',
        'flat sole',
        'crossover straps',
        'perfect present',
        'girt for mom'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 36,
      img: 'https://i.etsystatic.com/29874486/r/il/b9dc82/3585403909/il_fullxfull.3585403909_2pi7.jpg',
      onSale: true,
      taxonomy_id: 13
    },
    {
      title: 'Bridal Converse Not everyone should feel the need to wear heels to feel sexy or elegant a sneaker can have the same effect, some confidence.',
      description: 'Shoes were for a wedding, shoes can be customized to your liking, colors, themes, and names can be added.',
      quantity: 100,
      num_favorers: 0,
      tags: [],
      processing_min: 20,
      processing_max: 30,
      price: 250,
      img: 'https://i.etsystatic.com/22637295/r/il/dbc88f/3011462266/il_fullxfull.3011462266_jgre.jpg',
      onSale: true,
      taxonomy_id: 13
    },
    {
      title: 'knitted baby shoes dark blue',
      description: 'All product prices are total prices plus shipping costs. VALUE added tax is not levied because small business owners.\n' +
        '\n' +
        'Knitted baby shoes in the color dark blue with wooden buttons.\n' +
        '\n' +
        'Washable at 40° degree gentle washing.\n' +
        '\n' +
        '**Type of production**\n' +
        'knitted with a lot of love\n' +
        '\n' +
        '**Materials used**\n' +
        '100% cotton\n' +
        'Wooden button',
      quantity: 3,
      num_favorers: 4,
      tags: [
        'baby&#39;s skirt',
        'Cotton',
        'Blue',
        'Dark blue',
        'Baby shoes knitted',
        'Baby',
        'Knitted shoes',
        'Baby shoes cotton',
        'Gift Birth',
        'Gift Baby',
        'Baby Party',
        'Baby shoes dark blue',
        'Gift Baptism'
      ],
      processing_min: 5,
      processing_max: 10,
      price: 8.5,
      img: 'https://i.etsystatic.com/18024033/r/il/b56950/1563405670/il_fullxfull.1563405670_b4bj.jpg',
      onSale: true,
      taxonomy_id: 13
    },
    {
      title: 'Special Leather King Oxford |  TOBACCO BROWN Handcrafted Calf Leather Brogue Derby Men&#39;s Oxford Dress Shoes',
      description: 'Special Leather King I  TOBACCO BROWN Handcrafted Calf Leather Brogue Derby Men&#39;s Oxford Dress Shoes\n' +
        '\n' +
        '♕ Upper Material➤ Genuine Leather\n' +
        '\n' +
        '♕ Inner Linings➤ Soft Leather \n' +
        '\n' +
        '♕ Style➤ Brogue Derby\n' +
        '\n' +
        '♕ Colour➤ Tobacco Brown\n' +
        '\n' +
        '♕ Sole➤ Leather\n' +
        '\n' +
        '♕ Gender➤ Male \n' +
        '\n' +
        '♕ Heel➤ Leather \n' +
        '\n' +
        '♕ Totally Hand stitched\n' +
        '\n' +
        '♕ Manufacturing Time 12 to 14 Business Days  \n' +
        '\n' +
        '♕ Accessories may differ Sometime a little from original picture due to availability\n' +
        '\n' +
        '♕ Coloured rubber out sole extends durability and longevity of these striking men’s dress shoes \n' +
        '\n' +
        '✦ IMPORTANT NOTE\n' +
        ' Please measure your foot size according to the size chart given in the Images for a perfect fit before placing the order. If you can&#39;t find your required Size or Color just send us message we will make the shoes according to you requirement. Please choose size according the foot length. 99% buyers choose right size by measuring the foot length. Let&#39;s choose the correct size according to the four steps below. \n' +
        'Step 1: Prepare a blank paper.\n' +
        'Step 2: Place your foot on the blank paper\n' +
        'Step 3: Mark the end of your heel and the tip of your longest toe \n' +
        'Step 4: Measure the length with a ruler and find out the size using size chart in attached picture. Seller&#39;s Message We take pride in designing and supplying the premium quality leather Shoes & Boots to our valuable customers. We are also specialist in making custom design shoes and boots. There may be a slight variation in color due to photography, light effects and computer color resolution but colors will be used matching the originals.',
      quantity: 34,
      num_favorers: 1,
      tags: [
        'Handmade Shoes',
        'Leather Shoes',
        'double buckle shoes',
        'wing tip shoes',
        'derby shoes',
        'handmade men shoes',
        'men shoes',
        'oxford shoes',
        'dress shoes',
        'brogue shoes'
      ],
      processing_min: 5,
      processing_max: 10,
      price: 175,
      img: 'https://i.etsystatic.com/26709128/r/il/00556e/3537739874/il_fullxfull.3537739874_j1zq.jpg',
      onSale: true,
      taxonomy_id: 13
    },
    {
      title: 'Engraved Long Handle Shoe Horn,Handmade Shoe Horn Made with Real Horn,gifts for men,him,dad,Best Gift Idea length : (17 – 19.6) inch',
      description: 'Engraved Long Handle Shoe Horn,Handmade Shoe Horn Made with Real Horn,gifts for men,him,dad,Best Gift Idea length : (17 – 19.6) inch\n' +
        'SIZE: length : (17 – 19.6) inch\n' +
        'You are viewing the product: Shoe Horn Made with Real Horn Handmade (not cheap plastic or metal.).\n' +
        'The material for making shoe horn is natural horn. Each horn has a different curvature. So we design and craft it directly on each horn. The shoe horn is meticulously handcrafted and polished many times to a high gloss. Because it is a natural horn, each shoe has a different natural color and design. You will not be able to find two shoe horns that are exactly the same. that makes it special and unique.\n' +
        'The shoe horn has an easy handle and has a lanyard so it can be hung on the wall. The shoe horn is repeatedly polished to a smooth and rounded edge, with no sharp edges. makes it easy to slip your foot into the shoe and won&#39;t damage your shoe.\n' +
        'This is a great product to be a gift for dad, for him, her, boyfriend, relatives, colleagues, partners or anyone...To make the product more special. We offer the service of engraving &quot;name or text&quot; on the shoe horn. A personalized gift is a very special gift.',
      quantity: 3,
      num_favorers: 1,
      tags: [
        'shoehorn long handle',
        'shoe accessories',
        'travel shoehorn',
        'real horn shoehorn',
        'shoe horn engraved',
        'vintage shoe horn',
        'shoe horn natural',
        'shoe horn custom',
        'shoe horn for men',
        'shoe horn logo',
        'handmade shoe horn',
        'personalized gifts',
        'Wooden shoe horn'
      ],
      processing_min: 2,
      processing_max: 4,
      price: 935000,
      img: 'https://i.etsystatic.com/32175629/r/il/8e76eb/3537765214/il_fullxfull.3537765214_ckvm.jpg',
      onSale: true,
      taxonomy_id: 13
    },
    {
      title: 'Handmade knitted bootees',
      description: 'Handmade knitted bootees in blue with a white pompom',
      quantity: 2,
      num_favorers: 1,
      tags: [
        'handmade',      'homemade',
        'baby',          'babyknits',
        'gifts',         'knitting',
        'bootees',       'presents',
        'baby slippers', 'Pompom',
        'Present',       'Home crafts'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 6.5,
      img: 'https://i.etsystatic.com/18413621/r/il/9ca78a/2988848983/il_fullxfull.2988848983_ji0a.jpg',
      onSale: true,
      taxonomy_id: 13
    },
    {
      title: 'Snoopy Clasic Leather Clogs Slippers Mules Nursing Clogs  Handmade  Air Clogx',
      description: 'Handmade women&#39;s clogs , men&#39;s clogs, slippers ,hospital shoes, hospital clogs, Theatre Clogs, medical clogs, nursing clogs, nursing shoes, fully orthopedic clogs, unique designs, Verstopfen, Pantoufle, Sabot, Zapatilla, Obstruir, Pantofola, Zoccolo, Non-slip special sole. If you are looking for orthopedic, light and comfy clogs, you are at the right place.. \n' +
        '\n' +
        'Please write us your phone number and E-Mail Adress with your order\n' +
        '\n' +
        '- It has a revolutionary design with layers for a higher impact resistance while you walk with Air Clogx Comfortable Sabo slippers.\n' +
        '- These features provide maximum shock absorption and trigger your main muscles from your calves and hips to your back and abdomen. You will immediately start feeling all the benefits when you put them on your feet.\n' +
        '- In the Air Clogx sabo slipper model, the cushioning system and the support in the heel are utilized.\n' +
        '- It not only softens the lower part of the foot, but also provides support from the side areas and ankle area.\n' +
        '- The sole material with increased durability was chosen as rubber material and made the design light.\n' +
        '- It offers a comfortable use with its Air Clogx sole and does not tire the feet.\n' +
        '- It is made of antibacterial, phthalate-free, high quality leather.\n' +
        '- Base height is 5.5 cm.\n' +
        '- Comfortable use all day long thanks to its internal structure suitable for foot anatomy.\n' +
        '- Environmentally friendly polyurethane sole is used in its production.\n' +
        '- Thanks to the special bottom shape of the sole, it does not slip on wet surfaces. Thanks to the holes on the side, air flow is provided and it does not sweat.',
      quantity: 45,
      num_favorers: 21,
      tags: [
        'Nursing Shoes',
        'Theatre Clogs',
        'Ladies Clogs',
        'Clogs for Women',
        'Slippers for Women',
        'Mules for Women',
        'Clogs and Mules',
        'Women Clogs',
        'slip resistant',
        "Women's Clogs",
        'platform clogs',
        'Snoopy Slippers',
        'Leather Clogs'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 75,
      img: 'https://i.etsystatic.com/31925068/r/il/a1caf9/3611569816/il_fullxfull.3611569816_6npt.jpg',
      onSale: true,
      taxonomy_id: 13
    },
    {
      title: 'Leather punches uni free choice of colours',
      description: 'These leather punches are made of soft cowhide in different shades of brown, from the left\n' +
        'Color No.  black 42,mocca 76,cognac 34,, reddish brown 33, ,orange-brown 44, caramel 68,, light brown 31,. , beige brown 39,cappuccino 37, milk coffee 38,\n' +
        '\n' +
        'the colors can be different from PC or laptop or mobile phone\n' +
        '\n' +
        'My crawling shoes, leather punches, are lovingly handmade.\n' +
        'The colors and sizes can be determined by yourself,\n' +
        'if a color is not in stock, I will get in touch,\n' +
        'Super comfortable, no slipping, as a roughened sole, it is like walking barefoot,\n' +
        '\n' +
        'no constriction, because all around a soft very elastic rubber,\n' +
        '\n' +
        'Will sew the shoes as soon as possible according to their specifications.\n' +
        '\n' +
        'I make the shoes in all sizes,\n' +
        '\n' +
        '\n' +
        'Please measure from heel to big toe =length\n' +
        'front the widest point\n' +
        'and the instep,please measure it from the sole of the foot,across the foot,to the other side of the sole of the foot\n' +
        'it is best to put the foot on a sheet of paper and paint all around it, so you can measure great,\n' +
        'I make the shoes in all sizes,\n' +
        '\n' +
        '\n' +
        'My size chart\n' +
        '\n' +
        '\n' +
        'Order size = sole measurement outside foot measurement;\n' +
        '\n' +
        'Size 16 = 10.2 cm approx. 9.0 cm\n' +
        'Size 17 = 10.5 cm 9.3 cm\n' +
        'Size 18 = 11.0 cm 9.5 cm\n' +
        'Size 19 = 12.0 cm 10.5 cm\n' +
        'Size 20 = 12.5 cm 11.0 cm\n' +
        'Size 21 = 13.0 cm 11.5 cm\n' +
        'Size 22 = 13.5 cm 12.0 cm\n' +
        'Size 23 = 14.5 cm 13.0 cm\n' +
        'Size 24 = 15.0 cm 13.5 cm\n' +
        'Size 25 = 16.0 cm 14.5 cm\n' +
        'Size 26 = 16.5 cm 15.0 cm\n' +
        'Size 27 = 17.5 cm 16.0 cm\n' +
        'Size 28 = 18.5 cm 17.0 cm\n' +
        'Size 29 = 19.5 cm 18.5 cm\n' +
        'Size 31 = 20.5 cm 19.0 cm\n' +
        'Size 32 = 21.0 cm 19.5 cm\n' +
        'Size 33 = 21.5 cm 20.0 cm\n' +
        'Size 34 = 22.0 cm 20.5 cm\n' +
        'Size 35 = 22.5 cm 21.0 cm\n' +
        'Size 36 = 23.5 cm 22.0 cm\n' +
        'Size 37 = 24.5 cm 23.5 cm\n' +
        'Size 38 = 25.5 cm 24.0 cm\n' +
        'Size 39 = 26.5 cm 25.0 cm',
      quantity: 23,
      num_favorers: 486,
      tags: [ 'Sneakers', 'Slippers', 'Kindergarten shoes', 'Baby' ],
      processing_min: 5,
      processing_max: 15,
      price: 13.5,
      img: 'https://i.etsystatic.com/18020775/r/il/1e6292/2856268662/il_fullxfull.2856268662_qkrr.jpg',
      onSale: true,
      taxonomy_id: 13
    },
    {
      title: 'Bohemian aztec anklet with pompoms for rollerskates',
      description: 'ENGLISH BELOW\n' +
        '\n' +
        'Een super tof boho aztec enkelbandje. lengte van vetergat tot vetergat is 24cm wat maakt dat hij mooi iets hoger op de skate valt. Dit maakt dat de stof ook mooi zal vallen om je skate heen.\n' +
        'Het is een stevig bandje dit zeker tegen een stootje kan!\n' +
        'De vetergaten zijn 5mm wat betekend dat ze voor vrijwel iedere veter geschikt zijn, zelfs de wat dikkere!\n' +
        '\n' +
        '\n' +
        'A super cool boho aztec anklet. The length of the anklet from lace hole to lace hole is 24 cm which makes it fall nicely a little bit higher on your skate. By making it so the fabric will form well to the form of your skate. \n' +
        'It is a sturdy anklet that can handle a little rough and tumble!\n' +
        'The lace holes are 5mm which means that they are suitable for pretty much every lace, even the bigger ones!',
      quantity: 3,
      num_favorers: 0,
      tags: [
        'roller skate accessories',
        'rollerskate accessory',
        'rolschaats accessoires',
        'boho rollerskate anklet',
        'aztec roller skate accessories',
        'boho roller skate accessories',
        'boho rolschaats accessoires',
        'aztec rolschaats accessoires',
        'boho lace accessory',
        'aztec lace accessories',
        'enkelbandje rolschaats',
        'pompom accessory rollerskate',
        'pompom rolschaatsen'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 7.95,
      img: 'https://i.etsystatic.com/31933884/r/il/9bbd4a/3860609453/il_fullxfull.3860609453_jwm5.jpg',
      onSale: true,
      taxonomy_id: 13
    },
    {
      title: 'Letters A-Z Alphabet customisable shoe charms',
      description: 'This is available in letters A-Z',
      quantity: 824,
      num_favorers: 203,
      tags: [
        'Jibbitz',
        'Crocs',
        'Croc charms',
        'Crocs charm',
        'Letter charms',
        'Letter jibbitz',
        'Jibbitz sets',
        'Jibbz',
        'Cool charms',
        'Kids jibbitz'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 2.8,
      img: 'https://i.etsystatic.com/33624158/r/il/b79b62/3613886477/il_fullxfull.3613886477_iszz.jpg',
      onSale: true,
      taxonomy_id: 13
    },
    {
      title: 'Coco Kids Crocs Charms',
      description: 'Do you want to bring life to your Crocs in a fun and creative way? These PVC charms are about 1.5”- 2” each with a round attachment at the back - the price is per charm (sold as individuals) please remember no two Crocs should be the same and if they are then you’re doing it wrong 👀!\n' +
        '\n' +
        '⚠️ CHOKING HAZARD - contains small parts not suitable for children under 3 years or any individuals who have a tendency to put inedible objects in their mouths. Use with adult supervision only. The Charms Culture cannot be held responsible for any incidents that occurs as result of this warning ignored.',
      quantity: 31,
      num_favorers: 14,
      tags: [ 'shoe charms', 'children', 'kids', 'shoe charm' ],
      processing_min: 1,
      processing_max: 3,
      price: 3.25,
      img: 'https://i.etsystatic.com/8745252/r/il/036871/3581432780/il_fullxfull.3581432780_2mzy.jpg',
      onSale: true,
      taxonomy_id: 13
    },
    {
      title: 'Herb Leaf Croc Charm - UK Seller',
      description: 'Croc charms / shoe charms \n' +
        'Easy to attach - make a statement - stylish fashionable- on trend \n' +
        '\n' +
        'Hype/hype beast\n' +
        '\n' +
        'Delivery is £2 stays £2 for additional charms ordered\n' +
        '\n' +
        'See shop for more charms \n' +
        '\n' +
        'Not suitable for under 3',
      quantity: 13,
      num_favorers: 243,
      tags: [],
      processing_min: 1,
      processing_max: 1,
      price: 2,
      img: 'https://i.etsystatic.com/28111084/r/il/5cb0f0/3377167841/il_fullxfull.3377167841_g1kk.jpg',
      onSale: true,
      taxonomy_id: 13
    },
    {
      title: 'Animal Jibbitz Dog cat Snail Bird Parrot Flamingo Bear Snake Reindeer Tiger Camel Bunny Dragonfly Duck Raccoon Fox Whale Sloth Pig Frog',
      description: 'A selection of Super Cute Animals!\n' +
        '\n' +
        'Postage is Combined when purchasing more than 1 Jibbitz!',
      quantity: 44,
      num_favorers: 61,
      tags: [
        'Cute',      'Croc',
        'Kawaii',    'Cool',
        'Shoe',      'Charm',
        'Funky',     'crocs',
        'badge',     'Kids',
        'Jellyfish', 'moose',
        'farm'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 3.5,
      img: 'https://i.etsystatic.com/32486749/r/il/327061/3744953389/il_fullxfull.3744953389_dx05.jpg',
      onSale: true,
      taxonomy_id: 13
    },
    {
      title: 'Air Jordan Smoke Grey Customizable',
      description: 'Jordan 1 Light Smoke Grey Customizable\n' +
        'Free Shipping\n' +
        'Delivery all Countries\n' +
        'Size chart is &#39;US&#39; and &quot;EU&quot;',
      quantity: 84,
      num_favorers: 495,
      tags: [
        'air jordan',
        'jordan',
        'smoke grey',
        'air jordan grey',
        'custom air jordan',
        'smoke grey jordan',
        'grey jordan',
        'air jordan light',
        'jordan grey',
        'air jordan 1 grey'
      ],
      processing_min: 2,
      processing_max: 5,
      price: 2200,
      img: 'https://i.etsystatic.com/34298209/r/il/a36f0e/3766886989/il_fullxfull.3766886989_ha58.jpg',
      onSale: true,
      taxonomy_id: 13
    },
    {
      title: 'Princess Tiana Inspired High Top Converse, Tiana Converse, Princess and the Frog All Star Chucks, Personalized Name, 5 Color Options',
      description: 'A custom designed pair of 100% authentic Converse High Top sneakers. You will receive the shoes as pictured above, personalized with your child&#39;s name on ONE side of each shoe.  Only one name per shoe is allowed.\n' +
        '\n' +
        'Because this shoe is custom made to each order, there are NO RETURNS or EXCHANGES allowed.  Please be sure you are selecting the CORRECT SIZE of shoe at checkout.  \n' +
        '\n' +
        '\n' +
        '*All purchases are made to order and the current process time from order to shipment is approximately 1-2 weeks.  \n' +
        '\n' +
        'Depending on the number of orders currently being processed and the shipping location, orders will be shipped 1-2 weeks after the initial purchase date.  All domestic packages are shipped using USPS 1-3 day Priority Mail shipping.\n' +
        '\n' +
        '**DISCLAIMER**\n' +
        '\n' +
        'Amore Specialties LLC items are not licensed products of any NFL team, Nike, Disney, Vans, Converse or any trademark/copyrighted company you may see in our work.  This item is, however, made with licensed fabric.  Amore Specialties is not affiliated with or sponsored by the NFL, Disney, Nike, Vans, Converse or any trademark/copyrighted company.\n' +
        '\n' +
        'Thank you for looking at our store items.  Please visit often, as more designs will be added on a regular basis.',
      quantity: 13,
      num_favorers: 16,
      tags: [
        'Kids Sneakers',
        "Children's Shoes",
        'Personalized Shoes',
        'Customized Shoes',
        'High Top Converse',
        'Toddler Chucks',
        'Toddler Sneakers',
        'Toddler High Tops',
        'Toddler HT Converse',
        'Princess and Frog',
        'Tiana All Stars',
        'Tiana Chucks',
        'Princess Tiana Shoes'
      ],
      processing_min: 5,
      processing_max: 10,
      price: 70,
      img: 'https://i.etsystatic.com/11929598/r/il/a4ce35/3489104048/il_fullxfull.3489104048_64sm.jpg',
      onSale: true,
      taxonomy_id: 13
    },
    {
      title: 'Medieval Leather Boots Re-enactment Shoes Sca Larp Riding Custom|Leather boot | Easter day gifts',
      description: 'Description\n' +
        'Viking 2 Toggle Boots Mens Dark Brown Viking Shoes, Medieval Ankle Shoes, Renaissance Shoes, Costume Shoes, Reenactment shoes, LARP\n' +
        'Material\n' +
        'Leather\n' +
        '\n' +
        'This Jorvik Boot or York Boot as it is sometimes called is based on the originals found at the Coppergate dig at York is fashioned with an overlap closure and secured with two toggles for adjustment of any ankle size.\n' +
        'The thick sole allows for a pair of boots that are hand stitched with proper period stitches and techniques, which are very durable and comfortable. This sole is also\n' +
        '\n' +
        'It is not just men who command the high seas and go in search of buried treasure. Women do it too and with the Ladies&#39; Pirate Boots, they can ensure they&#39;ll be dressed for the part. Featuring genuine black leather craftsmanship with a rubber sole, these 19&quot; boots provides superior comfort and flexibility with their ability to be worn up over the knee or rolled down. Great for costumes and re-enactments and a wonderful addition to any pirate collection.\n' +
        '\n' +
        'Note: Available in whole sizes 6-7-8-9-10-11-12-13-14\n' +
        '\n' +
        '\n' +
        'Payment : We accept payment through PayPal. PayPal is worldwide accepted and 100% secure way to Pay or receive payment on Etsy.\n' +
        '\n' +
        '\n' +
        'Shipping: *Please note : 8-10 working days delivery time is average estimated time, this time may vary as per transit conditions and locations.\n' +
        '\n' +
        'Handling Time:- within 3-4 working days after receiving payment through PayPal. We ship items through reputed couriers like FedEx, DHL or UPS. Tracking number will be provided after dispatching the ordered item(s).\n' +
        '\n' +
        'Please Note : We Do not Ship on APO / FPO Military Addresses, Po Box address Because these addresses does not accepted by our courier service.\n' +
        '\n' +
        'Please note that - depending on your geographic location Shipping carriers or methods may change.',
      quantity: 17,
      num_favorers: 720,
      tags: [
        'Armor shoes',
        'Medieval boots',
        'Roman boot',
        'Medieval shoes',
        'Boots',
        'Riding boot',
        'Leather boot',
        'viking boots',
        'leather boots'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 45,
      img: 'https://i.etsystatic.com/21654936/r/il/95a229/3158822989/il_fullxfull.3158822989_dpaj.jpg',
      onSale: true,
      taxonomy_id: 13
    },
    {
      title: 'Baby Boy Double Color Moccasin, Leather Shoe for Baby, Personalized Baby Shoes, Custom 1st Birthday Shoe,  Baby Schuhe, Baptism Shoes',
      description: '-Handmade, organic, personalized baby shoes for your baby.\n' +
        '-Our moccasins are custom made by hand personal for you.\n' +
        '-It is made with genuine calf leather.\n' +
        '-The name and the date can be written on the moccasins.\n' +
        '-Our moccasins are soft sole. It is ideal for toddlers and has special pads and lining inside. These help for learning to walk.\n' +
        '-You can make your dream Pamoccs with 30 color options.\n' +
        '\n' +
        '\n' +
        'Size 1 / 0-3 m / 9,5 cm / 3,7&quot; \n' +
        'Size 2 / 3-6 m / 10,5 cm / 4.1&#39;&#39; \n' +
        'Size 3 / 6-9 m / 11,5 cm / 4,6&quot; \n' +
        'Size 4 / 9-12 m / 12,5 cm / 4,9&quot; \n' +
        'Size 5 / 12-15 m / 13,5 cm / 5.3&#39;&#39; \n' +
        ' \n' +
        ' \n' +
        '\n' +
        'Please add an additional 0,5 to 1 cm (0.25- 0.50 inches) for extra room to wiggle and grow. If you’re in between sizes, please size up.',
      quantity: 19,
      num_favorers: 0,
      tags: [
        'baby boy gifts',
        'baby shower ideas',
        'soft sole moccasins',
        'pamoccs',
        '1st birthday shoes',
        'newborn baby',
        'baby schuhe',
        'custom shoe',
        'leather baby shoe',
        'baby moccasins',
        'baptism shoe for boy',
        'personalized gift',
        'baby boy shoe'
      ],
      processing_min: 3,
      processing_max: 6,
      price: 37.9,
      img: 'https://i.etsystatic.com/27548773/r/il/a44fb7/3860618975/il_fullxfull.3860618975_de7e.jpg',
      onSale: true,
      taxonomy_id: 13
    },
    {
      title: 'PRIDE combination, nubuck leather, Odyssey Handmade, ancient sandals : SPARTA',
      description: 'Dual strap leather sandals, easy and comfortable to wear, Wearable for all occasions.\n' +
        '\n' +
        'Each sandal we make is:\n' +
        '100% Handmade\n' +
        'Made from high quality cow leather\n' +
        'Anti-slip recyclable rubber sole\n' +
        'Made in Greece',
      quantity: 10,
      num_favorers: 0,
      tags: [
        'leather',
        'odyssey',
        'greek sandals',
        'women sandals',
        'leather sandals',
        'full strap sandals',
        'roman sandals',
        'handmade sandals',
        'Ankle Strap Sandals',
        'ancient sandals',
        'Strappy sandals',
        'Pride Combination',
        'Nubuck leather'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 71.5,
      img: 'https://i.etsystatic.com/19288616/r/il/9d9617/3860618575/il_fullxfull.3860618575_7006.jpg',
      onSale: true,
      taxonomy_id: 13
    },
    {
      title: 'Rainbow croc charmjibbitz charm uk',
      description: 'DID YOU KNOW: \n' +
        ' \n' +
        ' Our 5 facts\n' +
        '-Rainbows symbolise peace!\n' +
        '\n' +
        '-You can never get to the end of a rainbow!  \n' +
        '\n' +
        '-You are less likely to see a rainbow in the winter! \n' +
        ' \n' +
        '-A double rainbow appears when light is reflected twice in a raindrop!\n' +
        '\n' +
        '-In Greek mythology “IRIS” is the personification of a rainbow! \n' +
        ' \n' +
        'Why not buy two? One for each shoe. We offer discounts on orders that are 2 and above. Use code “CHARMS” at checkout when placing your order!',
      quantity: 38,
      num_favorers: 36,
      tags: [
        'rainbow jibbitz',
        'Etsy',
        'jibbitz',
        'jibbitz in the uk',
        'jibbitz uk',
        'croc jibbitz bling',
        'designer jibbitz',
        'jibbitz croc',
        'croc charm',
        'croc bling charm',
        'croc charm uk',
        'croc shoe charm'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 5.5,
      img: 'https://i.etsystatic.com/31162176/r/il/b03681/3644264858/il_fullxfull.3644264858_g7bz.jpg',
      onSale: true,
      taxonomy_id: 13
    },
    {
      title: 'Candy Machine croc charm jibbitz charm uk',
      description: '“ You are what you eat, so why not be sweet? “ ~ Jibblettz x\n' +
        '\n' +
        '\n' +
        ' \n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'Pink candy Food jibbitz candy ball machine jibbitz for crocs shoe charm crocs charm jibbitz in the uk',
      quantity: 43,
      num_favorers: 66,
      tags: [
        'sweets jibbitz',
        'jibbitz',
        'jibbitz in the uk',
        'jibbitz uk',
        'croc jibbitz bling',
        'designer jibbitz',
        'jibbitz croc',
        'croc charm',
        'croc bling charm',
        'croc charm uk',
        'croc shoe charm'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 1.5,
      img: 'https://i.etsystatic.com/31162176/r/il/e6ce46/3642429014/il_fullxfull.3642429014_iabz.jpg',
      onSale: true,
      taxonomy_id: 13
    },
    {
      title: 'BFF croc charm jibbitz',
      description: '“ For you and yours x” ~Jibblettz 💕\n' +
        ' \n' +
        ' \n' +
        ' \n' +
        ' \n' +
        ' \n' +
        ' \n' +
        'Best friends forever pink heart jibbitz for crocs charms.',
      quantity: 15,
      num_favorers: 69,
      tags: [
        'BFF jibbitz uk',
        'crocs charm',
        'BFF croc charms',
        'BFF jibbitz',
        'gold croc charm',
        'bling croc charm',
        'croc charms uk',
        'jibbitz',
        'crocs',
        'Croc',
        'charms',
        'croc chain',
        'pink croc charm'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 1.5,
      img: 'https://i.etsystatic.com/31162176/r/il/4f4d1c/3857711097/il_fullxfull.3857711097_cwrv.jpg',
      onSale: true,
      taxonomy_id: 13
    },
    {
      title: 'British Suede and Lambswool Handmade Moccasin Slippers in Beige',
      description: 'Sheepland Ltd is our family run sheepskin business, we&#39;ve been lovingly handcrafting our Slippers and accessories in our Somerset Workshop since 1986, which enjoys views of Glastonbury Tor. We pride ourselves on using British materials, e.g. British wool and sheepskin as much as possible to keep this traditional industry alive. These suede and lambswool Moccasins are still made by hand using the traditional methods right here in Somerset. The lining is a wool lining, which is literally sheared from the sheep in the Spring and is later affixed to a backing fabric, which means it is much less expensive then whole sheepskin. The wool lining is natural undyed wool and gives a cosy inside which will keep you warm throughout the Winter months. These Suede Moccasins can be made without a sole (soft sole) or with a firm rubber sole to allow you to pop outside if need be. We would recommend ordering your usual size, if you are a half size we would suggest ordering up a size. These Suede Moccasins are perfect for all the family, without the price tag of pure sheepskin, these wool lined Moccasins really are the next best thing.\n' +
        'Generally, these Moccasins run on the smaller side, we find most customers prefer to order up a size as they do not like a snug fit, have a broader foot or wish to wear socks. Our Moccasins are made to a standard width fitting.\n' +
        'Please note: these cannot be personalised, we use this box to ask for your telephone number for delivery.\n' +
        '\n' +
        'The firm sole option has a 6 millimetre sole, approximately.    \n' +
        '\n' +
        'If your are an International customer or you have chosen our courier option,  Please provide us with a contact number for delivery only. Thank you in advance.\n' +
        '\n' +
        'Sizing Chart:\n' +
        'Our sizes are UK sizes  which means Mens and Womens are the same, hence they&#39;re not differentiated on our chart, please see below for our approx conversion:\n' +
        'UK 5 = US Ladies 7 = EU 38 \n' +
        'UK 6 = US Ladies 8 = EU 39 \n' +
        'UK 7 = US Ladies 9 = EU 40 \n' +
        'UK 8 = US Ladies 10 = EU 42 \n' +
        'UK 9 = US Ladies 11 = EU 43 \n' +
        'UK 10 = US Men&#39;s 11 = EU 45\n' +
        'UK 11  = US Men&#39;s 12 = EU 46 \n' +
        'UK 12 = US Men&#39;s 13 = EU 47',
      quantity: 552,
      num_favorers: 2449,
      tags: [
        'sheepskin slippers',
        'slippers',
        'warm slippers',
        'fur slippers',
        'moccasin',
        'wool slippers',
        'lambswool',
        'wool lined slippers'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 29.5,
      img: 'https://i.etsystatic.com/13061052/r/il/601381/980606100/il_fullxfull.980606100_oqyf.jpg',
      onSale: true,
      taxonomy_id: 13
    },
    {
      title: 'barefoot shoes women gray nubuck leather zero drop copper rivet – nefesshoes',
      description: 'barefoot shoes women wide toe box comfy shoes, handmade gray nubuck leather all over zero drop for women vivobarefoot black friday, lems barefoot, barefoot minimalist shoes, lems barefoot shoes, camper barefoot, zeazoo shoes, tikki barefoot, barefoot life\n' +
        '------------------------------------\n' +
        '\n' +
        '✅ We used 1st quality calf leather on and inside the shoes, and buffalo leather on the sole. We supported the conductivity by adding a pure copper capsule made of buffalo skin to the base. We offer your feet the sensory feedback they crave. You feel the ground and you begin to reconnect with the environment. You do not need to wear socks. Transfer the electricity in your body to the ground.\n' +
        '✅ Offering a naturally air-conditioned environment to your feet, these shoes surprisingly keep your feet cool and dry, while your feet are saturated with oxygen. There will be no problems such as wounds, eczema, fungus, odor on your foot skin. Ideal for daily use in summer and spring. It is preferred indoors in the winter period.\n' +
        '✅ We thought about the comfort of your feet. We offer freedom to your fingers with our design. Give your toes much-needed freedom by allowing your toes to spread out into their natural stance.\n' +
        '✅ These handmade shoes are lightweight so you won&#39;t even notice you&#39;re wearing them. If you&#39;ve ever worn great barefoot shoes, you&#39;ll never want to go back to regular shoes. It&#39;s crazy that we realize the weight we carry on our feet every day when we switch to lighter shoes. Switch to barefoot shoes and say goodbye to heavy feet.\n' +
        '✅ It is completely normal to feel the inner seams at first. Within a few hours, the cotton thread will be level with the skin and will not be felt.\n' +
        '✅ All photos of the product were taken by us. We will send you the same product as in the picture. the pattern does not change, but we cannot guarantee the color tone constancy. You may see a slight color tone difference between the product you bought and the photo you see on the screen, due to the light of the environment where the photo was taken and the color settings of the screen you are looking at!\n' +
        '✅ If the product does not fit your feet or there is an unexpected problem, you can use our warehouse in America to return it. You don&#39;t pay high shipping charges.\n' +
        '✅ We wish these healthy shoes to be a part of your spring and summer habits. It feels good to think that your feet are more comfortable than ever before.',
      quantity: 9,
      num_favorers: 67,
      tags: [
        'womens wider shoes',
        'barefoot',
        'barefoot shoes',
        'barefoot sandals',
        'women shoes',
        'earthing shoes women',
        'shoes for pregnant',
        'yemeni',
        'handmade shoes',
        'leather shoes',
        'wide toe shoes',
        'gray wide toe shoes',
        'barefoot shoes women'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 89,
      img: 'https://i.etsystatic.com/34365344/r/il/c68a6a/3797566974/il_fullxfull.3797566974_i8yn.jpg',
      onSale: true,
      taxonomy_id: 13
    },
    {
      title: 'Ready To Ship | Ballet Flat Shoes in Navy Blue | Satin Finish Women Shoe | Wedding Shoe | Bridesmaid',
      description: 'READY TO SHIP !\n' +
        '\n' +
        'These super cute Ballerinas are really so soft and light, absoultly essential in every girl wardrobe, you will look gorgeous when wearing them !\n' +
        '\n' +
        'Give a gift to your lovely bridesmaid which they would remember for lifetime. ❤💙💚💛💜\n' +
        '\n' +
        'The moment we saw how our design turned out on the shoes, our instant reaction was, &quot;LOVELY&quot; and we fell in love with these beauties.\n' +
        '\n' +
        'Size Chart:\n' +
        'US 6 - Size 36 - 23.5 cms\n' +
        'US 7 - Size 37 - 24.0 cms\n' +
        'US 7.5 - Size 38 - 24.5 cms\n' +
        'US 8 - Size 39 - 24.8 cms\n' +
        'US 9 -Size 40 - 25.5 cms\n' +
        'US 10 -Size 41 - 26.0 cms\n' +
        '\n' +
        'All in stock items will be shipped from India within 2-3 business days after receipt of payment. International orders may take anytime between 3 to 5 weeks for your shipments to reach you. Sometimes it reaches early..... I ship using India&#39;s postal service. Please inform me if you would like to arrange a faster shipping option ( Extra charges applicable for expedited shipping ).\n' +
        '\n' +
        'Note - All sales are final and non-refundable.',
      quantity: 798,
      num_favorers: 10,
      tags: [
        'navy blue flats',
        'navy dress shoes',
        'women shoes',
        'navy blue',
        'wedding shoes',
        'navy blue sandals',
        'navy glitter shoes'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 26.99,
      img: 'https://i.etsystatic.com/27555006/r/il/eec42f/3721579643/il_fullxfull.3721579643_pyr7.jpg',
      onSale: true,
      taxonomy_id: 13
    },
    {
      title: 'Made to order Women Slingbacks Slides flip flop gladiator sandals cut-out sandals thong openwork summer boots casual boho summer booties',
      description: 'Our atelier produce shoes and clothes made to orderWe include a free delivery by ordinary post services.\n' +
        '\n' +
        'Ready-to-wear goods and goods in stock\n' +
        '\n' +
        'If you place your order for this category of our products, we will ship within 2-3 days if the goods of the required size and color are available.                                                                                                                                        An individual order within the standard size chart without changing the design. \n' +
        '\n' +
        'If there is no desired color or size available, the production can take up 2-3 weeks.\n' +
        'Why? If the sole is not in stock, its production needs to be ordered from partners.  \n' +
        'If the desired leather is not in stock, it needs to be ordered and delivered from Italy. \n' +
        '\n' +
        'Custom-made order:\n' +
        'When we make an custom order, we make individual patterns according to your measurements and your requested length, width and shape. \n' +
        'We also order from partners a shoe last of the requested shape and the sole and heels of the chosen color, the width and leather of your preferred color and quality. \n' +
        'This makes the complete production to reach the period of 2-3 months, as each production process requires 2-3 weeks.  \n' +
        'This can not be accelerated, since the number of employees is small and the designer has a two-months waiting list. \n' +
        'Please, place your order taking all these into consideration.\n' +
        'If you want your order to be made and sent faster, we cannot accept it as a custom-made.\n' +
        'Please order form our ready - to-wear  offers.\n' +
        '\n' +
        'If your wish to order sizes 35 and 42, 43, 44, 45, please proceed to the custom-made category. \n' +
        '\n' +
        'PLEASE MIND: \n' +
        'Custom-made orders are produced within 2-3 months and price for this order doubles.\n' +
        'Women open toe textile cotton linen gladiator knee high sandals cut-out Perforated openwork boots knee high flat casual boho summer booties\n' +
        'SIZE CONVERSION TABLE\n' +
        '\n' +
        'EU 35 = 5 US = 22,5cm\n' +
        'EU 36 = 6 US = 23.5cm\n' +
        'EU 37 = 6.5 US= 24cm\n' +
        'EU 38 = 7 US = 24.5cm\n' +
        'EU 39 = 8 US 25cm\n' +
        'EU 40 = 9 US = 26cm\n' +
        'EU 41 = 10 US = 27cm\n' +
        'EU 42 = 11 US = 28cm\n' +
        'EU 43 = 12 US = 29cm\n' +
        '\n' +
        'Made by one of the shoe-making leaders in Europe.\n' +
        'SIZE GUIDANCE\n' +
        '&lt; Fit recommendation: Our boots run mostly exactly to the size. Please measure the length of your foot and determine the appropriate size based on our size chart. We’d especially ask people wearing a size between 8 and 9.5 to compare their foot length to our size chart to choose a size.\n' +
        '&lt; EU sizing: Please note that we use premium Italian leather soles for our shoes. Because these soles run in European sizes, we have included the converted US sizing within the size chart. Again, you will receive EU-sized shoes based on your selection (among these sizes - 36, 37, 38, 39, 40, 41, 42, 43 and 44). We hope this conversion table helps you with determining the proper fit.\n' +
        '\n' +
        'MATERIAL: Genuine Italian leather.\n' +
        '\n' +
        'THANK YOU for visiting our shop! We hope to offer you an amazing experience with unique, statement designs, highest quality, fast shipping and delightful customer service!\n' +
        '\n' +
        'Disclaimer\n' +
        'Please read before placing your order\n' +
        '\n' +
        'Production\n' +
        '1. 1.\tIf you order a ready-to-wear product, you will get it exactly as you see it in our online store. Since you saw and evaluated the product before you bought it, we do not take responsibility for the product not fitting correctly.\n' +
        '\n' +
        '1. 2.\tIf you order a product with some changes, you will get it exactly as you wrote your information to us, we do not take responsibility for the product not fitting correctly. This order takes up to 3 weeks and cannot be produced and delivered faster. If your wish to order sizes 35 and 42, 43, 44, 45, please proceed to the custom-made category. \n' +
        'PLEASE MIND: \n' +
        'Custom-made orders are produced within 2-3 months and price for this order doubles.\n' +
        '\n' +
        '1. 3.\tIf your order a custom - made product from us, you will get it exactly as you wrote your information to us, we do not take responsibility for the product not fitting correctly. The individually placed order takes up to 3 months and cannot be produced and delivered faster.\n' +
        '\n' +
        'Delivery\n' +
        'A worldwide shipping BY ORDINARY POST is included in the price. \n' +
        'Should you require a courier delivery, its cost will be calculated according to the postal code of your area. \n' +
        'A COURIER DELIVERY TO YOUR AREA IS NOT INCLUDED IN THE PRICE OF THE PRODUCT.\n' +
        '\n' +
        'Tax fees\n' +
        'We are not responsible for any tax fees applied to your area.\n' +
        '\n' +
        'Force Majeure\n' +
        'In case of Force Majeure (pandemic, fires, floods, deaths etc) the production and delivery period can be discussed individually. \n' +
        '\n' +
        'Refund\n' +
        'A refund can be made in case of a mistake on our part.\n' +
        '\n' +
        'IF YOU DO NOT AGREE WITH THESE TERMS, PLEASE DO NOT PLACE YOUR ODER.\n' +
        '\n' +
        'CUSTOM ORDERS: our design studio, provide fully-customized designs, and accept customization requests also we provide the garment in additional colors when available. Please send us a message prior to placing your order with any requests. Kindly note that customized items are ineligible for return or exchange.\n' +
        '\n' +
        'Thank you for choosing our designs! We are honored to create them for you with love and care!\n' +
        '\n' +
        'Please message us if you have any questions. We’re here to help with whatever we can.If you need personalization the time for the making your custom order will rise till 2-3 month and it is not possible for return only if it is not as was requested or bad qualityIn a case of Force Majeure, for example, lost package or extend time from the not fault of us, we can replace your item, but not refund the money.',
      quantity: 7,
      num_favorers: 0,
      tags: [
        'summer boots for wide calves',
        'boho knee high summer boots',
        'lace decorated cotton boots',
        'textile fringles cotton boots',
        'cotton linen summer boots',
        'textile cotton flip flops',
        'textile l linen flat thongs',
        'peep toe summer boots',
        'open toe eco vegan boots',
        'Slingbacks Slides tall sandals',
        'flip flop gladiator sandals',
        'linen cotton gladiator sandals',
        'cut-out casual boho  booties'
      ],
      processing_min: 10,
      processing_max: 15,
      price: 300,
      img: 'https://i.etsystatic.com/25101646/r/il/937dd1/3813094892/il_fullxfull.3813094892_myfv.jpg',
      onSale: true,
      taxonomy_id: 13
    },
    {
      title: 'Spring Décor |Personalized Bunny | Easter Basket Filler| Gift| Plush Toy',
      description: 'Plush Easter Bunny Décor- Personalized Easter Bunny,  Basket Filler, Easter Carrots Bunny Décor,  Easter Basket Filler\n' +
        '\n' +
        'Get these pretty Bunnies to add to your Easter Décor or Easter Basket. Personalize with name or date.\n' +
        '\n' +
        'Felt Rabbit 14in,  personalization, Easter Bunny, Easter, plush, plush gnomes valentine\n' +
        '\n' +
        'These Bunnies are the cutest standing at 14inches make a perfect gift or a great addition to your Easter décor.  Limited quantities due to such high demand.  Great to commemorate a 1st Easter, used as a birth announcement, cute proposal the possibilities are endless. \n' +
        '\n' +
        '\n' +
        'You can personalized on the Ear, Bottom  or Foot.\n' +
        '\n' +
        '\n' +
        'Available Styles are -  White and Brown Bunnies in both Male and Female gender.\n' +
        '\n' +
        'Please Note Bunnies may vary slight  in design. \n' +
        'Due to small pieces not recommend for children under the age of 5.',
      quantity: 13,
      num_favorers: 9,
      tags: [
        'Plush',
        'Decor',
        'customized Bunny',
        'Easter Basket',
        'Dollar Tree Bunny',
        'Ring Boy Gift',
        'brown',
        'white',
        'custom',
        'easter',
        'Bunny',
        'spring',
        'flower girl'
      ],
      processing_min: 1,
      processing_max: 4,
      price: 9,
      img: 'https://i.etsystatic.com/32984363/r/il/a0c327/3776541149/il_fullxfull.3776541149_95z4.jpg',
      onSale: true,
      taxonomy_id: 14
    },
    {
      title: 'Thumb Grip Caps For Switch / Switch OLED /Switch Lite - Game Cats - Joystick Cap - Joy-con Silicone Cover  - Pack of 4',
      description: '🔥About Switch Thumb Grip Caps ：\n' +
        '\n' +
        '- Game Cats Theme\n' +
        '- Pack of 4\n' +
        '- Made of Silicone\n' +
        '- For Switch and Switch Lite.\n' +
        '- Decorate your Switch/Switch Lite\n' +
        '- Protect your Switch controller thumb sticks in perfect condition.\n' +
        '\n' +
        '⚡️About Our Shipping:\n' +
        '\n' +
        '- Due to the outbreak of COVID-19,Delivery may be delayed. If you are in a hurry to receive the order, please consider it before placing an order.\n' +
        '- Shipping usually takes is about 10-21 business days right now.\n' +
        '- US/UK/Germany: 7-10 business days on average.\n' +
        '\n' +
        '❤️Shop Policy：\n' +
        '\n' +
        '- Check out our other listings. We offer free shipping on USA orders over $35.\n' +
        '- If you are not satisfied with the product, please contact me first for replacement or return\n' +
        '\n' +
        '❤️Thank you for choosing Coco Koala!',
      quantity: 111,
      num_favorers: 7438,
      tags: [
        'Switch Thumb Grip',
        'Switch Paw Print',
        'Nintendo switch lite',
        'Joystick cap',
        'Cute thumb grip',
        'Switch Accessories',
        'thumb Grip cover',
        'thumb grip caps',
        'thumb grip paw',
        'Switch lite skin',
        'Switch Lite case',
        'Switch Oled case',
        'Switch Oled skin'
      ],
      processing_min: 1,
      processing_max: 5,
      price: 66.24,
      img: 'https://i.etsystatic.com/22715305/r/il/99e5c3/3395509792/il_fullxfull.3395509792_2chv.jpg',
      onSale: true,
      taxonomy_id: 14
    },
    {
      title: 'Climbing Holds',
      description: 'This Mini-Mac is one of our most positive shapes of the set. Mimicking those big comp holds for flashy moves and creative setting. The texture we use is ultra grippy and long lasting, allowing the hold to be turned around and used as comfortable sloper. Complete with steel inserts in each screw hole for increased durability. You can also choose the comp coating option which mimics that sandy texture often used on macro holds.\n' +
        '\n' +
        '100% Reinforced PU',
      quantity: 1,
      num_favorers: 0,
      tags: [
        'climbing',
        'holds',
        'crimp',
        'jug',
        'sloper',
        'climbing hold',
        'pinch'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 22,
      img: 'https://i.etsystatic.com/35327750/r/il/45816f/3813085774/il_fullxfull.3813085774_jwlr.jpg',
      onSale: true,
      taxonomy_id: 14
    },
    {
      title: 'Overalls for doll size 30 - 33 cm incl. scarf',
      description: '_*cute overall for doll size 30 - 33 cm*_\n' +
        '\n' +
        'Self-sewn jumpsuit made of soft jersey fabric with buttons. The romper is completely lined with jersey. In addition, a cute scarf with Velcro. The set is ideal for the cold days.\n' +
        '\n' +
        'The design and production of cute doll clothes in different sizes takes place in my small studio near Salzburg. In addition to doll clothing, my extensive range also includes children&#39;s and baby clothing such as shirts, trousers, pump pants, blouses and dresses. In addition, backpacks, aprons and flat men are manufactured.\n' +
        'During production, special attention is paid to high-quality fabrics and careful processing.\n' +
        '\n' +
        'Material: Waffle fabric, jersey, the buttons are different and may differ from the picture.\n' +
        '\n' +
        'Dimensions of the doll\n' +
        'Size approx. 30 - 33 cm\n' +
        'Abdominal circumference 20 - 25 cm\n' +
        'Trouser length 14 cm\n' +
        'Sleeve length 9 cm\n' +
        'Length of the upper body 15 - 16 cm',
      quantity: 1,
      num_favorers: 20,
      tags: [
        'doll',
        'doll clothes',
        'doll dress',
        'children&#39;s things',
        'doll things',
        'winter',
        'Jacket',
        'fleece',
        'doll dresses',
        '33',
        'Overalls',
        'Scarf',
        'Rompers'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 19.9,
      img: 'https://i.etsystatic.com/18020093/r/il/a131f1/3570956259/il_fullxfull.3570956259_suqv.jpg',
      onSale: true,
      taxonomy_id: 14
    },
    {
      title: 'Large framed Chalkboard, Garden, Playroom, SquarE ChalkboarD, Rectangle Chalkboard',
      description: 'PLEASE NOTE CURRENT TURNAROUND TIMES ARE 3-5 WEEKS\n' +
        '\n' +
        '\n' +
        'Large garden chalkboard with rainbow edging.\n' +
        '\n' +
        'NO LONGER WITH CHALKHOLDER DUE TO SUPPLIER ISSUES DURING COVID-19\n' +
        '\n' +
        'Frame thickness will be 4.5cm if ordering a name \n' +
        '2.5cm if no name is ordered.\n' +
        '\n' +
        'Orders requesting a name in personalisation box with no payment for this will be supplied without and have a 2.5cm frame\n' +
        '\n' +
        'Ideal for wall/fence hanging.  Fixings included (brackets only)\n' +
        '\n' +
        'Multiple sizes available\n' +
        '60 x 40 cm rectangular \n' +
        '50x 70 cm rectangular \n' +
        '60 x 60 cm squared \n' +
        '60 x 80 cm rectangular \n' +
        '70 x 70 cm squared\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'Why not add personalisation onto your chalkboards?\n' +
        'Listing to purchase this seperately is:\n' +
        '\n' +
        'https://www.etsy.com/uk/listing/835626476/personalisation-for-chalkboard-orders?ref=shop_home_active_1&frs=1\n' +
        '\n' +
        'IF YOU ADD PERSONALISATION, THE FRAMEWORK WILL BE THICKER TO ACCOMODATE THIS.\n' +
        '\n' +
        '\n' +
        'PLEASE NOTE:\n' +
        'Disclaimer:\n' +
        'Whilst we take every precaution to ensure that our chalkboards are weather proofed, timber is still a natural product, and there fore may bend, bow or split, therefore Life expectancy cannot be guaranteed due to the unpredictability of weather conditions and timber reactions.\n' +
        'To help prolong the life and the colour vibrancy of your chalkboards we recommend that they are covered during the winter months or stored indoors, this would be recommended to do during the months of November - March whilst your garden is not in use. No chalkboards will be replaced if these care instructions are not followed.\n' +
        '\n' +
        'all timbers used in the making of our chalkboards is natural and will bear natural makings such as knots, grain patterns and occasionally small ridges, and some of the paints and stains we use will not cover these.\n' +
        '\n' +
        'There will be no refunds, replacements or exchanges made for these issues.\n' +
        '\n' +
        'These include but not exclusive too, darker patches in paint work, grain patterns being visible under the paintwork, or visible knots of any kind.',
      quantity: 52,
      num_favorers: 617,
      tags: [
        'rainbow',
        'framed chalkboard',
        'square chalkboard',
        'rectangle chalkboard',
        'garden chalkboard',
        'outdoor playarea',
        'playroom decor',
        'sensory toys',
        'large chalkboard',
        'outdoor games',
        'gifts for children',
        'office notice board',
        'outdoor play'
      ],
      processing_min: 15,
      processing_max: 25,
      price: 14.12,
      img: 'https://i.etsystatic.com/7344839/r/il/c91548/2996658519/il_fullxfull.2996658519_h1hc.jpg',
      onSale: true,
      taxonomy_id: 14
    },
    {
      title: 'Dress for doll size 46-50',
      description: '_*cute dress for doll in size 46-50 cm.\n' +
        '\n' +
        'Self-sewn doll dress made of cute cotton fabric with matching leggings.\n' +
        '\n' +
        'The dress is an ideal gift for the daughter, granddaughter or birthday.\n' +
        '\n' +
        'Dimensions of the doll\n' +
        'Size 46-50 cm\n' +
        'Abdominal circumference 35 cm\n' +
        'Hip circumference 40 cm\n' +
        'Sleeve length 15 cm\n' +
        'Trouser length 19 cm\n' +
        'Inner leg length 14 cm\n' +
        'Width from shoulder to shoulder outside 14 cm',
      quantity: 1,
      num_favorers: 5,
      tags: [
        'doll',
        'clothing',
        'doll pants',
        'doll dresses',
        'doll clothes',
        'Dress',
        'dolls',
        'children&#39;s items',
        'Doll dress',
        '46',
        '48',
        '50',
        'Baby doll'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 14.4,
      img: 'https://i.etsystatic.com/18020093/r/il/c12d7f/1825738882/il_fullxfull.1825738882_ift3.jpg',
      onSale: true,
      taxonomy_id: 14
    },
    {
      title: 'Sun Protection for Car Sun Visor Kids Baby Girl Young Forest Animals Printed with Name-n Personalized',
      description: 'Relaxed car rides with the personalized sun protection with desired motif rabbit, fox, cute mouse, elephant, fawn, owl for children\n' +
        '\n' +
        'Car rides are not always convenient for children. They find them more pleasant when they can fully enjoy the view and are not dazzled by the sun.\n' +
        'The personalized sun protection printed with desired motif and name offers in addition to protection from direct sunlight and a pleasant climate in the car also a good view of the outside for your child. It allows enough brightness into the interior of the car to be able to look at a book while driving, e.B.\n' +
        '\n' +
        'The sun visor made of polyester chamois is attached to the lens with two suction cups and leaves no residue when removed. It measures 37.5 x 44 cm and fits into almost any side window - please check dimensions anyway. The sun protection car offers your child pleasant shade and is not equipped with a special UV protection.\n' +
        'You are welcome to order the sun protection as a set for the two rear side windows. Note that both sun visors are then printed with the same motif and name.\n' +
        '\n' +
        'Let yourself be inspired by our numerous motifs and find the right one for your child. Enter the desired name on the shopping cart page in the field &quot;Your personalization requests&quot;.\n' +
        '\n' +
        'Please note:\n' +
        '• No changes can be made to the font, font color or motif components.\n' +
        '• A predefined area (maximum width and height) in the motif is &quot;reserved&quot; for the name. Proportional to the width (number of letters), this range is fully exploited, so that short names are printed larger and long names are correspondingly smaller. Deviations from the name size in our illustrated pattern are therefore possible.\n' +
        '• Names that contain more than ten letters therefore become small and possibly less legible. Should you nevertheless order, we assume an express customer request.\n' +
        '• The settings of your device/screen make the colors look different than in reality.\n' +
        '\n' +
        'Method of manufacture:\n' +
        'Sublimation printing process\n' +
        'The pressure is not felt on the sunscreen.\n' +
        '\n' +
        'Scope of delivery:\n' +
        '- A sun visor with two suction cups\n' +
        '- As a set: two identical sun visors with corresponding suction cups\n' +
        '\n' +
        'Material:\n' +
        '- Sun protection: 90% polyester, 10% manganese steel\n' +
        '- Suction cup: 100% PVC\n' +
        '\n' +
        'In our shop you will also find lunch boxes, bags, window pictures and much more.\n' +
        'Please enter ALL personalization information in the personalization field, subsequent notes on orders and later messages can not be taken into account!\n' +
        'The color display may vary depending on the browser and monitor settings; these deviations are technically never completely avoidable and not a reason for complaint.\n' +
        '\n' +
        'The stated delivery times cannot be shortened.\n' +
        '---------------------------------------\n' +
        '-&gt; If you have any doubts, please contact us BEFORE placing an order.\n' +
        'We will answer your inquiries as soon as possible.\n' +
        'Please always wait for our answer so that questions and orders can be accurately assigned.\n' +
        '---------------------------------------\n' +
        '\n' +
        'MORE SUN VISORS:\n' +
        'https://www.etsy.com/de/shop/wolgakreativ?ref=seller-platform-mcnav&section_id=24211557\n' +
        '\n' +
        '\n' +
        'BACK TO THE SHOP:\n' +
        'https://www.etsy.com/de/shop/wolgakreativ',
      quantity: 78,
      num_favorers: 53,
      tags: [
        'awning',
        'car',
        'baby',
        'child',
        'on the way',
        'sunshade',
        'sun protection film',
        'window',
        'automobile',
        'uv protection',
        'Thermal',
        'volga-creative',
        'sun protection car'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 16.9,
      img: 'https://i.etsystatic.com/10112050/r/il/55dc1e/3626964046/il_fullxfull.3626964046_nem6.jpg',
      onSale: true,
      taxonomy_id: 14
    },
    {
      title: 'Rosy Marble | White and Pink Marbled Resin Dice Set (7)',
      description: 'Colors/Style: White with Pink Marbled Design\n' +
        'Glitter: None\n' +
        'Unique Patterns: Yes\n' +
        'Other: \n' +
        '\n' +
        'Resin Dice Set for Dungeons and Dragons 5e or other RPG/Tabletop games. Great accompanying product to go with our 3D printed Condition Rings. After all, you can always use more dice!\n' +
        '\n' +
        '*Unique Patterns: Your pattern will vary at least slightly from the picture as each set is unique. Some of the dice may have minimal swirls/effects while others have heavy concentrations.\n' +
        '\n' +
        'Set includes standard sized: D20, D12, (2) D10, D8, D6 and D4 (as pictured).',
      quantity: 15,
      num_favorers: 120,
      tags: [
        'dungeons and dragons',
        'critical role',
        'rpg',
        'pathfinder',
        'board gaming',
        'tabletop RPG'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 7.5,
      img: 'https://i.etsystatic.com/14476273/r/il/2aa1c3/3217053654/il_fullxfull.3217053654_f5wm.jpg',
      onSale: true,
      taxonomy_id: 14
    },
    {
      title: 'Pink Dream Lama DnD Dice Set for Dungeons and Dragons, D&D, Pathfinder, D20 Polyhedral Resin Dice, Fit in Dice Box, Tower',
      description: 'Our mission is to inspire tabletop gamers with our beautiful sections of dice, terrains, and miniature. All of our dice are made to impress your friends with it&#39;s stunning and irresistible beauty.\n' +
        '\n' +
        '🤯 FREE SHIPPING TO ALL ORDERS $35 OR MORE----&----ALL ORDERS OVER $150 WILL BE 25% OFF 🤯\n' +
        '\n' +
        '-------------------------------------------------------------------------------------------------------------------------\n' +
        '\n' +
        '👍 INCLUDED:\n' +
        '\n' +
        '- 1 Pink Dream Lama Dice Set (Full 7 Dice Set)\n' +
        '\n' +
        'Size of each dice:\n' +
        '\n' +
        'D4 = 16 mm\n' +
        '\n' +
        'D6 = 16 mm\n' +
        '\n' +
        'D8 = 16 mm\n' +
        '\n' +
        'D10 = 16 mm\n' +
        '\n' +
        'D% = 16 mm\n' +
        '\n' +
        'D12 = 18 mm\n' +
        '\n' +
        'D20 = 18 mm\n' +
        '\n' +
        '➕ You can find more items like this at our shop: www.etsy.com/shop/3degos\n' +
        '\n' +
        'If you have any further questions please contact me at anytime\n' +
        '\n' +
        '------------------------------------------------------------------------------------------------------------------------\n' +
        '\n' +
        '❓ ❓ More Info:\n' +
        '\n' +
        '- We use high quality and bio-friendly resin and ink for all of our dice\n' +
        '\n' +
        '-----------------------------------------------------------------------------------------------------------------------\n' +
        '\n' +
        '⛔️ Policy:\n' +
        '\n' +
        '❗❗The essence of this shop is to provide tabletop gamers with high-quality items to bring their imagination to the table. We will not ship any product that is less than perfect. If you are not satisfied, we will guarantee a full refund❗❗\n' +
        '\n' +
        'We ensure every product that we ship are what you expect. If you are not satisfied with our product/s you can contact us for a full refund. This is made using the additive manufacturing process, laying down layers by layers to create a detailed object. Due to the process, they might be some artifacts, such as tiny hairs between small gaps. We try our best to clean up the model before shipping it to our customers. We are not responsible for any of the damage or harm caused by the misuse of our product/s.',
      quantity: 83,
      num_favorers: 373,
      tags: [
        'dnd',
        'dnd dice',
        'dnd dice set',
        'dnd dice box',
        'dice set dnd',
        'dice set',
        'dungeons and dragons',
        'dice',
        'resin dice',
        'polyhedral dice set',
        'd20 dice',
        'pathfinder',
        'warhammer'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 16.24,
      img: 'https://i.etsystatic.com/18966329/r/il/37e1a0/3222575158/il_fullxfull.3222575158_byht.jpg',
      onSale: true,
      taxonomy_id: 14
    },
    {
      title: 'Toniebox protective film with name customizable | Raccoon as Indian',
      description: 'Raccoon as Indian\n' +
        '\n' +
        'Personalized protective film suitable for an individual & unique toniebox\n' +
        '\n' +
        '- optimally protects against colour abrasion, dirt and embellishes individually\n' +
        '- useful and modern gift idea from the larIFEE brand from the Markenhaus Löwenthal Media GmbH\n' +
        '- The item is great as a birthday gift, Christmas gift, Easter gift, for name day or just to make your child or acquaintance happy\n' +
        '- Use as: water-repellent protective film, for embellishment of the toniebox, full protection supplement, accessories Toniebox starter set, toniebox foil with name, toniebox protection, tonie protection, supplement to toniebox bag, supplement toniebox protective case, toniebox foil Buy\n' +
        '\n' +
        'Personalization options:\n' +
        '- First name\n' +
        '- If you want a different letter, you need to tell us beforehand!\n' +
        '\n' +
        'Product:\n' +
        '- Adhesive film made of high quality vinyl!\n' +
        '- Foil smudge- and scratch-resistant, easy to clean\n' +
        '- easy to apply and correctable\n' +
        '- long durability of the colours\n' +
        '- curved font\n' +
        '\n' +
        'Type of production:\n' +
        '- printed, plotted and personalized in Germany in the Allgäu. All Handmade created with great attention to detail.',
      quantity: 962,
      num_favorers: 31,
      tags: [
        'toniebox starterset',
        'toniebox personalized',
        'toniebox protective film with name',
        'tonie box protective film',
        'toniebox foil with name',
        'toniebox sticker with name',
        'protective film with name toniebox',
        'beautiful toniebox protective film',
        'sticker for toniebox',
        'protective film for toniebox',
        'toniebox protective foil wash bear'
      ],
      processing_min: 1,
      processing_max: 1,
      price: 7.98,
      img: 'https://i.etsystatic.com/23946998/r/il/5403fc/2589112809/il_fullxfull.2589112809_ju8e.jpg',
      onSale: true,
      taxonomy_id: 14
    },
    {
      title: 'Printable Pattern Online Tutorial - Easy Sew Doll/Toy Swaddle',
      description: 'Easy to follow pattern with a step by step online tutorial. Children love wrapping and cuddling their favourite doll or soft toy in this sweet swaddle. Print the pattern at home, straight after purchase.\n' +
        '\n' +
        'This listing is for a printable toy/doll swaddle. Not to be used for a baby or child.\n' +
        '\n' +
        'The swaddle at its longest part measures 35cm (14in) long, and 19cm (7.5in) wide. It can fit a doll up to 42cm (16in) in length.\n' +
        '\n' +
        'Instructions and tutorial can be found at: \n' +
        '\n' +
        'https://richesandroses.blogspot.com/2015/12/baby-doll-swaddle-pattern-and-tutorial.html\n' +
        '\n' +
        'Also available in a pattern bundle with an easy balloon cover to sew:\n' +
        '\n' +
        'https://www.etsy.com/au/listing/1178044308/pack-of-two-2-digital-printable-patterns',
      quantity: 13,
      num_favorers: 46,
      tags: [
        'kids',     'pattern',
        'sew',      'easy',
        'Doll',     'Play',
        'Gift',     'Toy',
        'Wrap',     'Swaddle',
        'Swaddler', 'Pretend',
        'Girl'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 4.8,
      img: 'https://i.etsystatic.com/6329716/r/il/e27f18/3716074766/il_fullxfull.3716074766_j2em.jpg',
      onSale: true,
      taxonomy_id: 14
    },
    {
      title: 'Set of 8 All Weather Cornhole Bean Bags Pick Your 2 Colors FREE SHIPPING',
      description: 'Our Bags Are Made With The Best Quality 12 oz Duck Canvas!! \n' +
        'Filled with plastic resin pellets!!! \n' +
        'Check out my store!!! \n' +
        '\n' +
        'Top Row Left To Right \n' +
        'Turquoise \n' +
        'Charcoal (10 oz canvas) \n' +
        '\n' +
        '2nd Row \n' +
        'Orange \n' +
        'Black \n' +
        'Yellow \n' +
        'Brown \n' +
        'Snap Pink \n' +
        '\n' +
        '3rd Row \n' +
        'Khaki \n' +
        'Red \n' +
        'Bright White \n' +
        'Royal Blue \n' +
        'Burgundy \n' +
        '\n' +
        '4th Row \n' +
        'Grass Green \n' +
        'Purple \n' +
        'Fuchsia \n' +
        'Navy Blue \n' +
        'Gray \n' +
        '\n' +
        'Bottom Row \n' +
        'Light Blue \n' +
        'Hunter Green \n' +
        'Gold \n' +
        'Lime Green(10 oz canvas) \n' +
        '\n' +
        '-All Bags are Double Stitched on a industrial sewing machine with heavy duty nylon upholstery thread inside and out for durability, this is not the &quot;heavy duty&quot; thread which is still a cotton base and can break, we sew ours with a nylon thread which is very hard to break \n' +
        '-All bags are regulation size of 6&quot;x 6&quot; \n' +
        '-These bags weigh 15.5-16.0 oz. \n' +
        '-All bags are made with 100% Duck Cloth for Durability \n' +
        '- We strive to achieve a happy customer and communication is always open, feel free to message .\n' +
        'Check out my other auctions. \n' +
        '\n' +
        'Please message me if you have any questions. I also do special orders upon request. Thank You for looking!!',
      quantity: 378,
      num_favorers: 351,
      tags: [],
      processing_min: 1,
      processing_max: 1,
      price: 26.99,
      img: 'https://i.etsystatic.com/15194328/r/il/f85a6c/3097091304/il_fullxfull.3097091304_kx1x.jpg',
      onSale: true,
      taxonomy_id: 14
    },
    {
      title: 'Safe Wooden Knife for Kids, Children&#39;s Utensil Montessori Knife, Toddler Vegetable and Fruit Cutter, Oak Chopper',
      description: 'This is a child-friendly safe wooden knife that can be used for educational purposes with you toddler.\n' +
        'It&#39;s easy to use and it can&#39;t cut the skin. Your little chef can learn while being safe. It cuts through fruits and vegetables, cheese, bread and much more.\n' +
        'There are numerous ways to use this Eco friendly SUPER SAFE knife cutter / chopper:\n' +
        '\n' +
        '1)Parents can use these knives with babies and children for sensory and play-dough play \n' +
        '2)Toddlers benefit while having Montessori practical life activities (such as: how to prepare their own snack: they can use child-friendly wooden knife to cut a banana for instance)\n' +
        '3)Using this product also helps developing fine motor skills and promotes child independence\n' +
        '4)Young children as well as older children can use these for heuristic play, pretend play and open-ended play ~ multitude of options.\n' +
        '\n' +
        'Each knife is made of Oak wood.\n' +
        '\n' +
        'THIS LISTING IS ONLY FOR THE WOODEN CHOPPER \n' +
        '\n' +
        'Care instructions:\n' +
        'Do not leave the knife to soak in water, wipe dry immediately \n' +
        '\n' +
        '🎀 Dimensions: \n' +
        'height 9 cm (3.5 inch),\n' +
        'length 10 cm (4 inch) \n' +
        'thickness 2cm (0.75 inch).\n' +
        '\n' +
        '📝NOTE:\n' +
        '• Water based paints use really let the wood grain shine through making them wonderfully tactile and appealing to the touch.\n' +
        '• Our toys are made from organic, natural materials and non-toxic child safe finishes and paints.\n' +
        '• Toys should not be submerged in water, use damp cloth to wipe them.\n' +
        '• This item is handmade and may be slightly different in wood grain and tone from what you see in pictures, you get a unique piece!\n' +
        '• DO NOT WASH IN DISHWASHER\n' +
        '\n' +
        '*********************************************************\n' +
        '➡️FOR THE SAME KNIFE IN BEECH WOOD PLEASE FOLLOW THIS LINK\n' +
        'https://www.etsy.com/listing/866161007\n' +
        '➡️FOR THE SAME KNIFE IN ASH WOOD PLEASE FOLLOW THIS LINK\n' +
        'https://www.etsy.com/listing/908538439\n' +
        '\n' +
        '\n' +
        '➡️FOR MORE UNIQUE WOODEN GAMES AND TOYS VISIT MY SHOP\n' +
        'https://www.etsy.com/shop/OlivkaWood',
      quantity: 780,
      num_favorers: 40256,
      tags: [
        'Safe Knife for Kids',
        'Montessori Knife',
        'Kids wooden knife',
        'wooden knife',
        'montessori materials',
        'educational toys',
        'kitchen toy',
        'Toddler knife',
        'Safe wooden knife',
        "children's utensils",
        'fruit cutter kids',
        'toddler cutter',
        'vegetable cutter'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 26.99,
      img: 'https://i.etsystatic.com/19494560/r/il/09cb28/2802828314/il_fullxfull.2802828314_oyj7.jpg',
      onSale: true,
      taxonomy_id: 14
    },
    {
      title: '1991 Beauty & The Beast &quot;Belle&quot; Doll/Mattel Doll/Vintage Dolls',
      description: 'Vintage 1991 Beauty and the Beast &quot;Belle&quot; doll.  In original box.  Has not been removed from the box.  Original owner.  Non smoking home. Some wear on outside of box.',
      quantity: 1,
      num_favorers: 7,
      tags: [ 'vintage toys', 'vintage dolls' ],
      processing_min: 1,
      processing_max: 3,
      price: 43,
      img: 'https://i.etsystatic.com/20894927/r/il/09ba2d/3263761352/il_fullxfull.3263761352_iwye.jpg',
      onSale: true,
      taxonomy_id: 14
    },
    {
      title: '18 Inch Doll White Pants Fits American Girl Doll On Sale',
      description: '18 Inch Doll White Pants Fits American Girl Doll On Sale\n' +
        '\n' +
        'Elastic waist\n' +
        '\n' +
        'on sale',
      quantity: 1,
      num_favorers: 16,
      tags: [
        'pant',
        'on sale',
        'creativethreads',
        'creativethreadsnh',
        'American girl doll',
        '18 inch doll',
        'doll clothes',
        'cotton',
        'jeans'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 4,
      img: 'https://i.etsystatic.com/6218434/r/il/93b929/3431899862/il_fullxfull.3431899862_gyzf.jpg',
      onSale: true,
      taxonomy_id: 14
    },
    {
      title: 'AMERICA/NA 18700+ Primogems Fates Genshin Impact Reroll Starter Account Traveler Selectable',
      description: 'This listing is for a fresh Genshin Impact account on the America server with:\n' +
        '- 18700+ Primogems \n' +
        '- 45+ Acquaint Fates\n' +
        '- 20+ Intertwined Fates\n' +
        '- Adventure Rank 30+\n' +
        '- Will work on iOS, Android, and PC.\n' +
        '\n' +
        'Remember to check the mail, achievements, tutorial archive and Adventure Rank Rewards for any unclaimed resources.\n' +
        'No email/phone number/etc. is linked to the account.\n' +
        'Feel free to message me if you have any questions.\n' +
        '\n' +
        'The account credentials will be delivered via Etsy message within 24 hours of purchase. Nothing will be sent to your physical address.',
      quantity: 42,
      num_favorers: 61,
      tags: [],
      processing_min: 1,
      processing_max: 1,
      price: 13.49,
      img: 'https://i.etsystatic.com/26271997/r/il/aaa575/3809949958/il_fullxfull.3809949958_4nvr.jpg',
      onSale: true,
      taxonomy_id: 14
    },
    {
      title: 'Toys used on request',
      description: 'Sell here 2 toys from me. If you are interested, feel free to write. I fulfill your every wish!',
      quantity: 1,
      num_favorers: 0,
      tags: [ 'Toys used', 'Fetish', 'Sex', 'Toys' ],
      processing_min: 1,
      processing_max: 2,
      price: 20,
      img: 'https://i.etsystatic.com/35273313/r/il/1b0c9d/3860456483/il_fullxfull.3860456483_cbjp.jpg',
      onSale: true,
      taxonomy_id: 14
    },
    {
      title: 'Pokemon Prism for Gameboy Colour - Fan made game',
      description: '** Currently waiting for the next batch of boxes to arrive. Complete orders will be delayed **\n' +
        '\n' +
        'Now with a full holographic box and cartridge!\n' +
        '\n' +
        'Aesthetic:\n' +
        '\n' +
        'We wanted this release to hit hard with the nostalgia and bring out your inner child that needs it in your collection.\n' +
        '\n' +
        'Starting with the design of the label, we found a way to apply a holographic effect to the artwork, reminiscent of the early trading cards.\n' +
        '\n' +
        'The label itself was again inspired by the Pokemon trading cards and pays tribute to the game&#39;s origins in Japan.\n' +
        '\n' +
        'And finally, on to the cart itself, this had to pop so it will become the centre of your collection and we achieved this with a full holographic finish, unlike any other custom cart.\n' +
        '\n' +
        'Gameplay:\n' +
        '\n' +
        'The storyline elapses in the region of Naljo. The game is a sequel of Pokémon Brown thus, the player can travel to Rijon for a second quest. The Pokédex has 253 Pokémon, including some from each of the first four generations as well as new Elemental Types and TM&#39;s.\n' +
        '\n' +
        'Features:\n' +
        '\n' +
        'Naljo (bigger than G/S/C&#39;s Johto), featuring 10 original cities, as well as a large number of caves, forests, routes, and secrets.\n' +
        'Return of the region of Rijon from Pokémon Brown as well as Johto, Kanto, and the Sevii Islands from the original games and Tunod from another popular rom-hack, Pokémon Glazed.\n' +
        'Find 253 Pokémon spanning from generations 1 to 4 (plus Sylveon) as well as a few Fakemon legendaries.\n' +
        'New Clock system - No longer real time, but can keep track of day, month&#39;s, and years.\n' +
        'Pokémon only areas - play as your team mates to unlock secrets and progress through areas inaccessible to humans.\n' +
        'New abilities.\n' +
        'Three new types (Gas, Sound, and Fairy).\n' +
        'Several new moves.\n' +
        'Several new items.\n' +
        'New Pokédex order (Naljo), as well as the National Dex.\n' +
        'Interact with brand new characters, as well as some returning characters from both the official games and Pokémon Brown.\n' +
        'Hidden Gold Token system - save them up and get something good. Can you find all 100 of them?\n' +
        'Trainer Abilities - mine, smelt, and craft until you really are the very best! Jump chasms and climb walls - what else may await you underground?\n' +
        'Side-Scrolling areas.\n' +
        'New devamped sprites and animations for Pokémon not from generations 1 and 2.\n' +
        '12 trainer options (6 male, 6 female) with customizable colors.',
      quantity: 16,
      num_favorers: 410,
      tags: [
        'pokemon',  'prism',
        'gameboy',  'gb',
        'rom hack', 'crystal',
        'gbc'
      ],
      processing_min: 5,
      processing_max: 10,
      price: 10,
      img: 'https://i.etsystatic.com/18385048/r/il/40f167/3583750740/il_fullxfull.3583750740_bk88.jpg',
      onSale: true,
      taxonomy_id: 14
    },
    {
      title: 'Crochet Sheep PATTERN, Handmade Sheep Pattern, Crochet Lamb,Sheep,Sheep Plush PATTERN',
      description: 'Welcome to my handmade shop!\n' +
        '\n' +
        'This is Digital Downloadable PATTERN - NOT a Finished Product. If you want finished product, you can find it in my shop!\n' +
        '\n' +
        'Dimensions : 6 cm (2.36 Inches)\n' +
        '\n' +
        'Thank you for your visiting.I hope you can find something you love in my shop\n' +
        '\n' +
        'Please feel free to contact me if you have any questions!',
      quantity: 64,
      num_favorers: 84,
      tags: [
        'handmade sheep',
        'crochet sheep',
        'sheep stuff',
        'sheep doll',
        'sheep keychain',
        'sheep keyring',
        'sheep stuffed',
        'sheep gifts',
        'sheep presents',
        'sheep for kid',
        'sheep keychains',
        'amigurumi sheep',
        'sheep plush'
      ],
      processing_min: null,
      processing_max: null,
      price: 2.5,
      img: 'https://i.etsystatic.com/21606182/r/il/50ebdc/3338813019/il_fullxfull.3338813019_1qbv.jpg',
      onSale: true,
      taxonomy_id: 14
    },
    {
      title: 'Handprinted kalamkari fabric  unique Buddha design made with Organic Colors',
      description: 'Handprinted Kalamkari Fabric \n1 yard cloth',
      quantity: 1,
      num_favorers: 6,
      tags: [],
      processing_min: 1,
      processing_max: 3,
      price: 15,
      img: 'https://i.etsystatic.com/16784875/r/il/b7ac66/1432827232/il_fullxfull.1432827232_3sgo.jpg',
      onSale: true,
      taxonomy_id: 14
    },
    {
      title: 'Dollhouse Miniature ceramic Bowl, EACH  2.8cm(W) x 1.5cm(H) - C037',
      description: 'Dollhouse Miniature Bowl, Salad Bowl. The price is for one bowl.\n' +
        '\n' +
        'Approximate Dimension (cm): 2.8cm(W) x 1.5cm(H)\n' +
        '\n' +
        'Note: Please keep all miniature models away from children. Our products are intended for decorative use only and it can not be used as a cookware.\n' +
        '\n' +
        'We combine multiple purchases, the shipping fee you see in the cart is just an estimate, you will only be charged for the amount equal to the exact value of the stamp (+tax). Once the package is shipped, you will receive a refund for the difference between the excess you pay minus the actual postage fee. We do not make a profit from postage. ; )\n' +
        '\n' +
        'Thanks for visiting M for Miniatures!',
      quantity: 32,
      num_favorers: 67,
      tags: [ 'dollhouse food' ],
      processing_min: 1,
      processing_max: 4,
      price: 3.54,
      img: 'https://i.etsystatic.com/11131258/r/il/ae4a8c/2581397728/il_fullxfull.2581397728_13ic.jpg',
      onSale: true,
      taxonomy_id: 14
    },
    {
      title: '1:12 Scale Dollhouse Miniature Tiny Plush Stuffed Bear (3cm(H) x 2cm(L)',
      description: '1:12th scale dollhouse miniature bear for your miniature room!!\n' +
        '\n' +
        'Approximate Dimension (cm): 3cm(H) x 2cm(L) \n' +
        '\n' +
        'Note: Please keep all miniature models away from children. Our products are intended for decorative use only and it can not be used as a cookware.\n' +
        '\n' +
        'We combine multiple purchases, the shipping fee you see in the cart is just an estimate, you will only be charged for the amount equal to the exact value of the stamp (+tax). Once the package is shipped, you will receive a refund for the difference between the excess you pay minus the actual postage fee. We do not make a profit from postage. ; )\n' +
        '\n' +
        'Thanks for visiting M for Miniatures!',
      quantity: 16,
      num_favorers: 279,
      tags: [
        'dollhouse toy',
        '1 12 minature',
        'mini infant toy',
        'miniature toy train',
        'miniature bear',
        'dollhouse bear',
        'stuffed bear',
        'plush bear',
        'miniatures bear'
      ],
      processing_min: 1,
      processing_max: 4,
      price: 3.59,
      img: 'https://i.etsystatic.com/11131258/r/il/ae254b/1923831712/il_fullxfull.1923831712_77uo.jpg',
      onSale: true,
      taxonomy_id: 14
    },
    {
      title: 'Dollhouse miniature umbrella, Miniature umbrella, Miniature umbrella, Dollhouse umbrella - H25',
      description: 'You are viewing a 1:12 miniature umbrella.\n' +
        '\n' +
        'Approximate Dimension (cm):\n' +
        '\n' +
        'Shoe size: 0.7cm(D), 7.5cm(H)\n' +
        '\n' +
        'Note: Please keep all miniature models away from children. Our products are intended for decorative use only and it can not be used as a cookware.\n' +
        '\n' +
        'We combine multiple purchases, the shipping fee you see in the cart is just an estimate, you will only be charged for the amount equal to the exact value of the stamp (+tax). Once the package is shipped, you will receive a refund for the difference between the excess you pay minus the actual postage fee. We do not make a profit from postage. ; )\n' +
        '\n' +
        'Thanks for visiting M for Miniatures!',
      quantity: 13,
      num_favorers: 110,
      tags: [
        'miniature umbrella',
        'tiny umbrella',
        'dollhouse umbrella',
        '1 12 scale umbrella',
        'mini umbrella',
        '1 12th umbrella',
        'miniature protection'
      ],
      processing_min: 1,
      processing_max: 4,
      price: 3.4,
      img: 'https://i.etsystatic.com/11131258/r/il/1e1778/1855232804/il_fullxfull.1855232804_f7ei.jpg',
      onSale: true,
      taxonomy_id: 14
    },
    {
      title: 'Dollhouse Miniatures 1/12 Scale Walking Stick - G11',
      description: 'You are viewing a Dollhouse Miniatures 1/12 Scale Walking Stick\n' +
        '\n' +
        'Approximate Dimension (cm): 8.5cm(H)\n' +
        '\n' +
        'Note: Please keep all miniature models away from children. Our products are intended for decorative use only and it can not be used as a cookware.\n' +
        '\n' +
        'We combine multiple purchases, the shipping fee you see in the cart is just an estimate, you will only be charged for the amount equal to the exact value of the stamp (+tax). Once the package is shipped, you will receive a refund for the difference between the excess you pay minus the actual postage fee. We do not make a profit from postage. ; )\n' +
        '\n' +
        'Thanks for visiting M for Miniatures!',
      quantity: 18,
      num_favorers: 133,
      tags: [
        'dining candle holder',
        'candle light holder',
        'miniature candle',
        'miniature holder',
        'dollhouse dining',
        'dollhouse lighting',
        'dining lights',
        '1 12 candle light',
        'gold candle holder',
        'white candle',
        'metal candle holder',
        'handmade candle'
      ],
      processing_min: 1,
      processing_max: 4,
      price: 7.05,
      img: 'https://i.etsystatic.com/11131258/r/il/9b6ff8/1984892347/il_fullxfull.1984892347_53k1.jpg',
      onSale: true,
      taxonomy_id: 14
    },
    {
      title: 'Dollhouse Miniature television with a replaceable screens 1:12 Dolls House, Miniature Toy with a replaceable screens',
      description: 'This is a Dollhouse Miniature television with a replaceable screens\n' +
        'Miniature Television size in - 3  1/8&quot;(L), 2.5in&quot;(H) x 0.75&quot;(D)\n' +
        'Miniature Television size cm - 8cm(L), 6.5cm(H) x 2cm(D)\n' +
        '\n' +
        'Note: Please keep all miniature models away from children. Our products are intended for decorative use only and it can not be used as a cookware.\n' +
        '\n' +
        'We combine multiple purchases, the shipping fee you see in the cart is just an estimate, you will only be charged for the amount equal to the exact value of the stamp (+tax). Once the package is shipped, you will receive a refund for the difference between the excess you pay minus the actual postage fee. We do not make a profit from postage. ; )\n' +
        '\n' +
        'Thanks for visiting M for Miniatures!',
      quantity: 15,
      num_favorers: 7,
      tags: [
        'dollhouse miniature',
        'dollhouse miniatures',
        '1 12 dollhouse',
        'miniatures tools',
        'dollhouse',
        'miniatures toys',
        'miniature television',
        'dollhouse television',
        'dollhouse tv',
        'miniature tv',
        'television',
        'tv',
        'mini television'
      ],
      processing_min: 1,
      processing_max: 4,
      price: 7.89,
      img: 'https://i.etsystatic.com/11131258/r/il/438bc7/3728029755/il_fullxfull.3728029755_psob.jpg',
      onSale: true,
      taxonomy_id: 14
    },
    {
      title: 'Unique moss agate wedding ring set vintage moss agate engagement ring set five stone rose gold ring set moissanite bridal ring set women',
      description: 'Note: Every moss agate is natural, the color will be similar but not the same. It will be randomly selected when setting this stone.\n' +
        'Custom selecting stone color available:$20 custom selecting fee. \n' +
        'Thanks for the understanding.\n' +
        'https://www.etsy.com/listing/1101763329/custom-selecting-stone-color-extra-cost\n' +
        'This ring is handmade by myself.\n' +
        'The main stone is a 7mm round cut natural moss agate.\n' +
        'The accent stones are moissanites.\n' +
        '\n' +
        'The material is solid gold(white,yellow,rose gold available)\n' +
        'Ring size can be choose from the selection box.\n' +
        '\n' +
        'This jewelry can also be made in solid 10k,14k,18k gold,with real diamonds.Contact me!\n' +
        'Need rush order? contact me!\n' +
        'Need custom making order? Contact me!\n' +
        '\n' +
        'I have confidence on my jewelry.30 days money back guarantee!(For returned item,as this is handmade jewelry.Handcrafted fee and shipping fee will be deducted,others will be refunded soon)\n' +
        '\n' +
        'Thanks for your visiting!',
      quantity: 2,
      num_favorers: 18371,
      tags: [
        'anniversary ring',
        'promise ring set',
        'moss agate ring set',
        'pear moissanite ring',
        'engagement rings',
        'best friend rings',
        'rings for women',
        'dainty engagement',
        'moss agate ring',
        'moss agate jewelry',
        'moissanite ring',
        'green agate ring',
        'wedding rings'
      ],
      processing_min: 10,
      processing_max: 20,
      price: 163,
      img: 'https://i.etsystatic.com/14110719/r/il/a01a9a/3295917451/il_fullxfull.3295917451_dnuq.jpg',
      onSale: true,
      taxonomy_id: 15
    },
    {
      title: 'Eucalyptus Wedding Invitation, Sage Wedding Invites, Greenery, Floral, Botanical, Reception, All In One, RSVP, Menu, Envelopes, Rustic',
      description: 'Introducing our Eucalyptus concertina invitations. Unique stylish and packed full of information about your big day. This rustic wedding invitation is perfect for a boho wedding theme.\n' +
        '\n' +
        'Create your beautiful sage wedding invitation design using our online easy-to-use designer. You can choose from any of our other fantastic templates, add you own wording  and personalise the design to suit you.\n' +
        '\n' +
        '⋯⋯ Create Your Design Here ⋯⋯\n' +
        'https://designer.antigro.com/en/catalog/taverncreative\n' +
        '\n' +
        '⋯⋯ How To Design & Order ⋯⋯\n' +
        '✓ Paste the above URL into your browser\n' +
        '✓ Choose your template design and personalise to your requirements\n' +
        '✓ Purchase through the listing and we&#39;ll pair your design with your order and print\n' +
        '\n' +
        '● Designed by you exactly to your requirements\n' +
        '● No waiting around for a proof, revisions and approval\n' +
        '● Choose your fonts, colours and design template\n' +
        '● See exactly how they&#39;ll look before you order\n' +
        '● If you&#39;d rather have us design it for you, simply select this option on the form\n' +
        '\n' +
        '⋯⋯ Don&#39;t Forget Your Finishing Options ⋯⋯\n' +
        'From wax seals, to envelope printing and rustic twine, we have all the finishing option you need to take your wedding invitations from &#39;Fabulous&#39; to &#39;Phenomenal&#39;\n' +
        'Take a peek here:\n' +
        'https://linktr.ee/TCfinishing\n' +
        'Simply add them to your basket when you place your order.\n' +
        '\n' +
        '⋯⋯ TavernCreative ⋯⋯ \n' +
        'Why choose us for your wedding invitations? We believe in great designs, beautiful materials and above all, an excellent shopping experience. We offer expert advice and unparalleled customer service. We&#39;ll listen to you, treat you with respect and ultimately ensure our products and services exceed your expectations.\n' +
        '\n' +
        '⋯⋯  Delivery ⋯⋯ \n' +
        'We ship worldwide in record time\n' +
        '● UK - 1-2 Business Days\n' +
        '● Europe - 1-2 Business Days\n' +
        '● USA - 2-5 Business Days\n' +
        '● Everywhere Else - 3-7 Business Days\n' +
        '[Note: sample packs will be sent with Royal Mail 1st Class Post - 1-16 working Days]\n' +
        '\n' +
        '⋯⋯ Envelopes ⋯⋯ \n' +
        'We include envelopes with every order. Just choose your colour when you purchase.\n' +
        '\n' +
        '⋯⋯ Size ⋯⋯ \n' +
        '● When folded, they&#39;re A6 [148 X 105mm] - That&#39;s approximately 6x4&quot;\n' +
        '● When Flat, they&#39;re 420x148mm\n' +
        '● The envelopes are C6 size [162x114mm]\n' +
        '\n' +
        '⋯⋯ Our Card ⋯⋯ \n' +
        '● White card designs will be printed on a luxurious 350gsm off-white card stock with a subtle texture\n' +
        '● Kraft card designs will of course be printed on recycled kraft card stock\n' +
        '[If you have a particular preference, please let us know and we&#39;ll be happy to accommodate your request] \n' +
        '\n' +
        '⋯⋯ Your Design ⋯⋯ \n' +
        'Your design is created, proofed and approved by you using our online editor. We won&#39;t check your design before printing unless specifically requested. Please check carefully to ensure all the details are accurate - this includes spelling, punctuation, dates, colours and the layout. Proofing is your responsibility, so the design that is confirmed by you will be the design that is printed. If there is a printing error with the approved proof, we can&#39;t unfortunately offer you a refund, return or free reprint. If you do have any issues, we&#39;ll be happy to work with you to resolve the issue as effectively and efficiently as possible.\n' +
        '\n' +
        '⋯⋯ Photo Printing ⋯⋯\n' +
        'We want your prints to look as good as possible and a great quality photo is one of the best ways to ensure they look their best. All photos should ideally be high resolution as this will guarantee the best results in print. Colours and photos on screen can often look lighter than the finished results. Dark photos will print even darker.\n' +
        '\n' +
        '⋯⋯ Production Process ⋯⋯ \n' +
        'Once you&#39;ve placed your order, we&#39;ll print and dispatch within one working day. For the same day dispatch we ask that you purchase by 10am (GMT). If you do miss the deadline by a few minutes, let us know.\n' +
        '\n' +
        '⋯⋯ The Collection ⋯⋯ \n' +
        'From save the dates to thank you cards and everything in between, we can keep your theme throughout. For more from this range, visit our shop or ask us to send you over some photographs.\n' +
        '\n' +
        '⋯⋯ Sample Packs ⋯⋯ \n' +
        '● Sample packs are pre-printed and ready to send. They won&#39;t have your wording on them but will give you a great idea of the card and print quality.\n' +
        '● Personalised Samples. We&#39;ll print and post your personalised invitation design, so you can see exactly how they&#39;ll look before going ahead.\n' +
        '(All sample packs will include an envelope, a wax seal and an information card).\n' +
        '\n' +
        '⋯⋯  Operating Hours ⋯⋯ \n' +
        '9.00am-5.00pm (GMT) Monday to Friday.\n' +
        'We&#39;ll usually get back to you within one working day or less.\n' +
        '\n' +
        '⋯⋯ Any Questions ⋯⋯ \n' +
        '🅴  Message us here on Etsy\n' +
        '☎  Call us on 01233 227611\n' +
        '✎   Email us at studio＠taverncreative.com',
      quantity: 14644,
      num_favorers: 343,
      tags: [
        'Sage Wedding Invites',
        'Greenery',
        'Floral',
        'Botanical',
        'Reception',
        'All In One',
        'RSVP',
        'Menu',
        'Envelopes',
        'Rustic',
        'Eucalyptus',
        'Wedding Invitation',
        'Boho'
      ],
      processing_min: 1,
      processing_max: 2,
      price: 0.4,
      img: 'https://i.etsystatic.com/16089506/r/il/d747c4/2847036468/il_fullxfull.2847036468_2ech.jpg',
      onSale: true,
      taxonomy_id: 15
    },
    {
      title: 'Stepfather of the Bride Cufflinks, Stepfather of the Bride Thank You For Loving Me Like Your Own Cufflinks, Wedding Cufflinks',
      description: 'Personalise these Stepfather of the Bride/Groom, Thank You For Loving Me Like Your Own cufflinks with the date of the wedding.  A special keepsake of the Big Day for the Stepfather of the Bride from his stepdaughter or for the Stepfather of the Groom from his stepson!   We can also engrave Father of the Bride and Father of the Groom if your prefer, just select the option from the dropdown.\n' +
        '\n' +
        'FREE UK DELIVERY.    Supplied in a smart cufflink case.\n' +
        '\n' +
        'High quality silver finish round cufflinks - please note these cufflinks are made from a quality base metal (copper) and plated with Rhodium to give the very best tarnish free engraving finish - they are not Stainless Steel.\n' +
        '\n' +
        'We can be contacted via Etsy Message or e-mail  (our email address is shown in the Add your personalisation section)',
      quantity: 500,
      num_favorers: 119,
      tags: [
        'Round Cufflinks',
        'Cufflinks for Dad',
        'Rhodium Cufflinks',
        'Silver Cufflinks',
        'Dad Cufflinks',
        'Father of the Bride',
        'Wedding Cufflinks',
        'Thank You Cufflinks',
        'Thank You Gift',
        'Stepfather Cufflinks',
        'Stepfather Gift',
        'Father Cufflinks',
        'Stepdad Cufflinks'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 14.35,
      img: 'https://i.etsystatic.com/22105013/r/il/6ce1c4/3213954014/il_fullxfull.3213954014_9c2e.jpg',
      onSale: true,
      taxonomy_id: 15
    },
    {
      title: 'Teal Big Beaded Statement Necklace, beaded jewelry, blue jewelry, teal beaded necklace, turquoise jewelry, blue necklace, chunky beaded bib',
      description: 'Add a simple, chic layer of color to any outfit. This is available in over 50 colors! \n' +
        '\n' +
        'I make these in a standard size of 16 inches with a 3 inch extender chain and a lobster clasp. Acrylic big beads with small silver spacer beads. \n' +
        '\n' +
        'Matching earrings are a single bead drop earring with about a 2” drop. \n' +
        '\n' +
        '*Smoke and pet free home!* I ship 6 days a week! \n' +
        '\n' +
        'Thank you for browsing my store! Check out my other items - I love custom requests :-)\n' +
        '\n' +
        'Like this style but prefer another color? Check out our other BIG BEAD necklaces: \n' +
        '\n' +
        'https://www.etsy.com/shop/PolkaDotDrawer?ref=hdr_shop_menu&search_query=big+bead',
      quantity: 21,
      num_favorers: 224,
      tags: [
        'blue beaded necklace',
        'teal bridesmaid',
        'bridesmaid gift',
        'teal wedding',
        'turquoise jewelry',
        'blue necklace',
        'teal necklace',
        'big chunky necklace',
        'silver necklace',
        'big beaded necklace',
        'bridesmaid necklace',
        'chunky necklace',
        'statement necklace'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 11.9,
      img: 'https://i.etsystatic.com/6735851/r/il/454967/1554170272/il_fullxfull.1554170272_7daz.jpg',
      onSale: true,
      taxonomy_id: 15
    },
    {
      title: 'Bridal shield for uncles with name, personalized',
      description: 'A personalized bridal sign &quot;Uncle XY, here comes your bride&quot; for your entry of the bride in the church or at the free wedding.\n' +
        'Made of wood in an ideal wearing size for children&#39;s hands incl. individualized imprint according to design wishes.\n' +
        '\n' +
        'Shield background: Sanremo light or Sanremo dark\n' +
        'Material: Plywood panel 4 mm, foiled\n' +
        'Size: 21 x 30 cm (A4 size)\n' +
        'Processing / Printing: Foiling with durable vinyl film\n' +
        '\n' +
        'Whether own children, flower child, ring bearer boys and girls, nephews and nieces - with this eye-catcher at the bridal procession, the child also has an important job and plays an important role on the wedding day. A nice surprise for all wedding guests, friends and relatives. An individually designed sign in A4 format gives the bride&#39;s entry into the church or to your wedding ceremony a very personal touch and makes your day truly unforgettable.\n' +
        '\n' +
        'Our bridal signs are made of a (child) light but nevertheless stable foiled plywood top, like all our products, lovingly handmade / refined.\n' +
        'You choose your individual desired text and color and one of our existing layout suggestions, or we create your very own design.\n' +
        '\n' +
        'Hints:\n' +
        'Decorative objects on the photo are NOT included in the purchase price.\n' +
        'A wooden sign with desired text will be sent.\n' +
        'If no wishes are specified, we will ship as shown on the cover photo.\n' +
        'If no desired color is specified in the print, we use a white & pink print.',
      quantity: 1,
      num_favorers: 33,
      tags: [
        'Wedding sign for wedding ceremony',
        'Bridal train sign',
        'Sign for flower children',
        'Uncle sign for wedding',
        'Papa sign for wedding',
        'Signs for Free Wedding Ceremony',
        'Blumenkind Einzug Kirche',
        'Wedding Sign Wood',
        'Wooden Sign Wedding Ceremony',
        'Bride Entry Church Songs',
        'Flower Children Registry Office',
        'Names groom and bride',
        'Wooden sign with name'
      ],
      processing_min: 2,
      processing_max: 6,
      price: 21,
      img: 'https://i.etsystatic.com/25911166/r/il/3b1c22/3234838392/il_fullxfull.3234838392_qqx1.jpg',
      onSale: true,
      taxonomy_id: 15
    },
    {
      title: 'Personalized Pocket Knife, Engraved Pocket Knife, Engraved Pocket Knife for Groomsmen, Personalized Groomsmen Gift Knife, Groomsman Gift',
      description: 'Beautiful Personalized Engraved Pocket Knife!\n' +
        'This is the perfect groomsmen gift!\n' +
        'This laser engraved knives our engraved by our top of the line laser technology to provide high quality detail of design!\n' +
        'This knife is spring assisted upon opening!\n' +
        '\n' +
        'Knife Measurements:\n' +
        'Blade measures: 3.25&quot;\n' +
        'Knife closed measures: 4.5&quot;\n' +
        '\n' +
        '\n' +
        'Black Blade Knife: Justin Handle\n' +
        'Black Blade Knife 2: Robert Handle\n' +
        'Silver Blade Knife: Gabe Handle\n' +
        '\n' +
        'All  Personalized: \n' +
        'Personalization: \n' +
        'Handle: up to one line with 20 characters including spaces\n' +
        'Blade: up to one line with 20 characters including spaces.\n' +
        'Back: up to 2 lines with 15 characters including spaces',
      quantity: 2437,
      num_favorers: 968,
      tags: [
        'groomsmen knife',
        'groomsman knife',
        'knife for groomsmen',
        'knife for groomsman',
        'pocket knife',
        'knife',
        'engraved knife',
        'monogrammed knife',
        'groomsmen gift',
        'gift knife',
        'personalized pocket',
        'personalized knife',
        'groomsmen pocket'
      ],
      processing_min: 2,
      processing_max: 5,
      price: 18.81,
      img: 'https://i.etsystatic.com/21299137/r/il/9258c1/2368722397/il_fullxfull.2368722397_9whc.jpg',
      onSale: true,
      taxonomy_id: 15
    },
    {
      title: 'Personalized Stoneware Wedding Anniversary Pitcher',
      description: '(Primary picture shown with monogram logo.) \n' +
        'Whether you are keeping iced tea cold in the summer or hot chocolate hot in the winter, you’ll love how our 2-quart pitcher pours. Since each piece is hand made and stamped one letter at a time, this shape can be personalized for wedding anniversary gifts or as an accent gift for the home. It&#39;s a functional Americana piece that is sure to please. \n' +
        '\n' +
        'Size: 9&quot; x 6&quot; (2 quarts) \n' +
        '****************************************************************************************************************\n' +
        '*TO ORDER*\n' +
        'During checkout: specify \n' +
        'top arch (max. 17 characters) and \n' +
        'bottom line (max. 14 characters)\n' +
        'logo (any logo seen on our Etsy site)\n' +
        '\n' +
        '*SHIPPING*\n' +
        'We ship Priority Mail within the continental U.S. \n' +
        'Priority mail to Hawaii and Alaska.\n' +
        '\n' +
        '*Turnaround time 3-8 weeks*\n' +
        '\n' +
        '****************************************************************************************************************',
      quantity: 52,
      num_favorers: 635,
      tags: [
        'personalized pottery',
        'stoneware pottery',
        'wedding gifts',
        'anniversary gifts',
        'birthday gifts',
        'Christmas gifts',
        'handmade pottery',
        'kitchen utensil',
        'housewarming bridal',
        '9th Anniversary Gift',
        '9 Year gift'
      ],
      processing_min: 15,
      processing_max: 50,
      price: 84.95,
      img: 'https://i.etsystatic.com/6095187/r/il/8cf9c4/885956473/il_fullxfull.885956473_s1za.jpg',
      onSale: true,
      taxonomy_id: 15
    },
    {
      title: 'Pottery gift for #9thAnniversaryPottery Personalized Stoneware Utensil Crock',
      description: 'Personalized Stoneware Utensil Crock makes a great #9thAnniversaryPotteryGift. \n' +
        '\n' +
        'This is our most popular shape. Each piece is completely hand made, and stamped with the decoration of your choice. Give a gift that lasts!\n' +
        '\n' +
        'Size: 7.5&quot; x 5” \n' +
        '****************************************************************************************************************\n' +
        '*TO ORDER*\n' +
        'During checkout: specify \n' +
        'top arch (max. 17 characters) and \n' +
        'bottom line (max. 14 characters) and\n' +
        'logo\n' +
        '\n' +
        'Logos available: \n' +
        'Blue hen/ heart/ cow/ shamrock\n' +
        '***most logos on our personalized pottery line\n' +
        '\n' +
        '*SHIPPING*\n' +
        'We ship Priority mail. \n' +
        '\n' +
        '*Turnaround time 3-8 weeks*\n' +
        '\n' +
        '****************************************************************************************************************\n' +
        'Customer Testimonials:\n' +
        '\n' +
        'I treasure one I was given many years ago for my wedding, I am sure Emily and Michael will love theirs for years to come as well. \n' +
        '\n' +
        'Thank you in advance for making a wonderful keepsake for them!\n' +
        '*****\n' +
        '\n' +
        'I absolutely love your work.  My mother had gotten a crock for my wedding and I loved it and asked her where she got it.  I have since ordered one for my best friend on her wedding and I am about to order another one.  I have told every one I know about them.  Everyone loves mine.  I am also thrilled to see that you make personalized dog bowls.  Your web site is Great! Thank you very much for the great gift ideas!!!!  Yours truly, \n' +
        '\n' +
        '- Amy B.',
      quantity: 90,
      num_favorers: 32,
      tags: [
        'personalized pottery',
        'stoneware pottery',
        'wedding gifts',
        'anniversary gifts',
        'birthday gifts',
        'handmade pottery',
        'kitchen utensil',
        'wedding gift',
        'personalized wedding',
        'wedding pottery',
        'utensil holder'
      ],
      processing_min: 15,
      processing_max: 40,
      price: 59.95,
      img: 'https://i.etsystatic.com/6095187/r/il/6735b4/2199951723/il_fullxfull.2199951723_cesi.jpg',
      onSale: true,
      taxonomy_id: 15
    },
    {
      title: 'Whiskey Barrel Bentwood Ring With Copper Fly Fishing Line Inlay - Charred Whiskey Barrel Bentwood Ring',
      description: 'We&#39;ve sold hundreds of our immensely popular Jack Daniels bentwood ring. We&#39;re extremely proud to offer that same ring with a wonderful inlay of copper fly fishing wire.\n' +
        '\n' +
        'About the ring:\n' +
        '\n' +
        'The basis of this ring is our revolutionary Jack Daniels bentwood ring (you can read about it here: https://www.etsy.com/listing/473702976 ). We are the only artists making a bentwood whiskey barrel ring. Using the same bending, charring, and finishing techniques used on the original ring, we take things a step further and add an inlay of copper fly fishing wire.\n' +
        '\n' +
        '\n' +
        'About the wood:\n' +
        '\n' +
        'The wood for this ring is reclaimed from authentic Jack Daniels whiskey barrels. The distillery uses each barrel for 7 years. Each barrel sees one batch of whiskey and is then retired and made available to artists such are ourselves. A certificate of authenticity is included with each order.\n' +
        '\n' +
        '\n' +
        'About the charring:\n' +
        '\n' +
        'We have a special chemical process that we use for our charring. You can read about its superiority in the listing for our original Jack Daniels bentwood ring (use the link above in this description.)\n' +
        '\n' +
        '\n' +
        'Notes about strength and care:\n' +
        '\n' +
        'Bentwood rings are the strongest type of wood ring. The ring will stand up to normal use without issue. To get the best life out of it we do recommend that you not wear it while showering, doing dishes, swimming, and other activities where prolonged exposure to water or chemicals would happen as it could damage the finish.\n' +
        '\n' +
        'Care for the ring is simple. Light buffing with a microfiber cloth keeps it looking nice. If you want to add a little shine, buff it with a little bit of olive oil.\n' +
        '\n' +
        '\n' +
        'Note on sizing:\n' +
        '\n' +
        'Our rings are available in sizes 4 - 16, including half sizes. We offer widths from 4mm to 14mm, and we promise to get within 1mm of that request. If you are looking for a size or width that we don&#39;t normally offer please contact us. We will do our best to fulfill your request.\n' +
        '\n' +
        'If you are unsure of your ring size please make a quick visit to your local jewelry counter. They will size you for free.',
      quantity: 1,
      num_favorers: 378,
      tags: [
        'Tennessee Whiskey',
        'Barrel Ring',
        'Bourbon Barrel',
        'Recycled Wood Ring',
        'Reclaimed Wood',
        'Wood Wedding Ring',
        'Jack Daniels Gift',
        'Whiskey Wedding',
        'Jack Daniels',
        'Wedding Band',
        'Ring Set',
        'Fishing Ring',
        'Fishermans Ring'
      ],
      processing_min: 9,
      processing_max: 10,
      price: 149.99,
      img: 'https://i.etsystatic.com/11909328/r/il/205ec2/1961853984/il_fullxfull.1961853984_exub.jpg',
      onSale: true,
      taxonomy_id: 15
    },
    {
      title: 'Antique Natural Pink Opal Pendant, Gemstone Pendant, Pink Pendant Pendant, 925 Sterling Silver Jewelry, Engagement Gift, Pendant For Wife',
      description: 'Welcome to our Etsy Shop\n' +
        '\n' +
        '&quot;Antique Natural Pink Opal Pendant, Gemstone Pendant, Pink Pendant Pendant, 925 Sterling Silver Jewelry, Engagement Gift, Pendant For Wife&quot;\n' +
        '\n' +
        '\n' +
        '❥Product Code: SM-15367\n' +
        '❥Product: Pendant \n' +
        '❥Main Gemstone: Pink Opal\n' +
        '❥Main Gemstone Color: Pink\n' +
        '❥Metal: Silver\n' +
        '❥Main Stone Creation: Natural\n' +
        '❥925 Stamped: Yes\n' +
        '❥Brand: Handmade\n' +
        '\n' +
        '\n' +
        '\n' +
        'We have Great Collection of Fine Sterling Silver jewelry, which is absolutely unique and precious.\n' +
        '\n' +
        'Our jewelry is always with 925 sterling silver base material. The important thing is that when our semi-precious gemstone confluences with these silver, it definitely becomes a precious jewelry and you find it very beautiful.\n' +
        '\n' +
        'Read all the measurements and descriptions carefully before purchase to ensure correct size.\n' +
        '\n' +
        'We make sure that you will get the actual design and stone as you see. But sometimes there is some color variation in the stone due to the lightning flashes during the photoshoot.\n' +
        '\n' +
        '\n' +
        'If you have any questions about our Jewelry, let us know through the Etsy conversation.\n' +
        '\n' +
        '\n' +
        '\n' +
        'Have a great shopping with us!!\n' +
        '\n' +
        '\n' +
        '\n' +
        'Thanks for visiting our store.',
      quantity: 1,
      num_favorers: 0,
      tags: [
        'Solid Silver Pendant',
        'Handmade Jewelry',
        'Womens Jewelry',
        'Pink Opal Pendant',
        'Small Opal Pendant',
        'Natural Pink Opal',
        'October Birthstone',
        'Anniversary Gift',
        'Lovers Jewelry',
        'Handmade Pendant',
        'Ethnic Jewelry',
        'Trendy Pendant',
        'Aniversary Jewelry'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 21.99,
      img: 'https://i.etsystatic.com/20107320/r/il/bc2233/3813105464/il_fullxfull.3813105464_ts8m.jpg',
      onSale: true,
      taxonomy_id: 15
    },
    {
      title: 'Wifey Makeup Bags - Bride Makeup Bags - Bride to Be Gift Ideas Bride Gift - Bridal Shower Gift - Honeymoon Gift for Bride (EB3222NT)',
      description: 'Bride Make Up bags with &quot;wifey&quot; or different sayings make a great gifts for a bridal shower.  Cosmetic Bags are lined on the inside and have a metallic zipper.  Choose your bag color, text style and text color.\n' +
        '\n' +
        '***Details***\n' +
        '\n' +
        'This listing is for 1 Cosmetic Bag.\n' +
        '\n' +
        'Size of Bag:  6&quot; H x 8.5&quot; W\n' +
        '\n' +
        '100% Cotton Canvas\n' +
        '\n' +
        '\n' +
        'LISTING IS FOR Makeup Bags ONLY - NO OTHER ITEMS WILL BE SHIPPED.  \n' +
        '\n' +
        '\n' +
        '***Be sure to check out our other GIFTS FOR WOMEN***\n' +
        '\n' +
        'https://www.etsy.com/shop/ModParty/search?search_query=monogram&order=date_desc&view_type=gallery&ref=shop_search',
      quantity: 757,
      num_favorers: 463,
      tags: [
        'bag',
        'makeup bag',
        'gift ideas',
        'bachelorette party',
        'gift bag',
        'make up bags',
        'gifts',
        'bride',
        'bride gift',
        'bridal shower gift',
        'wifey',
        'wifey makeup',
        'wifey gifts'
      ],
      processing_min: 3,
      processing_max: 7,
      price: 9.99,
      img: 'https://i.etsystatic.com/8617622/r/il/6a8e3b/2317634305/il_fullxfull.2317634305_s130.jpg',
      onSale: true,
      taxonomy_id: 15
    },
    {
      title: 'Tropical Can Coolers Bachelorette Bridesmaid Can Coolers Bridesmaid Coozies Tropical Bachelorette Party Favors (EB3255TPP)',
      description: 'Tropical can coolers make a cool gift for your bridesmaids!  Each coozie is printed with a palm pattern on a blush pink background and makes a great party favor for your tropical bachelorette party weekend or bridal shower. They also make a cute budget-friendly addition to your bridesmaid proposal gift boxes or birthday party favors!\n' +
        '\n' +
        '***Details***\n' +
        '\n' +
        'Listing is for ONE  Tropical Pink Can Cooler. \n' +
        '\n' +
        'Listing is for ONE can coolers only - no other items are included.   Cans are not included.  \n' +
        '\n' +
        'Fits 12 oz. cans and bottles - fit is SNUG so it does not fall off the cans.\n' +
        '\n' +
        'Size:  4&quot;\n' +
        '\n' +
        '***Other Tropical Ideas & Gifts***\n' +
        'https://www.etsy.com/shop/ModParty?search_query=tropical',
      quantity: 555,
      num_favorers: 1174,
      tags: [
        'can cooler',
        'bachelorette',
        'coozies',
        'bridesmaid',
        'bachelorette party',
        'bridal shower',
        'koozies',
        'beach',
        'bridesmaid gift',
        'palm',
        'palm leaf',
        'tropical',
        'favors'
      ],
      processing_min: 1,
      processing_max: 5,
      price: 4,
      img: 'https://i.etsystatic.com/8617622/r/il/c5979c/2212567900/il_fullxfull.2212567900_ec60.jpg',
      onSale: true,
      taxonomy_id: 15
    },
    {
      title: '4.6 CT Emerald Cut Engagement Ring, Moissanite Engagement Ring, 3D Pave Gold Ring Full eternity Moissanite ring Simple engagement ring',
      description: 'Moissanite diamonds weighing 4.6 Ct(carat)\n' +
        'Band width: Approximately 1.8mm\n' +
        '\n' +
        '\n' +
        'CENTER DIAMOND:\n' +
        '\n' +
        'Please select the color and clarity.\n' +
        'Color: Colorless\n' +
        'Clarity: VVS1, \n' +
        'Cut: Excellent\n' +
        'Size :11x8mm\n' +
        'Carat: 4.6ct\n' +
        'Shape: Emerald Cut\n' +
        'Type: 100% Hand Cut, Polished and Finished Moissanite\n' +
        '-(Size shown in pictures: 4.6ct)\n' +
        '\n' +
        'Visit Our Store For More items:\n' +
        'https://www.etsy.com/in-en/shop/GoldenGloryJewels\n' +
        '\n' +
        'Origin : India\n' +
        '\n' +
        '● Metal Detail\n' +
        '→Solid Gold (10KT, 14KT, 18KT)\n' +
        '→Silver (925 Sterling) And 10K Gold,14K Gold,18K Gold\n' +
        '→Metal Color :Yellow, White, Rose\n' +
        '→Metal Stamp Engraving :Yes, Free\n' +
        '\n' +
        '● Special Note\n' +
        '● All listed jewelry in Delicate Jewel is made to order.\n' +
        '● Please allow us 1-2 weeks processing time as it is customized only for you.\n' +
        '● You Can Also Select different size of stone and shape, we will make it Perfect shape with Cut of stone for Your jewelry.\n' +
        '● You can make customized jewelry with us in a few easy steps.\n' +
        '→ Send us jewelry image or discussed with us Your Selected design jewelry\n' +
        '→ We will make CAD and will send you for approval.\n' +
        '→ Once CAD is approved By You we will now make jewelry for you.\n' +
        '→ Hurry! We now ship your jewelry and you will have it in a short time.\n' +
        '\n' +
        '● Sales And Services\n' +
        '→Full Time Customer Service\n' +
        '→Etsy Chat Response Within 5 to 7 Hour Max\n' +
        '→Email Response Within 6 to 7 Hour Max\n' +
        '→Above All Response time Except Any Medical Emergency\n' +
        '\n' +
        '● Easy Payment Option\n' +
        '→Minimum 99 USD Order Value\n' +
        '→Production Start After 50% Payment\n' +
        '→Jewelry Shipp After Full Payment Received.\n' +
        '→Buyer Has to Pay All Installment on time Period which ever is finalize While Place Custom Order\n' +
        '\n' +
        '●Free Engraving\n' +
        '→It’s a Free of Charge service, Which could be done after customer requests.\n' +
        '→Any specific Design Logo or long message will be Chargeable.\n' +
        '→ If your jewelry has not enough space for your engrave word will long, we will inform you about that on massage.\n' +
        '\n' +
        '● Shipping Policy Of Delicate Jewels\n' +
        '→We do Express Shipping through I through Aramex, UPS ,DHL Express and it will take 7-10 Working days for delivery.\n' +
        '\n' +
        '\n' +
        '\n' +
        'Why to buy Moissanite Diamond?\n' +
        '● Moissanite is pocket-friendly; it is 10% of the diamond price.\n' +
        '● Moissanite is Conflict-free and eco-friendly, were as a diamond can be blood diamond and it&#39;s not eco-friendly.\n' +
        '● There is no higher resale value of a diamond, in Moissanite, you don&#39;t have to worry about.\n' +
        '● If Moissanite, you can wear different jewelry every day at the same price as the natural diamond.',
      quantity: 5,
      num_favorers: 0,
      tags: [
        'Engagement ring',
        'wedding ring',
        'moissanite ring',
        'White Gold Ring',
        'anniversary ring',
        'diamond ring',
        'halo ring',
        '4 ct moissanite ring',
        'Emerald Cut Ring',
        '4 Ct Engagement Ring',
        '4 Ct Emerald Cut',
        'Celebrity Ring Style',
        'Hidden Halo Emerald'
      ],
      processing_min: 5,
      processing_max: 10,
      price: 802,
      img: 'https://i.etsystatic.com/33446530/r/il/f4be45/3702119136/il_fullxfull.3702119136_ere9.jpg',
      onSale: true,
      taxonomy_id: 15
    },
    {
      title: 'Will You Be My Bridesmaid Card, Bridesmaid Proposal Card with Photo, Printable Maid of Honor Card, Modern Minimalist Be My Maid of Honor',
      description: 'This DIY,  printable BRIDESMAID PROPOSAL CARD features editable text for personalization! Using Corjl- a web based template editor that allows you to customize your printable in minutes - you can customize these proposal cards to fit your special day!\n' +
        '\n' +
        '===================\n' +
        ' SPECIFICATIONS\n' +
        '===================\n' +
        '\n' +
        '• Proposal Card Template - 5x7 (Comes as 1 per page with the ability to download as 4 per page)\n' +
        '• Envelope for Proposal Card - Size is A7 or 7.25x5.25\n' +
        '\n' +
        '================\n' +
        'HOW IT WORKS\n' +
        '================\n' +
        '\n' +
        '• Purchase the design you love.\n' +
        '• Follow the link sent via email from Corjl - this will take you to the page where   the template can be edited - directly in your browser.\n' +
        '•Make all your changes to the template, save and download the file, then print at home or local print shop.\n' +
        '\n' +
        'Can&#39;t finish in one sitting? That perfectly okay!!   By using the web application Corjl, the design can be saved and worked on at a later time! \n' +
        '\n' +
        '=============\n' +
        'DEMO LINK\n' +
        '=============\n' +
        '\n' +
        'Want to see what your information looks like in this template? Click the link below and give it a try!\n' +
        '\n' +
        'https://www.corjl.com/d/23PENK\n' +
        '\n' +
        '(works best in Firefox or Chrome browser)\n' +
        '\n' +
        '=====================\n' +
        'TEMPLATE POLICIES\n' +
        '=====================\n' +
        '\n' +
        'REVOCATION OF TEMPLATES\n' +
        'We reserve the right to revoke access to any template if it is being used against our policies. You can find our policies here: \n' +
        '\n' +
        'USAGE\n' +
        'Each template can only be used as is stated in the original listing at the time of purchase.. For example, a wedding invitation template can only be used as a wedding invitation. It cannot be used to create wedding signs or table numbers.  If you like the design of a wedding invitation and do not need a wedding invitation, but need a bridal shower invitation, please message use. We can grant approval of usage in such special circumstances.\n' +
        '\n' +
        'DOWNLOAD LIMITS\n' +
        'Each download comes with a 15 download limit.  For items which may need more downloads such as place cards, table numbers, etc, we can reset the download limits for you or add in additional templates.  In addition, once you reach template #36 you are able to save and create a new template which provides an addition 15 downloads. Reach out to us via messages in such circumstances and we can reset the downloads.\n' +
        '\n' +
        'The timeline for each template is 6 months.  \n' +
        '\n' +
        'COLORS AND PRINTING\n' +
        'All files are in RGB.  We recommend a test print with your printer before committing to larger orders due to variations on print color. We are not responsible for color differences relating to printing.  This is because there are certain circumstances that are out of our control including the type of printer used, color profile, ink or toner used which may cause variations in color printing. Due to color variations in computer screens, there may be a slight difference in the color that you see on the monitor and that of the final print. We are unable to change this. We are more than happy to provide a printer recommendation if needed!\n' +
        '\n' +
        'REFUNDS\\EXCHANGES\n' +
        'We do offer exchanges as long as the original file has not been edited and there are no downloads. \n' +
        'This item is strictly Personal Use only.\n' +
        '\n' +
        'Copyright © 2016-Present Heaven & Fifth LLC. All Rights Reserved.\n' +
        '\n' +
        '==============================================\n' +
        '\n' +
        'To see more designs, visit our shop for the latest collections!!\n' +
        '\n' +
        'www.etsy.com/shop/shoppapervine\n' +
        '\n' +
        'Follow us to get for inspiration and promotional discounts!\n' +
        '\n' +
        'Facebook | @thepapervine\n' +
        'Instagram | @thepapervine\n' +
        'Pinterest | @thepapervine',
      quantity: 18,
      num_favorers: 277,
      tags: [
        'bridesmaid card',
        'bridesmaid proposal',
        'will you be my card',
        'will you be my',
        'maid of honor card',
        'proposal card',
        'be my bridesmaid',
        'bridesmaid gift',
        'digital download',
        'modern bridesmaid',
        'editable template',
        'maid of honor',
        'bohemian bridesmaid'
      ],
      processing_min: null,
      processing_max: null,
      price: 9.99,
      img: 'https://i.etsystatic.com/14530864/r/il/844776/3470993359/il_fullxfull.3470993359_454n.jpg',
      onSale: true,
      taxonomy_id: 15
    },
    {
      title: 'Plum Bridal Bouquet, Maid of Honour Bouquet, Shade of Purple Wedding Bouquet, Bridesmaid Bouquet, Hydrangea Bouquet, Lavender Floral Bouquet',
      description: 'This listing shows a wedding bouquet which is made with a number of different flowers, including purple hydrangeas, purple roses and hyacinths, and wrapped with purple satin ribbon.\n' +
        '\n' +
        'These silk flower bouquets are much more durable than traditional fresh flower bouquets. \n' +
        '\n' +
        'It is around 8.5 inches wide and 9 inches tall.\n' +
        '\n' +
        'Matching boutonniere: www.etsy.com/listing/465324362/lavender-rose-corsage-purple-rose\n' +
        'Matching wrist corsage: www.etsy.com/listing/465082758/lavender-rose-wrist-corsages-pearl-wrist\n' +
        '\n' +
        'We have many different colors of satin ribbon available to fit into your wedding color theme. \n' +
        'Please convo us if you need to change the satin ribbon.\n' +
        '\n' +
        'You can also make a custom request for a bigger size of this bouquet to be a bridal bouquet. Or for any extra pieces of wedding bouquet set - bridal bouquet, maid of honor bouquet, bridesmaids bouquet, toss bouquet, groom&#39;s boutonniere, mothers and fathers pin corsages, best man boutonniere, groomsmen boutonnieres......, please contact us for price.\n' +
        '\n' +
        'Please note: All our items are by handmade, each piece may be slightly different in flowers placement.\n' +
        '\n' +
        'For more wedding bouquets, corsages or boutonnieres, wrist corsages, floral deco........., please visit our etsy shop: https://www.etsy.com/shop/hydrangeaslover\n' +
        '\n' +
        'We are looking forward to working with you to create a wonderful wedding. Please contact us for any individual requests.',
      quantity: 10,
      num_favorers: 222,
      tags: [
        'floral bouquet',
        'wedding bouquet',
        'silk flower bouquet',
        'bridal bouquet',
        'bridesmaid bouquet',
        'rustic bouquet',
        'plum bridal bouquet',
        'purple bouquet',
        'deep purple bouquet',
        'plum color bouquet',
        'purple wedding',
        'lavender bouquet'
      ],
      processing_min: 30,
      processing_max: 40,
      price: 48,
      img: 'https://i.etsystatic.com/10016227/r/il/3ddef1/2202664441/il_fullxfull.2202664441_mupf.jpg',
      onSale: true,
      taxonomy_id: 15
    },
    {
      title: 'Thank You Notecards - VS inspired (Printed)',
      description: 'Even if you opened your gifts at the shower and had an opportunity to say thank you in person, it’s still a warm and considerate gesture to follow up with a hand-written thank you card.  Send a special thanks with these classic VS inspired notecards to let your friends and family know how much they mean to you and how much you loved their gift!\n' +
        '\n' +
        'VS THANK YOU notecards are the perfect compliment to the Bridal Shower Invitation available on my site (printed and digital versions listed).  \n' +
        '\n' +
        '******** SPECIFICATIONS ********\n' +
        '-- 7.5 bi-folded to 3.5x5 Folded Notecard\n' +
        '-- Shipped flat and scored for easy folding\n' +
        '-- printed on white premium smooth matte cardstock\n' +
        '-- Black text as shown\n' +
        '-- White Envelopes included - other colors available upon request\n' +
        '-- Minimum order: 10\n' +
        '\n' +
        '\n' +
        '************ PLACE YOUR ORDER *************\n' +
        '1. ORDER:  Place order from drop down menus, enter details in the NOTES section and complete checkout.\n' +
        '2. If you don&#39;t see exactly what you are looking for, send me a message and REQUEST A CUSTOM ORDER\n' +
        '\n' +
        '**Colors may vary depending on your monitor, phone or tablet settings. Small variations are normal. I cannot guarantee an exact match to your screen. Please email me to discuss. Refunds will not be granted for color variations between online proofs and the printed product. Once purchase is completed I will conclude you have read all policies and are familiar and agree with the terms & conditions regarding orders. These items are custom designed and personalized for you, therefore all sales are final. \n' +
        '\n' +
        '*** THANK YOU ***\n' +
        'Thank you so much for visiting DetailsbyKristyn!',
      quantity: 1,
      num_favorers: 0,
      tags: [
        'Thank you notes',
        'Victoria Secret',
        'pink stripes',
        'bridal shower thanks'
      ],
      processing_min: 5,
      processing_max: 7,
      price: 20,
      img: 'https://i.etsystatic.com/18197639/r/il/3ec598/3860607987/il_fullxfull.3860607987_fulu.jpg',
      onSale: true,
      taxonomy_id: 15
    },
    {
      title: 'Chain Leaf Elegant Straß Bride Crystal Flower Leaf Girlfriend Wedding Bridal Chain Bridesmaid Jewelry Drops Silver Wedding Jewelry cz',
      description: '❥❥❥ Welcome to our shop &quot;The Sweetest Mistletoe&quot; ❥❥❥\n' +
        '\n' +
        '\n' +
        '♥ An elegant necklace in a romantic style.\n' +
        '\n' +
        '♥ On the 925 silver chain dangles a zirconia wetted pendant in maquise cut.\n' +
        '\n' +
        '♥ The chain is very feminine and shimmers in front of it.\n' +
        '\n' +
        '♥ You can also find the matching earrings in the shop.\n' +
        '\n' +
        '♥ The set is still available in gold or rose gold\n' +
        '.\n' +
        '♥ Each piece of jewelry comes lovingly to you in a free gift box♥\n' +
        '\n' +
        '❥❥❥Dimensions and material ❥❥❥:\n' +
        'Chain: 45 cm long\n' +
        'Length 3.50 cm\n' +
        'Material depending on color:\n' +
        '925 Silver rhodium (white gold) platinum plated brass or rose / gold-plated brass',
      quantity: 1,
      num_favorers: 10,
      tags: [
        'ear studs bride',
        'Bridal jewelry',
        'bridal ear studs',
        'pearl ear studs',
        'wedding jewelry',
        'wedding jewellery',
        'wedding earrings',
        'wedding pearl',
        'bridesmaid jewelry',
        'earrings drops',
        'ear studs zirconia',
        'earrings rose gold',
        'earrings rosé gold'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 41,
      img: 'https://i.etsystatic.com/32933022/r/il/0d6d2f/3500312002/il_fullxfull.3500312002_gg0k.jpg',
      onSale: true,
      taxonomy_id: 15
    },
    {
      title: 'engagement ring tray engagement ring platter Indian wedding tray Indian decorative tray floral engagement tray',
      description: 'This product is a handmade ,customize engagement ring platter .We are decorate your special moments.we would love to customize it for your choice of colour to match it with your wedding decor, You can use this product at your wedding, engagement, promise or any organization you want.',
      quantity: 10,
      num_favorers: 0,
      tags: [
        'Ring',
        'platter',
        'Holder',
        'tray',
        'engagement',
        'indian wedding tray',
        'floral tray'
      ],
      processing_min: null,
      processing_max: null,
      price: 41.99,
      img: 'https://i.etsystatic.com/34807227/r/il/b7e2d4/3830565803/il_fullxfull.3830565803_nlz7.jpg',
      onSale: true,
      taxonomy_id: 15
    },
    {
      title: 'Cadeau pour invités, Porte clef en macramé',
      description: 'Personnalisé votre porte clef en macramé torsadé pour votre événement (mariage, anniversaire, baby shower). \n' +
        '6 couleurs disponibles: kaki, bleu, sable, nude, rose et blanc\n' +
        '3 modèles de support de présentation possible.\n' +
        '2 choix d&#39;attache: anneau ou crochet\n' +
        '\n' +
        'Indiquez nous vos choix, nous vous proposerons une photo avant fabrication. \n' +
        '\n' +
        'Dimension du macramé : 10-12cm\n' +
        'Dimension du support : largeur 10cm, hauteur: 20cm',
      quantity: 200,
      num_favorers: 1,
      tags: [ 'Gift', 'macramé', 'wedding', 'keychain', 'anniversary' ],
      processing_min: 10,
      processing_max: 15,
      price: 4,
      img: 'https://i.etsystatic.com/32603450/r/il/48f11e/3860547511/il_fullxfull.3860547511_p9cq.jpg',
      onSale: true,
      taxonomy_id: 15
    },
    {
      title: '0.5&quot; Tall DIY Bride and Groom Hubby and Wife Mrs and Mrs Iron on Decals for Converse Shoes Custom Bride Iron on Transfers for Converse Mr &',
      description: '______________________________________\n' +
        'VISIT OUR WEBSITE: https://duchidesigns.ca/collections/all\n' +
        '______________________________________\n' +
        '\n' +
        'SHIPPING & TRACKING:\n' +
        'All orders are shipped with Standard Shipping and DO NOT include tracking number. Expedited (Tracked) shipping is available at checkout as an Upgrade. \n' +
        '\n' +
        '_____________________________________\n' +
        '\n' +
        'This listing is for a pair of DIY Iron on Decals only!  Converse Shoes not included.\n' +
        '\n' +
        'You will receive 2 sets of decals (total of 4) for 2 pairs of shoes for the couple\n' +
        '_____________________________\n' +
        '\n' +
        'SIZING:\n' +
        'Iron on measures up to 0.5 tall and width is between 1”-2” max depending on the length of the word.\n' +
        '——————————————\n' +
        '\n' +
        'HOW TO ORDER:\n' +
        '1. Select color and style from drop down button and add to cart\n' +
        '2. In notes to seller section at checkout, provide: \n' +
        '\n' +
        ' -Word (up to 10 characters) for custom options and \n' +
        '-Date (if applicable)\n' +
        '__________________________________\n' +
        '\n' +
        'CHECK THESE LISTINGS FOR OTHER STYLE OPTIONS:\n' +
        '\n' +
        'https://etsy.me/30sTiJY\n' +
        '\n' +
        'https://etsy.me/3hebehi\n' +
        '\n' +
        '————————————————-\n' +
        'APPLICATION INSTRUCTIONS:\n' +
        'These are iron ons and can be transferred using a home iron onto fabric shoes. Your order will come with instructions.\n' +
        '\n' +
        '--------------------------------------------------------\n' +
        'SHOP MORE DECALS\n' +
        'https://www.etsy.com/ca/your/shops/DuchiDesigns\n' +
        '---------------------------------------------------------',
      quantity: 479,
      num_favorers: 110,
      tags: [
        'decals for shoes',
        'decals for converse',
        'iron on transfers',
        'iron on decals',
        'wedding converse',
        'custom shoe decal',
        'custom converse',
        'wedding shoes',
        'iron on lettering',
        'iron on for shoes',
        'small iron on decals',
        'converse decals',
        'transfers for shoes'
      ],
      processing_min: 5,
      processing_max: 7,
      price: 12,
      img: 'https://i.etsystatic.com/17252411/r/il/fc900e/2866674588/il_fullxfull.2866674588_jt49.jpg',
      onSale: true,
      taxonomy_id: 15
    },
    {
      title: '3.00 TW Round Brilliant Colorless Moissanite Ring, Three Stone Ring, Engagement Ring, Wedding Ring, Customized Ring, Promise Ring, Bridal',
      description: '1)Description: Handmade Gems & Jewelry, This Item makes a lovely engagement/anniversary/promise Gift for your Special Person. You have also option for select matching Jewelry.\n' +
        '\n' +
        'Side stone: High quality cz stone (If you want all stone moissanite and any other requirement for side stone then please contact us)\n' +
        '\n' +
        'Brand Name : RITZIN\n' +
        '\n' +
        'Metal : 10K/14K/18K Solid Gold, Platinum\n' +
        '\n' +
        'Stamp : 10K / 14K / 18K\n' +
        '\n' +
        'Hardness: 9.25\n' +
        '\n' +
        '✤ 𝐂𝐞𝐧𝐭𝐞𝐫 𝐃𝐢𝐚𝐦𝐨𝐧𝐝 𝐃𝐞𝐭𝐚𝐢𝐥𝐬 :-\n' +
        '\n' +
        'Shape : Elongated Cushion Cut\n' +
        '\n' +
        'Stone Used : Moissanite\n' +
        '\n' +
        'Center Stone: 6.5 MM (Approx.)\n' +
        '\n' +
        'Weight : 1.00CT (Approx.)\n' +
        '\n' +
        'Clarity : VVS\n' +
        '\n' +
        'Color : Colorless\n' +
        '\n' +
        'Stone Treatment : Not Enhanced\n' +
        '\n' +
        '✤ 𝐒𝐢𝐝𝐞 𝐃𝐢𝐚𝐦𝐨𝐧𝐝 𝐃𝐞𝐭𝐚𝐢𝐥𝐬 :-\n' +
        '\n' +
        'Shape : Round Cut\n' +
        '\n' +
        'Stone Used : Moissanite Diamond\n' +
        '\n' +
        'Clarity : VVS\n' +
        '\n' +
        'Color : White\n' +
        '\n' +
        '2)Metal:\n' +
        'Available in Solid 925 Silver, 935 Argentinum Silver, 10K, 14K, 18K and Platinum.\n' +
        '\n' +
        '3)Extra Service:\n' +
        '* Rush Order ( If possible )\n' +
        '* Free Engraving\n' +
        '\n' +
        '💍Certificate:\n' +
        '*I have authenticated Jewelry Certificate comes with the authenticity of Metal, Moissanite, and Gemstone, Diamond combination.\n' +
        '* If you want to get the certificate with your ordered jewelry then please contact me within 24-48 hours of your order placed.\n' +
        '* The certificate is Chargeable.\n' +
        '\n' +
        '💍 About your order:\n' +
        ' \n' +
        '* Offer All cuts which you dream it to make with moissanite/Diamond/Lab Grown Diamond.\n' +
        '* Updating every step of your ordered jewelry.\n' +
        '* All listed jewelry in our stores is made to order.\n' +
        '* Make jewelry and stone when order placed as all are handmade customization items, so we didn’t have in stock.\n' +
        '* Listed items images are taken in sunlight or some of item is computer generated design.\n' +
        '* If you order any item, we can make the same with the time period which declared in a particular listing.\n' +
        '* Any customization with the listed design also possible.\n' +
        '\n' +
        '💍Cancellation:\n' +
        '*If you want cancel any order then please contact me within 24 hours, after 24 hours I unable to cancel your order.\n' +
        '\n' +
        'Policy:\n' +
        '\n' +
        '💍Frequently asked questions\n' +
        'About Metal:\n' +
        '* We make Jewelry in 925 Sterling Silver, 935 Argentinum Silver, 10K, 14K, 18K Solid Gold and Platinum. \n' +
        '* If you want rhodium plated silver Jewelry, I can make for all of three-tone (i.e., rose, yellow, white). Let me tell you that rhodium can be worn off over time. So, it needs gentle care of rhodium-plated Jewelry.\n' +
        '* Jewelry made with 10K, 14K, and 18K solid gold, cannot be a change in its original tone.\n' +
        'About  certificate?\n' +
        '*I have authenticated Jewelry Certificate comes with the authenticity of Metal, Moissanite, and Gemstone, Diamond combination.\n' +
        '* If you want to get the certificate with your ordered jewelry then please contact me within 24-48 hours of your order placed.\n' +
        '* The certificate is Chargeable.\n' +
        '\n' +
        'Return & Exchange:\n' +
        'Due to the nature of these items or the custom issue, unless they arrive damaged or defective, I cannot accept returns for:\n' +
        '\n' +
        'I gladly accept returns, exchanges and cancellations \n' +
        'Request a cancellation within: 24 hours of purchase \n' +
        '\n' +
        'The following items can&#39;t be returned or exchanged\n' +
        'Because of the nature of these items, unless they arrive damaged or defective, I can&#39;t accept returns for: \n' +
        '•\tCustom or personalized orders\n' +
        '•\tPerishable products (like food or flowers)\n' +
        '•\tDigital downloads\n' +
        '•\tIntimate items (for health/hygiene reasons)\n' +
        '•\tRequest a cancellation within: 12 hours of purchase \n' +
        '\n' +
        'Conditions of return :\n' +
        'Buyers are responsible for return postage costs. If the item is not returned in its original condition, the buyer is responsible for any loss in value. \n' +
        '\n' +
        '💍 Customized & Personalized:\n' +
        ' ## We are happy to receive your Custom or Dream Jewelry.\n' +
        '* Accepted mount setting order.\n' +
        '* After your all receiving requirement first I will make cad design or sketch for you.\n' +
        '* If you like cad design then I will send your item for production, or if you want any changes then I changes this design and again send to you.\n' +
        '\n' +
        '💍Delivery :\n' +
        '*Buyer are responsible for custom duty or for any customs and import taxes that may apply.\n' +
        '*We take approx. 8-10 days for making Process Jewelry.\n' +
        '\n' +
        '💍 𝐑𝐮𝐬𝐡 𝐎𝐫𝐝𝐞𝐫\n' +
        '* Order before any rush order please contact us, if possible then I will make it for you.\n' +
        '*An extra charge may apply.\n' +
        '*Possible in selected items only.\n' +
        '\n' +
        '💍 𝐒𝐡𝐢𝐩𝐩𝐢𝐧𝐠\n' +
        '* We do Standard Shipping through USPS, which will take 10-17 days for delivery.\n' +
        '* Express Shipping charge is 30 USD Flat, and It will go through DHL Express and it will take 7-10 Working days for delivery.\n' +
        '\n' +
        '💍 Feedback:\n' +
        '*If you have any problem about the item or shipping, please contact us before reviewing. I will do my best to solve your problem.\n' +
        '\n' +
        '\n' +
        '                                                                         Thank you for visit my Shop+++++',
      quantity: 2,
      num_favorers: 0,
      tags: [
        'Engagement Ring',
        'Moissanite',
        'Wedding Ring',
        'Gold Ring',
        'Gift For Her',
        'Mothers Day Gifts',
        'Moissanite Jewelry',
        'Gold Jewelry',
        'Ring For Women',
        'Anniversary Gifts',
        '3 Stone Ring',
        'Three Stone Ring',
        'Moissanite ring'
      ],
      processing_min: 10,
      processing_max: 20,
      price: 182.99,
      img: 'https://i.etsystatic.com/26927362/r/il/c3f4bd/3860525351/il_fullxfull.3860525351_o5ue.jpg',
      onSale: true,
      taxonomy_id: 15
    },
    {
      title: 'Diamonds Tiger Bracelet Bangle 14k Solid Gold 150gr',
      description: '✥ YOUR PURCHASE WILL INCLUDE\n' +
        '↣ Free Shipping\n' +
        '↣ Free Ring Sizing\n' +
        '↣ Free Ring Box\n' +
        '↣ Free Gift Box wrapping\n' +
        '↣ Free Engraving\n' +
        '↣ 100% Satisfaction\n' +
        '↣ Easy Payment Plans\n' +
        '\n' +
        '✥ Diamonds Tiger Bracelet Bangle 14k Solid Gold 150gr  Lab Grown diamond Bracelet, 30.00 crt lab grown diamond Bracelet, Woman Gift\n' +
        '\n' +
        '✥ Lab Diamond is also known as Lab Grown Diamond, CVD, HPHT, Green Diamond, Eco-Friendly Diamond, Man Made Diamond, etc.\n' +
        '\n' +
        '● Description of Ring\n' +
        '___________________________\n' +
        '\n' +
        '✥ Stone Details\n' +
        '\n' +
        '↣ Diamond Type: Lab Created Diamond / Lab Grown Diamond\n' +
        '↣ Shape: Round Diamond\n' +
        '↣ Gold: 150 Gram Aprox\n' +
        '↣ Carat: 30.00 Crt\n' +
        '↣ Color Clarity: VVS-EF / VS-FG\n' +
        '↣ Stone: Round Brillient Cut \n' +
        '\n' +
        '✥ Information about CVD Diamond\n' +
        '_______________________________________________\n' +
        '\n' +
        'This lab-created diamond is not an imitation stone like a Cubic Zirconia or Moissanite, this is a genuine, 100% real diamond, and there is no difference visually or chemically.\n' +
        'The only difference is that lab diamonds are grown in a laboratory rather mined from the earth. Lab-created diamonds are created in lab conditions, by mimicking natural processes.\n' +
        'Technically Lab Created Diamonds are exactly the same as natural diamonds. The chemical compound of lab-created diamonds is completely identical to the chemical compound of natural diamonds.\n' +
        '\n' +
        'There are 2 kinds of LAB GROWN DIAMONDS. CVD Lab-grown diamonds and HPHT Lab-grown diamonds. The difference between the CVD and HPHT Lab Grown Diamond is the CVD Lab-grown diamond will react to a diamond detector pen and the HPHT Lab Grown Diamond will not, making the HPHT Lab Diamond cheaper than the CVD Lab Grown Diamond.\n' +
        '\n' +
        '✥ Customization\n' +
        '___________________________\n' +
        '\n' +
        '↣ We accept customized or personalized orders from our customers.\n' +
        '\n' +
        '↣ You can order jewelry in 14K, Yellow Gold or Rose Gold, and White Gold\n' +
        '\n' +
        '↣ If you don&#39;t find a perfect ring in the store, just message us with the inspiration image and get a free quote and customization in easy steps\n' +
        '\n' +
        '↣ We send CAD ( mockup ) for approval before making the jewelry\n' +
        '\n' +
        '↣ Free Engraving\n' +
        '\n' +
        '↣ Rush order service available\n' +
        '\n' +
        '\n' +
        '✦ Thank you for visiting our store, see you soon ✦\n' +
        '\n' +
        '❤ ❤ ❤ Share The Love ❤ ❤ ❤',
      quantity: 600,
      num_favorers: 0,
      tags: [ 'solitailr rings', 'engagement ring' ],
      processing_min: 5,
      processing_max: 15,
      price: 20231,
      img: 'https://i.etsystatic.com/32601264/r/il/1cb8b5/3813088910/il_fullxfull.3813088910_meo1.jpg',
      onSale: true,
      taxonomy_id: 15
    },
    {
      title: 'Embroidered Velvet Shawl | Bridal Shawl | Bridesmaid Shawl | Groom Shawl | Shawls and Wraps | Wedding Shawl | Wedding Gift | Wedding Cape.',
      description: 'Checkout My Other Listings of Embroidered Velvet Shawl | Wedding Gift | Mother in Law Gift | Wedding Cape | Shawls and Wraps | Bridal Cape | Bridal Shrug | Wedding Shawl | Bridal Shawl | Bridesmaid Shawl | Festival Shawl | Winter Wedding | Wedding Accessories | Wedding Favors\n' +
        '\n' +
        '\n' +
        '- Zari Embroidery.\n' +
        '\n' +
        '- All Four Sides Maysoori Pati On The Inner Of Shawl.\n' +
        '\n' +
        '- Micro 5000 Velvet Shawl.\n' +
        '\n' +
        '- Soft Velvet.\n' +
        '\n' +
        '- Ready To Wear.\n' +
        '\n' +
        '- Fully Stitched.\n' +
        '\n' +
        '- Very Finishing Embroidery.\n' +
        '\n' +
        '- Length of Shawl is 2.5 Meter and Width 1 Meter.\n' +
        '\n' +
        '- No Wastage Threads With No Any Hanging Threads On Both Sides Of Shawl.\n' +
        '\n' +
        '- If Any Of The Design Will Out Of Stock So Plz Give Us a Time of 4 Days so We Will Remanufacture It Within 4 Days.\n' +
        '\n' +
        '*RETURNS POLICY*\n' +
        'Item Must be Returned in Original Condition, Unused & with its Original Package.\n' +
        '\n' +
        'ITEM TO BE RETURNED WITHIN 14 DAYS OF RECEIPT.\n' +
        '\n' +
        'You are Responsible for Return Postage Cost.\n' +
        '\n' +
        '******************************************\n' +
        'Pashmina Shawls:\n' +
        'https://www.etsy.com/shop/OnPointJSCollection?ref=seller-platform-mcnav&section_id=28154648\n' +
        '\n' +
        'More Karandi Shawls:\n' +
        'https://www.etsy.com/shop/OnPointJSCollection?ref=seller-platform-mcnav&section_id=28154646\n' +
        '\n' +
        'Kimonos:\n' +
        'https://www.etsy.com/shop/OnPointJSCollection?ref=seller-platform-mcnav&section_id=28154676\n' +
        '\n' +
        'Swiss Shawls:\n' +
        'https://www.etsy.com/shop/OnPointJSCollection?ref=seller-platform-mcnav&section_id=29365404\n' +
        '\n' +
        'Wool Shawls\n' +
        'https://www.etsy.com/shop/OnPointJSCollection?ref=seller-platform-mcnav&section_id=29429795\n' +
        '\n' +
        'Khussa\n' +
        'https://www.etsy.com/shop/OnPointJSCollection?ref=seller-platform-mcnav&section_id=29522674\n' +
        '\n' +
        'Shop Link: https://www.etsy.com/shop/OnPointJSCollection',
      quantity: 2,
      num_favorers: 99,
      tags: [
        'Velvet Shawl',
        'wedding gift',
        'mother in law gift',
        'wedding cape',
        'shawls and wraps',
        'bridal cape',
        'bridal shrug',
        'wedding   shawl',
        'bridal shawl',
        'bridesmaid shawl',
        'festival shawl',
        'wedding favors',
        'christmas gift'
      ],
      processing_min: 1,
      processing_max: 3,
      price: 44.99,
      img: 'https://i.etsystatic.com/20928945/r/il/cb0045/2499594562/il_fullxfull.2499594562_hu28.jpg',
      onSale: true,
      taxonomy_id: 15
    },
    {
      title: '925 Sterling silver Ring, Spinner Ring, Meditation Ring, Handmade Ring, Jewellery Ring, Fidget Ring, Birthday Present Gifts,Gift For Ring',
      description: '* Hammered 925 Sterling Silver Designer Spinner Ring For Women, Handmade Meditation Ring For Her, Silver Anxiety Bridesmaid Ring\n' +
        '\n' +
        '* Handmade item\n' +
        '\n' +
        '* Dispatches from a small business in \n' +
        '   India\n' +
        '\n' +
        '* PRODUCT DESCRIPTION-\n' +
        '\n' +
        '* Product - Silver Ring \n' +
        '\n' +
        '* Type - Handmade\n' +
        '\n' +
        '* Metal Purity - 925 Sterling Silver\n' +
        '\n' +
        '* Ring Size - All Sizes Are Available\n' +
        '\n' +
        '* The ring is made with genuine solid 925 sterling silver.\n' +
        '\n' +
        'You will receive beautiful ring as described in the advertise , a perfect and unique ring gift for your loved ones.\n' +
        'Occasion: Birthday Events, Lovely Valentine&#39;s Day Gift, Anniversary Gift, Weeding Gift, Engagement Ring, Lover Gift Ring, Hen Party and Other Occasion\n' +
        'If you have any question please feel free to contact us via Etsy  convo.\n' +
        'Thank you for choosing us.',
      quantity: 1,
      num_favorers: 0,
      tags: [
        '925 Solid Silver',
        'Gift For Her',
        'Handmade Jewelry',
        'Gemstone Jewelry',
        'Woman Jewelry',
        'Woman Earring',
        'Silver Jewelry',
        'For Woman',
        'Silver Ring',
        'Sterling Ring',
        'Stud Ring',
        'sterling silver ring',
        'Spinner Ring'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 38,
      img: 'https://i.etsystatic.com/34850030/r/il/8d989b/3813102140/il_fullxfull.3813102140_aodl.jpg',
      onSale: true,
      taxonomy_id: 15
    },
    {
      title: '925 Sterling silver Ring, Spinner Ring, Meditation Ring, Handmade Ring, Jewellery Ring, Fidget Ring, Birthday Present Gifts,Gift For Ring',
      description: '* Hammered 925 Sterling Silver Designer Spinner Ring For Women, Handmade Meditation Ring For Her, Silver Anxiety Bridesmaid Ring\n' +
        '\n' +
        '* Handmade item\n' +
        '\n' +
        '* Dispatches from a small business in \n' +
        '   India\n' +
        '\n' +
        '* PRODUCT DESCRIPTION-\n' +
        '\n' +
        '* Product - Silver Ring \n' +
        '\n' +
        '* Type - Handmade\n' +
        '\n' +
        '* Metal Purity - 925 Sterling Silver\n' +
        '\n' +
        '* Ring Size - All Sizes Are Available\n' +
        '\n' +
        '* The ring is made with genuine solid 925 sterling silver.\n' +
        '\n' +
        'You will receive beautiful ring as described in the advertise , a perfect and unique ring gift for your loved ones.\n' +
        'Occasion: Birthday Events, Lovely Valentine&#39;s Day Gift, Anniversary Gift, Weeding Gift, Engagement Ring, Lover Gift Ring, Hen Party and Other Occasion\n' +
        'If you have any question please feel free to contact us via Etsy  convo.\n' +
        'Thank you for choosing us.',
      quantity: 1,
      num_favorers: 0,
      tags: [
        '925 Solid Silver',
        'Gift For Her',
        'Handmade Jewelry',
        'Gemstone Jewelry',
        'Woman Jewelry',
        'Woman Earring',
        'Silver Jewelry',
        'For Woman',
        'Silver Ring',
        'Sterling Ring',
        'Stud Ring',
        'sterling silver ring',
        'Spinner Ring'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 38,
      img: 'https://i.etsystatic.com/34850030/r/il/8d989b/3813102140/il_fullxfull.3813102140_aodl.jpg',
      onSale: true,
      taxonomy_id: 15
    },
    {
      title: 'Natural White Topaz Necklace, Round Shape, Anniversary Necklace,925 Sterling Silver, Pearl Chain Necklace, Fashionable Jewelry, Gift For her',
      description: '✔✔Metal Material-Solid 925 Sterling Silver\n' +
        '\n' +
        '✔✔White Topaz  Size 1*1 MM \n' +
        '\n' +
        '✔✔Pearl Stone Size 6*6 MM\n' +
        '\n' +
        '✔✔Natural Moonstone And White Topaz Stone Is Used\n' +
        '\n' +
        '.✔✔10 CTS  Approx.  Weight Of Stone\n' +
        '\n' +
        '✔✔ Weight Of The Pendant 8.400 Is  Gm\n' +
        '\n' +
        '\n' +
        '*****************************************************************************************************************\n' +
        '✔✔Please note that there Can be slight variations in stone texture and color shades in the actual product that you receive. Stone quality or grade will be same. Because We Use Natural Stones And All Natural Stones Are Not Of Same Textured.\n' +
        '\n' +
        '✔✔All Our Jewelry Is 925 Stamped.\n' +
        '\n' +
        '*****************************************************************************************************************\n' +
        ' \n' +
        '\n' +
        '***Other Pendant***\n' +
        'https://www.etsy.com/shop/CLPGemsAndJewels?ref=seller-platform-mcnav&search_query=pendant\n' +
        '\n' +
        '\n' +
        '**********************************************************************************************************************\n' +
        '\n' +
        '\n' +
        '✔✔ Micron Plating Is Used.(It Stays Long Lasting Compare To Other Plating&#39;s)\n' +
        '\n' +
        '✔✔Metal Is Also Available In 18k Gold Plated\n' +
        '\n' +
        '✔✔Metal Is Also Available In 18K Rose Gold\n' +
        '\n' +
        '✔✔ Metal Is Also Available In 925 Sterling Silver\n' +
        '\n' +
        '✔✔Free Shipping To U.S.\n' +
        '\n' +
        '✔✔Handcrafted By Ourselves\n' +
        '\n' +
        '✔✔Handcrafted In India\n' +
        '\n' +
        '✔✔Customization Is Also Available.\n' +
        '\n' +
        '✔✔Can Be Made In 14k,18k,22k,24k Gold.\n' +
        '\n' +
        '✔✔If Any Body Wants Ring Size That Is Not Listed. It Can Be Made .\n' +
        '\n' +
        '✔✔Shipping To Worldwide\n' +
        '\n' +
        '✔✔Prices Are Competitive\n' +
        '\n' +
        '✔✔Want To Know Ring Size Can Be Known By Above Picture.\n' +
        ' \n' +
        '**********************************************************************************************************************\n' +
        '\n' +
        '\n' +
        'Visit Our Homepage Of Shop\n' +
        '\n' +
        'https://www.etsy.com/shop/CLPGemsAndJewels\n' +
        '\n' +
        'Visit Our Sister Shop Of Gold Jewelry\n' +
        '\n' +
        'https://www.etsy.com/in-en/shop/CLPGOLDJEWELRY \n' +
        '\n' +
        '✔✔ If anybody has some doubts about the Naturality of the stone than please send us a message about it because we provide certificate of authenticity of stones without any cost. So there will be no further doubts about the Naturality of stones. \n' +
        '\n' +
        'Care instructions\n' +
        '1-: Put Jewelry On After Applying Makeup\n' +
        '2-: Don&#39;t Wear Jewelry In Swimming Pools and Spas\n' +
        '3-: Contact Sports and Jewelry Don&#39;t Mix\n' +
        '4-: Remove Your Jewelry Before Bathing\n' +
        '5-: Use Jewelry Polishing Cloths for Best Results\n' +
        '6-: Use Warm Water to Clean Jewelry\n' +
        '7-: Inspect Your Jewelry Regularly\n' +
        '8-: When Travelling with Jewelry, Use a Case',
      quantity: 1,
      num_favorers: 1,
      tags: [
        'white topaz pendants',
        'topaz jewelry',
        'round shape',
        'anniversary necklace',
        '925 sterling silver',
        'pearl chain necklace',
        'fashionable jewelry',
        'gift for her',
        'beautiful pendants',
        'designer nacklace',
        'personalized gift',
        'promise pendants',
        'gift item'
      ],
      processing_min: 3,
      processing_max: 5,
      price: 202.11,
      img: 'https://i.etsystatic.com/14626204/r/il/ff9d4b/3264531910/il_fullxfull.3264531910_i1vs.jpg',
      onSale: true,
      taxonomy_id: 15
    }
  ]


).then(console.log('seeds geleiyor'))
.catch(err=>console.log(err))
 