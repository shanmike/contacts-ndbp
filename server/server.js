let id = 0;
let contacts = [
    {  
        phone: 2105551234,
        name: `Adam Jones`,
        email: `adamjones@gmail.com`,
        id:0
    },
    {
        phone: 2105551234,
        name: `David Brett`,
        email: `davidbrett@gmail.com`,
        id:0
    }
];

module.exports = {
    createContact:(req,res)=>{
        req.body.id = ++id
        contacts.push(req.body)
        res.status(200).send(contacts)
    },

    readContact:(req,res)=>{
        res.status(200).send(contacts)
    },
    updateContact:(req,res)=>{ 
        contacts.map((contact)=>{
            if(+req.params.id === contact.id){
               contact.name = req.body.name
               contact.email = req.body.email 
               contact.phone = req.body.phone
            }
        })
        res.status(200).send(contacts)
    },
    deleteContact:(req,res)=>{
        contacts = contacts.filter(val=>+req.params.id !== val.id)
        res.status(200).send(contacts)
    },
};

