import React from "react";
import "@/sass/__paymentModal.scss";
import { MdOutlineArrowBack } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import { FiCreditCard } from "react-icons/fi";
import { TbBrandPaypalFilled } from "react-icons/tb";
import { BsBank } from "react-icons/bs";

const PaymentModal = ({ onClose }) => {
  return (
    <div className="paymentModal__wrapper">
      <div className="container">
        <div className="paymentModal__title">
          <div className="paymentModal__back">
            <button onClick={onClose}>
              <MdOutlineArrowBack />
            </button>
            <button onClick={onClose}>
              <CgClose />
            </button>
          </div>
          <h1>Make Payment</h1>
        </div>
        <div className="paymentModal__section">
          <div className="paymentModal__input-name">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="paymentModal__input-email">
            <input type="email" placeholder="Email Address" />
            <input type="number" placeholder="Mobile Phone" />
          </div>
          <div className="paymentModal__method">
            <div>
              <h2>Select Method of Payment</h2>
              <label>
                <p>
                  <FiCreditCard />
                  <span>Credit Card Or Debit</span>
                </p>
                <input type="checkbox" />
              </label>
              <label>
                <p>
                  <TbBrandPaypalFilled />
                  <span>Paypal</span>
                </p>
                <input type="checkbox" />
              </label>
              <label>
                <p>
                  <BsBank />
                  <span>Bank Transfer</span>
                </p>
                <input type="checkbox" />
              </label>
            </div>
            <textarea placeholder="Address for Delivery"></textarea>
          </div>
          <button>Go to Payment</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
