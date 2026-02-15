"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ChefHat, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { toast } from "sonner";

const HowToCookModal = () => {
  const router = useRouter();
  const [recipeName, setRecipeName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenChange = (open) => {
    setIsOpen(open);
    if (!open) {
      setRecipeName("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!recipeName.trim()) {
      toast.error("Please enter a recipe name");
      return;
    }
    router.push(`/recipe?cook=${encodeURIComponent(recipeName.trim())}`);
    handleOpenChange(false);
  };
  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button className="hover:text-orange-600 transition-colors flex items-center gap-1.5 text-sm font-medium text-stone-600">
          <ChefHat className="w-4 h-4" /> How To Cook
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif font-bold flex items-center gap-2">
            <ChefHat className="w-6 h-6 text-orange-600" />
            How to Cook?
          </DialogTitle>
          <DialogDescription>
            Enter any recipe name and our AI chef will guide you through the
            cooking process
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="mt-4 space-y-6">
          {/* Recipe Input */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              What would you like to cook?
            </label>
            <div className="relative">
              <input
                type="text"
                value={recipeName}
                onChange={(e) => setRecipeName(e.target.value)}
                placeholder="e.g., Chicken Biryani, Chocolate Cake, Pasta Carbonara"
                className="w-full px-4 py-3 pr-12 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-stone-900 placeholder:text-stone-400"
                autoFocus
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
            </div>
          </div>
          <div className="bg-orange-50 rounded-xl p-4 border-orange-100">
            <h4 className="text-sm font-semibold text-orange-900 mb-2">
              Try These:
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Butter Chicken", "Chocolate Brownies", "Caesar Salad"].map(
                (example) => (
                  <button
                    key={example}
                    type="button"
                    onClick={() => setRecipeName(example)}
                    className="px-3 py-1 bg-white text-orange-700 border border-orange-200 rounded-full text-sm hover:bg-orange-100 transition-colors"
                  >
                    {example}
                  </button>
                )
              )}
            </div>
          </div>
          <Button
            type="submit"
            disabled={!recipeName.trim()}
            className="flex-1 w-full bg-orange-600 hover:bg-orange-700 text-white h-12"
          >
            <ChefHat className="w-5 h-5 mr-2" />
            Get Recipe
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default HowToCookModal;
