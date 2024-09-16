"use client";

import React, { useState } from "react";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";

const ModulesForm: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isFirst, setIsFirst] = useState(false);
  const router = useRouter();

  const createModule = api.moduleType.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setName("");
      setDescription("");
      setIsFirst(false);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createModule.mutate({ name, description, isFirst });
  };

  const { data: modules, isLoading } = api.moduleType.getAll.useQuery();

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Module Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            rows={3}
          />
        </div>
        <div>
          <label
            htmlFor="isFirst"
            className="block text-sm font-medium text-gray-700"
          >
            Is First
          </label>
          <input
            type="checkbox"
            id="isFirst"
            checked={isFirst}
            onChange={(e) => setIsFirst(e.target.checked)}
            className="mt-1 rounded border-gray-300 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          disabled={createModule.isPending}
        >
          {createModule.isPending ? "Creating..." : "Create Module"}
        </button>
      </form>

      <div>
        <h2 className="mb-4 text-xl font-semibold">Existing Modules</h2>
        {isLoading ? (
          <p>Loading modules...</p>
        ) : (
          <ul className="space-y-2">
            {modules?.map((module) => (
              <li key={module.id} className="rounded border p-2">
                <h3 className="font-medium">{module.name}</h3>
                <p className="text-sm text-gray-600">{module.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ModulesForm;
