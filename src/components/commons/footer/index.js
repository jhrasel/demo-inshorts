import { CustomContainer } from "@/components/ui";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <CustomContainer>
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Info-Shield-Pro. All rights
            reserved.
          </p>
        </div>
      </CustomContainer>
    </footer>
  );
}
