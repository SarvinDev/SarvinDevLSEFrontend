import React, { useEffect, useState } from "react";
import axios from "axios";
import DealTitle from "./DealTitle/index";
import BudgetDetails from "./BudgetDetails/index";
import CampaignDescription from "./CampaignDescription/index";
import DeliveryInformation from "./DeliveryInformation/index";
import InfluencerRequirement from "./InfluencerRequirement/index";
import TargetAudience from "./TargetAudience/index";
import TargetPlatform from "./TargetPlatform/index";
import TaskDescription from "./TaskDescription/index";
import StatusMessage from "./StatusMessage";

export default function Home({ openAddDealsModal, setOpenAddDealsModal, id }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [dealTitle, setDealTitle] = useState("");
  const [biddingTo, setBiddingTo] = useState("");
  const [biddingFrom, setBiddingFrom] = useState("");
  const [fixedPriceValue, setFixedPriceValue] = useState("");
  const [campaignDescription, setCampaignDescription] = useState("");
  const [audienceTargetAge, setAudienceTargetAge] = useState("");
  const [audienceLocation, setAudienceLocation] = useState("");
  const [audienceReach, setAudienceReach] = useState("");
  const [audienceGender, setAudienceGender] = useState("");
  const [influencerSize, setInfluencerSize] = useState("");
  const [influencerCategory, setInfluencerCategory] = useState("");
  const [influencerAge, setInfluencerAge] = useState("");
  const [influencerLocation, setInfluencerLocation] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [deliveryType, setDeliveryType] = useState("");
  const [category, setCategory] = useState([]);
  const [youtube, setYoutube] = useState(false);
  const [instagram, setInstagram] = useState(false);
  const [isBidAvailable, setIsBidAvailable] = useState(false);
  const [loginStatus, setLoginStatus] = useState({
    loading: false,
    error: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState(false);

  const handleSubmit = async (e) => {
    const addDealContent = {
      brand_id: id,
      product_name: dealTitle,
      product_description: "burger is good for health you should eat burger",
      product_photo:
        "https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: category.join(", "),
      promotion_type: "DEMO",
      sales_compensation: 7,
      created_by: "657420767e396baaaa094c13",
      campaign_description: campaignDescription,
      task_description: taskDescription,
      audience_location: audienceLocation,
      audience_target_number: audienceReach,
      audience_target_age: audienceTargetAge,
      audience_target_language: "Multiple languages",
      influencer_size: influencerSize,
      influencer_age: influencerAge,
      influencer_gender: audienceGender,
      sponsored_product: true,
      fixed_price: fixedPriceValue,
      // isBidAvailable: false,
      // isBidAvailable: isBidAvailable,
      // ...(fixedPriceValue === ""
      //   ? { bidding_price_from: biddingFrom, bidding_price_to: biddingTo }
      //   : {  }),
    };

    console.log(addDealContent);

    setProgressBarWidth("100%");
    setLoginStatus({ loading: true, error: "" });

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/brand/deal`,
        addDealContent,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data.data.errors);

      if (response.data.data.errors) {
        throw new Error("Upload failed");
      }

      console.log(response.data.data);

      setLoginStatus({ loading: false, error: "" });
      setDealTitle("");
      setBiddingTo("");
      setBiddingFrom("");
      setFixedPriceValue("");
      setCampaignDescription("");
      setAudienceTargetAge("");
      setAudienceLocation("");
      setAudienceReach("");
      setAudienceGender("");
      setInfluencerSize("");
      setInfluencerCategory("");
      setInfluencerAge("");
      setInfluencerLocation("");
      setTaskDescription("");
      setDeliveryLocation("");
      setDeliveryType("");
      setCategory([]);
      setCurrentStep(0);
      setProgressBarWidth(steps[0].width);
      setIsSuccess(true);
      setMessage("");
      setStatusMessage(true);
    } catch (error) {
      setIsSuccess(false);
      setMessage(error.message);
      setStatusMessage(true);
      setLoginStatus({ loading: false, error: error.message });
      return;
    }
  };

  useEffect(() => {
    const newCategories = [];
    if (youtube) newCategories.push("Youtube");
    if (instagram) newCategories.push("Instagram");
    setCategory(newCategories);
  }, [youtube, instagram, setCategory]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setProgressBarWidth(steps[currentStep + 1].width);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setProgressBarWidth(steps[currentStep - 1].width);
    }
  };

  const steps = [
    {
      component: (
        <DealTitle
          key={0}
          dealTitle={dealTitle}
          setDealTitle={setDealTitle}
          handleNext={handleNext}
        />
      ),
      width: "10%",
    },
    {
      component: (
        <TargetPlatform
          key={1}
          youtube={youtube}
          setYoutube={setYoutube}
          instagram={instagram}
          setInstagram={setInstagram}
          category={category}
          setCategory={setCategory}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      ),
      width: "20%",
    },
    {
      component: (
        <CampaignDescription
          key={2}
          campaignDescription={campaignDescription}
          setCampaignDescription={setCampaignDescription}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      ),
      width: "35%",
    },
    {
      component: (
        <TargetAudience
          key={3}
          audienceTargetAge={audienceTargetAge}
          setAudienceTargetAge={setAudienceTargetAge}
          audienceLocation={audienceLocation}
          setAudienceLocation={setAudienceLocation}
          audienceReach={audienceReach}
          setAudienceReach={setAudienceReach}
          audienceGender={audienceGender}
          setAudienceGender={setAudienceGender}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      ),
      width: "45%",
    },
    {
      component: (
        <DeliveryInformation
          key={4}
          deliveryLocation={deliveryLocation}
          setDeliveryLocation={setDeliveryLocation}
          deliveryType={deliveryType}
          setDeliveryType={setDeliveryType}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      ),
      width: "60%",
    },
    {
      component: (
        <InfluencerRequirement
          key={5}
          influencerSize={influencerSize}
          setInfluencerSize={setInfluencerSize}
          influencerCategory={influencerCategory}
          setInfluencerCategory={setInfluencerCategory}
          influencerAge={influencerAge}
          setInfluencerAge={setInfluencerAge}
          influencerLocation={influencerLocation}
          setInfluencerLocation={setInfluencerLocation}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      ),
      width: "75%",
    },
    {
      component: (
        <TaskDescription
          key={6}
          taskDescription={taskDescription}
          setTaskDescription={setTaskDescription}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      ),
      width: "85%",
    },
    {
      component: (
        <BudgetDetails
          key={7}
          biddingFrom={biddingFrom}
          setBiddingFrom={setBiddingFrom}
          biddingTo={biddingTo}
          setBiddingTo={setBiddingTo}
          fixedPriceValue={fixedPriceValue}
          setFixedPriceValue={setFixedPriceValue}
          handleSubmit={handleSubmit}
          handlePrevious={handlePrevious}
          loginStatus={loginStatus}
          setIsBidAvailable={setIsBidAvailable}
        />
      ),
      width: "95%",
    },
  ];

  const [progressBarWidth, setProgressBarWidth] = useState(steps[0].width);

  return (
    <div className="w-[80vw] relative">
      <div className="absolute top-[-40px] right-[-20px] z-10">
        <button
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 bg-red-500 text-white hover:text-white rounded-xl focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-600 inline-flex items-center justify-center h-8 w-8"
          data-dismiss-target="#toast-default"
          onClick={() => setOpenAddDealsModal(!openAddDealsModal)}
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
      {!statusMessage && (
        <div
          className="w-full bg-[#cacaca] rounded-full dark:bg-gray-700"
          style={{ marginTop: 10 }}
        >
          <div
            className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0 leading-none rounded-full transition-all ease-out duration-500"
            style={{ width: progressBarWidth, height: "15px" }}
          ></div>
        </div>
      )}
      {!statusMessage && steps[currentStep].component}
      {statusMessage && (
        <StatusMessage
          isSuccess={isSuccess}
          message={message}
          openAddDealsModal={openAddDealsModal}
          setOpenAddDealsModal={setOpenAddDealsModal}
        />
      )}
    </div>
  );
}
