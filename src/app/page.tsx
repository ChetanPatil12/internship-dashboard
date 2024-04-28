"use client"
import Card1 from "@/components/Card1";
import Card2 from "@/components/Card2";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

 

export default function Home() {
  
  return (
    <div className="flex  w-screen h-full">
        <Sidebar/>

      <div>
        <Navbar/>
        <div className="grid md:grid-cols-12 grid-cols-1  sm:px-8 px-6 py-8 gap-4">
          <div className="md:col-span-7">
            <p className="font-semibold text-xl">Dashbord</p>


            <div className="grid sm:grid-cols-3 gap-4">

              <div className="bg-[#FFEFE7] rounded-lg px-4 py-2 text-sm">
                <p className=" font-semibold">Available Position</p>
                <p className="font-semibold text-3xl my-2">24</p>
                <p className="text-[#FF5151] text-xs">4 Urgently Needed</p>
              </div>

              <div className="bg-[#E8F0FB] rounded-lg px-4 py-2 text-sm">
                <p className=" font-semibold">Job Open</p>
                <p className="font-semibold text-3xl my-2">4</p>
                <p className="text-[#3786F1] text-xs">4 Actively Hiring</p>
              </div>

              <div className="bg-[#FDEBF9] rounded-lg px-4 py-2 text-sm">
                <p className=" font-semibold">New Employees</p>
                <p className="font-semibold text-3xl my-2">24</p>
                <p className="text-[#EE61CF] text-xs">4 Department</p>
              </div>

            </div>

            <Card1/>

            <div className="rounded-lg mt-4 border border-1 p-4">

              <div className="flex justify-between items-center">
                <p className="text-sm font-semibold">Announcement</p>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Today, 13 Sep 2021" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Date</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="rounded-lg border mt-4 p-2 bg-[#FAFAFA] flex items-center justify-between">
                <div>
                  <p className="text-sm">Outing Schedule for every department</p>
                  <p className="text-[9px] mt-3 text-[#686868]">5 minutes ago</p>
                </div>
                <div className="flex items-center gap-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.9771 3C14.0618 2.99985 14.1457 3.01639 14.224 3.04867C14.3022 3.08095 14.3734 3.12834 14.4333 3.18814L20.8119 9.56669C20.9327 9.68752 21.0005 9.85137 21.0005 10.0222C21.0005 10.1931 20.9327 10.3569 20.8119 10.4777C20.1933 11.0963 19.4305 11.2354 18.8751 11.2354C18.647 11.2354 18.4434 11.2122 18.2823 11.1852L14.2439 15.2236C14.3502 15.652 14.4192 16.0887 14.4501 16.529C14.5093 17.4336 14.4088 18.7028 13.5223 19.5894C13.4014 19.7102 13.2376 19.778 13.0668 19.778C12.8959 19.778 12.7321 19.7102 12.6112 19.5894L8.96579 15.9452L4.86547 20.0456C4.6142 20.2968 3.29467 21.2079 3.0434 20.9566C2.79212 20.7053 3.70316 19.3845 3.95444 19.1345L8.05475 15.0342L4.4106 11.3888C4.28981 11.2679 4.22196 11.1041 4.22196 10.9332C4.22196 10.7624 4.28981 10.5986 4.4106 10.4777C5.29715 9.59118 6.56642 9.48938 7.47102 9.54994C7.91128 9.58079 8.34803 9.64977 8.77637 9.75612L12.8148 5.71894C12.7811 5.52271 12.7639 5.324 12.7633 5.1249C12.7633 4.5708 12.9025 3.80795 13.5223 3.18814C13.643 3.06769 13.8066 3.00004 13.9771 3Z" fill="#686868"/>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z" fill="#B2B2B2"/>
                    <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="#B2B2B2"/>
                    <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" fill="#B2B2B2"/>
                  </svg>

                </div>
              </div>

              <div className="rounded-lg border mt-4 p-2 bg-[#FAFAFA] flex items-center justify-between">
                <div>
                  <p className="text-sm">Outing Schedule for every department</p>
                  <p className="text-[9px] mt-3 text-[#686868]">5 minutes ago</p>
                </div>
                <div className="flex items-center gap-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.9771 3C14.0618 2.99985 14.1457 3.01639 14.224 3.04867C14.3022 3.08095 14.3734 3.12834 14.4333 3.18814L20.8119 9.56669C20.9327 9.68752 21.0005 9.85137 21.0005 10.0222C21.0005 10.1931 20.9327 10.3569 20.8119 10.4777C20.1933 11.0963 19.4305 11.2354 18.8751 11.2354C18.647 11.2354 18.4434 11.2122 18.2823 11.1852L14.2439 15.2236C14.3502 15.652 14.4192 16.0887 14.4501 16.529C14.5093 17.4336 14.4088 18.7028 13.5223 19.5894C13.4014 19.7102 13.2376 19.778 13.0668 19.778C12.8959 19.778 12.7321 19.7102 12.6112 19.5894L8.96579 15.9452L4.86547 20.0456C4.6142 20.2968 3.29467 21.2079 3.0434 20.9566C2.79212 20.7053 3.70316 19.3845 3.95444 19.1345L8.05475 15.0342L4.4106 11.3888C4.28981 11.2679 4.22196 11.1041 4.22196 10.9332C4.22196 10.7624 4.28981 10.5986 4.4106 10.4777C5.29715 9.59118 6.56642 9.48938 7.47102 9.54994C7.91128 9.58079 8.34803 9.64977 8.77637 9.75612L12.8148 5.71894C12.7811 5.52271 12.7639 5.324 12.7633 5.1249C12.7633 4.5708 12.9025 3.80795 13.5223 3.18814C13.643 3.06769 13.8066 3.00004 13.9771 3Z" fill="#686868"/>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z" fill="#B2B2B2"/>
                    <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="#B2B2B2"/>
                    <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" fill="#B2B2B2"/>
                  </svg>

                </div>
              </div>

              <div className="rounded-lg border mt-4 p-2 bg-[#FAFAFA] flex items-center justify-between">
                <div>
                  <p className="text-sm">Outing Schedule for every department</p>
                  <p className="text-[9px] mt-3 text-[#686868]">5 minutes ago</p>
                </div>
                <div className="flex items-center gap-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.9771 3C14.0618 2.99985 14.1457 3.01639 14.224 3.04867C14.3022 3.08095 14.3734 3.12834 14.4333 3.18814L20.8119 9.56669C20.9327 9.68752 21.0005 9.85137 21.0005 10.0222C21.0005 10.1931 20.9327 10.3569 20.8119 10.4777C20.1933 11.0963 19.4305 11.2354 18.8751 11.2354C18.647 11.2354 18.4434 11.2122 18.2823 11.1852L14.2439 15.2236C14.3502 15.652 14.4192 16.0887 14.4501 16.529C14.5093 17.4336 14.4088 18.7028 13.5223 19.5894C13.4014 19.7102 13.2376 19.778 13.0668 19.778C12.8959 19.778 12.7321 19.7102 12.6112 19.5894L8.96579 15.9452L4.86547 20.0456C4.6142 20.2968 3.29467 21.2079 3.0434 20.9566C2.79212 20.7053 3.70316 19.3845 3.95444 19.1345L8.05475 15.0342L4.4106 11.3888C4.28981 11.2679 4.22196 11.1041 4.22196 10.9332C4.22196 10.7624 4.28981 10.5986 4.4106 10.4777C5.29715 9.59118 6.56642 9.48938 7.47102 9.54994C7.91128 9.58079 8.34803 9.64977 8.77637 9.75612L12.8148 5.71894C12.7811 5.52271 12.7639 5.324 12.7633 5.1249C12.7633 4.5708 12.9025 3.80795 13.5223 3.18814C13.643 3.06769 13.8066 3.00004 13.9771 3Z" fill="#686868"/>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z" fill="#B2B2B2"/>
                    <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="#B2B2B2"/>
                    <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" fill="#B2B2B2"/>
                  </svg>

                </div>
              </div>

              <p className="text-sm font-semibold text-[#FF5151] text-center mt-4">See All Announcement</p>

            </div>
          </div>
          <div className="md:col-span-5">

            <div className="w-full">
              <Card2/>
              <div className="rounded-lg mt-4 border border-1 p-4">

<div className="flex justify-between items-center">
  <p className="text-sm font-semibold">Upcoming Schedule</p>
  <Select>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Today, 13 Sep 2021" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Date</SelectLabel>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</div>
<p className="text-[10px] text-[#686868] my-2">Priority</p>
<div className="rounded-lg border mt-4 p-2 bg-[#FAFAFA] flex items-center justify-between">
  <div>
    <p className="text-sm">Review candidate applications</p>
    <p className="text-[9px] mt-3 text-[#686868]">Today - 10.30 AM</p>
  </div>
  <div className="flex items-center gap-4">

    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z" fill="#B2B2B2"/>
      <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="#B2B2B2"/>
      <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" fill="#B2B2B2"/>
    </svg>

  </div>
</div>
<p className="text-[10px] text-[#686868] my-2">Other</p>
<div className="rounded-lg border mt-4 p-2 bg-[#FAFAFA] flex items-center justify-between">
  <div>
    <p className="text-sm">Interview with candidates</p>
    <p className="text-[9px] mt-3 text-[#686868]">Today - 10.30 AM</p>
  </div>
  <div className="flex items-center gap-4">

    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z" fill="#B2B2B2"/>
      <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="#B2B2B2"/>
      <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" fill="#B2B2B2"/>
    </svg>

  </div>
</div>

<div className="rounded-lg border mt-4 p-2 bg-[#FAFAFA] flex items-center justify-between">
  <div>
    <p className="text-sm">Short meeting with product designer from IT Departement</p>
    <p className="text-[9px] mt-3 text-[#686868]">Today - 10.30 AM</p>
  </div>
  <div className="flex items-center gap-4">

    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z" fill="#B2B2B2"/>
      <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="#B2B2B2"/>
      <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" fill="#B2B2B2"/>
    </svg>

  </div>
</div>

<p className="text-sm font-semibold text-[#FF5151] text-center mt-4">Create a new Schedule</p>

</div>
              <div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
