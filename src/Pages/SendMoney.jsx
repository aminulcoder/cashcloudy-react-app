import AuthenticatedLayout from '../Layouts/AuthenticatedLayout';
import { StepperContext } from '../contexts/StepperContext.jsx';
import Stepper from '../components/Stepper/Stepper';
import StapperControl from '../components/Stepper/StapperControl.jsx';
import Recipient from '../components/Stepper/steps/Recipient.jsx';
import Amount from '../components/Stepper/steps/Amount.jsx';
import Review from '../components/Stepper/steps/Review.jsx';
import Pay from '../components/Stepper/steps/Pay.jsx';
import { useState } from 'react';

export default function SendMoney() {

    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState('');
    const [finalData, setFinalData] = useState([]);
    const steps = ["Recipient", "Amount", "Review", "Pay"];

    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <Recipient />
            case 2:
                return <Amount />
            case 3:
                return <Review />
            case 4:
                return <Pay />
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
            <div className="py-4 px-4 sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="sm:w-1/2 mx-auto  rounded-2xl pb-2 bg-white">
                        <div className="mt-5 mx-4">
                            {/* Stepper component */}
                            <Stepper 
                                steps={steps}
                                currentStep={currentStep}
                            />
                        </div>

                        {/* Display components */}
                        <div className="my-10 p-4 sm:p-6">
                            <StepperContext.Provider value={{
                                userData,
                                setUserData,
                                finalData,
                                setFinalData
                            }}>
                                {displayStep(currentStep)}
                            </StepperContext.Provider>
                        </div>

                        {/* Navigation controls */}
                        <div className="px-4 sm:px-6">
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
    );
}
