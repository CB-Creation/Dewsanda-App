import bcrypt from 'bcryptjs';

const data={
    users:[
        {
            name:'Chanaka',
            email:'cbcusandaruwan@gmail.com',
            password:bcrypt.hashSync('1234',8),
            isAdmin: true,
        },
        {
            name:'Kamal',
            email:'cbusandaruwan@gmail.com',
            password:bcrypt.hashSync('1254',8),
            isAdmin: false,
        }
    ],
    products:[
        {
            
            name:'Bathisara',
            category:'Incense sticks',
            image:'/img/1_.png',
            price:'100',
            counterInStock:10,
            brand:'Dewsanda',
            rating:4.5,
            numReviews:10,
            description:'Bathisara 100 sticks',
        },
        {
            
            name:'Six O\'clock',
            category:'Incense sticks',
            image:'/img/2_.png',
            price:'20',
            counterInStock:20,
            brand:'Dewsanda',
            rating:5,
            numReviews:7,
            description:'Bathisara Six O\'clock',
        },
        {
            
            name:'Dewsanda',
            category:'Incense sticks',
            image:'/img/3_.png',
            price:'80',
            counterInStock:30,
            brand:'Dewsanda',
            rating:5,
            numReviews:120,
            description:'Dewsanda Premium',
        }
    ]
}

export default data;