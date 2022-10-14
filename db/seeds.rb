# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "💣 Destroying previous seeds..."
User.destroy_all
Brand.destroy_all
Category.destroy_all
Item.destroy_all
Cart.destroy_all
Order.destroy_all


puts "💰 Seeding User"
tommy = User.create!(username: "Tommy", password: "123", email:"Tommy@Gmail.com")

puts "💰 Seeding Brand"
yeezy_brand = Brand.create!(brand_name: "Yeezy")
nike_brand = Brand.create!(brand_name: "Nike")
panini_brand = Brand.create!(brand_name: "Panini")
sony_brand = Brand.create!(brand_name: "Sony")
microsoft_brand = Brand.create!(brand_name: "Microsoft")

puts "💰 Seeding Category"
shoe = Category.create!(category_name: "Shoe")
collectible = Category.create!(category_name: "Collectibles")
electronic = Category.create!(category_name: "Electronics")

puts "💰 Seeding Item"
Item.create!(item_name: "Yeezy 350 Bred", price: 400, category_id: shoe.id, brand_id: yeezy_brand.id, size: "11", image: "https://cdn.shopify.com/s/files/1/0366/7253/6715/products/bred350_1080x.jpg?v=1664469432")
Item.create!(item_name: "Yeezy 350 Tint", price: 350, category_id: shoe.id,  brand_id: yeezy_brand.id, size: "8", image: "https://cdn.shopify.com/s/files/1/0366/7253/6715/products/bluetintyeezy_1080x.jpg?v=1664482840")
Item.create!(item_name: "Yeezy Turtledove", price: 400, category_id: shoe.id,  brand_id: yeezy_brand.id, size: "13", image: "https://cdn.shopify.com/s/files/1/0366/7253/6715/products/turtledove_1080x.jpg?v=1664478312")
Item.create!(item_name: "Yeezy 700", price: 475, category_id: shoe.id,  brand_id: yeezy_brand.id, size: "9", image: "https://cdn.shopify.com/s/files/1/0366/7253/6715/products/yeezy-boost-700-wave-runner-solid-grey-30121875_1080x.jpg?v=1664230376")
Item.create!(item_name: "Yeezy Slide", price: 250, category_id: shoe.id,  brand_id: yeezy_brand.id, size: "7", image: "https://cdn.shopify.com/s/files/1/0366/7253/6715/products/bone2022_1080x.jpg?v=1664476345")
Item.create!(item_name: "Yeezy Foam Rnnr", price: 300, category_id: shoe.id,  brand_id: yeezy_brand.id, size: "6", image: "https://cdn.shopify.com/s/files/1/0366/7253/6715/products/mineralbluefoam_1080x.jpg?v=1664473151")
Item.create!(item_name: "Yeezy 450 Cloud", price: 250, category_id: shoe.id,  brand_id: yeezy_brand.id, size: "7.5", image: "https://cdn.shopify.com/s/files/1/0366/7253/6715/products/yeezy-450-cloud-white-30121848_1080x.jpg?v=1664230370")
Item.create!(item_name: "Yeezy Foam Rnnr", price: 370, category_id: shoe.id,  brand_id: yeezy_brand.id, size: "8.5", image: "https://cdn.shopify.com/s/files/1/0366/7253/6715/products/yeezy-foam-rnnr-mx-cream-clay-30121877_1080x.jpg?v=1664230399")
Item.create!(item_name: "Yeezy 350 Sesame", price: 450, category_id: shoe.id,  brand_id: yeezy_brand.id, size: "10.5", image: "https://cdn.shopify.com/s/files/1/0366/7253/6715/products/yeezy-boost-350-sesame-30121859_1296x.jpg?v=1664230398")
Item.create!(item_name: "Yeezy 350 Beluga", price: 340, category_id: shoe.id,  brand_id: yeezy_brand.id, size: "12", image: "https://cdn.shopify.com/s/files/1/0366/7253/6715/products/beluga_1296x.jpg?v=1664472814")
Item.create!(item_name: "Nike Air Force One", price: 175, category_id: shoe.id, brand_id: nike_brand.id, size: "11", image: "https://cdn.shopify.com/s/files/1/0366/7253/6715/products/fazo_1080x.jpg?v=1664468698")
Item.create!(item_name: "Nike Kobe Grinch", price: 600, category_id: shoe.id, brand_id: nike_brand.id, size: "8", image: "https://cdn.shopify.com/s/files/1/0366/7253/6715/products/nike-kobe-6-protro-grinch-2020-30121611_1080x.png?v=1664230031")
Item.create!(item_name: "Nike Dunk UNC", price: 475, category_id: shoe.id, brand_id: nike_brand.id, size: "13", image: "https://cdn.shopify.com/s/files/1/0366/7253/6715/products/nike-dunk-low-unc-2021-30121596_1080x.jpg?v=1664230002")
Item.create!(item_name: "Nike Dunk Union Passport", price: 350, category_id: shoe.id, brand_id: nike_brand.id, size: "9", image: "https://cdn.shopify.com/s/files/1/0366/7253/6715/products/argonuniondunk_2048x2048.jpg?v=1664482216")
Item.create!(item_name: "Nike Virgil White Green", price: 7500, category_id: shoe.id, brand_id: nike_brand.id, size: "7", image: "https://cdn.shopify.com/s/files/1/0366/7253/6715/products/ScreenShot2022-08-16at12.08.39PM_2048x2048.png?v=1664231030")
Item.create!(item_name: "Nike Virgil White Royal", price: 10000, category_id: shoe.id, brand_id: nike_brand.id, size: "6", image: "https://cdn.shopify.com/s/files/1/0366/7253/6715/products/Louis-Vuitton-Nike-Air-Force-1-Low-By-Virgil-Abloh-White-Royal-Product_1080x.webp?v=1664231058")
Item.create!(item_name: "Nike Supreme", price: 175, category_id: shoe.id, brand_id: nike_brand.id, size: "7.5", image: "https://cdn.shopify.com/s/files/1/0366/7253/6715/products/nike-air-force-1-low-supreme-white-30121515_1080x.jpg?v=1664229947")
Item.create!(item_name: "Nike Dunk Low Brazil", price: 550, category_id: shoe.id, brand_id: nike_brand.id, size: "8.5", image: "https://cdn.shopify.com/s/files/1/0366/7253/6715/products/brazildunk_1080x.jpg?v=1664555339")
Item.create!(item_name: "Nike Dunk Low Ceramic", price: 450, category_id: shoe.id, brand_id: nike_brand.id, size: "10.5", image: "https://cdn.shopify.com/s/files/1/0366/7253/6715/products/nike-dunk-low-ceramic-2020-30121545_1080x.jpg?v=1664229763")
Item.create!(item_name: "Nike Sacai Fragment Grey", price: 475, category_id: shoe.id, brand_id: nike_brand.id, size: "12", image: "https://cdn.shopify.com/s/files/1/0366/7253/6715/products/nike-ld-waffle-sf-sacai-fragment-grey-30121615_2048x2048.jpg?v=1664230041")
Item.create!(item_name: "2021 Panini NFL Mega", price: 100, category_id: collectible.id, brand_id: panini_brand.id, size: "OS", image: "https://images.stockx.com/images/2021-Panini-Prizm-Football-Mega-Box-Green-Pulsars.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1655265009&q=60")
Item.create!(item_name: "2021 Panini NFL Blaster", price: 90, category_id: collectible.id, brand_id: panini_brand.id, size: "OS", image: "https://images.stockx.com/images/2021-Panini-Prizm-Football-Blaster-Box-Disco-Prizms.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1655264908&q=60")
Item.create!(item_name: "2020 Panini NFL Mega", price: 300, category_id: collectible.id, brand_id: panini_brand.id, size: "OS", image: "https://images.stockx.com/images/2020-panini-donruss-optic-football-mega-box-bronze-parallels.png?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1613515343&q=60")
Item.create!(item_name: "2020 Panini NFL Blaster", price: 475, category_id: collectible.id, brand_id: panini_brand.id, size: "OS", image: "https://images.stockx.com/images/2020-panini-donruss-optic-football-blaster-box-purple-shock-parallels.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1614795743&q=60")
Item.create!(item_name: "2020 Panini NBA Mega", price: 100, category_id: collectible.id, brand_id: panini_brand.id, size: "OS", image: "https://images.stockx.com/images/2020-21-Panini-Donruss-Optic-Basketball-Mega-Box-Purple-Shock-Prizms.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1634848273&q=60")
Item.create!(item_name: "2021 Panini UFC Mega", price: 400, category_id: collectible.id, brand_id: panini_brand.id, size: "OS", image: "https://images.stockx.com/images/2021-Panini-Prizm-UFC-Retail-Box.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1625168202&q=60")
Item.create!(item_name: "2021 Panini UFC Premium", price: 8000, category_id: collectible.id, brand_id: panini_brand.id, size: "OS", image: "https://images.stockx.com/images/2021-Panini-Prizm-UFC-Premium-Box-Set.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1625004521&q=60")
Item.create!(item_name: "2021 Panini UFC Blaster", price: 90, category_id: collectible.id, brand_id: panini_brand.id, size: "OS", image: "https://images.stockx.com/images/2020-Panini-Prizm-UFC-Blaster-Box.png?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1620327114&q=60")
Item.create!(item_name: "2021 Panini UFC Hobby", price: 1200, category_id: collectible.id, brand_id: panini_brand.id, size: "OS", image: "https://images.stockx.com/images/2021-Panini-Prizm-UFC-Hobby-Box.png?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1617048722&q=60")
Item.create!(item_name: "2020 Panini NFL Blaster", price: 150, category_id: collectible.id, brand_id: panini_brand.id, size: "OS", image: "https://cdn.shopify.com/s/files/1/0526/0125/8152/products/93187630-8721-4417-aff3-9fc2d64c0f35.d060be0dc461ac8e9c6c9f439d2c1591_1024x1024@2x.png?v=1612567013")
Item.create!(item_name: "Play Station 5 Disc", price: 750, category_id: electronic.id, brand_id: sony_brand.id, size: "OS", image: "https://i5.walmartimages.com/asr/2d7d7f63-fbd3-4892-a633-f371b7c948a5.e3656c58c60bfd68e74804868cb51b55.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF")
Item.create!(item_name: "Play Station 5 Digital", price: 700, category_id: electronic.id, brand_id: sony_brand.id, size: "OS", image: "https://i5.walmartimages.com/asr/9c217822-c5ae-4467-bd32-6b84de15682b.b9905fbe5b199c8d1fdc1ce5f977df4d.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF")
Item.create!(item_name: "Xbox Series X", price: 700, category_id: electronic.id, brand_id: microsoft_brand.id, size: "OS", image: "https://i5.walmartimages.com/asr/9f8c06f5-7953-426d-9b68-ab914839cef4.5f15be430800ce4d7c3bb5694d4ab798.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF")

tommy_sneaker = Item.create!(item_name: "Yeezy 350 Bred", price: 400, category_id: shoe.id, brand_id: yeezy_brand.id, size: "11", image: "https://cdn.shopify.com/s/files/1/0366/7253/6715/products/bred350_1080x.jpg?v=1664469432")

puts "💰 Seeding Cart"


puts "💰 Seeding Order"
Order.create!(price: tommy_sneaker.price, image: tommy_sneaker.image, user_id: tommy.id, checked_out: false)



puts "💰 Seeding Done!"