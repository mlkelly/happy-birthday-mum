# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.destroy_all

p1 = Post.create(name: "Fuzz", message: "Happy Birthday Mum! Love you lots!!!" )
p2 = Post.create(name: "Anon", message:"Have a fantastic birthday karen!")