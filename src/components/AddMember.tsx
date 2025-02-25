import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { Member } from "../types";

const AddMember: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [paid, setPaid] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newMember: Omit<Member, "id"> = {
      name,
      paid,
    };
    await addDoc(collection(db, "members"), newMember);
    setName("");
    setPaid(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Member Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label>
        <input
          type="checkbox"
          checked={paid}
          onChange={(e) => setPaid(e.target.checked)}
        />
        Paid
      </label>
      <button type="submit">Add Member</button>
    </form>
  );
};

export default AddMember;