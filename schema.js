const {buildSchema} = require('graphql')

const schema = buildSchema(`

type Query {
    getPatent(Reference_Id: ID!): [Patent]
    persondata(Reference_Id: ID!): [PersonData ]
    persondata2(limit : Int) : [PersonData]
    company(id: ID!): Company
    leidata(id: ID!) : LeiData
    proposed_investor(Reference_Id: ID!) : Proposed_Inv
    hello: String
    greet(name: String!): String
    businessnews(Reference_Id: ID!) : BusinessNews
    competitorData(Reference_Id: ID!): CompetitorData
    esgcompany(Reference_Id: ID!): [ESGCompany]
  }
  type Company {
    id: ID!
    Cin: String!
    Mca_Data: McaData
  }
  
  type McaData {
    Brand_Name: String
    Company_Name: String
    Date_Of_Registration: String
    Month_Name: String
    State: String
    Roc: String
    Status: String
    Category: String
    Class: String
    Company_Type: String
    Authorized_Capital: Int
    Paidup_Capital: Int
    Activity_Code: Int
    Activity_Description: String
    Registered_Office_Address: String
    Email: String
    Latest_Year_Annual_Return: String
    Latest_Year_Financial_Statement: String
    Obligation_Of_Contribution: String
    Number_Of_Partners: Int
    Number_Of_Designated_Partners: Int
    District: String
    Long_Description: String
    Code_Description: String
    Factacy_Industrial_Classification: [FactacyIndustrialClassification]
    Summary: String
    Turnover_Above: String
    Gst_Number: String
    Series: String
    Amount: String
    Investors: [[String]]
    Lei: String
  }
  scalar FactacyIndustrialClassification
      
  
type LeiData {
  id: ID!
  Lei: String!
  Lei_Data: LeiDetails!
}

type LeiDetails {
  Brand_Name: String
  Company_Name: String!
  Cin: String!
  Date_Of_Registration: String!
  Status: String!
  Registration_Authority_Id: String!
  Registration_Status: String!
  Category: String!
  Sub_Category: String
  Next_Renewal_Date: String
  Registered_Office_Address: String!
  City: String!
  Region_Code: String!
  Country: String!
  Postal_Code: String!
  Legal_Form_Code: String!
  Company_Type: String
  Managing_Lou_Number: String!
  Successor_1: String
  Successor_Name_1: String
  Successor_2: String
  Successor_Name_2: String
  Successor_3: String
  Successor_Name_3: String
  Successor_4: String
  Successor_Name_4: String
  Successor_5: String
  Successor_Name_5: String
  Expiration_Date: String
  Relation: String
  Relationship_Date: String
  Related_Entity: String
  Alt_Company_Name: String
}  
  
type PersonData {
  Reference_Id: ID!
  id: String
  Person_Data: Person_Data
  Reference_Container: String
}

type Person_Data {
  Registration_Number: String
  Company_Name: String
  Name: String
  Designation: String
  Deal_Id: [String]
  Art_Id: [String]
  Linkedin: String
  Relation : String
}
type Proposed_Inv {
  id: String
  Reference_Id: ID!
  Reference_Container: String
  Investor_Data: Investor_Data
}
type Investor_Data {
  Registration_Number : String
  Brand_Name : String
  Proposed_Investors : [Proposed_Investors]
}
scalar Proposed_Investors

type Patent {
  Reference_Id: String!
  id: String
  Reference_Container: String
  Application_Number: String
  Patent_Data: Patent_Data
}

type Patent_Data{
  Cin: String
  Company_Name: String
  Title_of_Invention: String
  Applicant_Name: [String]
  Inventor_Name: [String]
  Date_of_Filing: String
  Publication_Date: String
  Abstract: String
  Factacy_Patent_IC: String
  Industrial_Category: String
}

type BusinessNews {
  Reference_Id: ID
  Art_Id: [String]
  ORG: String
  published_date: String
  Output_CIN: String
  Brand_Name: String
  Legal_Name: String
  Entity_Type: String
  Company_SOS: String
  id: String
  Reference_Container: String
  
}
type CompetitorData {
  id: ID!
  Reference_Id: ID!
  Reference_Container: String!
  Competitor_Data: CompetitorInfo!
}

type CompetitorInfo {
  Cin: String!
  Brand_Name: String!
  Company_Name: String!
  Recommended_Company: [String!]!
}

type ESGCompany {
  id: String
  Reference_Id: String 
  Reference_Container: String
  Esg_Data: Esg_Data
}
type Esg_Data {
  Registration_Number: String
  Brand_Name: String
  ESG_Classification: [String]
  E_Score: Float
  S_Score: Float
  G_Score: Float
  Compound_Score: Float
  Art_Id: [String]
}


 

`);

module.exports =  schema; 
