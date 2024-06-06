const { CosmosClient } = require('@azure/cosmos');


    const connectdb = function(databaseId, containerId){
        const endpoint = 'https://cdb-universe.documents.azure.com:443/';
            const key = 'hp2IylctlhLVUNKF1x6cFzNaZUR5zduVVWbutCtHyL15v4P6MpkYxBLNXU17h4FnQaYxhMOHiHKCACDbVzQN9A==';
            // const databaseId = "Groot-db"; // Replace with your database ID
            // const containerId = "mca"; // Replace with your container ID
            const client = new CosmosClient({ endpoint, key });
            const database = client.database(databaseId);
            const container = database.container(containerId);
            return container
    }    


    const company = async (id) => {
        console.log("id is coming to this function",typeof(id),"---------",id)
        const querySpec = {
                      query: "SELECT * FROM c WHERE c.id = @id",
                      parameters: [{ name: "@id", value: id }],
                    };
        console.log(querySpec);
        const  {resources:mcadata} = await connectdb("Groot-db" ,"mca").items.query(querySpec).fetchAll();
        console.log(mcadata);            
        if (mcadata.length === 0) {
            throw new Error(`Company with ID ${id} not found`);
        }
    
        return mcadata[0];
    };

    const lei = async (id) => {
        console.log("id is coming to this function",typeof(id),"---------",id)
        const querySpec = {
                      query: "SELECT * FROM c WHERE c.id = @id",
                      parameters: [{ name: "@id", value: id }],
                    };
        console.log(querySpec);
        const  {resources:data} = await connectdb("Groot-db" ,"lei").items.query(querySpec).fetchAll();
        console.log(data);            
        if (data.length === 0) {
            throw new Error(`Company with ID ${id} not found`);
        }
    
        return data[0];
    };


           
 
    const person= async(Reference_Id)=>{
        console.log("person data " ,typeof(Reference_Id) , "----------" , Reference_Id);
        const querySpec={
            query: "Select  * from c where c.Reference_Id = @id",
            parameters:[{name : "@id" , value: Reference_Id}],
        }
            const {resources:persondata} = await connectdb("Groot-db" ,"key-people" ).items.query(querySpec).fetchAll();
            // console.log(persondata);
            if (persondata.length==0)
                {
                    throw new Error(`Company with person ID ${Reference_Id} does not exist`)
                } 
                //  console.log(persondata)
                
                 
                return persondata ; 
                     


        };
        const proposed_Inv= async(Reference_Id)=>{
            console.log("proposed_inv " ,typeof(Reference_Id) , "----------" , Reference_Id);
            const querySpec={
                query: "Select  * from c where c.Reference_Id = @id",
                parameters:[{name : "@id" , value: Reference_Id}],
            }
                const {resources:invdata} = await connectdb("Groot-db" ,"proposed-investors" ).items.query(querySpec).fetchAll();
                console.log(invdata);
                if (invdata.length==0)
                    {
                        throw new Error(`Company with person ID ${Reference_Id} does not exist`)
                    } 
                     console.log(invdata)
                    
                     
                    return invdata[0] ; 
                         
    
    
            };
            const Patent= async(id)=>{
                console.log("person data " ,typeof(id) , "----------" , id);
                const querySpec={
                    query: "Select * from c where c.id = @id",
                    parameters:[{name : "@id" , value: id}],
                }
                    const {resources:patentdata} = await connectdb("Groot-db" ,"patent" ).items.query(querySpec).fetchAll();
                    console.log(patentdata);
                    
                    if (patentdata.length==0)
                        {
                            throw new Error(`Company with person ID ${id} does not exist`)
                        } 
                        //  console.log(persondata)
                        
                         
                        return patentdata ; 
                             
        
        
                };
            
        
    

    const resolvers = {
        hello: () => {
            return 'Hello, world!';
        },

        greet: ({name})=>{
            return `hello ${name}`;
        },
        company: async ({id}) => {
            console.log(id)
            return company(id)
        },
        leidata : async({id})=>{
            console.log(id)
            return lei(id);
    
        },
        persondata : async({Reference_Id})=>{
            console.log(Reference_Id);       
            return person(Reference_Id)
        },
        proposed_investor : async({Reference_Id})=>{
            console.log(Reference_Id);
            return proposed_Inv(Reference_Id)
        },
        getPatent: async({id})=>{
            console.log(id);
            return Patent(id)
        }


    };
    

  
  
module.exports = resolvers

