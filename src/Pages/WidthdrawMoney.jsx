import React from 'react';
import { useState } from 'react';
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout';
import { StepperContext } from '../contexts/StepperContext.jsx';
import Stepper from '../components/Stepper/Stepper';
import StapperControl from '../components/Stepper/StapperControl.jsx';
import Withdraw from '../components/Widthdraw/steps/Withdraw.jsx';
import Review from '../components/Widthdraw/steps/Review.jsx';
import Amount from '../components/Widthdraw/steps/Amount.jsx';
import Account from '../components/Widthdraw/steps/Account.jsx';
import Recipient from '../components/Widthdraw/steps/Recipient.jsx';
const WidthdrawMoney = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState('');
    const [finalData, setFinalData] = useState([]);
    const steps = ["Account", "Recipient", "Amount", "Review", "Withdraw"];
    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <Account />
            case 2:
                return <Recipient />
            case 3:
                return <Amount />
            case 4:
                return <Review />
            case 5:
                return <Withdraw />
            default:
        }
    }

    const handleClick = (direction) => {
        let newStep = currentStep;
        direction === "next" ? newStep++ : newStep--;
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);

    }
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            {/* <Head title="Dashboard" /> */}
            <div className="">
                <div className="sm:px-6 ">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="w-1/2 mx-auto  rounded-2xl pb-2 bg-white">
                            <div className=" container  horizontal mt-5">

                                <Stepper
                                    steps={steps}
                                    currentStep={currentStep}
                                />
                            </div>

                            {/* Display components */}

                            <div className='my-10 p-10'>
                                <StepperContext.Provider value={{
                                    userData,
                                    setUserData,
                                    finalData,
                                    setFinalData

                                }}>
                                    {displayStep(currentStep)}
                                </StepperContext.Provider>
                            </div>
                            <StapperControl
                                handleClick={handleClick}
                                steps={steps}
                                currentStep={currentStep}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}

export default WidthdrawMoney