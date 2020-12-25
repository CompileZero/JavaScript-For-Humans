import Image from "next/image";

export const ProfileImage: React.FC<{
  size?: number;
}> = ({ size = 128 }) => (
  <div
    className="relative rounded-lg"
    style={{
      width: size,
      height: size,
      backgroundColor: "#F7DF1E",
    }}
  >
    <Image
      className="rounded-lg object-cover"
      src={"/javascript.svg"}
      alt="JavaScript Logo"
      height={size}
      quality={100}
      width={size}
    />
    {/* <div
      className="absolute inset-0"
      style={{
        boxShadow:
          "inset 0 0 0 1px rgba(0,0,0,0.15), inset 0 0 0 2px rgba(255,255,255,0.2)",
      }}
    /> */}
  </div>
);
