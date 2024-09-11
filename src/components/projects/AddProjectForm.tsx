import { useAppContext } from "@/contexts/AppContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { LibraryBooks } from "@mui/icons-material";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import Button from "../ui/Button";
import { getIconComponent } from "@/utils/IconsActions";
import IconModal from "../shared/IconModal";

const schema = z.object({
  projectName: z
    .string()
    .min(1, { message: "Project name is required" })
    .max(30, { message: "Project name must be at least 30 characters" }),
});

type FormData = z.infer<typeof schema>;

const AddProjectForm = () => {
  const {
    openModalProps: { setOpenModal },
    selectedIconProps: { selectedIcon },
    openIconModalProps: { setOpenIconModal },
  } = useAppContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form submitted with data>>>", data);
    setOpenModal(false);
    reset();
  };

  // const handleClose = () => {
  //   setOpenModal(false);
  //   reset();
  // };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-3 justify-between">
          <div className="w-full">
            <input
              {...register("projectName")}
              type="text"
              placeholder="Enter Project Name..."
              className="p-[10px] text-[13px] w-full rounded-md border outline-none"
            />
          </div>

          {/* icon */}
          <Button type="button" onClick={() => setOpenIconModal(true)}>
            {selectedIcon ? (
              getIconComponent(selectedIcon?.name, "text-white")
            ) : (
              <LibraryBooks sx={{ fontSize: "24px" }} />
            )}
          </Button>
        </div>
        {errors.projectName && (
          <span className="text-[11px] mt-2 text-red-500">
            {errors.projectName.message}
          </span>
        )}
      </form>

      <IconModal />
    </>
  );
};

export default AddProjectForm;
