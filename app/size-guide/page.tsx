'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Ruler } from 'lucide-react';

export default function SizeGuidePage() {
  const [tab, setTab] = useState<'abayas' | 'makhawer'>('abayas');

  return (
    <div className="py-12 lg:py-20 bg-[#F7F2EA]">
      <Container>
        <div className="max-w-4xl mx-auto space-y-8 bg-white p-8 md:p-12 rounded-[4px] border border-[#E8DDD0]">
          <div className="border-b border-[#E8DDD0] pb-6 text-center">
            <span className="font-cormorant text-xs tracking-[0.25em] text-[#C4A36B] uppercase font-semibold block mb-1">
              SIZE GUIDE
            </span>
            <h1 className="text-3xl font-normal text-[#151311]">دليل المقاسات التفصيلي</h1>
            <p className="text-xs text-[#7B746E] mt-2 font-light max-w-md mx-auto">
              إليك إرشادات القياس الدقيقة لاختيار المقاس المثالي للعباية والمخوار
            </p>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-[#E8DDD0] max-w-md mx-auto">
            <button
              onClick={() => setTab('abayas')}
              className={`flex-1 py-3 text-sm font-medium transition-colors border-b-2 ${
                tab === 'abayas'
                  ? 'border-[#151311] text-[#151311]'
                  : 'border-transparent text-[#7B746E] hover:text-[#151311]'
              }`}
            >
              جدول مقاسات العبايات (بالطول)
            </button>
            <button
              onClick={() => setTab('makhawer')}
              className={`flex-1 py-3 text-sm font-medium transition-colors border-b-2 ${
                tab === 'makhawer'
                  ? 'border-[#151311] text-[#151311]'
                  : 'border-transparent text-[#7B746E] hover:text-[#151311]'
              }`}
            >
              جدول مقاسات المخاوير (قياسية)
            </button>
          </div>

          {/* Table */}
          {tab === 'abayas' ? (
            <div className="space-y-4">
              <p className="text-xs text-[#7B746E] font-light">
                * تُقاس العباية بطول الجسم الإجمالي من أعلى الكتف وحتى القدمين بالإنش.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs md:text-sm text-right border-collapse">
                  <thead>
                    <tr className="bg-[#151311] text-[#F7F2EA]">
                      <th className="p-3 font-medium">المقاس (إنش)</th>
                      <th className="p-3 font-medium">طول الجسم المناسب (سم)</th>
                      <th className="p-3 font-medium">طول الكم (إنش)</th>
                      <th className="p-3 font-medium">عرض الصدر (إنش)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8DDD0] bg-[#F7F2EA]/20">
                    <tr>
                      <td className="p-3 font-bold text-[#151311]">52</td>
                      <td className="p-3 text-[#7B746E]">150 - 155 سم</td>
                      <td className="p-3 text-[#151311]">27 إنش</td>
                      <td className="p-3 text-[#151311]">22 إنش</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-[#151311]">54</td>
                      <td className="p-3 text-[#7B746E]">156 - 160 سم</td>
                      <td className="p-3 text-[#151311]">28 إنش</td>
                      <td className="p-3 text-[#151311]">23 إنش</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-[#151311]">56</td>
                      <td className="p-3 text-[#7B746E]">161 - 165 سم</td>
                      <td className="p-3 text-[#151311]">29 إنش</td>
                      <td className="p-3 text-[#151311]">24 إنش</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-[#151311]">58</td>
                      <td className="p-3 text-[#7B746E]">166 - 170 سم</td>
                      <td className="p-3 text-[#151311]">30 إنش</td>
                      <td className="p-3 text-[#151311]">25 إنش</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-[#151311]">60</td>
                      <td className="p-3 text-[#7B746E]">171 - 175 سم</td>
                      <td className="p-3 text-[#151311]">31 إنش</td>
                      <td className="p-3 text-[#151311]">26 إنش</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-xs text-[#7B746E] font-light">
                * المخاوير تُخاط بمقاسات مريحة وتناسب معظم النساء مع أربطة خصر للتعديل.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs md:text-sm text-right border-collapse">
                  <thead>
                    <tr className="bg-[#151311] text-[#F7F2EA]">
                      <th className="p-3 font-medium">المقاس</th>
                      <th className="p-3 font-medium">محيط الصدر (إنش)</th>
                      <th className="p-3 font-medium">محيط الخصر (إنش)</th>
                      <th className="p-3 font-medium">الطول الإجمالي (إنش)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8DDD0] bg-[#F7F2EA]/20">
                    <tr>
                      <td className="p-3 font-bold text-[#151311]">S (صغير)</td>
                      <td className="p-3 text-[#151311]">36 - 38</td>
                      <td className="p-3 text-[#7B746E]">30 - 32</td>
                      <td className="p-3 text-[#151311]">56 إنش</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-[#151311]">M (وسط)</td>
                      <td className="p-3 text-[#151311]">40 - 42</td>
                      <td className="p-3 text-[#7B746E]">34 - 36</td>
                      <td className="p-3 text-[#151311]">57 إنش</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-[#151311]">L (كبير)</td>
                      <td className="p-3 text-[#151311]">44 - 46</td>
                      <td className="p-3 text-[#7B746E]">38 - 40</td>
                      <td className="p-3 text-[#151311]">58 إنش</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-[#151311]">XL (كبير جداً)</td>
                      <td className="p-3 text-[#151311]">48 - 50</td>
                      <td className="p-3 text-[#7B746E]">42 - 44</td>
                      <td className="p-3 text-[#151311]">59 إنش</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
