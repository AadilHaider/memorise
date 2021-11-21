var audio = new Audio('sound.mp3');
audio.play();
let question = {
    q1: `Need for social responsibility`,
    a1: `Concept of trusteeship <br>
    Changing expectations of society<br>
    Reputation <br>
    Protection of Environment<br>
    Optimum Utilisation of Resources<br>
    Pressure of trade union<br>
    Growth of consumer movement<br>
    Government control<br>
    Long term Self-Interest<br>
    Complexities of social problems<br>
    Globalisation<br>
    Role of media<br>`,
    q2: `Responsibility if Business to the Owners`,
    a2: `Reasonable profits <br>
    Optimum Utilisation of Capital<br>
    Minimise Wastage<br>
    Explore Business Opportunities<br>
    Effective utilisation of Owners funds<br>
    Fair practice in Stock Exchange<br>
    Efficient Business<br>
    Expansion and Diversification<br>
    Create Goodwill<br>
    Periodic Information<br>`,
    q3: `Responsibility of Business towards Investors`,
    a3: `Proper conduct of Meetings<br>
    Return on Investment<br>
    Handling Grievances<br>
    Maintain Transparency<br>
    Proper Disclosure of Information<br>
    Maintain Solvency and Prestige<br>`,
    q4: `Responsibility of Business towards Employees`,
    a4: `Job security<br>
    Fair Remuneration<br>
    Health and Safety Measures<br>
    Good Working Conditions<br>
    Recognition of Trade Unions<br>
    Education and Training<br>
    Workers’ Participation in Management<br>
    Promotion an Career Opportunities<br>
    Proper Grievance Procedure<br>
    Misc.`,
    q5: `Responsibility of Business towards Consumers`,
    a5: `Good Quality Products<br>
    Fair prices<br>
    Customers Safety<br>
    Honest Advertising<br>
    After Sales Service<br>
    Research and development<br>
    Regular supply<br>
    Attend Complaints<br>
    Training<br>
    Avoid Customer Exploitation`,
    q6: `Responsibility of Business towards Government`,
    a6: `Earn Foreign Exchange<br>
    No Favours<br>
    Observe Rule & Regulations<br>
    Timely Payment of Taxes<br>
    Socio-Economic Projects<br>
    Contribution to Govt Treasury<br>
    Economic Growth<br>
    Suggestions to Govt.`,
    q7: "Factors Influencing Elasticity of Demand",
    a7: `Nature of Commodity<br>
    Availibility of Substitue<br>
    Complimentary Goods<br>
    Habit<br>
    Urgency<br>
    Income of Consumer<br>
    No. of Uses<br>
    Durability<br>
    Time Period`,
    q8: "Determinants of Supply",
    a8: `Price<br>
    Infrastructural Facility<br>
    Natural Condition<br>
    Govt. Policy<br>
    State of Tech<br>
    Cost of Production<br>
    Future Expectations<br>
    Other Factors`,
    q9: "Exceptions of Law of Supply",
    a9: `Agricultural Goods<br>
    Urgent Need for Cash<br>
    Perishable Goods<br>
    Rare Goods<br>
    Labour Supply`,
    q10: "Features of Perfect Competetion",
    a10: `Large No. of Buyers & Sellers<br>
    Sells Homogenous Products<br>
    Free Entry & Exit<br>
    All Factors of Production are Mobile<br>
    Single Price<br>
    Perfect Knowledge of Market<br>
    No Govt. Intervention<br>
    No Transport Cost`,
    q11: 'Feaures of Monopoly',
    a11: `Single Seller<br>
    Price Maker<br>
    Entry Barriers<br>
    No Close Substitute<br>
    Complete Control over Market Supply<br>
    No Distinction between Firm & Industry<br>
    Price Discrimination`,
    q12: 'Feaatures of Oligopoly',
    a12: `Few Firms or Sellers<br>
    Interdependence<br>
    Lack of uniformity<br>
    Entry Barriers<br>
    Advertising<br>
    Uncertainity`,
    q13: 'Features of Monopolistic Competetion',
    a13: `Fairly Large No. of Sellers<br>
    Fairly Large No. of Buyers<br>
    Product Diffrenciation<br>
    Free Entry & Exit<br>
    Selling Cost<br>
    Close Substitutes<br>
    Concept of Group`,
    q14: 'Scope of Micro-Economics',
    a14: `Theory of Product Pricing<br>
    <ul>
    <li>Demand Analysis</li>
    <li>Supply Analysis</li>
    </ul> <br>
    Theory of Factor Pricing<br>
    <ul>
    <li>Rent</li>
    <li>Wages</li>
    <li>Interest</li>
    <li>Profit</li>
    </ul><br>
    Theory of Economic Welfare<br>
    <ul>
    <li>Efficiency in Production</li>
    <li>Efficiency in Consupmtion</li>
    <li>Overall Economic Efficiency</li>
    </ul>`,
    q15: 'Features fo Micro Economics',
    a15: `<h2>PASS P BUS</h2><br>
    Price Theory<br>
    Analysis of Market Structure<br>
    Slicing Meathod<br>
    Study of Individual Units<br>
    Partial Equilibrium<br>
    Based on Certain Assumptions<br>
    Use of Marginalism Principle<br>
    Scope is Limited`,
    q16: 'Scope of Macro-Economics',
    a16: `Theory of Income and Employment<br>
    <ul>
    <li>Theory of Consumption Function</li>
    <li>Theory of Investment Function</li>
    <li>Theory of Business Cycles</li>
    </ul>
    Theory of General Price Level & Inflation<br>
    Theory of Economic Growth & Develpoment<br>
    Macro Theory of Distribution`,
    q17: 'Features of Macro-Economics',
    a17: `<h2>GeIGpIG PLS</h2><br>
    General Equilibrium Analysis<br>
    Interdependence<br>
    General Price Level<br>
    Income Theory<br>
    Growth Models<br>
    Policy Oriented<br>
    Lumping Meathod<br>
    Study of Aggregates`,
    q18: 'Features of Utility',
    a18: `<h2>FEUDS MRSP</h2><br>
    Forms Basis of Demand<br>
    Ethically Neutral<br>
    not Usefullness<br>
    Depends on Intensity of Want<br>
    not Satisfaction<br>
    not Measurable<br>
    Relative Concept<br>
    Subject<br>
    not Pleasure`,
    q19: 'Types of Utility',
    a19: `Place<br>
    Service<br>
    Time<br>
    Form<br>
    Knowledge<br>
    Possession Utility`,
    q20: 'Assuption of Law of Diminishing Marginal Utility',
    a20: `<h2>ASSUMcPdON</h2><br>
    All other Factors are Constant<br>
    Successive Consumption<br>
    Size of Commodity<br>
    Units Consumed are Homogeneous<br>
    Measurement of Utility is Possible Cardinally<br>
    Product/Commodity is Divisble<br>
    Only Single Want<br>
    Normal/Rational Behaviour`
};

