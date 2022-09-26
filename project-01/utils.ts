//homeComtroller

//   //inserção

//   //metodo 02
//   let newUser = new User();

//   newUser.name = { firstName: "André", lastName: "Soares" };
//   newUser.email = "andre@gmail.com";
//   newUser.age = 35;
//   newUser.interests = ["programação", "futebol"];
//   let resultado = await newUser.save();

//   console.log("Novo usuario: ", resultado);

//   //metodo 01

//   // let newUser = await User.create({
//   //   name: { firstName: "Monaliza", lastName: "Fernandes" },
//   //   email: "monaliza@gmail.com",
//   //   age: 20,
//   //   interests: ["arte", "fisica"],
//   // });

//   console.log("novo usuario: ", newUser);
//   //pesquisa
//   // let users = await User.find({
//   //   age: {
//   //     $gt: 18,
//   //   },
//   // })
//   //   .skip(2)
//   //   .limit(2);
//   // console.log(users);

//   // .sort({
//   //   // age: 1,
//   //   // email: 1, // do menor pro maior ( -1 = do maior pro menor)
//   //   // "name.firstName": 1,
//   // });
//   // let users = await User.find({
//   //   // "name.firstName": "Robson",
//   //   // interests: "programação",
//   //   // age: { $gt: 18 }, // gt = maior que / gte = maior ou igual // lt = abaixo de // lte = abaixo ou igual a...
//   //   age: { $gt: 18, $lt: 50 },
//   // });

//   // let users = await User.findById("63304c862c226ccff42ec47e");
//   // let users = await User.findOne({
//   //   email: "bonyeki@gmail.com",
//   // });
//   // let users = await User.find({});

//   let age: number = 90;
//   let showOld: boolean = false;

//   if (age > 50) {
//     showOld = true;
//   }

//   let list = Product.getAll();
//   let expensiveList = Product.getFromPriceAfter(12);

//   res.render("pages/home", {
//     name: "Bonieky",
//     lastName: "Lacerda",
//     showOld,
//     products: list,
//     expensives: expensiveList,
//     frasesDoDia: [],
//   });
// };
