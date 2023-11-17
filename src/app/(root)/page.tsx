"use client";

import { Modal } from "@/components/ui/modal";

const SetupPage = () => {
  return (
    <div className="p4">
      <Modal title="test" description="test desc" isOpen onClose={() => {}}>
        Children
      </Modal>
    </div>
  );
};

export default SetupPage;