let questionNumber = 20;
let randomNumber = Math.floor((Math.random() * questionNumber) + 1);

console.log(randomNumber);

switch (randomNumber) {
    case 1:
        q = question.q1;
        a = question.a1;
        break;
    case 2:
        q = question.q2;
        a = question.a2;
        break;
    case 3:
        q = question.q3;
        a = question.a3;
        break;
    case 4:
        q = question.q4;
        a = question.a4;
        break;
    case 5:
        q = question.q5;
        a = question.a5;
        break;
    case 6:
        q = question.q6;
        a = question.a6;
        break;
    case 7:
        q = question.q7;
        a = question.a7;
        break;
    case 8:
        q = question.q8;
        a = question.a8;
        break;
    case 9:
        q = question.q9;
        a = question.a9;
        break;
    case 10:
        q = question.q10;
        a = question.a10;
        break;
    case 11:
        q = question.q11;
        a = question.a11;
        break;
    case 12:
        q = question.q12;
        a = question.a12;
        break;
    case 13:
        q = question.q13;
        a = question.a13;
        break;
    case 14:
        q = question.q14;
        a = question.a14;
        break;
    case 15:
        q = question.q15;
        a = question.a15;
        break;
    case 16:
        q = question.q16;
        a = question.a16;
        break;
    case 17:
        q = question.q17;
        a = question.a17;
        break;
    case 18:
        q = question.q18;
        a = question.a18;
        break;
    case 19:
        q = question.q19;
        a = question.a19;
        break;
    case 20:
        q = question.q20;
        a = question.a20;
        break;
}


console.log(q);
console.log(a);

document.getElementById('title').innerHTML = q;
document.getElementById('text').innerHTML = a;
