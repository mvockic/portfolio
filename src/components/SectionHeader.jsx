export default function SectionHeader({ label, centered = false }) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="font-mono text-2xl sm:text-3xl font-bold text-gray-100">
        {label}
      </h2>
      <div
        className={`w-12 h-[3px] bg-accent rounded-full mt-3 ${
          centered ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
