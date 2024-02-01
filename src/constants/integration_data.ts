import { IntegrationData } from "@/models/IntegrationData";
import { CafLogo, JustGivingLogo, StripeLogo } from "./images";

export const integration_data: IntegrationData[] = [
    {
        id: 1,
        logo: JustGivingLogo,
        name: "Just Giving",
        connection_type: 0,
        description: `JustGiving is the world's most trusted platform for online giving.We help people raise money for the charities and people they care about the most.\nBack in 2000, JustGiving.com began with one simple goal - to enable charities to receive donations online from anywhere in the world.\nFast forward 22 years, over £6 billion has been raised for good causes in almost every single country in the world.`
    },
    {
        id: 2,
        logo: StripeLogo,
        name: "Stripe",
        connection_type: 0,
        description: `Stripe is the leading payments software service trusted by millions of businesses worldwide. So far, we've facilitated secure and seamless transactions for over millions of online and offline businesses, enabling them to accept payments, manage subscriptions, and handle financial transactions effortlessly.\nThe Stripe platform has been at the forefront of revolutionizing the way businesses handle payments since its founding. Established in 2010 by John Smith and Jane Johnson, Stripe emerged with a mission to simplify online transactions and make it easier for businesses to thrive in the digital economy.\nRecognizing the challenges faced by businesses in managing payments, John and Jane were inspired to create a user-friendly and developer-centric payments solution. Their goal was to empower businesses of all sizes to effortlessly integrate payment processing into their websites and applications, streamlining the payment experience for both merchants and customers.`
    },
    {
        id: 3,
        logo: CafLogo,
        name: "CAF",
        connection_type: 1,
        description: `We are a leading charity and bank seeking to connect vital organisations, institutions and individuals working to ensure everyone has a stake in the future. We exist to accelerate progress in society towards a fair and sustainable future for all.\n For over 95 years, we’ve acted as a meeting point for companies, private philanthropists, fellow foundations, governments, charities and not-for-profit enterprises. Our independence, expertise and international reach enable hundreds of millions of pounds each year to move across sectors and borders and arrive safely with thousands of charities to make a greater impact.`
    },
]