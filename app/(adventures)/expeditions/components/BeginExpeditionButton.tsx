"use client";

type BeginExpeditionButtonProps = {
  characterId: number;
  expeditionId: number;
  title: string;
  disabled: boolean;
  isActive: boolean;
};

const BeginExpeditionButton: React.FC<BeginExpeditionButtonProps> = ({
  characterId,
  expeditionId,
  title,
  disabled,
  isActive,
}) => {
  const handleClick = async () => {
    const response = await fetch(`/api/characters/${characterId}/expedition`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        characterId,
        expeditionId,
      }),
    });

    if (!response?.ok) {
      return console.log("Character patch failed");
    }
    console.log(response.body);
  };

  return (
    <button
      className="py-1 px-4 self-end text-black bg-white rounded sm:hover:bg-gray-300 disabled:bg-gray-500"
      onClick={handleClick}
      disabled={disabled}
      hidden={isActive}
      aria-label={title}
    >
      Begin
    </button>
  );
};

export default BeginExpeditionButton;
